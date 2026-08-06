import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "ai-for-finance-teams",
  seoTitle: "AI for Finance Teams: Where It Pays and Where It Bites",
  metaDescription:
    "Applying AI to finance work without creating a control problem: invoice processing, reconciliation, forecasting and the reviews that keep an automated number trustworthy.",
  title: "AI for Finance Teams",
  keywords: [
    "ai for finance",
    "ai invoice processing",
    "finance automation",
    "ai reconciliation",
    "ai financial forecasting",
    "finance ai controls",
  ],
  category: "finance-basics",
  level: "Intermediate",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 11,

  intro: [
    "Finance is an unusual place to put AI. The work is repetitive enough to automate and the volumes are high enough to justify it, but the output has to survive an audit, and 'the model produced it' satisfies nobody who is signing off on the numbers.",
    "That tension decides the whole design. The applications that succeed in finance are the ones where a person still owns the number and the system removes the typing. The ones that fail are the ones where a model produced a figure nobody can trace back to a source document.",
    "This guide covers the finance work that pays back reliably, the forecasting trap that has cost real companies real money, and the control design that lets you automate without losing the ability to explain a balance.",
  ],

  coreConcepts: [
    {
      term: "Extraction is the win; judgement is not",
      explain:
        "Pulling supplier name, invoice number, date, line items and totals off a document is the high-volume, high-return application. Deciding whether to pay is a control, and controls stay with people.",
      detail:
        "Draw the line at the point where money moves or a figure is asserted. Everything before it can be automated aggressively.",
    },
    {
      term: "Every automated figure needs a source document",
      explain:
        "An extracted number is only useful if you can click through to the page it came from. Store the document reference alongside the value.",
      detail:
        "This is what makes an audit survivable. Without it you have a number with no provenance, which is worse than a slower manual process.",
    },
    {
      term: "Validate against something authoritative",
      explain:
        "Check totals arithmetically, match against the purchase order, verify the supplier exists in your master data, confirm the bank details have not changed.",
      detail:
        "Bank detail changes are the specific check worth building first. Invoice redirection fraud works precisely because the document looks correct in every other respect.",
    },
    {
      term: "Route by confidence, and set the threshold by cost",
      explain:
        "High-confidence extractions proceed, low-confidence ones go to a person. What counts as high confidence should depend on the size of the payment.",
      detail:
        "A misfiled receipt is cheap. A mispaid invoice is not. One threshold for everything is the wrong design.",
    },
    {
      term: "Reconciliation is the ideal first project",
      explain:
        "Comparing two systems and producing a list of differences is tedious, well-defined, high volume, and the output is a queue for humans rather than an action.",
      detail:
        "Nothing moves without a person. The risk is close to zero and the time saved is immediate and countable.",
    },
    {
      term: "Forecasting is where the money is lost",
      explain:
        "A model that estimates future values is making a claim about conditions that have not happened yet. Its confidence says nothing about whether those conditions will hold.",
      detail:
        "Forecasts fail hardest exactly when they matter most, because the regime change that breaks the model is the same event you needed warning about.",
    },
    {
      term: "Never paste a ledger into a public chat tool",
      explain:
        "Financial data is commercially sensitive and often personally identifiable. Where it goes and who can read it is a policy question before it is a technical one.",
      detail:
        "Agree an approved tool list with whoever owns data protection, and make the approved path easier than the unapproved one.",
    },
    {
      term: "Segregation of duties still applies",
      explain:
        "If the same automated process can both create a payment and approve it, you have removed a control that exists for a reason.",
      detail:
        "Automating both halves of a two-person check is the most common way an efficiency project becomes an audit finding.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "A pricing model whose per-unit error became a nine-figure loss.",
      walkthrough:
        "Zillow Offers used a model to price homes the company bought and resold. Competing on speed meant committing to offers quickly, and the model failed to anticipate how far and fast prices would move. It bought above what properties could later be sold for, and the error compounded across thousands of transactions before it showed up in the accounts.",
      result:
        "Zillow announced roughly $304 million of inventory write-down in Q3 2021 and wound the business down, cutting about 25% of its workforce. The finance lesson is about irreversibility rather than accuracy. A modest error rate is survivable when a person reviews before action and catastrophic when each output triggers a binding commitment.",
      source: {
        label: "Zillow Group Q3 2021 results and plan to wind down Zillow Offers",
        url: "https://investors.zillowgroup.com/investors/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx",
      },
    },
    {
      kind: "documented",
      scenario: "A spreadsheet error that changed an economic argument.",
      walkthrough:
        "Herndon, Ash and Pollin obtained the working spreadsheet behind a widely cited finding that high public debt coincided with sharply lower growth. They found a coding error in the averaging range, selective exclusion of available data, and an unconventional weighting choice.",
      result:
        "Recalculated, average real GDP growth for countries above the 90% debt threshold was 2.2% rather than the reported figure. Nobody was careless in an obvious way, and the work had been through review. For finance teams the point is that a spreadsheet is a program nobody tests, and moving that logic into an automated pipeline without adding checks moves the error rather than removing it.",
      source: {
        label: "Herndon, Ash and Pollin (2013), PERI/UMass Amherst: critique of Reinhart and Rogoff",
        url: "https://peri.umass.edu/publication/does-high-public-debt-consistently-stifle-economic-growth-a-critique-of-reinhart-and-rogoff/",
      },
    },
    {
      kind: "illustration",
      scenario: "The month-end close that got faster and less trustworthy.",
      walkthrough:
        "A team automates accrual calculations from historic patterns. The close moves from five days to two, which everyone notices, and the accruals are broadly right, which nobody checks in detail because the total looks normal. A category with changing supplier terms drifts steadily away from reality. It surfaces at year end when the auditors ask why a balance has been growing.",
      result:
        "The failure was not the model. It was that the review step, which had been implicit in the manual process, disappeared along with the typing. When you automate a task, list what the person was doing besides the task itself, and rebuild those checks explicitly.",
    },
  ],

  mistakes: [
    {
      mistake: "Automating approval along with data entry",
      why: "The entry is clerical and the approval is a control. Removing both at once removes the reason the control existed, and it will be found in an audit rather than by you.",
      fix: "Automate up to the point of decision. A person approves, and the system makes approving fast by putting everything they need on one screen.",
    },
    {
      mistake: "Trusting a forecast because it is precise",
      why: "A model will give you a number to two decimal places whether or not the conditions it learned from still apply. Precision is a formatting choice, not evidence.",
      fix: "Report a range and the assumptions behind it. Track forecast error over time and publish it alongside the forecast.",
    },
    {
      mistake: "Extracting figures without keeping the source",
      why: "The value is only defensible if you can show the document it came from. Without the link, you have a number and a story.",
      fix: "Store the document reference and page with every extracted field. Make it clickable from the ledger entry.",
    },
    {
      mistake: "Building on data nobody has audited",
      why: "Supplier names spelled four ways and cost centres that stopped being used two years ago will produce confident, wrong groupings.",
      fix: "Do a data quality pass first. Count distinct values in every categorical field. The findings usually justify the time on their own.",
    },
    {
      mistake: "Skipping the bank detail check",
      why: "Invoice redirection fraud produces a document that is correct in every respect except the account number, which is exactly what an extraction pipeline is bad at noticing.",
      fix: "Flag any change to stored bank details for out-of-band verification, regardless of how confident the extraction was.",
    },
  ],

  bestPractices: [
    "Start with reconciliation. It is high volume, well defined, and produces a review queue rather than an action.",
    "Keep a clickable link from every automated figure to the document it came from.",
    "Set confidence thresholds by the cost of the error, not by one global number.",
    "Validate arithmetic, master data and bank details separately. They fail in different ways.",
    "Alert on non-execution as well as failure. A job that did not run is the failure mode teams forget.",
    "Publish forecast error alongside forecasts so the number carries its own track record.",
    "Agree the approved tool list with whoever owns data protection before anyone pastes a ledger anywhere.",
    "Keep the manual process documented and check annually that someone could still follow it.",
  ],

  proTips: [
    "Ask your team which report they produce that nobody has asked a question about in a year. In most finance functions there are two or three, and deleting them beats automating them.",
    "When you pilot extraction, run it in parallel with the manual process for a full cycle and diff the results. The disagreements are more informative than the accuracy rate, because they show you which document types are hard.",
    "Watch for the automation that makes the close faster and the review shallower. Speed is easy to measure and diligence is not, so the trade happens quietly unless you name it.",
  ],

  businessApplications: [
    "Accounts payable: extracting invoice fields, matching to purchase orders, and queueing exceptions for a person.",
    "Reconciliation between bank statements, the ledger and subsidiary systems, producing a differences list.",
    "Expense processing: reading receipts, applying policy rules, and flagging what needs a human decision.",
    "Contract review support: pulling renewal dates, notice periods and payment terms into a register that can be searched.",
    "Management reporting: drafting commentary from the numbers so the analyst edits rather than writes.",
    "Collections: prioritising outstanding accounts and drafting the chase, with a person sending it.",
    "Audit preparation: assembling supporting documents against a sample list, which is tedious and entirely mechanical.",
  ],

  checklist: [
    "Every automated figure links back to a source document.",
    "Approval remains with a named person, separate from whoever or whatever created the entry.",
    "Confidence thresholds are set by payment size, not one number for everything.",
    "Bank detail changes trigger out-of-band verification.",
    "The pipeline alerts when it fails and when it does not run.",
    "Forecast error is measured and reported alongside forecasts.",
    "The approved tool list is agreed with data protection and is easier to use than the alternatives.",
    "The manual fallback is documented and has been tested this year.",
  ],

  faqs: [
    {
      q: "Can AI do our bookkeeping?",
      a: "It can do most of the data entry and none of the judgement. Extraction, coding suggestions and reconciliation are well suited. Deciding treatment, approving payments and signing off balances are not.",
    },
    {
      q: "Is it safe to put financial data into a chat tool?",
      a: "Not into a consumer account. Use a business agreement that excludes your data from training, agree it with whoever owns data protection, and publish an approved tool list before people improvise.",
    },
    {
      q: "How accurate is invoice extraction?",
      a: "Good on clean, common layouts and worse on handwriting, scans and unusual formats. This is why confidence routing matters more than the headline accuracy figure.",
    },
    {
      q: "Will auditors accept AI-produced numbers?",
      a: "They will accept numbers with traceable support and a working control environment. The question is not whether AI produced it but whether you can show where it came from and who checked it.",
    },
    {
      q: "Where should a small finance team start?",
      a: "Reconciliation. It is the lowest risk, the effort is real, and the exercise tells you how clean your data actually is before you commit to anything larger.",
    },
  ],

  tools: [
    { name: "Your existing ERP or accounting platform", what: "Most now ship extraction and coding suggestions. Exhaust what you already pay for before buying anything.", cost: "Varies" },
    { name: "Document extraction services", what: "Cloud APIs that read structured fields from invoices and receipts at volume.", cost: "Paid" },
    { name: "Anthropic API", what: "General extraction and summarisation where the document type is unusual and no off-the-shelf parser fits.", cost: "Paid", url: "https://console.anthropic.com" },
    { name: "External audit or controls advisor", what: "Worth an hour before you automate anything that touches a control.", cost: "Paid" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "A study of silent spreadsheet corruption. Short, and it changes how you think about manual data steps.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
    { title: "Rules of Machine Learning", kind: "Docs", note: "Google's engineering guidance. Rule one is effectively 'try it without a model first', which applies squarely to finance.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "measuring-ai-roi-in-business", anchor: "build the business case properly", context: "When justifying the spend" },
    { slug: "data-cleaning-fundamentals", anchor: "audit the data first", context: "Before building anything" },
    { slug: "ai-for-operations-and-workflow", anchor: "mapping the process before automating it", context: "Process design" },
  ],

  relatedGuides: ["measuring-ai-roi-in-business", "ai-for-operations-and-workflow", "data-cleaning-fundamentals"],

  conclusion: [
    "Start with one reconciliation this month, run it alongside the manual process, and diff the results. The disagreements will tell you more about your data than any vendor demo will.",
  ],

  cta: {
    headline: "Automating something that touches a control?",
    body: "We build finance automation that keeps the audit trail intact, including telling you which steps should stay manual.",
    label: "Review your finance workflow",
    href: "/contact",
  },
};

export default guide;
