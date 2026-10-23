# Slack · UX evaluations

Two independent educational studies of Slack, by Varun Kumar. Not affiliated with Slack.

## 1. Channel creation (Channel Flow Lab)

One flow, create a channel, evaluated on Slack desktop/web and Slack for iOS (19 Oct 2026). Evidence: 28 real screenshots with names changed, plus the Slack Help Center. Channel-creation screens were not captured, so those are recreated and labelled as such.

| File | What |
|---|---|
| [`channel-flow-lab/index.html`](./channel-flow-lab/index.html) | Interactive case study page |
| [`channel-flow-lab/Slack_Channel_Creation_UX_7_Pages.pdf`](./channel-flow-lab/Slack_Channel_Creation_UX_7_Pages.pdf) | 7-page deck |
| [`channel-flow-lab/Slack_UX_Detailed_Report_37_Pages.pdf`](./channel-flow-lab/Slack_UX_Detailed_Report_37_Pages.pdf) | 37-page detailed report |

Claude artifact: [Slack Channel Flow Lab](https://claude.ai/artifact/5C6J3f9tkuNsRa1DzTHA9W)

Sample findings: several differently named doors to create a channel, an "Add channel" button that sits below the fold on iOS, a public/private choice that doesn't say who can read, and no step count across the creation screens.

## 2. Onboarding (Slack Onboarding UX Audit)

Sign-up to first message: 8 issues mapped to Nielsen's heuristics and UX laws, each with a redesign. The screens are annotated wireframes that recreate current layouts, so confirm each observation against the live product.

| File | What |
|---|---|
| [`onboarding-audit/index.html`](./onboarding-audit/index.html) | Issue explorer, UX laws, redesign (needs the files below) |
| [`onboarding-audit/prototype.html`](./onboarding-audit/prototype.html) | Interactive mobile prototype, current and redesigned flows |
| `onboarding-audit/data.js`, `wire.js`, `wire.css` | Data and wireframe components used by the pages |

Claude artifact: [Slack Onboarding UX Audit](https://claude.ai/artifact/6opkweHAf8ZHoMTcuYQWQQ)

Open `index.html` from the same folder as the three support files, or the page will not render.
