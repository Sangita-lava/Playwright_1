exports.registerPage = class registerPage {
    constructor(page) {
        this.page = page;

        // Input fields
        this.FirstName_textbox = page.getByRole('textbox', { name: '* First Name' });
        this.LastName_textbox = page.getByRole('textbox', { name: '* Last Name' });
        this.EMail_textbox = page.getByRole('textbox', { name: '* E-Mail' });
        this.Telephone_textbox = page.getByRole('textbox', { name: '* Telephone' });

        // Use specific locators to avoid "strict mode" issues
        this.Password_textbox = page.locator('#input-password');
        this.PasswordConfirm_textbox = page.locator('#input-confirm');

        // Privacy policy checkbox and continue button
        this.PrivacyPolicy_checkbox = page.locator('input[name="agree"]');
        this.Continue_button = page.getByRole('button', { name: 'Continue' });

        // Warning for already registered email
        this.EmailWarning = page.locator('.alert-danger');
    }

    /**
     * Fills in the registration form and submits it.
     * @param {Object} user - A user object from credentials.js (e.g., registerCreds or newUser)
     */
    async register(user) {
        if (!user) throw new Error('register() was called with undefined user data.');

        await this.FirstName_textbox.fill(user.firstname);
        await this.LastName_textbox.fill(user.lastname);
        await this.EMail_textbox.fill(user.email);
        await this.Telephone_textbox.fill(user.telephone);
        await this.Password_textbox.fill(user.password);
        await this.PasswordConfirm_textbox.fill(user.passwordconfirm);
        await this.PrivacyPolicy_checkbox.check();
        await this.Continue_button.click();
    }

    /**
     * Returns the email warning text shown for already registered emails.
     */
    async getEmailWarningText() {
        return await this.EmailWarning.textContent();
    }
};
