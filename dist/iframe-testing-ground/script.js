window.addEventListener("load", () => {
  let dialog;
  let postMessageInterval;
  const selectbox = document.getElementById("component-selector");
  const container = document.querySelector(".container");

  // set the selected index to 0 on frequent reloads
  selectbox.selectedIndex = 0;

  const componentFramer = e => {
    const component = selectbox.options[selectbox.selectedIndex].value;

    if (component === "NONE") {
      container.innerHTML = `
        <h3>
          Select component from the select box to test it out.
        </h3>
      `;
    } else {
      container.innerHTML = `
        <iframe src="../${component}" frameborder="0"></iframe>
      `;

      dialog = document.querySelector("iframe").contentWindow;
      dialog.addEventListener("load", () => {
        passDataToIframe(component);
      });
    }
  };

  const passDataToIframe = name => {
    let obj;
    switch (name) {
      case "calendar-properties-dialog":
        obj = {
          general: {
            calendarSwitch: true,
            name: "Calendar 121",
            color: "#666666",
            location: "moz-storage-calendar://",
            emails: ["email@gmail.com", "asd@gmail.com", "another one"],
            selectedEmailIndex: 2,
            readOnly: true,
            showReminders: true
          },
          advanced: {
            calendarSwitch: true,
            name: "Advanced Calendar",
            color: "#220000",
            location: "moz-storage-calendar://",
            emails: ["advemail@gmail.com", "advasd@gmail.com", "another one"],
            selectedEmailIndex: 0,
            readOnly: true,
            showReminders: true
          }
        };

        postMessageInterval = setInterval(() => {
          dialog.postMessage(JSON.stringify(obj), `${window.location.origin}/${name}`);
        }, 100);

        break;
      default:
        console.log("Dialog Not Found!");
        break;
    }
  };

  const msgHandler = e => {
    if (e.origin !== window.location.origin) {
      return;
    }

    if (JSON.parse(e.data).dialogReady) {
      clearInterval(postMessageInterval);
    } else {
      console.log("%c Data from Dialog: Starts", "color: #333; font-size: 20px; font-weight: bold");
      console.log(`%c ${e.data}`, "color: #ED4CBC; font-size: 16px");
      console.log("%c Data from Dialog: Ends", "color: #333; font-size: 20px; font-weight: bold");
    }
  };

  selectbox.addEventListener("change", componentFramer);

  window.addEventListener("message", msgHandler, false);
});