## dialog-boxes-info
Info about each dialog box's `window` arguments, returned data and commands(accesskey) for menus/toolbars shortcut.

## dialogs
1. calendar-print-dialog.xul
2. calendar-alarm-dialog.xul
3. calendar-conflicts-dialog.xul
4. calendar-event-dialog-attendees.xul
5. calendar-error-prompt.xul
6. calendar-event-dialog-recurrence.xul
7. calendar-event-dialog-reminder.xul
8. calendar-event-dialog-timezone.xul
9. calendar-event-dialog.xul
10. calendar-invitations-dialog.xul
11. calendar-migration-dialog.xul
12. calendar-occurrence-prompt.xul
13. calendar-properties-dialog.xul
14. calendar-providerUninstall-dialog.xul
15. calendar-subscriptions-dialog.xul
16. calendar-summary-dialog.xul
17. chooseCalendarDialog.xul 


## calendar-properties-dialog.xul
**Info:** This dialog is opened by clicking on `calendar folder` and then select `properties`. This dialog is opened whenever `
openCalendarProperties`([line#375](https://dxr.mozilla.horg/comm-central/source/calendar/base/src/calUtils.js#375)) function is called.

**Called:** when anyitem of `calendar-list-tree` is double clicked or clicked once and then `properties` is selected.

### Arguments
**Name:** `CalendarPropertiesDialog`

**Location/Size:** `modal(not for linux),chrome,titlebar,resizable`

**Window Arguments:** XPCOM objects having calendar info.

### Possible postMessage interactions
1. **onload dialog event:** initial data sent through postMessage api.
2. **ondialogaccept event:** data from react/html sent sent through postMessage api to parent.

### Data format(postMessage)
**Type:** Object 
```js
{
  general: {
    caledarSwitch: Boolean,
    calendarName: String,
    color: String,
    location: String,
    email: Array,
    readOnly: Boolean,
    showReminders: Boolean,
  },
  ...other tabs data
}
```

### Returned data
**ondialogaccept:** `onAcceptDialog` function's return value(in `calendar-properties-dialog.js`). This function ultimately returns `true`(signal for closing of dialog) after changing the gCalendar variable recieved through window arguments. 

**ondialogcancel:** `true`

### Access Key Codes
Files to checkout:
* [calendar.dtd](https://dxr.mozilla.org/comm-central/source/calendar/locales/en-US/chrome/calendar/calendar.dtd)
* [global.dtd](https://dxr.mozilla.org/comm-central/source/calendar/locales/en-US/chrome/calendar/global.dtd)



## calendar-print-dialog.xul

**Info:** This dialog is opened whenever `calPrint` function is called. No window arguments are passed to this dialog.

1.**Called from:** calUtils.js  **Position:** [line#390](https://dxr.mozilla.org/comm-central/source/calendar/base/src/calUtils.js#390)

2.**Called from:** calendar-event-dialog.xul  **Position:** [line#100](https://dxr.mozilla.org/comm-central/source/obj-x86_64-pc-linux-gnu/dist/bin/extensions/%7Be2fda1a4-762b-4020-b5ad-a41df1933103%7D/chrome/calendar/content/calendar/calendar-event-dialog.xul#100)

3.**Called from:** calendar-common-sets.js  **Position:** [line#100](https://dxr.mozilla.org/comm-central/source/calendar/base/content/calendar-common-sets.js#751)


### Arguments
**Name:** `Print`

**Location/Size:** `centerscreen,resizable`

**Window Arguments:** none

### Returned data
**ondialogaccept:** `printAndClose` function's return value(in `calendar-print-dialog.js`)

**ondialogcancel:** `true`

### Functions call
**onload:** `loadCalendarPrintDialog`(function in `calendar-print-dialog.js`)

Checkout `refreshHtml`(function in `calendar-print-dialog.js`) too.

### Access Key Codes
Files to checkout:
* [calendar.dtd](https://dxr.mozilla.org/comm-central/source/calendar/locales/en-US/chrome/calendar/calendar.dtd)
* [global.dtd](https://dxr.mozilla.org/comm-central/source/calendar/locales/en-US/chrome/calendar/global.dtd)

**buttonaccesskeyaccept:** `&calendar.print.button.accesskey`
 
