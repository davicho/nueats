module.exports = {
  plugins: [
      require('autoprefixer'),
      require('stylelint')({}),
      require('postcss-reporter')({ clearReportedMessages: true })
    ]
}