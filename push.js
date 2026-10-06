const push = require("web-push");

let vapidKeys = {
  publicKey:
    "BCPIo4TJHgTpodDTxqqnEwME9VuGrFHbogWhIzxkZC67QWI9jkuGYQkzT3enBpk89YuG5Z38G5SkWb9Emk8AVVc",
  privateKey: "LcMEz95C6_fjE0_QoDNiO0lzlXgBXo_hNnaWPLpVu2g",
};

push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

let sub = {
  "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABqxWCDsXOX8ZWm-aAu42f0LNTZnKxkitDgJad39Is997W52VMg1lIOuiGsut4a6DKkrZonP_aHyp5tcO0Oj8wsqktvcFEhzD1m7tUmo9WgsbH4ph5zU4a50qbB5-APZFfK0zC297IoatPpkXfaUtDiw5ISzbamLvFkexdDm2oUwoTSZ-0",
  "expirationTime":null,
  "keys": {
    "auth":"YcQPYHbgt8QoCMt7dEygbA",
    "p256dh":"BPVzBIRLay-Ld_5NGOB7VklTAZ54FW3s_DuAm42hPHcYD8QRSYuc3p3mKKOzcZXS7zlmsAmt8O6yVubQ8BGE_cM"
  }
};

push
  .sendNotification(sub, "test message")
  .then((response) => {
    console.log("Push sent:", response);
  })
  .catch((error) => {
    console.error("Push failed:", error.statusCode);
    console.error(error.body);
  });
