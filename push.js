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

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABqxWftUI73jRErP7Mjuuky7ImrG7dr_ZnGER6R6usY_Bav0s3nyUuUwKnHpkbxMAaoF-J6w9Tm6Fi7KCezAiPx8IMeeO0E4pRUpDT3hNNNrGi3MWtfrdJuCJHZPouvoo7LKiC-EhNsSnxaBRejzKqhIMtvst3i6utMZ5Aw8BefkJQtxyU","expirationTime":null,"keys":{"auth":"keFpvzoq4HoPIvr7KaKSNA","p256dh":"BE91P8kSATQ8PrmUQrGPMl0RI_VvYasMYCw9OMBi3SJ8GHZYbPRzNI4Edrq2ON3tHHDSwKmEGC-q93LEQ3VW-S0"}};

push
  .sendNotification(sub, "test message")
  .then((response) => {
    console.log("Push sent:", response);
  })
  .catch((error) => {
    console.error("Push failed:", error.statusCode);
    console.error(error.body);
  });
