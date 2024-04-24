# Playwright with Browserbase

<p align="center" style="max-width: 400px; margin: 0 auto;">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="logo/dark.png"/>
        <img alt="Defer logo" src="logo/light.png"/>
    </picture>
</p>

<p align="center">
    <a href="https://docs.browserbase.com">Documentation</a>
    <span>&nbsp;·&nbsp;</span>
    <a href="https://www.browserbase.com/">Website</a>
</p>
<br/>

## Introduction

Browserbase is the best developer platform to run, manage, and monitor headless
browsers reliably.

Get browsers' full control and leverage Browserbase's
[Infrastructure](https://docs.browserbase.com/under-the-hood), [Stealth Mode](https://docs.browserbase.com/features/stealth-mode), and
[Session Debugger](https://docs.browserbase.com/features/sessions) to power your automation, test suites,
and LLM data retrievals.

**Get started in under one minute** with Playwright.


## Setup

### 1. Install dependencies and launch TypeScript in watch mode:

```bash
npm install
tsc -w
```


### 2. Get your Browserbase API Key and Project ID:

- [Create an account](https://www.browserbase.com/sign-up) or [log-in to Browserbase](https://www.browserbase.com/sign-in)
- Copy your API Key and Project ID [from your Setting page](https://www.browserbase.com/settings)

### 3. Run the script:

```bash
BROWSERBASE_PROJECT_ID=xxx BROWSERBASE_API_KEY=xxxx node dist/index.js
```


## Further reading

- [See how to leverage the Session Debugger for faster development](https://docs.browserbase.com/guides/browser-remote-control#accelerate-your-local-development-with-remote-debugging)
- [Learn more about Browserbase infrastructure](https://docs.browserbase.com/under-the-hood)
- [Explore the Sessions API](https://docs.browserbase.com/api-reference/list-all-sessions)