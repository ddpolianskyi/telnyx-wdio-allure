const fixtures = require('../fixtures/fixtures.json')

class Integrations {
    get becomeBetaTesterForm(){ return $('#become-a-beta-tester') }
    get firstNameInput(){ return $('#become-a-beta-tester #FirstName') }
    get lastNameInput(){ return $('#become-a-beta-tester #LastName') }
    get emailInput(){ return $('#become-a-beta-tester #Email') }
    get companyInput(){ return $('#become-a-beta-tester #Website') }
    get industryInput(){ return $('#become-a-beta-tester #Industry') }
    get useCase(){ return $('#become-a-beta-tester #Use_Case_Form__c') }
    useCaseValue(num){ return $(`#become-a-beta-tester #Use_Case_Form__c > option:nth-child(${num})`) }

    async scrollToForm(){
        await this.becomeBetaTesterForm.scrollIntoView()
    }
    async fillFormValid(){
        await this.firstNameInput.setValue(fixtures.firstName)
        await this.lastNameInput.setValue(fixtures.lastName)
        await this.emailInput.setValue(fixtures.validEmail)
        await this.companyInput.setValue(fixtures.validCompanyUrl)
        await this.industryInput.setValue('Example example example')
        await this.useCase.click()
        await this.useCaseValue(2).click()
    }
    async fillFormInvalid(){
        await this.firstNameInput.setValue(fixtures.firstName)
        await this.lastNameInput.setValue(fixtures.lastName)
        await this.emailInput.setValue(fixtures.invalidEmail)
        await this.companyInput.setValue(fixtures.invalidCompanyUrl)
        await this.industryInput.setValue('Example example example')
        await this.useCase.click()
        await this.useCaseValue(2).click()
    }
    async validation(){
        await expect(this.emailInput).toHaveAttrContaining('aria-invalid', 'false')
        await expect(this.companyInput).toHaveAttrContaining('aria-invalid', 'false')
    }
    async invalidation(){
        await expect(this.emailInput).toHaveAttrContaining('aria-invalid', 'true')
        await expect(this.companyInput).toHaveAttrContaining('aria-invalid', 'true')
    }
}

module.exports = new Integrations()