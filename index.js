const puppeteer = require('puppeteer')
const fs = require('fs')

module.exports = url => {
  return new Promise(async (resolve, reject) => {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true
    })
    const page = await browser.newPage()
    await page.goto(`https://gifi.cagatay.me/?pdf=${url}`)

    page.on('console', async msg => {
      var data = msg._text.replace(/^data:image\/\w+;base64,/, '')
      var buffer = Buffer.from(data, 'base64')
      let d = new Date()
      let filename = `${d.valueOf()}.gif`
      fs.writeFile(filename, buffer)
      await browser.close()
      resolve(filename)
    })
  })
}
