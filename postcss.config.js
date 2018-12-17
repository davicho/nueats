module.exports = {
  plugins: [
  //require('postcss-csscomb')('zen'),
  //require('postcss-csso'),
  require('autoprefixer'),
  require('stylelint')({}),
  require('postcss-reporter')({ clearReportedMessages: true })
  ]
}