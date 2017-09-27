/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.addEventListener("load", () => {
  let dialog;
  let postMessageInterval;
  const selectbox = document.getElementById("component-selector");
  const pseudoWindow = document.querySelector(".pseudo-window");
  const container = document.querySelector("#iframe-wrapper");
  const textarea = document.querySelector("#ta");

  const DIALOG_STATES = {
    "calendar-properties-dialog": {
      general: {
        disabled: false,
        forceDisabled: false,
        color: "#deadbf",
        name: "Calendar",
        uri: "moz-storage-calendar://",
        readOnly: true,
        supressAlarms: false,
        canRefresh: true,
        refreshInterval: 30,
        cache: {
          supported: true,
          enabled: false,
          always: false
        },
        capabilities: {
          alarms: {
            popup: {
              supported: true
            }
          }
        },
        imip: {
          identity: {
            disabled: false,
            selected: "key1"
          }
        },
        identities: [
          {
            name: "Arshad <arshad@exmaple.com>",
            key: "key2"
          },
          {
            name: "Philipp <kewisch@exmaple.com>",
            key: "key1"
          }
        ]
      },
      source: "dialog-message"
    },
    "print-dialog": {
      printSettings: {
        title: "",
        selectedLayoutIndex: 0,
        layoutList: [{ value: "List" }, { value: "Monthly Grid" }, { value: "Weekly Planner" }]
      },
      whatToPrint: {
        printEvents: false,
        printTasks: false,
        view: "",
        fromDate: "",
        toDate: ""
      },
      options: {
        showTasksWithNoDueDate: false,
        showCompletedTasks: false
      },
      iframe: {
        title: "demo",
        html:
          "<!DOCTYPE html><html><body><h1>MyFirstHeading</h1><p>Myfirstparagraph.</p></body></html>"
      },
      source: "dialog-message"
    },
    "calendar-alarm-dialog": {
      items: [{ name: "one", time: "23, apr, 2017" }, { name: "two", time: "23, apr, 2017" }],
      source: "dialog-message"
    },
    "event-dialog": {
      basicInfo: {
        title: "New Event",
        location: "",
        itemCategory: "",
        itemCalendar: "HOME"
      },
      timeInfo: {
        allDayEvent: false,
        startTime: "",
        endTime: ""
      },
      alarmReminderInfo: {
        repeatSetting: "NOT_REPEAT",
        reminderSetting: "NO_REMINDER"
      },
      otherInfo: {
        description: "",
        attachment: [],
        attendees: [],
        notifyAttendees: false,
        separateInvitationPerAttendee: false,
        disallowCounter: false
      },
      source: "dialog-message"
    },
    "task-dialog": {
      basicInfo: {
        title: "New Task",
        location: "",
        itemCategory: "",
        itemCalendar: "HOME"
      },
      timeInfo: {
        allDayEvent: false,
        startTime: "",
        dueTime: "",
        isStartTimeActive: false,
        isDueTimeActive: false,
        todoStatus: "NOT_SPECIFIED",
        completionDate: "",
        completionStatus: 0
      },
      alarmReminderInfo: {
        repeatSetting: "NOT_REPEAT",
        reminderSetting: "NO_REMINDER"
      },
      otherInfo: {
        description: "",
        attachment: [],
        attendees: []
      },
      source: "dialog-message"
    }
  };

  // set the selected index to 0 on frequent reloads
  selectbox.selectedIndex = 0;

  const loadIframe = (dialogName, object) => {
    container.innerHTML = `
      <iframe src="../${dialogName}" frameborder="0"></iframe>
    `;

    dialog = document.querySelector("iframe").contentWindow;
    dialog.addEventListener("load", () => {
      passDataToIframe(dialogName, object);
    });
  };

  const componentFramer = e => {
    const component = selectbox.options[selectbox.selectedIndex].value;
    if (component) {
      textarea.value = JSON.stringify(DIALOG_STATES[component], null, 2);
    } else {
      textarea.value = "";
    }
  };

  const passDataToIframe = (name, obj) => {
    console.log("object", obj);
    postMessageInterval = setInterval(() => {
      dialog.postMessage(obj, `${window.location.origin}`);
    }, 250);
  };

  const msgHandler = e => {
    if (e.origin !== window.location.origin || !e.data || e.data.source !== "dialog-message") {
      return;
    }

    if (e.data.messageRecieved) {
      clearInterval(postMessageInterval);
    } else {
      console.log("%c Data from Dialog: Starts", "color: #333; font-size: 20px; font-weight: bold");
      console.log(e.data);
      console.log("%c Data from Dialog: Ends", "color: #333; font-size: 20px; font-weight: bold");
    }
  };

  handleFormSubmit = event => {
    const dialogName = selectbox.options[selectbox.selectedIndex].value;
    const object = textarea.value;

    pseudoWindow.classList.add("show");
    pseudoWindow.setAttribute("data-title", dialogName.replace(/-/g, " "));

    loadIframe(dialogName, JSON.parse(object));
    document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
    return false;
  };

  selectbox.addEventListener("change", componentFramer);

  window.addEventListener("message", msgHandler, false);
});
