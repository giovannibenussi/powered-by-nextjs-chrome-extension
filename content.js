const bodySourceCode = document.getElementsByTagName("html")[0].innerHTML;
const usesNextJS =
  bodySourceCode.includes('<div id="__next">') ||
  bodySourceCode.includes('id="__NEXT_DATA__"');

if (usesNextJS) {
  chrome.runtime.sendMessage({ newIconPath: "/images/nextjs.png" });
}
