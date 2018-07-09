import "common/sentry";

// Toggle between tests here
const test = "iframe";
// const test = "intercom";

// NOTE: The code below initializes Intercom, which crashes the renderer somehow
// disabling sentry or the code below resolves the issue.
if (test === "intercom") {
  let appId = "ynf64r7n";
  if (!window.Intercom) {
    (function(w, d, id, s, x) {
      function i() {
        i.c(arguments);
      }
      i.q = [];
      i.c = function(args) {
        i.q.push(args);
      };
      w.Intercom = i;
      s = d.createElement("script");
      s.async = 1;
      s.src = `https://widget.intercom.io/widget/${id}`;
      d.head.appendChild(s);
    })(window, document, appId);
  }

  window.intercomSettings = { app_id: appId };

  if (window.Intercom) window.Intercom("boot");
}

// NOTE: Just creating an iframe "just works"
if (test === "iframe") {
  const iframe = document.createElement("iframe");
  iframe.src = "https://example.com/";

  document.body.appendChild(iframe);
}
