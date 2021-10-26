const bodySourceCode = document.getElementsByTagName("html")[0].innerHTML;
const usesNextJS =
  bodySourceCode.includes('<div id="__next">') ||
  bodySourceCode.includes('id="__NEXT_DATA__"');

let contentElement = document.getElementById("content");
if (usesNextJS) {
  contentElement.innerHTML = "This website uses Next.js!";
} else {
  contentElement.innerHTML = "This website doesn't uses Next.js!";
}
