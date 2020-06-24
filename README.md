#  Day Planner

The app displays standard business hours (9 a.m. to 5 p.m.). Each time slot represents one hour and contains the following:

* The time

* A field to hold user input

* A save button

Clicking on the save button will store the time and user input in `localStorage`.

Near the top of the calendar, the application displays the current day. Additionally, each hour is color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

![day planner demo](./Assets/05-Third-Party-APIs-homework-demo.gif)

## User Story

As an employee with a busy schedule

I want to add important events to a daily planner

So that I can manage my time effectively 

## Business Context

Poor time management can result in missed meetings and deadlines or create the appearance of unprofessionalism. A daily planner allows employees to see their day at a glance, schedule time effectively, and improve productivity. 

Given that an employee adds events to a specific hour in a calendar

When the employee clicks the save button

Then events are saved in the timeblock for that hour
```
