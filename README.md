# Lab: 41 - Front End Deployment

## Tools Used

- VS Code
- Javascript
- REACT
- Next.js
- tailwindcss

## Feature Tasks and Requirements

**Version 1:**

- [x] The spec for lab is screen shot of Cookie Stand Admin Version 1
- [x] pages/Index.js should…
  - [x] Have <Head> component with page title set to Cookie Stand Admin
  - [x] Have a header component that matches spec.
  - [x] Have a <main> component containing <form> and a placeholder component showing JSON string of last created Cookie Stand.
  - [x] Have a <footer> component that matches spec.
- [x] Style app using TailwindCSS utility classes.
      **Version 2:**
- [x] The specs for lab are screen shots Cookie Stand Admin Version 2 and Cookie Stand Admin No Stands
- [x] pages/Index.js should return top level component <CookieStandAdmin>
      <CookieStandAdmin> details…
  - [x] Will contain the following components:
    - [x] <Head>, <Header>, <main>, <CreateForm>, <ReportTable>, and<Footer> component that matches spec.
- [x] Import time slot data from supplied data.js file.
- [x] <CreateForm> component details…
      Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
- [x] <ReportTable> details…
  - [x] If reports is empty then render <h2>No Cookie Stands Available</h2>
  - [x] If reports is not empty then render a table with thead,tbody and tfoot components.
- [x] Components should render to match spec.
- [x] Style all components using TailwindCSS utility classes to match spec
      **Version 3:**
- [x] All features from versions 1 an 2 should be complete.
- [x] The specs for lab are screen shots Cookie Stand Admin Version 3 and Cookie Stand Admin Login
- [x] pages/Index.js should export a <Home> component.
- [x] <Home> requirements
  - [x] If user is NOT logged in then <LoginForm> should render.
  - [x] If user IS logged in then <CookieStandAdmin> component should render.
- [x] <LoginForm> requirements
  - [x] Should receive a function passed in to call when form is submitted.
  - [x] The function should be called with username and password arguments.
- [x] <CookieStandAdmin> requirements
  - [x] When user fills out form to add location then the data should be posted to API
  - [x] While waiting for API response the <CookieStandTable> should render the new row in a pending state.
  - [x] When API response is complete then <CookieStandTable> should render latest data.
        <CookieStandTable> requirements
- [x] Component should continue to display Cookie Stand info as in version 2
- [x] Add a delete icon in each stand's location cell.
- [x] Clicking delete icon should immediately delete the Cookie Stand. -[x] In other words, it should NOT require a page refresh.
- [x] API should be informed that Cookie Stand was deleted.
- [x] Continue to style all components using TailwindCSS utility classes to match spec.
      **Version 4:**
- [x] The app you built for previous lab.

## Developer

Faisal Kushha

## Pull Request

https://github.com/Faisal-Kushha/cookie-stand-deploy/pull/1

## Deployment Link

http://cookie-stand-deploy-theta.vercel.app
