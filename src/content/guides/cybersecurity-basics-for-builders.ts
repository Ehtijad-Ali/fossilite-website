import type { Guide } from "../types";

export const guide: Guide = {
  slug: "cybersecurity-basics-for-builders",
  seoTitle: "Cybersecurity Basics Every Builder Should Know",
  metaDescription:
    "The defensive fundamentals that actually prevent breaches — credentials, access, patching and backups — based on how attacks really begin.",
  title: "Cybersecurity Basics for Builders",
  keywords: [
    "cybersecurity basics",
    "how do data breaches happen",
    "password security",
    "multi-factor authentication",
    "phishing prevention",
    "small business security",
  ],
  category: "cybersecurity-basics",
  level: "Beginner",
  updated: "2026-08-04",
  author: "Fossilite Engineering",
  readingTime: 12,

  intro: [
    "Security is presented to most people as an intimidating specialism full of exotic threats, which has the unfortunate effect of making the boring, effective measures feel inadequate. If the picture in your head is a hooded figure defeating encryption, then turning on multi-factor authentication feels like bringing an umbrella to a war.",
    "The evidence points somewhere far more mundane. Attacks overwhelmingly begin with a stolen password, a person clicking something, or a system nobody patched. Not clever cryptography — credentials and human beings. That's genuinely good news, because it means the highest-value defences are cheap, boring, and available to you this afternoon.",
    "This guide is the defensive fundamentals for people who build and run things: developers, founders, freelancers, anyone responsible for a system or a company's data. It is deliberately not about becoming a security specialist. It's about closing the doors that attacks actually come through.",
  ],

  whyItMatters: [
    "The base rate is the argument. If most breaches start with credentials and people rather than sophisticated technical exploits, then most of your protection comes from a small number of unglamorous controls. You do not need to defend against everything to substantially reduce your risk — you need to close the common paths.",
    "For a small organisation the stakes are also disproportionate. A large company absorbs an incident; a small one can be ended by one. Customer data loss, a drained account, ransomware on the only copy of your work — these are survivable with preparation and frequently terminal without it.",
    "There's a trust dimension that arrives sooner than most founders expect. The first serious customer, the first enterprise deal, the first regulated partner will ask what you do about access control, backups and incident response. Having sensible answers is a commercial asset; assembling them under deadline during a security questionnaire is not.",
  ],

  coreConcepts: [
    {
      term: "Credentials are the front door",
      explain:
        "The most common way into a system is a valid username and password that belongs to someone else — reused from another breach, phished, or guessed. No exploit required, and to the system it looks like a legitimate login.",
      detail:
        "This is why password hygiene and multi-factor authentication are not beginner advice to graduate from. They defend the path attacks most often take.",
    },
    {
      term: "Multi-factor authentication is the single highest-value control",
      explain:
        "MFA requires something beyond the password — a code, an app prompt, a hardware key. A stolen password alone stops being sufficient.",
      detail:
        "Not all factors are equal. App-based codes and hardware keys are considerably stronger than SMS, which is vulnerable to SIM-swapping. Hardware keys additionally resist phishing, because the key checks the site's identity rather than trusting the user's judgement.",
    },
    {
      term: "Password reuse converts one breach into many",
      explain:
        "When a service is breached, those credentials get tried automatically against other services. Reuse means someone else's security failure becomes yours.",
      detail:
        "A password manager solves this properly, because it makes unique passwords easier than reused ones. Any approach depending on you remembering dozens of distinct passwords will fail, and the failure will be silent.",
    },
    {
      term: "Least privilege",
      explain:
        "Every account, key and service should have the minimum access needed for its job. When something is compromised, the damage is bounded by what that identity could reach.",
      detail:
        "The common violation is convenience: admin rights for everyone, one API key with full permissions used everywhere, and accounts for departed staff still active. Each turns a small compromise into a large one.",
    },
    {
      term: "Patching closes known doors",
      explain:
        "Most exploited vulnerabilities are already public and already fixed. Attackers scan for systems that haven't applied the update, because that's cheaper than discovering something new.",
      detail:
        "The window matters more than perfection. Applying security updates within days rather than months removes the overwhelming majority of this exposure.",
    },
    {
      term: "Phishing targets people, not software",
      explain:
        "A convincing message that produces a click, a credential, or an approved payment bypasses your technical controls entirely, because a legitimate user performed the action.",
      detail:
        "Modern phishing is well-written and contextual, often referencing real projects and real colleagues. 'Look for spelling mistakes' is obsolete advice; verifying through a separate channel is not.",
    },
    {
      term: "Backups only count if you've restored from them",
      explain:
        "An untested backup is a belief, not a control. Ransomware and accidental deletion are both survivable with working restores and catastrophic without them.",
      detail:
        "Keep at least one copy that the compromised system cannot reach or overwrite. Backups accessible from the machine being encrypted get encrypted too, which is a discovery people make at the worst moment.",
    },
    {
      term: "Secrets don't belong in code",
      explain:
        "API keys, passwords and tokens committed to a repository stay in its history even after removal, and public repositories are scanned continuously by automated tools.",
      detail:
        "Use environment variables or a secret manager, add secret scanning to your pipeline, and treat any exposed key as compromised — rotate it rather than assessing whether anyone noticed.",
    },
    {
      term: "Encryption in transit and at rest",
      explain:
        "In transit means HTTPS everywhere, so data can't be read as it crosses networks. At rest means stored data is encrypted, so a stolen disk or database file isn't immediately readable.",
      detail:
        "Both are largely solved problems now — free certificates, encryption on by default in most managed databases. The work is verifying it's actually enabled rather than assumed.",
    },
    {
      term: "Assume you'll have an incident",
      explain:
        "Security is about reducing likelihood and limiting damage, not achieving certainty. Planning for the incident is part of the discipline, not an admission of failure.",
      detail:
        "A one-page plan — who to call, how to isolate a system, where the backups are, what you must tell customers and when — is worth far more than it costs, and is impossible to write calmly during an incident.",
    },
  ],

  learningPath: [
    {
      title: "Fix your own credentials first",
      body: "Install a password manager and migrate your accounts, prioritising email, banking, domain registrar and cloud provider. Email comes first because it can reset everything else. Enable MFA on each as you go.",
      effort: "3–5 hours",
      outcome: "Unique passwords and MFA on every account that matters.",
    },
    {
      title: "Inventory what you actually have",
      body: "List every system holding data or granting access: cloud accounts, repositories, SaaS tools, servers, databases, third-party integrations. Note who has access to each. Most people find something they'd forgotten.",
      effort: "2–4 hours",
      outcome: "A written inventory — the thing every later control depends on.",
    },
    {
      title: "Audit and cut access",
      body: "For each system, remove accounts for people who've left, downgrade admin rights that aren't needed, and delete API keys nobody can account for. Then set a calendar reminder to repeat quarterly.",
      effort: "3–5 hours",
      outcome: "Access matching current reality rather than accumulated history.",
    },
    {
      title: "Get patching under control",
      body: "Enable automatic security updates where you safely can. For dependencies, turn on automated vulnerability alerts in your repository and commit to a response window in days.",
      effort: "3–4 hours",
      outcome: "A defined and short window between a fix existing and you applying it.",
    },
    {
      title: "Get secrets out of your code",
      body: "Scan your repositories for committed credentials — including history. Rotate anything found rather than just deleting it. Move to environment variables or a secret manager and enable scanning going forward.",
      effort: "4–8 hours",
      outcome: "No live secrets in version control, and a check that stops new ones.",
    },
    {
      title: "Test a restore",
      body: "Not verify a backup ran — actually restore it somewhere and confirm the data is usable and complete. Time it. Then confirm at least one copy is beyond reach of the systems it protects.",
      effort: "3–6 hours",
      outcome: "A restore you have personally performed, with a known duration.",
    },
    {
      title: "Write the one-page incident plan",
      body: "Who's in charge, who to contact, how to isolate a system, where backups live, what your legal notification obligations are and their deadlines. Keep a copy somewhere accessible if your systems are down.",
      effort: "2–3 hours",
      outcome: "A plan you could follow at 3am, stored offline.",
    },
    {
      title: "Brief the people around you",
      body: "Cover the realistic scenarios: an urgent payment request from a senior colleague, a login page reached via an email link, an unexpected MFA prompt. Establish that verifying through a separate channel is always welcome and never an insult.",
      effort: "2 hours",
      outcome: "A team that verifies out of band without feeling awkward about it.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Measuring how breaches actually begin, at scale.",
      walkthrough:
        "Verizon's annual Data Breach Investigations Report analyses thousands of real incidents and breaches to identify how attackers gained initial access. It's the closest thing the field has to a base-rate reference, and it consistently contradicts the popular picture of how attacks work.",
      result:
        "In the 2025 report, the human element — errors, social engineering and misuse — featured in 60% of breaches. 22% began with credential abuse, and 16% with phishing. Among Basic Web Application attacks, 88% involved stolen credentials. Read those numbers as a priority list: unique passwords, MFA everywhere, and people who feel comfortable verifying an odd request will address a large share of realistic risk before you buy a single security product.",
      source: {
        label: "Verizon 2025 Data Breach Investigations Report",
        url: "https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf",
      },
    },
    {
      kind: "illustration",
      scenario: "The backup that was encrypted along with everything else.",
      walkthrough:
        "A pattern worth checking against your own setup. Backups run nightly to a network drive that the main server mounts permanently, so restores are convenient. Ransomware reaches the server. Because the backup location is a mounted, writable path from that machine, it is encrypted too. Every backup ran successfully, every night, and none of them can be restored.",
      result:
        "The requirement is not more frequent backups but unreachable ones: at least one copy the production system cannot write to — immutable object storage, an offline copy, or a separate account with its own credentials. And the only way to know a restore works is to have performed one.",
    },
    {
      kind: "illustration",
      scenario: "The urgent payment request that came from the right name.",
      walkthrough:
        "A shape that keeps working because it exploits process rather than software. A message arrives from a senior person's name, referencing a real project, explaining that a supplier's bank details have changed and the payment is urgent and confidential. Nothing technical has been compromised. The message is simply well-informed and well-timed, and the urgency and confidentiality are there specifically to prevent verification.",
      result:
        "The control is procedural: any change to payment details is verified by contacting the counterparty on a number you already held, never one supplied in the message. Make it a rule that applies regardless of seniority, so that verifying is compliance rather than suspicion — the social cost of checking is the actual vulnerability.",
    },
  ],

  mistakes: [
    {
      mistake: "Assuming you're too small to be a target",
      why: "Most attacks aren't targeted. Automated scanning looks for exposed services, known vulnerabilities and reused credentials indiscriminately. Being small affects your ability to absorb an incident, not your probability of one.",
      fix: "Apply the basics regardless of size. They're cheap, and they're what automated attacks are looking for the absence of.",
    },
    {
      mistake: "Using SMS as your second factor and considering it done",
      why: "SMS is interceptable and vulnerable to SIM-swap attacks. It's meaningfully better than nothing and meaningfully worse than the alternatives.",
      fix: "Use an authenticator app as the default, and hardware keys for accounts that could destroy the business — email, cloud provider, domain registrar, banking.",
    },
    {
      mistake: "Granting admin rights because it's easier",
      why: "Every over-privileged account converts a minor compromise into a total one. The convenience is real and it's borrowed against the worst day.",
      fix: "Grant the minimum access needed and review quarterly. Use separate accounts for administrative work rather than running everything as admin.",
    },
    {
      mistake: "Backing up without testing a restore",
      why: "Backup jobs report success while producing unusable output — incomplete data, wrong encryption keys, missing databases. You find out during the incident.",
      fix: "Perform a real restore on a schedule and time it. An untested backup is an assumption, not a control.",
    },
    {
      mistake: "Committing secrets and deleting them later",
      why: "Git history retains them, and public repositories are scanned by automated tools within minutes. Removing the file does not remove the exposure.",
      fix: "Treat any committed secret as compromised and rotate it immediately. Enable secret scanning so the next one is caught before it merges.",
    },
    {
      mistake: "Training people to look for bad spelling",
      why: "Modern phishing is well-written, contextual and often references genuine internal detail. Advice based on obvious tells fails against anything competent and creates false confidence.",
      fix: "Train on process instead: verify unusual requests through a separate channel, always, regardless of who appears to be asking.",
    },
    {
      mistake: "Punishing people who report mistakes",
      why: "The most expensive outcome is someone clicking a link and then saying nothing for a fortnight because they're afraid. Detection time drives damage more than the initial click does.",
      fix: "Make reporting explicitly safe and thank people for it publicly, including when it turns out to be nothing.",
    },
  ],

  bestPractices: [
    "Protect email first. It can reset the password on nearly everything else, which makes it the highest-value account you own.",
    "Use a password manager and generate unique credentials for every service. Uniqueness matters more than complexity.",
    "Turn on MFA everywhere it's offered, with hardware keys for the accounts that could end the business.",
    "Maintain a written inventory of systems, data and access. You cannot protect what you haven't listed.",
    "Review access quarterly and remove departed staff and unexplained keys the same week they're identified.",
    "Apply security updates in days, not months, and enable automated dependency alerts.",
    "Keep one backup copy that production systems cannot write to, and test a restore on a schedule.",
    "Verify any payment or credential change out of band, on a contact detail you already held.",
    "Write the incident plan before you need it and store a copy where a failed system can't take it with them.",
  ],

  proTips: [
    "Search your own repositories for committed secrets today, including history. Most teams who do this for the first time find at least one live credential, and finding it yourself is far better than the alternative.",
    "Check which services can reset your email password, and which your email can reset. Mapping that dependency graph usually reveals one account whose compromise cascades to everything.",
    "Set your incident plan and key contacts on paper or in a separate system. Storing them only in the systems that might be down is a common and entirely avoidable mistake.",
    "When you offboard someone, work from the access inventory rather than memory. Forgotten SaaS accounts and personal API keys are where lingering access lives.",
    "Ask your team what would happen if they got a suspicious request from you. If the honest answer is 'they'd probably just do it', that's your most urgent gap and it costs nothing to fix.",
    "Rotate any secret you're unsure about rather than investigating whether it leaked. Rotation is cheap; the investigation is expensive and rarely conclusive.",
  ],

  businessApplications: [
    "Customer trust and sales enablement: sensible answers on access control, encryption and backups increasingly gate enterprise deals.",
    "Business continuity: tested restores and a written plan turn a potential closure into a bad week.",
    "Regulatory compliance: most data protection regimes require appropriate technical measures and breach notification within tight deadlines, which is impossible to organise from a standing start.",
    "Insurance: cyber policies increasingly require MFA and tested backups as conditions of cover.",
    "Supplier assurance: applying the same questions to your vendors, since their compromise becomes your incident.",
    "Onboarding and offboarding hygiene, which is where access quietly accumulates and lingers.",
  ],

  lifeApplications: [
    "Your personal accounts face the same attacks with none of the corporate protection. Email, banking and cloud storage deserve the strongest factor available.",
    "Family and friends who are less technical benefit enormously from you setting up a password manager and MFA for them once.",
    "Recognising manipulation techniques generally — urgency, authority, secrecy and isolation are the levers in social engineering and in most fraud.",
    "Protecting irreplaceable personal data, particularly photographs, with a backup copy that isn't in the same place or the same account.",
    "Understanding what you agree to when you grant an app access to your accounts, which is a permission-scope question exactly like least privilege.",
  ],

  exercises: [
    {
      title: "The credential sweep",
      brief:
        "Migrate every account you use to a password manager with unique passwords, starting with email, domain registrar, cloud and banking. Enable the strongest available second factor on each.",
      success: "No reused passwords on any account that matters, MFA on all of them.",
      time: "3–5 hours",
    },
    {
      title: "Build the access inventory",
      brief:
        "List every system, what data it holds, and who has access. Mark anything where you can't identify why access exists.",
      success: "A complete list with at least one unexplained access identified.",
      time: "2–3 hours",
    },
    {
      title: "Hunt your own secrets",
      brief:
        "Scan your repositories including history for credentials. Rotate anything found. Enable secret scanning going forward.",
      success: "A clean scan, and any exposed key rotated rather than merely deleted.",
      time: "2–4 hours",
    },
    {
      title: "Do a real restore",
      brief:
        "Restore a backup to a separate environment and verify the data is complete and usable. Record how long it took and what you'd have lost.",
      success: "A completed restore with a documented recovery time.",
      time: "3–5 hours",
    },
    {
      title: "The out-of-band drill",
      brief:
        "Agree a verification rule for payment and credential changes. Then test it — have someone send a plausible request and see what happens.",
      success: "The request gets verified through a separate channel without awkwardness.",
      time: "2 hours",
    },
  ],

  checklist: [
    "Every account has a unique password from a password manager",
    "MFA is enabled everywhere available, with hardware keys on critical accounts",
    "Email is protected with the strongest factor I have",
    "I have a written inventory of systems, data and who has access",
    "Access is reviewed quarterly and departed staff are removed promptly",
    "Security updates are applied within days and dependency alerts are enabled",
    "No live secrets exist in version control, and scanning is on",
    "HTTPS everywhere, and encryption at rest is verified rather than assumed",
    "One backup copy is unreachable from the systems it protects",
    "I have personally performed a restore and know how long it takes",
    "A one-page incident plan exists and is stored where a failed system can't take it",
    "People know to verify unusual requests out of band and won't be punished for reporting",
  ],

  faqs: [
    {
      q: "What's the single most valuable thing I can do?",
      a: "Enable multi-factor authentication on your email, then everywhere else. Credentials are the most common initial access route, and MFA is what stops a stolen password from being sufficient on its own.",
    },
    {
      q: "Are password managers safe? Isn't that one basket?",
      a: "Yes, and the alternative is worse. Without one, people reuse passwords, and reuse converts any other service's breach into yours. A reputable manager protected by a strong master password and MFA is a substantial net improvement.",
    },
    {
      q: "How often should passwords be changed?",
      a: "Forced periodic rotation is no longer recommended — it drives predictable variations and reuse. Change a password when there's a reason: a suspected compromise, a breach notification, or someone with access leaving.",
    },
    {
      q: "Do I need a security specialist?",
      a: "Not to implement the fundamentals in this guide, which are the highest-value work. Bring in specialists when you handle regulated data, when a customer requires certification, or after an incident.",
    },
    {
      q: "What should I do if I think we've been breached?",
      a: "Follow your written plan. Broadly: preserve evidence rather than wiping, isolate affected systems, rotate credentials, and check your legal notification obligations — several regimes impose deadlines measured in hours.",
    },
    {
      q: "Is the cloud less secure than my own server?",
      a: "Usually more secure for the underlying infrastructure, which major providers maintain better than most organisations can. The risk shifts to configuration — public storage buckets, over-permissive keys, unmanaged access — which is entirely yours.",
    },
  ],

  tools: [
    { name: "1Password / Bitwarden", what: "Password managers with team sharing. Bitwarden has a capable free tier.", cost: "Freemium" },
    { name: "YubiKey", what: "Hardware security keys. Phishing-resistant because the key verifies the site rather than trusting the user.", cost: "Paid", url: "https://www.yubico.com" },
    { name: "Have I Been Pwned", what: "Check whether your accounts appear in known breaches, and get notified of future ones.", cost: "Free", url: "https://haveibeenpwned.com" },
    { name: "gitleaks / GitHub secret scanning", what: "Finds credentials committed to repositories, including history.", cost: "Free", url: "https://github.com/gitleaks/gitleaks" },
    { name: "Dependabot / Renovate", what: "Automated alerts and pull requests for vulnerable dependencies.", cost: "Free" },
    { name: "Let's Encrypt", what: "Free TLS certificates. There is no remaining excuse for serving anything over plain HTTP.", cost: "Free", url: "https://letsencrypt.org" },
  ],

  resources: [
    { title: "Verizon Data Breach Investigations Report", kind: "Docs", note: "Published annually and the best available base-rate reference for how breaches actually start.", url: "https://www.verizon.com/business/resources/reports/dbir/" },
    { title: "NCSC Small Business Guide", kind: "Docs", note: "Practical, jargon-free, and specifically scoped to organisations without a security team.", url: "https://www.ncsc.gov.uk/collection/small-business-guide" },
    { title: "OWASP Top 10", kind: "Docs", note: "The standard reference for web application vulnerabilities, if you're building rather than only operating.", url: "https://owasp.org/www-project-top-ten/" },
    { title: "CISA Secure by Design", kind: "Docs", note: "Guidance on building security in rather than adding it later.", url: "https://www.cisa.gov/securebydesign" },
  ],

  internalLinks: [
    { slug: "prompt-engineering-fundamentals", anchor: "prompt injection as a security concern", context: "In the phishing concept, for teams shipping AI features" },
    { slug: "api-integration-that-doesnt-break", anchor: "handling credentials in integrations", context: "In the secrets concept" },
  ],

  relatedGuides: ["prompt-engineering-fundamentals", "evaluating-ai-systems"],

  conclusion: [
    "The measured reality of how breaches begin is reassuring rather than intimidating. Credentials, people and unpatched systems dominate. Sophisticated technical attacks exist, and they are not what most organisations lose to.",
    "That means the work is boring and it works. Unique passwords from a manager. Multi-factor authentication, strongest on email. Least privilege with quarterly review. Fast patching. Secrets out of code. A backup you have actually restored from. A one-page plan, and people who feel safe reporting mistakes.",
    "None of that requires a specialist or a budget. Pick the two you haven't done — for most people that's MFA on everything and testing a restore — and do them this week. It's the highest return available on a few hours of unglamorous work.",
  ],

  cta: {
    headline: "Building something that handles real data?",
    body: "We build production systems with access control, secret management and monitoring designed in from the start.",
    label: "Talk to our team",
    href: "/contact",
  },
};

export default guide;
