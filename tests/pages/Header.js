class Header {
    get waitlistLink(){ return $('header span > a[href="/products/storage"]') }
    get signUpLink(){ return $('header li > div > a[href="/sign-up"]') }
    get supportCenterLink(){ return $('header a[href^="https://support.telnyx.com/"]:nth-child(3)') }
    get loginLink(){ return $('header a[href="https://portal.telnyx.com/"]') }
    get products(){ return $('header ul > li:nth-child(1) > span') }
    get resources(){ return $('header ul > li:nth-child(6) > span') }
    get network(){ return $('header ul > li:nth-child(5) > span') }
    get company(){ return $('header ul > li:nth-child(8) > span') }
    productsLink(num){
        return $(`header ul > li:nth-child(1) div > div > div > div > div:nth-child(${num}) a`)
    }
    resourcesLink(num){
        return $(`header ul > li:nth-child(6) div > div > div > div > div:nth-child(${num}) a`)
    }
    companyLink(num){
        return $(`header ul > li:nth-child(8) div > div > div > div > div:nth-child(${num}) a`)
    }

    async waitlistClick(){
        await this.waitlistLink.click()
    }
    async signUpClick(){
        await this.signUpLink.click()
    }
    async supportCenterClick(){
        await this.supportCenterLink.click()
    }
    async loginClick(){
        await this.loginLink.click()
    }
    async productsHover(){
        await this.products.moveTo()
    }
    async resourcesHover(){
        await this.resources.moveTo()
    }
    async networkClick(){
        await this.network.click()
    }
    async companyHover(){
        await this.company.moveTo()
    }
    async productsLinkClick(num){
        await this.productsLink(num).click()
    }
    async resourcesLinkClick(num){
        await this.resourcesLink(num).click()
    }
    async companyLinkClick(num){
        await this.companyLink(num).click()
    }
}

module.exports = new Header()