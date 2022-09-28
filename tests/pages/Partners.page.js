const fixtures = require('../fixtures/fixtures.json')

class Partners {
    get partnershipForm(){ return $('#become-a-partner') }
    get firstNameInput(){ return $('#become-a-partner #FirstName') }
    get lastNameInput(){ return $('#become-a-partner #LastName') }
    get companyInput(){ return $('#become-a-partner #Company') }
    get emailInput(){ return $('#become-a-partner #Email') }
    get phoneInput(){ return $('#become-a-partner #Form_Phone__c') }
    get partnerType(){ return $('#become-a-partner #Partner_Type__c') }
    partnerTypeValue(num){ return $(`#become-a-partner #Partner_Type__c > option:nth-child(${num})`) }
    get additionalInformation(){ return $('#become-a-partner #Form_Additional_Information__c') }

    async scrollToForm(){
        await this.partnershipForm.scrollIntoView()
    }
    async fillFormValid(){
        await this.firstNameInput.setValue(fixtures.firstName)
        await this.lastNameInput.setValue(fixtures.lastName)
        await this.companyInput.setValue(fixtures.company)
        await this.emailInput.setValue(fixtures.validEmail)
        await this.phoneInput.setValue(fixtures.validPhoneNumber)
        await this.partnerType.click()
        await this.partnerTypeValue(2).click()
        await this.additionalInformation.setValue('Example example example')
    }
    async fillFormInvalid(){
        await this.firstNameInput.setValue(fixtures.firstName)
        await this.lastNameInput.setValue(fixtures.lastName)
        await this.companyInput.setValue(fixtures.company)
        await this.emailInput.setValue(fixtures.invalidEmail)
        await this.phoneInput.setValue(fixtures.invalidPhoneNumber)
        await this.partnerType.click()
        await this.partnerTypeValue(2).click()
        await this.additionalInformation.setValue('Example example example')
    }
    async validation(){
        await expect(this.emailInput).toHaveAttrContaining('aria-invalid', 'false')
        await expect(this.phoneInput).toHaveAttrContaining('aria-invalid', 'false')
    }
    async invalidation(){
        await expect(this.emailInput).toHaveAttrContaining('aria-invalid', 'true')
        await expect(this.phoneInput).toHaveAttrContaining('aria-invalid', 'true')
    }
}

module.exports = new Partners()