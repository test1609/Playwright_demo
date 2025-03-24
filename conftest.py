import pytest
from selenium import webdriver

@pytest.fixture
def driver():
    driver = webdriver.Chrome()  # Update for your browser (Edge, Firefox, etc.)
    driver.maximize_window()
    yield driver
    driver.quit()
