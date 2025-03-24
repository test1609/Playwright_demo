import pytest
from playwright.sync_api import sync_playwright
from pages.login_page import LoginPage

@pytest.fixture
def browser():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        yield page
        browser.close()

def test_valid_login(browser):
    login_page = LoginPage(browser)
    login_page.visit("https://www.facebook.com/")  # Replace with actual URL
    login_page.login("testuser", "password123")

    assert "Dashboard" in login_page.get_title()
