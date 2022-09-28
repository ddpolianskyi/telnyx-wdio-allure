const fixtures = require('../fixtures/fixtures.json')

class Login {
    get emailInput(){
        return $('form div div div div input[name="email"]')
    }
    get passwordInput(){
        return $('form div div div div input[name="password"]')
    }
    get passwordResetLink(){
        return $('form a[href*="password-reset"]')
    }
    get rememberMe(){
        return $('form input[name="remember_me"]').parentElement()
    }
    get submitButton(){
        return $('form button[class*="LoginForm"]')
    }
    get emailError(){
        return $('form > div > div:nth-child(1) div[class*="ErrorMessage"]')
    }

    async passwordResetClick(){
        await this.passwordResetLink.click()
    }
    async loginValid(){
        await this.emailInput.setValue(fixtures.validEmail)
        await this.passwordInput.setValue(fixtures.validPassword)
        await this.rememberMe.click()
    }
    async loginInvalid(){
        await this.emailInput.setValue(fixtures.invalidEmail)
        await this.passwordInput.setValue(fixtures.validPassword)
        await this.rememberMe.click()
    }
    async validation(){
        await expect(this.emailError).not.toBeDisplayed()
    }
    async invalidation(){
        await expect(this.emailError).toBeDisplayed()
    }
}

module.exports = new Login()