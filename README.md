# Playwright AI Friendly App

## Overview
This project is designed to demonstrate automated testing using Playwright, a powerful library for browser automation. The application focuses on testing the login functionality of a web application.

## Project Structure
```
playwright-ai-friendly-app
├── src
│   ├── pages
│   │   └── loginPage.js
│   └── tests
│       └── login.test.js
├── package.json
├── playwright.config.js
└── README.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd playwright-ai-friendly-app
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run Tests**
   To execute the tests, use the following command:
   ```bash
   npx playwright test
   ```

## Usage
The project includes a `LoginPage` class that encapsulates the login functionality. The test file `login.test.js` contains a test case that verifies the login process.

## Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements.

## License
This project is licensed under the MIT License.