# Unit10-group13-yet-another-js-course-First-tests
Playwright + TypeScript login test automation — Unit 10 (Yet Another JS Course)

Tests the login flow on [practicesoftwaretesting.com](https://practicesoftwaretesting.com/auth/login):
verifying that a user can log in with valid credentials and is redirected to their account page.

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running tests

```bash
npx playwright test          # run all tests headless
npx playwright test --ui     # run in UI mode
npx playwright show-report   # view HTML report after a run
```