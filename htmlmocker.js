console.log("script loaded");

let classList = ["hm-text"];

function generateRandomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

classList.forEach(function (kind) {
  document.querySelectorAll("." + kind).forEach(function (el) {
    let constraints = el.className
      .split(" ")
      .filter((x) => x.startsWith("hm-") && x != kind)
      .reduce((acc, c) => {
        acc[c.split("-")[1]] = c.split("-")[2];
        return acc;
      }, {});

    setInterval(function () {
      // Generate a random text / image source / list that respects the constraints but explores the
      // boundary conditions
      switch (kind) {
        case "hm-text":
          // Generate random text
          // TODO: Respect the specified constraints.size etc
          let min = Math.ceil(Number(constraints["size"].split("__")[0]));
          let max = Math.floor(Number(constraints["size"].split("__")[1]));

          // let samples = ["", "small text", "text \n\n with whitespace chars\t\ngoes here", "username with 😀 in it"];
          // random number between range Max and Min inclusive
          let length = Math.floor(Math.random() * (max + 1 - min)) + min;
          console.log(length);
          el.innerText = generateRandomString(length);

          break;

        default:
          console.log("Unknown HTML Mocker kind: " + kind);
      }
    }, 2000);
  });
});
