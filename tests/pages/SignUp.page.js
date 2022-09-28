const fixtures = require('../fixtures/fixtures.json')

class SignUp {
    get emailInput(){
        return $('form input#email')
    }
    get fullNameInput(){
        return $('form input#full_name')
    }
    get passwordInput(){
        return $('form input#password')
    }
    get termsAndConditions(){
        return $('form input#terms_and_conditions').parentElement()
    }
    get receiveEmails(){
        return $('form input#subscription_opt_in').parentElement()
    }
    get submitButton(){
        return $('button[type="submit"]')
    }

    async signUpValid(){
        await this.emailInput.setValue(fixtures.validEmail)
        await this.fullNameInput.setValue(fixtures.fullName)
        await this.passwordInput.setValue(fixtures.validPassword)
        await this.termsAndConditions.click()
        await this.receiveEmails.click()
    }
    async signUpInvalid(){
        await this.emailInput.setValue(fixtures.invalidEmail)
        await this.fullNameInput.setValue(fixtures.fullName)
        await this.passwordInput.setValue(fixtures.invalidPassword)
        await this.termsAndConditions.click()
        await this.receiveEmails.click()
    }
    async validation(){
        await expect(this.emailInput).not.toHaveAttr('aria-invalid')
        await expect(this.passwordInput).not.toHaveAttr('aria-invalid')
    }
    async invalidation(){
        await expect(this.emailInput).toHaveAttr('aria-invalid')
        await expect(this.passwordInput).toHaveAttr('aria-invalid')
    }
}

module.exports = new SignUp()