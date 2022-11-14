let typing = "";

document.addEventListener(
  "keydown",
  function (event) {
    if (event.key === "Enter") {
      // send to server and do stuff
      console.log(typing);
      typing = "";
      return;
    }
    typing += event.key;
  },
  true
);
