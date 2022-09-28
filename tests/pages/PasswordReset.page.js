const fixtures = require('../fixtures/fixtures.json')

class PasswordReset {
    get emailInput(){
        return $('form input[name="email"]')
    }

    async passwordResetValid(){
        await this.emailInput.setValue(fixtures.validEmail)
    }
    async passwordResetInvalid(){
        await this.emailInput.setValue(fixtures.invalidEmail)
    }
    async validation(){
        await expect(this.emailInput).toHaveValue(fixtures.validEmail)
    }
    async invalidation(){
        await expect(this.emailInput).toHaveValue(fixtures.invalidEmail)
    }
}

module.exports = new PasswordReset()