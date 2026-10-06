const push = require("web-push");

let vapidKeys = {
  publicKey:
    "BNKtHO8W2lqCij_P3jkZLl2Muheh5Q8aNlo2uQ1Vwl5CWdogPwUdsrdhBFoZcMxBpYbVGKpRkZN6wHGUdmQO9Rs",
  privateKey: "hK-zi2kbslQbd3TKdNYUnVyGlwKt-uwD2E4a_tOdFA8",
};

push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

let sub = {};
push.sendNotification(sub, "test message");
