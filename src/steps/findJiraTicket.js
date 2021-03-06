const fetch = require('../util/asyncFetch')
const createBranchNameSlug = require('../util/createSlug')
const report = (...messages) => console.log('[Jira Now] [Find Jira Ticket]', ...messages)

function tryParse (body) {
  let result = {}
  try {
    result = JSON.parse(body)
  } catch (ex) {
    report('Unable to parse', body, ex.message)
  }
  return result
}

async function findJiraTicket (workingKnowledge) {
  let { ticket, branchName, ticketTitle, ticketUrl, cwd } = workingKnowledge
  // - Find *TICK-24* to see if there is a matching ticket to extract a title for a PR
  if (!ticket) {
    throw new Error(`No ticket reference found (${ticket}); jiranow needs a reference to create a branch name`)
  }

  const { JIRANOW_JIRA_BASE_URL, JIRANOW_JIRA_CLIENT_KEY, JIRANOW_JIRA_API_KEY } = process.env

  if (!JIRANOW_JIRA_BASE_URL) {
    // Skiping this check
  } else {
    const jiraTicketId = ticket.split('/')[0]

    if (!ticketTitle) {
      const certFilePath = JIRANOW_JIRA_CLIENT_KEY
      let ticketInfo
      if (!certFilePath && !JIRANOW_JIRA_API_KEY) {
        report('Warning', 'No CLIENT_KEY environment variable set - unable to establish secure connection to Jira')
      } else {
        const rawResponse = await fetch({ url: `${JIRANOW_JIRA_BASE_URL}/rest/api/latest/issue/${jiraTicketId}`, certFilePath, apiKey: JIRANOW_JIRA_API_KEY })
        const parsedResponse = tryParse(rawResponse)

        if (!parsedResponse.errorMessages) {
          ticketInfo = parsedResponse
          ticketTitle = ticketInfo.fields.summary
          ticketUrl = `${JIRANOW_JIRA_BASE_URL}/browse/${jiraTicketId}`
          ticket = jiraTicketId
          branchName = `${ticket}/${createBranchNameSlug(ticketTitle)}`
          report('Found', ticket, `"${ticketTitle}"`)
        }
      }
    }
  }

  return Object.assign({}, workingKnowledge, {
    ticket,
    branchName,
    ticketTitle,
    ticketUrl,
    cwd
  })
}

module.exports = findJiraTicket
