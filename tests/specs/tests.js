const page = require('../pages/Page')
const header = require('../pages/Header')
const signUp = require('../pages/SignUp.page')
const login = require('../pages/Login.page')
const passwordReset = require('../pages/PasswordReset.page')
const supportCenter = require('../pages/SupportCenter.page')
const blog = require('../pages/Blog.page')
const network = require('../pages/Network.page')
const company = require('../pages/Company.page')
const careers = require('../pages/Careers.page')
const waitlist = require('../pages/Waitlist.page')
const partners = require('../pages/Partners.page')
const integrations = require('../pages/Integrations.page')

before('Cookies accept', async () => {
    browser.setWindowSize(1920, 1080)
    page.open('https://telnyx.com/')
    await page.cookiesAccept()
    await browser.pause(5000)
})
beforeEach('Redirect to telnyx.com', async () => {
    await page.open('https://telnyx.com/')
})
describe('Sign up', () => {
    it('Should be signed up', async () => {
        await header.signUpClick()
        await signUp.signUpValid()
        await signUp.validation()
    })
    it('Should not be signed up because of invalid credentials', async () => {
        await header.signUpClick()
        await signUp.signUpInvalid()
        await signUp.invalidation()
    })
})
describe('Log in', () => {
    it('Should be logged in', async () => {
        await header.loginClick()
        await login.loginValid()
        await login.validation()
    })
    it('Should not be logged in because of invalid credentials', async () => {
        await header.loginClick()
        await login.loginInvalid()
        await login.invalidation()
    })
})
describe('Password reset', () => {
    it('Password should be reseted', async () => {
        await header.loginClick()
        await login.passwordResetClick()
        await passwordReset.passwordResetValid()
        await passwordReset.validation()
    })
    it('Password should not be reseted because of invalid credentials', async () => {
        await header.loginClick()
        await login.passwordResetClick()
        await passwordReset.passwordResetInvalid()
        await passwordReset.invalidation()
    })
})
describe('Redirect by the link', () => {
    it('Should be redirected by the link', async () => {
        await header.productsHover()
        await header.productsLinkClick(1)
        await page.redirectValidation()
    })
})
describe('Support center search', () => {
    it(`Should search`, async () => {
        await header.supportCenterClick()
        await supportCenter.search()
        await supportCenter.validation()
    })
    it(`Should search with empty results`, async () => {
        await header.supportCenterClick()
        await supportCenter.emptySearch()
        await supportCenter.emptyValidation()
    })
})
describe('Blog search', () => {
    it('Should search', async () => {
        await header.resourcesHover()
        await header.resourcesLinkClick(3)
        await blog.search()
        await blog.validation()
    })
    it('Should search with empty results', async () => {
        await header.resourcesHover()
        await header.resourcesLinkClick(3)
        await blog.emptySearch()
        await blog.emptyValidation()
    })
})
describe('Network map changing', () => {
    it('Newtork map should be changed to Competitor Networks', async () => {
        await header.networkClick()
        await network.competitorNetworksClick()
        await network.competitorNetworksCheck()
    })
})
describe('Network FAQ dropdown menu opening', () => {
    it('FAQ dropdown menu #2 should be opened', async () => {
        await header.networkClick()
        await network.faqDropdownMenuClick(2)
        await network.faqDropdownMenuCheck(2)
    })
})
describe('Redirect to Telnyx office location in Google Maps', () => {
    it('Should be redirected to Telnyx office in Chicago location in Google Maps', async () => {
        await header.companyHover()
        await header.companyLinkClick(1)
        await company.officeLocationLinkClick('Chicago')
        await company.officeLocationCheck('Chicago')
    })
})
describe('Redirect to career position page', () => {
    it('Should be redirected to first in Sales section career position page', async () => {
        await header.companyHover()
        await header.companyLinkClick(2)
        await careers.positionLinkClick('Sales', 1)
        await careers.positionNameCheck()
    })
})
describe('Join the Waitlist form', () => {
    it('Join the Waitlist form should be sended', async () => {
        await header.waitlistClick()
        await waitlist.scrollToForm()
        await browser.pause(3000)
        await waitlist.fillFormValid()
        await waitlist.validation()
    })
    it('Join the Waitlist form should not be sended because of invalid credentials', async () => {
        await header.waitlistClick()
        await waitlist.scrollToForm()
        await browser.pause(3000)
        await waitlist.fillFormInvalid()
        await waitlist.invalidation()
    })
})
describe('Partnership form', () => {
    it('Partnership form should be sended', async () => {
        await header.companyHover()
        await header.companyLinkClick(3)
        await partners.scrollToForm()
        await partners.fillFormValid()
        await partners.validation()
    })
    it('Partnership form should not be sended because of invalid credentials', async () => {
        await header.companyHover()
        await header.companyLinkClick(3)
        await partners.scrollToForm()
        await partners.fillFormInvalid()
        await partners.invalidation()
    })
})
describe('Become a Beta Tester form', () => {
    it('Form should be sended', async () => {
        await header.companyHover()
        await header.companyLinkClick(4)
        await integrations.scrollToForm()
        await integrations.fillFormValid()
        await integrations.validation()
    })
    it('Form should not be sended because of invalid credentials', async () => {
        await header.companyHover()
        await header.companyLinkClick(4)
        await integrations.scrollToForm()
        await integrations.fillFormInvalid()
        await integrations.invalidation()
    })
})