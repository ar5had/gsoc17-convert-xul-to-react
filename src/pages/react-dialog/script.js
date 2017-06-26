ReactDOM.render(
  <Dialog
    buttons="accept,cancel, extra1,extra2,help, disclosure, soemramd"
    ondialogdisclosure={() => console.log("disclosure")}
    ondialoghelp={() => console.log("help")}
    ondialogextra1={() => console.log("Extra1")}
    ondialogextra2={() => console.log("Extra2")}
    ondialogcancel={() => console.log("props:cancel")}
    ondialogaccept={() => console.log("props:accept")}
    buttonaccesskeyextra1="F"
    buttonaccesskeyextra2="S"
    buttonaccesskeyaccept="O"
    buttonaccesskeycancel="C"
    buttonlabelextra1="Fancy"
    buttonlabelextra2="Super Fancy"
    defaultButton="extra1"
  />,
  document.getElementById("root")
);
