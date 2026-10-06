self.addEventListener("push", (event) => {
  const options = {
    body: "Your push notification is working! 🎉",
    icon: "/icon.png",
    badge: "/badge.png",
  };

  event.waitUntil(
    self.registration.showNotification("Hello world!", options)
  );
});

