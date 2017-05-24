# Day Calendar

https://github.com/mkralla11/day-calendar

A POC of calendar event collision visual remediation on a single day view spanning 9:00am to 9:00pm.

# Contraints

- Colliding events' widths are equal.
- all events should stretch as large as possible while adhering to first constraint.

# Installation

1. clone repository (optional if received via zip):

  git clone https://github.com/mkralla11/day-calendar

2. install dependencies:

  cd day-calendar
  yarn

3. start server:

  npm start

The browser should automatically open with a given port.

# Browser Compatibility 
(Via BrowserStack)

- [x] Chrome
- [x] Safari
- [x] Firefox
- [x] gte IE 10
- [x] gte iOS 5 - Safari & Chrome
- [x] gte Samsung Galaxy S4 - Chrome

# Part I

entry point:

- src/index.js

#Part II

event data fetching:

- src/actionCreators/events.js#