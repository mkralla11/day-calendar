# Day Calendar

https://github.com/mkralla11/day-calendar

A POC of calendar event collision visual remediation on a single day view spanning 9:00am to 9:00pm.

# Contraints

- Colliding events' widths are equal.
- all events should stretch as large as possible while adhering to first constraint.

# Installation

- clone repository (optional if received via zip):

```
git clone https://github.com/mkralla11/day-calendar
```

- install dependencies:

```
cd day-calendar
#(optional: install yarn globally)
npm install -g yarn
yarn
```

- start server:

```
npm start
```

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

layOutDay function definition:

- [src/utils/layOutDay.js#L16](https://github.com/mkralla11/day-calendar/blob/v0.1.0/src/utils/layOutDay.js#L16)

#Part II

event data fetching:

- [src/actionCreators/events.js#L9](https://github.com/mkralla11/day-calendar/blob/v0.1.0/src/actionCreators/events.js#L9)


# Part III

application entry point:

- [src/index.js](https://github.com/mkralla11/day-calendar/blob/v0.1.0/src/index.js)


# Notes

- Per request, library source files will be included in a zip in the deliverable. 
- Testing framework has been put in place and is readily available to be used, but do to time constraints, unit tests are not included.
- Mobile browser compatibility is always a top priority of anything I work on, so this was inherently included during my development. I've exceeded the requirements by ensuring that the maximum width of the events container is the expected 600px, but once the width of the viewport crosses below this threshold, dynamic calculations are used for the correct positioning and left offset colliding events to support mobile browsing.
- The goal of organizing this POC into coherent, reusable functions and modules is to demonstrate my development style and architectural patterns that I frequently promote as a Lead.



# Doc Discrepancies

The requirements stated that events provided by Firebase would return:

- 9:30 am - 11:30 am
- 6:00 pm - 7:00 pm
- 6:20 pm - 7:20 pm
- 7:10 pm - 8:10 pm

The actual data return is:

{"-K2rlJ-nkJBtkLHL0QmO":{"end":150,"start":30},"-K2rlKbFfXz3OEoxRBJU":{"end":650,"start":540},"-K2rlLd-VjcZ_rtBlVuM":{"end":620,"start":560},"-K2rlMb_GD98QiMk8zGF":{"end":700,"start":630}}

which translates to

- 9:30 am - 11:30 am (correct)
- 6:00 pm - 7:50 pm  **(incorrect)**
- 6:20 pm - 7:20 pm  (correct)
- 7:30 pm - 8:40 pm  **(incorrect)**


