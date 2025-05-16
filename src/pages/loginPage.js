class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="email"]'; // Update selector as needed
        this.passwordInput = 'input[name="pass"]'; // Update selector as needed
        this.loginButton = 'button[name="login"]'; // Update selector as needed
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

export default LoginPage;