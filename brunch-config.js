module.exports = {
  config: {
    server: {
      port: 3000
    },
    paths: {
      watched: ["src", "spec"]
    },
    files: {
      javascripts: { joinTo: "javascripts/application.js" },
      stylesheets: { joinTo: "stylesheets/application.css" }
    },
    plugins: {
      sass: {
        mode: 'native'
      },
      elmBrunch: {
        mainModules: ['src/elm/Application.elm'],
        outputFolder: "public/javascripts/",
        outputFile: "elm.js"
      }
    }
  }
}
