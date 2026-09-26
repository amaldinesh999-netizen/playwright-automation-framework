import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {

    }

    usernameInput = this.page.getByLabel('Username');
    passwordInput = this.page.getByLabel('Password');
    submitButton = this.page.getByRole('button', { name: 'Submit' });

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickSubmit() {
        await this.submitButton.click();
    }
}