class Blog {
    get searchInput(){ return $('#search') }
    get searchResults(){ return $$('#articles > *') }

    async search(){
        await this.searchInput.setValue('programming')
        await browser.keys('Enter')
    }
    async emptySearch(){
        await this.searchInput.setValue('blablabla')
        await browser.keys('Enter')
    }
    async validation(){
        await $('#articles > div:first-child').waitForDisplayed({ timeout: 10000 })
        await browser.pause(2000)
        await expect(await this.searchResults.length).toBeGreaterThan(1)
    }
    async emptyValidation(){
        await $('#articles > div:first-child').waitForDisplayed({ timeout: 10000 })
        await browser.pause(2000)
        await expect(await this.searchResults.length).toBeLessThanOrEqual(1)
    }
}

module.exports = new Blog()