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
- `./.jiranow.json` - a local jiranow configuration file in the current directory
- `./package.json` - a jiranow configuration block inside package.json in the current directory

You can run `npx jiranow configure` again from any project folder, to either create new project level configuration, or update your user global defaults.

Feel free to edit the files directly if you prefer; and be careful about what information or secrets are checked into source control.

### Environment Variables

Environment variables are referenced via configuration; you can specify environment variables to store secret keys such as your Jira API token - you might need multiple environment variables to connect to different Jira systems - depending on the complexity of projects you're working on.
