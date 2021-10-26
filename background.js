chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  chrome.action.setIcon({
    path: request.newIconPath,
    tabId: sender.tab.id,
  });
});
