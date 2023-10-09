# Paranoia Perfect Edition Roleplaying Game - Character Generator

Built for Northeastern University.

All ownership of Paranoia, Paranoia Perfect Edition, or other related assets are owned by Mongoose Publishing. 

[![Netlify Status](https://api.netlify.com/api/v1/badges/7e13be0d-1830-4d9a-8139-2e40f89338e6/deploy-status)](https://app.netlify.com/sites/ppegen-test/deploys)



## Proposition

Every company needs some bonding and team building even [Forbes says so](https://www.forbes.com/sites/brianscudamore/2016/03/09/why-team-building-is-the-most-important-investment-youll-make/). 

A nice bit of escapism for a team is pretending to be somewhere else and attempted to work together to beat the common challenge, to support this, of sorts, this tool was created. 


### Existing game

![Paranoia PPE Logo](/assets/logo.png "Paranoia PPE logo")

"Paranoia" is a tabletop role-playing game (RPG) known for its satirical and darkly comedic take on a dystopian future. Over the years, there have been several editions of the game, each with its own unique features and updates. Here's a brief summary of each version:

#### First Edition (1984):

The original version, set in an underground city ruled by an insane and paranoid computer. Players are Troubleshooters tasked with maintaining the system and dealing with traitors and threats.

#### Second Edition (1987):

Expanded and refined rules from the first edition, providing a more streamlined gameplay experience. Introduced elements like secret societies and complex mission structures.

#### XP Edition (2004):

A reboot of the original game, introducing a simplified rule system and emphasizing a more fast-paced and humorous gameplay. It maintained the setting of Alpha Complex under the control of The Computer.

#### Paranoia XP: Imploding Now (2005):

An updated version of the XP Edition with additional content and rules for character creation and gameplay. Emphasized the humour and dark satire inherent in the game.

#### Paranoia: Troubleshooters (2017):

This edition returned to the original game's feel, focusing on a more lethal and challenging gameplay. Provided a gritty and darker tone compared to the XP Edition.

#### Paranoia Red Clearance Edition (2017):

Another contemporary reboot with streamlined rules and mechanics. It introduced "clearance levels" for characters, incorporating an element of social hierarchy within Alpha Complex.

#### Paranoia Perfect Edition (2023)

The newest, shiniest, most perfect version of the game.

Each edition maintains the core theme of a dystopian future controlled by an insane computer, where players navigate a world of secrecy, backstabbing, and dark humour, often in pursuit of conflicting goals while trying to survive the deadly missions and the wrath of The Computer.


## Foundation

The application will be based off the existing character sheet available on the Mongoose Publishing website [Downloads](https://www.mongoosepublishing.com/pages/downloads-htm) and also a backup [locally](/assets/ParanoiaCharSheet.pdf)


## Design

The following prototype was created using [Excalidraw](https://excalidraw.com/) which is a brilliant and easy sketching/design tool, available for free, and also open-source for self-hosting.

### Prototype

On desktop view (the main focus)

[Desktop plan](/assets/plan-desktop.png)

On mobile view 

[Mobile plan](/assets/plan-mobile.png)

The plan for the layout will be using responsive design, with the main design being desktop-first but all elements able to resize down to a mobile-friendly view.

### Styling

The intention is to make a design that fits with the aesthetic of the character sheet whilst also ensuring compliance with best practices and standards. 

#### Fonts

The following fonts will be used from Google Fonts, under the SIL OPEN FONT LICENSE Version 1.1:
* Inter by Rasmus Andersson
* Bebas Neue by Ryoichi Tsunekawa
* Courier Prime by Alan Dague-Greene

#### CSS themes

The [Bulma](https://bulma.io/) css framework will be used. With a modified version of [Bulmaswatch Lux](https://github.com/jenil/bulmaswatch/tree/gh-pages/lux) for theming.

## Planning

The planning board is located [here](https://github.com/users/DMurf/projects/3) and is setup using the GitHub project template "Team Backlog". This is setup as a KanBan board.

### Agile methodology


This project will use a cut-down version of KanBan [here](https://www.developmentthatpays.com/files/DevelopmentThatPays-ScrumVsKanban-CheatSheet-1_6.pdf) and [here](https://learn.microsoft.com/en-us/devops/plan/what-is-kanban) however as there's only one member of the team, many of the ceremonies hold little-to-no value. 

### Features

Features are the definition of a deliverable in this application, something that is marketable or demonstrable to a user such as "This button saves the picture to your computer" or "Styling UI to fit corporate theme". The principle behind features is the [**Minimum Marketable Feature**] (https://www.techtarget.com/whatis/definition/minimum-marketable-feature-MMF), where each feature is delivered because of value to either the business or users.

### User stories

User stories are tickets below Features, and following the Extreme Programming design follow the pattern

* As a <role> I want to <verb-centric behaviour> so that <user value added>

Each user story will be assigned an estimated ticket size, this is based on fibonacci (1, 2, 3, 5, 8, 13) and this signifies the relative complexity of each ticket. 

A user story is intended to be the placeholder of a conversation, and should not be overly proscribed.

### Definition of ready

A feature is ready once it has enough description to convey the goal of the ticket. 

A user story is ready once it has a complete story, a defined or linked user persona, and a list of acceptance criteria. It's beneficial to have diagrams, pictures, or extra information to help flesh out the story. 

### Definition of done

A feature is done once all it's user stories have been fulfilled and tested.
Additionally a feature would be approved by the product owner as meeting all required functionality. 

A user story is done when all it's acceptance criteria have been tested and pass reliably. 
Additionally a User Story would ideally be peer-reviewed by another developer.

### Acceptance criteria

Acceptance criteria are often in the form of "Given, When, Then" format such as 

* Given I navigate to the home page
* When I click on the randomise button
* Then all free-text fields should have text entered

### MVP

The Minimum Viable Product for the PPEGen would follow the following:

* A public user can fill in all the fields themselves.
* A public user can click randomise all and all fields would be filled in for them. 
* A public user can choose to print the character sheet in a printer-friendly way.
* A public user can randomise sections of the character sheet and over-write any options they choose to.

#### Extended goals

* A public user can save their character to local storage
* A public user can download their character configuration to pass to other players

## Building

### DevLog + SemVer releases

### DevOps / CI-CD pipelines

#### Branch policy

The main branch is protected to disallow direct pushes without a Pull Request.

#### Environments

Test / Live

#### Scripts 
Yaml/Powershell

#### Architecture

## Testing

### Functional

#### Unit testing

#### UI/Automated testing

#### Manual testing

### Non-functional

#### Volume/Stress testing/Load testing

#### Accessibility

### Standards

#### WCAG compliance

### Security

#### OWASP

#### Pen Test

### Monitoring


## Documentation

### Recreation

### How-to guide

## License

MIT









# Boilerplate

This is a React.js project, bootstrapped with vite - v4.4.1 configured with TypeScript



## Getting Started


First, run the development server:

```terminal 
npm run dev
```

Open [http://localhost:<port>](http://localhost:<port>) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

