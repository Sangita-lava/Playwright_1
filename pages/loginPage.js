const { creds } = require('../test-data/credentials');

// pages/LoginPage.js
exports.loginPage = class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailField = 'id=input-email';
        this.passwordField = '#passwid="input-password';
        this.loginButton = '//*[@id="content"]/div/div[2]/div/form/input';
    }

    async gotologinPage() {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }

    async loginPage() {
        await this.page.fill('#input-email', creds.email);
        await this.page.fill('#input-password', creds.password);
        await this.page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
    }
};
