function App() {

const handleNotification = () => {

    // Check support
    if (!("Notification" in window)) {
      alert("Browser does not support notifications");
      return;
    }

    // If already allowed
    if (Notification.permission === "granted") {
      new Notification("Hello 👋", {
        body: "This is your custom notification!",
      });
    }

    // If not denied, ask permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Permission Granted 🎉", {
            body: "Now you will receive notifications!",
          });
        }
      });
    }
  };


  return (
    <div style={{ padding: "40px" }}>
      <h1>Notification Demo</h1>
         <button
  onClick={handleNotification}
  style={{
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
    background: "black",
    color: "white",
    borderRadius: "8px",
    border: "none"
  }}
>
  🔔 Show Notification
</button>
    </div>
  );
}

export default App;