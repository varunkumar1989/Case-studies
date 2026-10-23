/* Illustrative wireframes of Slack's current onboarding screens (cur) and the proposed redesign (new). */
(function () {
  const pin = (n, l, t) => `<b class="pin" style="left:${l}px;top:${t}px">${n}</b>`;
  const ok = (l, t) => `<b class="ok" style="left:${l}px;top:${t}px">✓</b>`;
  const web = (inner, url) => `<div class="wf web"><div class="chrome"><i></i><i></i><i></i><span>${url || "slack.com"}</span></div>${inner}</div>`;
  const mob = (inner) => `<div class="wf mob"><div class="notch"></div>${inner}</div>`;
  const boxes = (n) => `<div class="boxes">${[0, 1, 2, 3, 4, 5].map(i => `<i class="${i < n ? "f" : ""}"></i>`).join("")}</div>`;

  const S = {
    signin: {
      label: "Sign-in landing", plat: "Web",
      cur: () => web(`<div class="c"><div class="h">Sign in to Slack</div>
        <div class="btn">Continue with Google</div><div class="btn">Continue with Apple</div><div class="btn">Sign in with SSO</div>
        <div class="or">OR</div><div class="inp">name@work-email.com</div><div class="btn">Sign in with email</div>
        <div class="row"><div class="lnk">Create a new workspace</div><div class="lnk">Find my workspace</div></div></div>${pin(1, 44, 56)}${pin(3, 40, 153)}`),
      new: () => web(`<div class="c"><div class="h">Welcome to Slack</div><div class="sub">Enter your work email</div>
        <div class="inp">name@work-email.com</div><div class="btn pri big">Continue</div><div class="or">or continue with</div>
        <div class="row"><div class="btn">Google</div><div class="btn">Apple</div><div class="btn">SSO</div></div>
        <div class="lnk">New here? Create a workspace</div></div>${ok(44, 58)}${ok(44, 86)}`)
    },
    code: {
      label: "Email code", plat: "Mobile",
      cur: () => mob(`<div class="c"><div class="h">Check your email</div><div class="sub">We sent a 6-digit code</div>${boxes(0)}
        <div class="lnk tiny">Didn't get a code?</div><div class="sk" style="margin-top:14px;width:70%;align-self:center"></div><div class="sk" style="width:55%;align-self:center"></div></div>${pin(2, 98, 58)}`),
      new: () => mob(`<div class="c"><div class="h">Enter your code</div><div class="sub">Sent to a***@acme.com · Edit</div>${boxes(2)}
        <div class="sub">Expires in 10:00</div><div class="btn pri">Open mail app</div><div class="lnk">Resend in 0:30</div></div>${ok(98, 40)}${ok(98, 100)}`)
    },
    wizard: {
      label: "Setup wizard", plat: "Web",
      cur: () => web(`<div class="c"><div class="h">What's your team called?</div><div class="sub">This is the name of your workspace</div>
        <div class="inp">Company or team name</div><div class="btn pri">Next</div><div class="lnk tiny">Skip</div></div>${pin(4, 188, 100)}`),
      new: () => web(`<div class="c"><div class="step">Step 1 of 3 <i class="on"></i><i></i><i></i></div><div class="h">What's your team called?</div><div class="sub">Appears in your team's Slack address</div>
        <div class="inp" style="color:#1f1a24">Acme</div><div class="row"><div class="btn">Skip</div><div class="btn pri">Next</div></div></div>${ok(44, 24)}${ok(44, 118)}`)
    },
    home: {
      label: "Land in workspace", plat: "Web",
      cur: () => web(`<div class="app"><div class="rail"><i class="a"></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="side"><b>Acme</b><u>Home</u><u>DMs</u><u>Activity</u><u>Files</u><u>Later</u><u>More</u><b>Channels</b><u># general</u><u># random</u><b>Apps</b><b>Huddles</b></div>
        <div class="main"><div class="sk d" style="width:35%"></div><div class="sk" style="width:80%"></div><div class="sk" style="width:60%"></div>
        <div class="composer"><div class="sk" style="width:50%"></div></div></div></div>${pin(6, 16, 20)}${pin(5, 100, 44)}`),
      new: () => web(`<div class="app"><div class="rail lab"><i class="a"></i><i></i><i></i></div>
        <div class="side"><b>Acme</b><b>Channels</b><u># general</u><u># random</u><b>Direct messages</b><u>Slackbot</u></div>
        <div class="main"><div class="card"><b style="color:#1f1a24">Get started · 1 of 3</b>
        <div class="chk"><i class="d"></i>Create your team</div><div class="chk"><i></i>Say hello in #general</div><div class="chk"><i></i>Invite a teammate</div></div>
        <div class="composer"><div class="hint">Say hello here ↓</div><div class="sk" style="width:50%"></div></div></div></div>${ok(110, 24)}${ok(280, 170)}`)
    },
    composer: {
      label: "First message", plat: "Mobile",
      cur: () => mob(`<div class="c"><div class="h" style="text-align:left"># general</div><div class="sk d" style="width:60%"></div><div class="sk" style="width:85%"></div><div class="sk" style="width:45%"></div></div>
        <div class="composer" style="left:5px;right:5px;bottom:6px"><div class="sk" style="width:60%;height:6px"></div><div class="ic"><i></i><i></i><i></i><i></i><i></i><span class="send"></span></div></div>${pin(7, 98, 184)}`),
      new: () => mob(`<div class="c"><div class="h" style="text-align:left"># general</div><div class="sk d" style="width:60%"></div><div class="sk" style="width:85%"></div></div>
        <div class="toast" style="bottom:66px"><span>Message sent</span><b>Undo</b></div>
        <div class="composer" style="left:5px;right:5px;bottom:6px"><div class="hint">Posting to #general · 240 people</div><div class="sk" style="width:60%;height:6px"></div><div class="ic"><i></i><i></i><span class="btn pri" style="margin-left:auto;height:16px;width:40px">Send</span></div></div>${ok(98, 150)}${ok(98, 200)}`)
    },
    notif: {
      label: "Notifications", plat: "Mobile",
      cur: () => mob(`<div class="c"><div class="sk d" style="width:50%"></div><div class="sk" style="width:80%"></div></div>
        <div class="dlg" style="margin-top:20px"><b style="color:#1f1a24;font-size:8px">“Slack” would like to send you notifications</b><div class="row"><div class="btn">Don't allow</div><div class="btn">Allow</div></div></div>${pin(8, 98, 36)}`),
      new: () => mob(`<div class="c" style="gap:4px"><div class="h">Stay in the loop</div>
        <div class="opt on"><b>Mentions &amp; DMs</b>Recommended</div><div class="opt"><b>Everything</b>Every new message</div><div class="opt"><b>Nothing</b>Check manually</div>
        <div class="btn pri">Continue</div></div>${ok(98, 34)}${ok(98, 62)}`)
    }
  };

  window.WF = (screen, variant) => S[screen][variant]();
  window.WF_LABEL = (screen) => S[screen].label;
  window.WF_PLAT = (screen) => S[screen].plat;
})();
