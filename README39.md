## Lab: 39 - React III

**Feature Tasks and Requirements**

- [x] pages/Index.js should export a `<Home>` component.

`<Home>` requirements

- [x] If user is NOT logged in then `<LoginForm>` should render.
- [x] If user IS logged in then `<CookieStandAdmin>` component should render.

`<LoginForm>` requirements

- [x] Should receive a function passed in to call when form is submitted.
- [x] The function should be called with username and password arguments.

`<CookieStandAdmin>` requirements

- [x] When user fills out form to add location then the data should be posted to API
- [x] While waiting for API response the `<CookieStandTable>` should render the new row in a pending state.
- [x] When API response is complete then `<CookieStandTable>` should render latest data.

`<CookieStandTable>` requirements

- [x] Component should continue to display Cookie Stand info as in version 2
- [x] Add a delete icon in each stand’s location cell.
- [x] Clicking delete icon should immediately delete the Cookie Stand.
- [x] In other words, it should NOT require a page refresh.
- [x] API should be informed that Cookie Stand was deleted.
- [x] Continue to style all components using TailwindCSS utility classes to match spec.

**Implementation Notes**

- [x] Continue work in cookie-stand-admin repository
- [x] Ideally, you will have front end communicate with your API.
- [x] If your API is not fully functional then communicate with instructor to get access to a test API.

**Configuration**

- [x] Continue work in cookie-stand-admin repository in Github

**Developer**

Faisal Kushha

**Pull Request**

https://github.com/Faisal-Kushha/cookie-stand-admin/pull/3
