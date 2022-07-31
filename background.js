chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes("next.westlaw.com")) {
    chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["./style-w.css"]
    });
  } else if (changeInfo.status === 'complete' && tab.url.includes("plus.lexis.com")) {
    chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["./style-l.css"]
    });
  }
});