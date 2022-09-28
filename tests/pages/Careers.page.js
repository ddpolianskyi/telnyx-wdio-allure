const page = require('./Page')

let positionName = 'None'

class Careers {
    positionLink(name, num){
        return $(`//section//h4[contains(text(), ${name})]/../a[${num}]`)
    }

    async positionLinkClick(name, num){
        positionName = await $(`//section//h4[contains(text(), ${name})]/../a[${num}]//p`).getText()
        await page.open(await this.positionLink(name, num).getAttribute('href'))
    }

    async positionNameCheck(){
        await expect(await $('.app-title').getText()).toBe(positionName)
    }
}

module.exports = new Careers()