document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("iframe-generator-form");
  const urlInput = document.getElementById("url-input");
  const widthInput = document.getElementById("width-input");
  const heightInput = document.getElementById("height-input");
  const iframeContainer = document.getElementById("iframe-container");
  const iframeCode = document.getElementById("iframe-code");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    generateIframe();
  });

  function generateIframe() {
    const url = urlInput.value;
    const width = widthInput.value;
    const height = heightInput.value;

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = width;
    iframe.height = height;
    iframe.style.border = "1px solid #ccc";

    iframeContainer.innerHTML = "";
    iframeContainer.appendChild(iframe);

    const iframeHTML = `<script src="passwordprotection.js"></script>
    <iframe id="iframe" src="${url}" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100vw; height: 100vh; border: none;"></iframe>`;
    iframeCode.value = iframeHTML;
  }
});
