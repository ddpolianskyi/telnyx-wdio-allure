class Network {
    get competitorNetworks(){ return $('div:nth-child(1) > div > div > div > div[aria-label="Competitor Networks"]') }
    faqDropdownMenu(num){ return $(`dl > div:nth-child(${num}) button`) }

    async competitorNetworksClick(){
        await this.competitorNetworks.click()
    }
    async competitorNetworksCheck(){
        await expect(this.competitorNetworks).toHaveAttrContaining('aria-selected', 'true')
    }
    async faqDropdownMenuClick(num){
        await this.faqDropdownMenu(num).click()
    }
    async faqDropdownMenuCheck(num){
        await expect(this.faqDropdownMenu(num)).toHaveAttrContaining('aria-expanded', 'true')
    }
}

module.exports = new Network()