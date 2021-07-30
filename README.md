# Jira Now

A command line tool to help engineers create Jira tickets as fast as possible by providing as few details as possible.

![Photo of a boardgame on a wooden table](./images/jiranow-background.jpg)

## Why Jira Now?

As a product owner, delivery manager, or engineer - we all know the value of ticket management in creating, tracking, and delivering against work items. One of the biggest obstacles in "getting stuff done" is the administration around creating a ticket for a project, so that ideas are captured, so that conversations can happen asynchronously, so that branches and pull requests can be created, and so that reports can be generated. Making the ticket, capturing the idea, should not be a obstacle to getting stuff done.

Jira now seeks to automate the problem of "create a ticket for a piece of work"; this tool seeks to automate that process for Software Projects by collecting and storing default information about your project space.

The type of information Jira Now tracks tries to answer common questions:
- What Jira system is your default?
  - usually companies have a self-hosted Jira, but sometimes you might want to switch to public or opensource Jira instances based on the project
- Which project space does the ticket need to be created in?
  - this often doesn't change between software repositories
- What is the title of the ticket?
  - Ideally this is the only information you should need to provide
- What are the default fields for your team?
  - What epic should the ticket belong to?
  - What labels to assign by default?
  - What squad, team, or software project is needed?

All these defaults can be stored in either a project JSON file in the local software project, or as user defaults on your local machine - making a best guess based to suit the user's workflow. The tool can also be installed as a package depedency, to avoid global installation, and can be built into a CI pipeline - e.g. for raising a release ticket after a successful build.

## Prereqsuites

- `node js > 16.x` installed : https://nodejs.org/en/
- `npm / npx` - should come installed with node

## Initial Configuration

To get setup, a workflow wizard is provided on the command line - simply run the following command and answer the questions:

- `npx jiranow configure`

After initial configuration - Jira Now will look in these locations to store and load configuration:

- `~/.jiranow/config.json` - a user's global jiranow configuration in their local system configuration
- `./package.json` - a jiranow configuration block inside package.json in the current directory
- `./.jiranow.json` - a local jiranow configuration file in the current directory

You can run `npx jiranow configure` again from any project folder, to either create new project level configuration, or update your user global defaults.

Feel free to edit the files directly if you prefer; and be careful about what information or secrets are checked into source control.

## Configuration

Configuration is based around a shared working model - which is tiered based on context. The merge order for properties is as follows:

1. System - stored in `~/.jiranow/config.json` 
2. Package - stored in `./package.json`
3. Folder - stored in `./.jiranow.json`
4. Command Line Options - passed in at run time

The property merge of these configurations forms the Working Knowledge of the tool used to execute commands; the following properties can be set in any location - and will be overriden in order starting with System config and finishing with Command Line Options.

### Property: jiraSystemBaseUrl

Jira System API URL - The URL of the Jira system you want to connect to; it's assumed that the Jira REST API is hosted on the path `/rest/api/` - raise an issue on this repo if it differs for your use case so it can be configured independently to the general use case.

#### JSON Example

```json
{
  "jiraSystemBaseUrl": "https://connected-web.atlassian.net"
}
```

#### Command Line Example

```sh
npx jiranow --jiraSystemBaseUrl="https://connected-web.atlassian.net"
```

### Property: jiraDefaultProjectSpace

Jira Default Project Space - the project space prefix where to create the ticket.

### JSON Example

```json
{
  "jiraDefaultProjectSpace": "WORKOP"
}
```

#### Command Line Example

```sh
npx jiranow --jiraDefaultProjectSpace="WORKOP"
```

## Environment Variables

Environment variables are referenced via configuration; you can specify environment variables to store secret keys such as your Jira API token - you might need multiple environment variables to connect to different Jira systems - depending on the complexity of projects you're working on.

## Local Development

Checkout locally:

- `git clone git@github.com:connected-web/jiranow.git`
- `cd jiranow`
- `npm install`
- `npm test -s`

To run the code locally, use:

- `./jiranow`

Raise PRs to 

## Releases

This tool is published through `npm`, and available through `npx`.

Connected Web org members should be able to run `npm publish` from the local project to publish new versions. Later this may be revised to a CI responsibility (merge to main from an approved branch).ß

## Contribution

Please raise an issue against this repo, or contact the connected-web org if you're interested in helping develop this tool further.
