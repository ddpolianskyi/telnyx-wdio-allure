class Page {
    get cookiesAcceptBtn(){ return $('#__next > div > div > div div > button') }
    
    async open(url){
        await browser.url(url)
    }
    cookiesAccept(){
        this.cookiesAcceptBtn.click()
    }
    async redirectValidation(){
        await expect(browser).not.toHaveUrl('https://telnyx.com/')
    }
}

module.exports = new Page()