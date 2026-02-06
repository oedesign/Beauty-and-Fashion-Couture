(function () {
  const ALLOWED_KEY = "BFC2026PRIVATE";

  const params = new URLSearchParams(window.location.search);
  const key = params.get("key");

  if (key !== ALLOWED_KEY) {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:sans-serif;
        text-align:center;
      ">
        <div>
          <h2>Access Denied</h2>
          <p>This page is private.</p>
        </div>
      </div>
    `;
  }
})();

if (key === ALLOWED_KEY) {
  localStorage.setItem("bfc_private_access", "true");
}

localStorage.setItem("bfc_expiry", Date.now() + 86400000); // 24hrs
