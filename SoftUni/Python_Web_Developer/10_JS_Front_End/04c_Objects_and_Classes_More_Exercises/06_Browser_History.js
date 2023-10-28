function browserHistory(object, array) {
  let modifiedObj = Object.assign(object);
  const browserName = object["Browser Name"];
  let opened = object["Open Tabs"];
  let recentlyClosed = object["Recently Closed"];
  let browserLogs = object["Browser Logs"];

  for (const info of array) {
    const [command, app] = info.split(" ");

    if (info === "Clear History and Cache") {
      browserLogs = [];
      opened = [];
      recentlyClosed = [];
    } else if (command === "Open") {
      opened.push(app);
      browserLogs.push(info);
    } else if (command === "Close") {
      if (opened.includes(app)) {
        let index = opened.indexOf(app);
        opened.splice(index, 1);
        recentlyClosed.push(app);
        browserLogs.push(info);
      }
    }
  }

  console.log(browserName);
  console.log(`Open Tabs: ${opened.join(", ")}`);
  console.log(`Recently Closed: ${recentlyClosed.join(", ")}`);
  console.log(`Browser Logs: ${browserLogs.join(", ")}`);
}
