# Elm kit - web application boilerplate | starter kit

>  [Elm kit](https://github.com/khusnetdinov/elmkit) is web application boilerplate kit for development. This kit build on [Brunch](http://brunch.io/), [Node](https://nodejs.org/en/), [Sass](http://sass-lang.com/), [Elm-lang](http://elm-lang.org/). It helps you to start development more productive following best practices.

## Getting started

### Files structure
```
├── /src/                       # The source code of the application
│   ├── /assets/                # Files in this folder just copy to public
│   │   ├── /images/            # Images folder
│   │   ├── /fonts/             # Fonts folder
│   │   ├── favicon.ico         # Project Favicon
│   │   └── index.html          # Layout html file
│   ├── /elm/                   # Not compiled Elm files
│   │   └── Application.elm     # Entry point for elm files
│   ├── /javascripts/           # Not compiled javascripts files
│   └── /stylessheets/          # Not compiled stylessheets files
│       └── appliction.scss     # Entry point for scss file
│
├── /public/                    # Brunch builded and compiled project files
│   ├── /images/                # Images copied folder
│   ├── /.. other ../           # Other static folders
│   ├── /javascripts/           # Project javascript files
│   │   ├── main.js             # Elm compiled javascript
│   │   └── application.js      # Main javascript file
│   ├── /stylesheets/           # Project stylesheet files
│   │   └── appliction.css      # Main css file
│   ├── favicon.ico            # Project favicon
│   └── index.html             # Builded index page
│
├── /docs/                      # Documentation files for the project
├── /elm-stuff/                 # Elm compiler technical folder
├── /node_modules/              # Node (Brunch) 3rd-party libraries
│
│── package.json                # The list of Node (Brunch) 3rd party libraries
│── elm-package.json            # The list of Elm lang 3rd party libraries
│── brunch-config.js            # Brunch config for project
│── README.md                   # Project description
│── LICENSE                     # License
│── .editorconfig               # Global editor config
└── .gitignore                  # Git ignored files
```

> Brunch compiled files with `*.js.map` is junk.

### Commands

 `development` - Run development server
 `build`       - Create build for production

## Requirements

You need to install [Node](https://nodejs.org/en/), [Elm-lang](http://elm-lang.org/);

## Installation

Clone this repo: `git clone https://github.com/khusnetdinov/elmkit`

Go to directory: `cd elmkit`

Get all you need: `npm install`

Run project: `npm run development`



