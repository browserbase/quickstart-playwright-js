<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="logo/dark.svg"/>
        <img alt="Browserbase logo" src="logo/light.svg" width="300" />
    </picture>
</p>

<p align="center">
    <a href="https://docs.browserbase.com">Documentation</a>
    <span>&nbsp;·&nbsp;</span>
    <a href="https://www.browserbase.com/playground">Playground</a>
</p>
<br/>

## Playwright with Browserbase
Browserbase is the best developer platform to reliably run, manage, and monitor headless browsers.

Get browsers' full control and leverage Browserbase's
[Infrastructure](https://docs.browserbase.com/under-the-hood), [Stealth Mode](https://docs.browserbase.com/features/stealth-mode), and
[Session Debugger](https://docs.browserbase.com/features/sessions) to power your automation, test suites,
and LLM data retrievals.

**Get started in under one minute** with Playwright.


## Setup

### 1. Install dependencies

```bash
npm install
```


### 2. Get your Browserbase API Key and Project ID:

1. [Create an account](https://www.browserbase.com/sign-up) or [log in to Browserbase](https://www.browserbase.com/sign-in)
2. Copy your API Key and Project ID [from the Dashboard](https://www.browserbase.com/overview)
3. Create a `.env` file:

```bash
cp .env.example .env
```

4. Add your API Key and Project ID to the `.env` file.


### 3. Run the script:

```bash
npm start
```


## Further reading

- [See how to leverage the Session Debugger for faster development](https://docs.browserbase.com/guides/browser-remote-control#accelerate-your-local-development-with-remote-debugging)
- [Learn more about Browserbase infrastructure](https://docs.browserbase.com/under-the-hood)
- [Explore the Sessions API](https://docs.browserbase.com/api-reference/list-all-sessions)