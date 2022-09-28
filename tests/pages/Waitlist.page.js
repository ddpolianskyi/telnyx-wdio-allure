const fixtures = require('../fixtures/fixtures.json')

class Waitlist {
    get waitlistForm(){ return $('div#form') }
    get firstNameInput(){ return $('div#form #FirstName') }
    get lastNameInput(){ return $('div#form #LastName') }
    get emailInput(){ return $('div#form #Email') }
    get additionalInformationInput(){ return $('div#form #Form_Additional_Information__c') }

    async scrollToForm(){
        await this.waitlistForm.scrollIntoView()
    }
    async fillFormValid(){
        await this.firstNameInput.setValue(fixtures.firstName)
        await this.lastNameInput.setValue(fixtures.lastName)
        await this.emailInput.setValue(fixtures.validEmail)
        await this.additionalInformationInput.setValue('Example example example')

    }
    async fillFormInvalid(){
        await this.firstNameInput.setValue(fixtures.firstName)
        await this.lastNameInput.setValue(fixtures.lastName)
        await this.emailInput.setValue(fixtures.invalidEmail)
        await this.additionalInformationInput.setValue('Example example example')
    }
    async validation(){
        await expect(this.emailInput).toHaveAttrContaining('aria-invalid', 'false')
    }
    async invalidation(){
        await expect(this.emailInput).toHaveAttrContaining('aria-invalid', 'true')
    }
}

module.exports = new Waitlist()