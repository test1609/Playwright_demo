from playwright.sync_api import Page

class BasePage:
    def __init__(self, page: Page):
        self.page = page

    def visit(self, url):
        self.page.goto(url)

    def enter_text(self, locator, text):
        self.page.fill(locator, text)

    def click(self, locator):
        self.page.click(locator)

    def get_title(self):
        return self.page.title()
