![img](https://avatars0.githubusercontent.com/u/4359353?v=3&s=150)
# Elm kit - web application boilerplate | starter kit

>  [Elm kit](https://github.com/khusnetdinov/elmkit) is web application boilerplate kit for development. This kit build on [Brunch](http://brunch.io/), [Node](https://nodejs.org/en/), [Sass](http://sass-lang.com/), [Elm-lang](http://elm-lang.org/). It helps you to start development more productive following best practices.

## Features

- Auto building project using [Brunch](https://brunch.io)
- Auto re-building on changing files [auto-reload-brunch](https://github.com/brunch/auto-reload-brunch)
- Hot Module Reloading [hrm-brunch](https://github.com/brunch/hmr-brunch)
- Integration [Elm-lang](http://elm-lang.org/)
- Auto preprocessing [Scss](http://sass-lang.com/) styles
- Testing elm components with [elm-test](https://github.com/elm-community/elm-test)

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
│   │   └── appliction.js       # Entry point for scss file
│   └── /stylessheets/          # Not compiled stylessheets files
│       ├── /global/            # Best place for global settings
│       │   ├── fonts.scss      # Fonts settings and loading
│       │   ├── forms.scss      # Global forms settings
│       │   ├── mixins.scss     # Custom mixins
│       │   ├── overloads.scss  # Styles overloads for 3rd party
│       │   └── settings.scss   # Main styles setting
│       ├── /modules/           # Elm modules styles
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
│   ├── favicon.ico             # Project favicon
│   └── index.html              # Builded index page
│
├── /tests/                     # Tests for elm components
│   ├── Main.elm                # Entry point for all tests
│   ├── Tests.elm               # Test suite
│   └── elm-package.json        # Copy of elm-package.json from root
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

> Brunch compiled files with `*.js.map` are junk.

### Commands

 `development` - Run development server

 `build`       - Create build for production

 `test`        - Run tests (compile and run, wrapper for elm-test)

## Requirements

You need to install [Node](https://nodejs.org/en/), [Elm-lang](http://elm-lang.org/);

## Installation

`git clone https://github.com/khusnetdinov/elmkit`

`cd elmkit`

`npm install`

`npm run development`

# License

### This code is free to use under the terms of the MIT license.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
