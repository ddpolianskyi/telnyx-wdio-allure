const page = require('./Page')

class Company {
    officeLocationLink(name){
        return $(`//section/ul/li//*[contains(text(), ${name})]/../../../div//a`)
    }

    async officeLocationLinkClick(name){
        const url = await this.officeLocationLink(name).getAttribute('href')
        await page.open(url)
    }

    async officeLocationCheck(name){
        await expect(browser).toHaveUrlContaining(name)
    }
}

module.exports = new Company()