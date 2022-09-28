class SupportCenter {
    get searchInput(){ return $('.search__input') }

    async search(){
        await this.searchInput.setValue('programming')
        await browser.keys('Enter')
    }
    async emptySearch(){
        await this.searchInput.setValue('blablabla')
        await browser.keys('Enter')
    }
    async validation(){
        let searchResultsLength = await $$('.section__search_results > *').length
        await expect(searchResultsLength).toBeGreaterThan(1)
    }
    async emptyValidation(){
        let searchResultsLength = await $$('.section__search_results > *').length
        await expect(searchResultsLength).toBeLessThanOrEqual(1)
    }
}

module.exports = new SupportCenter()