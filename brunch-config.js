module.exports = {
  config: {
    server: {
      port: 3000
    },
    paths: {
      watched: ["src"]
    },
    files: {
      javascripts: { joinTo: "javascripts/application.js" },
      stylesheets: { joinTo: "stylesheets/application.css" }
    },
    plugins: {
      sass: 'native'
    }
  }
}
