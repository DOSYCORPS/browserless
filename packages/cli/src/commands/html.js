'use strict'

const createBrowserless = require('browserless')

module.exports = async (url, opts) => {
  const browserless = createBrowserless()
  const result = await browserless.html(url, opts)
  await browserless.destroy()
  return result
}
