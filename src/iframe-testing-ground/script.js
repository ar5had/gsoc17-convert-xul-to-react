window.addEventListener("load", () => {
  let dialog;
  let postMessageInterval;
  const selectbox = document.getElementById("component-selector");
  const container = document.querySelector(".container");
  const textarea = document.querySelector("#ta");

  const DIALOG_STATES = {
    "calendar-properties-dialog": {
      general: {
        disabled: false,
        forceDisabled: false,
        autoEnabled: false,
        color: "#deadbf",
        name: "Calendar",
        uri: "moz-storage-calendar://",
        readOnly: true,
        supressAlarms: false,
        canRefresh: false,
        refreshInterval: 30,
        cache: {
          supported: false,
          enabled: false,
          always: false
        },
        capabilities: {
          alarms: {
            popup: {
              supported: true
            }
          }
        }
      },
      advanced: {
        disabled: true,
        forceDisabled: false,
        autoEnabled: false,
        color: "#deadbf",
        name: "ADV Calendar",
        uri: "moz-storage-calendar://",
        readOnly: true,
        supressAlarms: false,
        canRefresh: false,
        refreshInterval: 30,
        cache: {
          supported: false,
          enabled: false,
          always: false
        },
        capabilities: {
          alarms: {
            popup: {
              supported: true
            }
          }
        }
      }
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
      textarea.innerHTML = JSON.stringify(DIALOG_STATES[component], null, 2);
    } else {
      textarea.innerHTML = "";
    }
  };

  const passDataToIframe = (name, obj) => {
    postMessageInterval = setInterval(() => {
      dialog.postMessage(obj, `${window.location.origin}`);
    }, 250);
  };

  const msgHandler = e => {
    if (e.origin !== window.location.origin) {
      return;
    }

    if (JSON.parse(e.data).messageRecieved) {
      clearInterval(postMessageInterval);
    } else {
      console.log("%c Data from Dialog: Starts", "color: #333; font-size: 20px; font-weight: bold");
      console.log(`%c ${e.data}`, "color: #ED4CBC; font-size: 16px");
      console.log("%c Data from Dialog: Ends", "color: #333; font-size: 20px; font-weight: bold");
    }
  };

  handleFormSubmit = event => {
    const dialogName = selectbox.options[selectbox.selectedIndex].value;
    const object = textarea.value;
    loadIframe(dialogName, object);
    document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
    return false;
  };

  selectbox.addEventListener("change", componentFramer);

  window.addEventListener("message", msgHandler, false);
});
