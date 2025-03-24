from pages.base_page import BasePage

class LoginPage(BasePage):
    USERNAME_INPUT = "#email"
    PASSWORD_INPUT = "#pass"
    LOGIN_BUTTON = "[name='login']"

    def enter_username(self, username):
        self.enter_text(self.USERNAME_INPUT, username)

    def enter_password(self, password):
        self.enter_text(self.PASSWORD_INPUT, password)

    def click_login(self):
        self.click(self.LOGIN_BUTTON)

    def login(self, username, password):
        self.enter_username(username)
        self.enter_password(password)
        self.click_login()
