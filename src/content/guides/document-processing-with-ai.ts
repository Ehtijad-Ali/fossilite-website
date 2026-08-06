import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "document-processing-with-ai",
  seoTitle: "Document Processing with AI: Extraction That Holds Up",
  metaDescription:
    "Turning invoices, contracts and forms into structured data reliably: extraction design, validation, confidence routing, and the exception rate that decides your business case.",
  title: "Document Processing with AI",
  keywords: [
    "ai document processing",
    "invoice data extraction",
    "intelligent document processing",
    "ocr vs ai extraction",
    "contract data extraction",
    "document automation",
  ],
  category: "automation",
  level: "Intermediate",
  updated: "2026-08-06",
  author: PETER_NGUYEN,
  readingTime: 11,

  intro: [
    "Document processing is the least exciting AI application and one of the few that reliably pays for itself. There is no customer watching, the work is genuinely repetitive, the current cost is already measurable, and mistakes are usually caught internally.",
    "It is also the application where the demo most misleads. Extraction works beautifully on the clean sample and then meets the supplier who sends a photograph of a printout, the contract with the schedule in an appendix, and the form somebody filled in by hand.",
    "This guide covers how to design extraction that survives that, why validation matters more than accuracy, and the number that actually decides whether the project works: the exception rate.",
  ],

  coreConcepts: [
    {
      term: "Unstructured input is where this earns its keep",
      explain:
        "Rule-based parsing never handled fifty invoice layouts or a request written as prose. That capability is the genuinely new thing.",
      detail:
        "If your input is already structured, use ordinary software. It is cheaper, faster and easier to debug.",
    },
    {
      term: "Extract, validate, then act, as separate stages",
      explain:
        "Pull the fields, check them against something authoritative, then take action. Collapsing these removes the place where errors are caught.",
      detail:
        "Validation is what separates a useful system from a fast way to be wrong.",
    },
    {
      term: "Require NOT FOUND rather than a guess",
      explain:
        "A model asked for a field it cannot see will often produce something plausible. Instruct it explicitly to return a null marker instead.",
      detail:
        "This one instruction converts a silent wrong value into a visible gap, which is the difference between an exception and an error nobody notices.",
    },
    {
      term: "Confidence routing is the safety design",
      explain:
        "High-confidence extractions proceed, low-confidence ones queue for a person. Tune the threshold by the cost of the specific error.",
      detail:
        "A misfiled document is cheap. A mispaid invoice is not. One threshold for every field is the wrong design.",
    },
    {
      term: "The exception rate decides the business case",
      explain:
        "If ninety percent goes through automatically, the saving is large. If sixty percent needs review, you have added a step rather than removed one.",
      detail:
        "Measure it on real documents before you commit. Vendor accuracy figures are measured on their sample, not your post room.",
    },
    {
      term: "Design the exception queue as a product",
      explain:
        "Someone will work that queue every day. If it shows the document, the extracted values and the specific reason for the flag, they are fast. If it shows a rejection, they start from scratch.",
      detail:
        "Teams consistently underinvest here and then wonder why the saving did not materialise.",
    },
    {
      term: "Keep the source document linked forever",
      explain:
        "Every extracted value needs a reference back to the file and page it came from. Without it, you cannot answer a query or survive an audit.",
      detail:
        "Store it at extraction time. Reconstructing provenance afterwards is close to impossible.",
    },
    {
      term: "Silent failure is the operational risk",
      explain:
        "A pipeline that stops processing without alerting produces a backlog nobody discovers for weeks, and reconstructing it is worse than the original work.",
      detail:
        "Alert on failure and on volume anomalies. A sudden drop in documents processed is the signal that matters.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What manual data handling costs in errors rather than hours.",
      walkthrough:
        "Ziemann, Eren and El-Osta examined thousands of genomics papers and the supplementary gene lists produced in spreadsheets. With default settings, the software silently converted certain gene symbols into dates. No warning appeared and the converted value looked entirely normal.",
      result:
        "Around a fifth of the papers examined contained conversion errors, in careful work that had passed peer review. For document processing the lesson is twofold. Manual steps produce errors nobody counts, so a business case built only on time saved understates the value. And any automated replacement needs validation built in, because a silent transformation is exactly what nobody notices.",
      source: {
        label: "Ziemann, Eren and El-Osta (2016). Gene name errors are widespread in the scientific literature, Genome Biology",
        url: "https://link.springer.com/article/10.1186/s13059-016-1044-7",
      },
    },
    {
      kind: "illustration",
      scenario: "The extraction pilot that succeeded and the rollout that did not.",
      walkthrough:
        "A pilot on two hundred invoices from the twelve largest suppliers reports high accuracy, and the project is approved. In production the long tail arrives: small suppliers with photographed documents, handwritten annotations, credit notes formatted like invoices. The exception rate is several times the pilot figure, and the finance team is now doing review work on top of their old job.",
      result:
        "Nothing was wrong with the technology or the pilot's numbers. The sample was unrepresentative in the specific way that mattered. Pilot on a random sample across your whole supplier base, not on your biggest accounts, and report the exception rate rather than the accuracy.",
    },
  ],

  mistakes: [
    {
      mistake: "Judging the system on accuracy instead of exception rate",
      why: "Accuracy on the documents it handled tells you nothing about how many it refused. The refused ones are where your labour cost went.",
      fix: "Report straight-through processing rate as the headline number, and hold the vendor to it on your documents.",
    },
    {
      mistake: "Letting the model guess at missing fields",
      why: "A plausible invented value is far more damaging than a blank, because nothing downstream flags it.",
      fix: "Instruct the model to return an explicit not-found marker, and treat that as a routing signal rather than an error.",
    },
    {
      mistake: "Piloting on your cleanest documents",
      why: "The easy cases are the ones you did not need help with. The business case lives in the messy tail.",
      fix: "Sample randomly across the whole population, including the suppliers nobody likes dealing with.",
    },
    {
      mistake: "Treating the exception queue as an afterthought",
      why: "If reviewing an exception is slower than doing the original task manually, the automation has made things worse for the people doing the work.",
      fix: "Design the queue properly: document alongside extracted values, with the reason for the flag stated.",
    },
    {
      mistake: "Skipping validation because accuracy looked high",
      why: "High accuracy still means a steady stream of wrong values, and without validation they enter your systems looking exactly like correct ones.",
      fix: "Check arithmetic, match against master data, and verify anything that changes payment details out of band.",
    },
  ],

  bestPractices: [
    "Sample randomly across your whole document population before committing.",
    "Report straight-through processing rate, not accuracy.",
    "Require an explicit not-found marker rather than allowing a guess.",
    "Validate arithmetic, master data and payment details as separate checks.",
    "Set confidence thresholds per field, weighted by the cost of that field being wrong.",
    "Link every extracted value to its source document and page.",
    "Build the exception queue as a real interface, not a rejection list.",
    "Alert on failure and on unexpected drops in volume.",
  ],

  learningPath: [
    {
      title: "Collect a representative sample",
      body: "Pull a random hundred documents across your whole population, not the ones you find easiest. Include the awkward suppliers, the scans and the handwritten annotations.",
      effort: "2-3 hours",
      outcome: "A test set that reflects reality rather than the best case.",
    },
    {
      title: "Define the fields and their tolerances",
      body: "List exactly what you need extracted, and for each one what a wrong value would cost. That cost sets the confidence threshold later.",
      effort: "2 hours",
      outcome: "A field specification with a risk weighting per field.",
    },
    {
      title: "Run extraction and measure honestly",
      body: "Process the sample and score it by hand. Record the straight-through rate and, separately, which document types produced the exceptions.",
      effort: "1 day",
      outcome: "A real exception rate and a list of the hard cases.",
    },
    {
      title: "Add validation and re-measure",
      body: "Layer in the arithmetic and master data checks. Note how many wrong values they catch that confidence scoring did not.",
      effort: "2-3 days",
      outcome: "Evidence for whether validation or the model is doing the work.",
    },
    {
      title: "Build the exception queue",
      body: "Show the document, the extracted values and the reason for the flag on one screen. Time how long a review takes.",
      effort: "1 week",
      outcome: "A per-exception handling time you can put in the business case.",
    },
    {
      title: "Run in parallel for one cycle",
      body: "Keep the manual process running alongside and diff the outputs. The disagreements are the most useful data you will get.",
      effort: "One full cycle",
      outcome: "A go or no-go decision based on your own numbers.",
    },
  ],

  businessApplications: [
    "Supplier invoices into accounts payable, matched against purchase orders.",
    "Expense receipts with policy rules applied and exceptions queued.",
    "Contracts into a register of renewal dates, notice periods and payment terms.",
    "Inbound forms and applications turned into structured records.",
    "Delivery notes and proof of delivery reconciled against orders.",
    "Insurance or claims documentation triaged by type and completeness.",
    "Onboarding paperwork checked for missing fields before a person looks at it.",
  ],

  faqs: [
    {
      q: "How is this different from OCR?",
      a: "OCR turns an image into text. The hard part is knowing which text is the invoice total when the layout is unfamiliar. That interpretation step is what a model adds.",
    },
    {
      q: "What accuracy should we expect?",
      a: "Ask instead what straight-through rate you get on your own documents. Accuracy on processed items hides how many were rejected, and the rejects are the cost.",
    },
    {
      q: "Can it read handwriting?",
      a: "Sometimes, unreliably. Treat handwritten input as a category that routes to a person by default rather than one you tune for.",
    },
    {
      q: "Do we need to fine-tune a model?",
      a: "Usually not. Better field definitions, explicit not-found instructions and solid validation deliver more improvement than fine-tuning, for far less effort.",
    },
    {
      q: "How do we handle a supplier who changes their layout?",
      a: "This is the argument for model-based extraction over templates. A layout change should raise your exception rate temporarily rather than break the pipeline entirely, provided you are monitoring that rate.",
    },
  ],

  tools: [
    { name: "Cloud document extraction services", what: "Purpose-built for invoices and receipts at volume, with confidence scores per field.", cost: "Paid" },
    { name: "Anthropic API", what: "General extraction for document types no off-the-shelf parser covers.", cost: "Paid", url: "https://console.anthropic.com" },
    { name: "Your ERP or accounting platform", what: "Many now include extraction. Exhaust what you already pay for first.", cost: "Varies" },
    { name: "A hand-scored test set", what: "A hundred real documents, scored by a person. No vendor can supply this and nothing substitutes for it.", cost: "Free" },
  ],

  resources: [
    { title: "Gene name errors are widespread in the scientific literature", kind: "Paper", note: "The clearest evidence that silent data corruption in manual workflows is real and survives review.", url: "https://link.springer.com/article/10.1186/s13059-016-1044-7" },
    { title: "Rules of Machine Learning", kind: "Docs", note: "Google's engineering guidance, including when a simple approach beats a model.", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
  ],

  internalLinks: [
    { slug: "ai-for-operations-and-workflow", anchor: "map the process before automating it", context: "Before starting" },
    { slug: "ai-for-finance-teams", anchor: "the controls that must survive automation", context: "Finance applications" },
    { slug: "data-cleaning-fundamentals", anchor: "audit your master data first", context: "Validation" },
  ],

  relatedGuides: ["ai-for-operations-and-workflow", "ai-for-finance-teams", "automation-worth-building"],

  conclusion: [
    "Pull a hundred documents at random, including the ones nobody enjoys, and measure the straight-through rate before you buy anything. That single number decides the project.",
  ],

  cta: {
    headline: "Extraction working on samples and not in production?",
    body: "That gap is almost always the document tail rather than the model. We can tell you which, and what the real exception rate is.",
    label: "Get your pipeline reviewed",
    href: "/contact",
  },
};

export default guide;
