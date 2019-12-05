const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, "../review-backend/public"),
  "transpileDependencies": [
    // CSS component framework dependency
    "vuetify"
  ]
}

