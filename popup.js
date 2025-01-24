document.getElementById("convert").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject the content script
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});

// Add message listener
chrome.runtime.onMessage.addListener((message) => {
  if (message.markdown) {
    navigator.clipboard.writeText(message.markdown).then(() => {
      alert("Markdown table copied to clipboard!");
    });
  } else if (message.error) {
    alert(message.error);
  }
});
