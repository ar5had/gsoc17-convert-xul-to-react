window.addEventListener("load", () => {
  let dialog;

  const selectbox = document.getElementById("component-selector");
  const container = document.querySelector(".container");

  // set the selected index to 0 on frequent reloads
  selectbox.selectedIndex = 0;

  const componentFramer = e => {
    const component =
      selectbox.options[selectbox.selectedIndex].value;

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
            email: [
              "email@gmail.com",
            ],
            readOnly: true,
            showReminders: true,
          },
        };

        dialog.postMessage(
          JSON.stringify(obj),
          `${window.location.origin}/${name}`
        );

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
    console.log("%c Data from Dialog: Starts",
      "color: #333; font-size: 20px; font-weight: bold");
    console.log(`%c ${e.data}`,
      "color: #ED4CBC; font-size: 16px");
    console.log("%c Data from Dialog: Ends",
      "color: #333; font-size: 20px; font-weight: bold");
  };

  selectbox.addEventListener("change", componentFramer);

  window.addEventListener("message", msgHandler, false);
});
