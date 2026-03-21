# Playwright Automation Testing From Scratch

This project demonstrates **end-to-end automation testing using Playwright (JavaScript/TypeScript)**, based on concepts and practices from the Udemy course:

**Playwright JS/TS Automation Testing from Scratch & Framework**

---

## Overview

This repository showcases how to build a scalable and maintainable **test automation framework** using Playwright.

Playwright enables:

*  Cross-browser testing (Chromium, Firefox, WebKit)
*  Fast and reliable execution
*  UI + API testing in a single framework
*  Headless and headed execution

---

##  Objectives

* Learn Playwright from the ground up
* Build a structured automation testing framework
* Apply Page Object Model (POM)
* Integrate UI and API testing
* Prepare for QA / SDET roles

---

##  Key Concepts Covered

###  Playwright Fundamentals

* Installation & setup
* Writing your first test
* Locators & selectors
* Auto-waiting

###  UI Automation

* User interactions (click, input, dropdowns)
* Assertions
* Handling dynamic elements

###  API Testing

* API requests within tests
* Data setup & teardown
* Authentication handling

###  Advanced Features

* Network interception & mocking
* Browser contexts & session handling
* Parallel execution
* Visual testing
* Mobile emulation

###  Debugging & Reporting

* Playwright Inspector
* Trace Viewer
* Screenshots & videos

###  Framework Design

* Page Object Model (POM)
* Reusable utilities
* Test data management
* Custom reporting

###  CI/CD Integration

* Jenkins
* Docker
* Pipeline automation

---

##  Project Structure

```
playwright-automation-testing/
│
├── tests/        # Test cases
├── pages/        # Page Object classes
├── utils/        # Helper functions
├── fixtures/     # Setup / teardown
├── config/       # Playwright config
├── reports/      # Test reports
└── package.json
```

---

##  Installation

```bash
# Clone repository
git clone https://github.com/Aritiaya50217/playwright-automation-testing-from-scratch.git

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶ Running Tests

```bash
# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run specific test
npx playwright test example.spec.ts
```

---

##  Reporting

* HTML reports
* Screenshots on failure
* Video recordings
* Trace files for debugging

---

##  Tech Stack

* Playwright
* JavaScript / TypeScript
* Node.js
* Cucumber / Mocha
* Jenkins
* Docker

---

##  Target Audience

* QA Engineers learning automation
* Developers interested in testing
* Beginners learning Playwright
* Anyone building a testing portfolio

---

##  Learning Outcomes

* Write stable automation tests
* Reduce flaky tests
* Design scalable frameworks
* Apply Playwright in real projects

---
