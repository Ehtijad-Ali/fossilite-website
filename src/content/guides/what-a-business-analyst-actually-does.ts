import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "what-a-business-analyst-actually-does",
  seoTitle: "What a Business Analyst Actually Does All Day",
  metaDescription:
    "The real BA job behind the job description: whose problem you own, the four modes you switch between, and the difference between a BA and a note-taker.",
  title: "What a Business Analyst Actually Does",
  keywords: [
    "business analyst role",
    "what does a business analyst do",
    "business systems analyst",
    "ba responsibilities",
    "business analyst day to day",
    "ba vs product owner",
  ],
  category: "business-analysis",
  level: "Beginner",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "Ask ten companies what a Business Analyst does and you get ten answers. Somewhere in most of them is the phrase 'gathers requirements', which has done more damage to this profession than anything else, because it makes the job sound like collecting apples that are already lying on the ground.",
    "Requirements are not lying around waiting to be gathered. People know their frustrations, not their requirements. Someone will tell you they want a button. The button is not the requirement. It is their guess at a solution to a problem they have never had to articulate, and your job starts underneath that guess.",
    "I want to describe this job as it actually runs, because if you are moving into it or hiring for it, the gap between the job description and the Tuesday is wide. What follows is the four modes you spend your week in, what you genuinely own, and the specific thing that separates a BA people fight to keep from one who takes good notes.",
  ],

  whyItMatters: [
    "Most failed software projects did not fail in the build. They failed because the thing that got built solved a problem nobody had, or solved a real problem in a way that could not survive contact with how the work actually happens. That gap is BA territory and it is expensive to leave open.",
    "It is also the part of delivery that has not been automated and is not close to it. Writing code has become dramatically faster. Working out what should be written has not, because the information lives in people's heads, in exceptions nobody documented, and in the political reasons a process exists at all.",
    "If you are choosing where to invest a career, that asymmetry matters more than any individual skill on a job spec.",
  ],

  coreConcepts: [
    {
      term: "You own the question, not the answer",
      explain:
        "A BA is accountable for whether the team understood the problem. Not for the design, not for the code, not for the deadline. If the team builds the wrong thing beautifully, that is your failure even when nobody says so out loud.",
      detail:
        "Which is why 'the stakeholder asked for it' is never a defence. The stakeholder asked for a solution. You were supposed to find out what it was a solution to.",
    },
    {
      term: "Mode one: discovery",
      explain:
        "Sitting with the people who do the work, watching what they actually do rather than what the process document claims, and building a picture of how value moves through the business.",
      detail:
        "Roughly a third of your time early in a piece of work, dropping to almost nothing by the end. Teams that skip it pay later at something like ten times the price.",
    },
    {
      term: "Mode two: analysis",
      explain:
        "Alone with the mess. Turning twelve contradictory interviews into one model of what is happening, finding where the numbers disagree, working out which of the seven complaints are the same complaint wearing different clothes.",
      detail:
        "This is the part that looks like doing nothing and is the part that earns your salary. Protect the time for it explicitly, because nobody else will protect it for you.",
    },
    {
      term: "Mode three: specification",
      explain:
        "Writing it down so a developer can build it and a tester can prove it. Rules, acceptance criteria, process models, data definitions, and above all the edge cases.",
      detail:
        "The measure of a good spec is not how complete it looks. It is how few times a developer has to interrupt you to ask what happens when something unusual arrives.",
    },
    {
      term: "Mode four: shepherding",
      explain:
        "Answering questions during build, walking through the thing as it emerges, catching the moment a technical decision quietly changes business behaviour, sitting beside users during testing.",
      detail:
        "Most BAs underweight this and then discover at UAT that a dozen small reasonable decisions have combined into something the business will not accept.",
    },
    {
      term: "A BA is not a post box",
      explain:
        "If your value is passing messages between the business and technology, you are a translation layer, and translation layers get removed. The value sits in the analysis that happens between receiving and passing on.",
      detail:
        "A concrete test: when a stakeholder asks for something, do you relay it, or do you come back having found that two other teams need the same thing and one of them needs it differently?",
    },
    {
      term: "Business Analyst versus Business Systems Analyst",
      explain:
        "Broadly, a BA works from the business inward and a BSA works from the system outward. A BA is more likely to be modelling a process. A BSA is more likely to be specifying an interface between two applications and knowing what a foreign key is.",
      detail:
        "In practice the titles are used interchangeably and the split depends entirely on the company. Read the responsibilities, never the title. A BSA role at one firm is a BA role at another and a solution architect role at a third.",
    },
    {
      term: "You will spend more time on people than on documents",
      explain:
        "The hard part is rarely the notation. It is the operations manager who will not give you an hour, the two departments who describe the same process differently because one of them is not supposed to be doing it that way, and the sponsor who changes their mind after sign-off.",
      detail:
        "Nobody puts this on a job spec and it is most of the difficulty in the role.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The request that was not the requirement.",
      walkthrough:
        "A claims team asks for a button that emails a chase letter to the customer. Reasonable, small, cheap to build. The BA asks what happens now. An administrator copies details into a Word template and sends it manually, roughly forty times a week, about six minutes each. So far the button looks like a good idea. Then the BA asks why the chase is needed at all. The answer: the customer did not supply a document that was requested at the start. The BA reads the original request letter and finds nine documents listed in a single paragraph, with no indication of which apply to which claim type.",
      result:
        "The team redesigned the request letter as a checklist by claim type. Chase volume dropped by most of itself and the button was never built. Notice the sequence, because it is the whole job in two moves: someone asked for a solution, the BA asked what happens today, then asked why it happens at all.",
    },
    {
      kind: "documented",
      scenario: "What it costs when nobody checks whether the need is real.",
      walkthrough:
        "CB Insights has repeatedly compiled post-mortems written by failed startups themselves. Across the original set of more than 110 companies, no market need was the most commonly cited contributing factor, named by 42%. Later analyses of venture-backed failures found a comparable pattern around product-market fit.",
      result:
        "Startups are the visible version of something that happens constantly inside established companies, where it does not make the news because the project is quietly retired instead. The discipline that prevents it is identical at both scales: establish that the problem exists and matters before designing anything for it. That discipline has a job title, and this is it.",
      source: {
        label: "CB Insights: The Top Reasons Startups Fail",
        url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/",
      },
    },
    {
      kind: "illustration",
      scenario: "A week that looks like nothing and is not.",
      walkthrough:
        "Monday: two hours watching the finance team run month-end, saying almost nothing. Tuesday: three interviews, three different descriptions of the same approval process. Wednesday: alone, building one process model plus a list of the eleven points where the accounts diverge. Thursday: taking that model back to all three and letting them argue at it. Friday: writing up what was agreed, plus the four decisions still open and who owns each.",
      result:
        "Nothing was delivered that week and the project moved further than it did during the build. Thursday is the highest-value hour in the sequence and it only works because of Wednesday. If your calendar contains no Wednesdays, you are not analysing anything.",
    },
  ],

  learningPath: [
    {
      title: "Learn to describe a process without judging it",
      body: "Take any process you can observe, at work or outside it, and write down what actually happens step by step: who does it, what triggers it, what they need, what they produce. Resist every urge to note what is wrong with it.",
      effort: "A few hours, repeated",
      outcome: "A neutral description. Harder than it sounds and the foundation of everything else.",
    },
    {
      title: "Practise the second question",
      body: "Whenever someone asks you for something, ask what happens today, then ask why that thing is needed. Two questions. Do it until it stops feeling rude.",
      effort: "Ongoing",
      outcome: "The habit that separates analysis from order-taking.",
    },
    {
      title: "Learn one modelling notation properly",
      body: "A swimlane diagram is enough. Learn to draw one a business person can read without training and a developer can build against.",
      effort: "A weekend",
      outcome: "A shared picture, which is the fastest way to surface disagreement.",
    },
    {
      title: "Write one requirement a developer could build from",
      body: "Take something small and specify it: the rule, the data, the exceptions, what happens on failure. Hand it to someone technical and count the questions.",
      effort: "Half a day",
      outcome: "A calibration on how much detail is actually needed, which is more than most people expect.",
    },
    {
      title: "Get close to a live delivery",
      body: "Volunteer for UAT, sit in refinement, shadow whoever does this now. The gap between the spec and the built thing is only visible from inside a delivery.",
      effort: "Weeks",
      outcome: "An instinct for what goes wrong between agreement and code.",
    },
  ],

  mistakes: [
    {
      mistake: "Taking the request as the requirement",
      why: "People express needs as solutions because that is how humans think. Build the named solution and you have automated somebody's guess.",
      fix: "Always ask what happens today and why. If you cannot describe the current process, you are not ready to change it.",
    },
    {
      mistake: "Interviewing managers and not operators",
      why: "Managers describe the process as designed. Operators describe it as run. Every workaround, exception and undocumented rule lives in the gap, and that is exactly what breaks a build.",
      fix: "Speak to whoever performs the task, and where possible watch them do it rather than asking them to describe it.",
    },
    {
      mistake: "Writing documents nobody reads",
      why: "A sixty-page requirements document is a document, not an agreement. Developers skim it, stakeholders sign without reading, and everyone is surprised later.",
      fix: "Optimise for being read. Models, worked examples and short numbered rules beat prose. If it cannot be walked through in an hour, it will not be.",
    },
    {
      mistake: "Disappearing after sign-off",
      why: "Dozens of small decisions get made during build. Individually reasonable, collectively they can produce something the business rejects.",
      fix: "Stay close through delivery. Review the thing as it emerges, not at the end.",
    },
    {
      mistake: "Being unable to say no",
      why: "A BA who passes every request through becomes a queue. Scope grows, priorities blur, and the team loses the ability to tell what matters.",
      fix: "Deciding what not to do is part of the job. 'What would we drop to fit this in?' is a complete and professional answer.",
    },
  ],

  bestPractices: [
    "Ask what happens today before discussing what should happen.",
    "Watch the work rather than only asking about it.",
    "Interview the person who performs the task, not just the person who owns it.",
    "Protect uninterrupted analysis time. It looks like nothing and it is the job.",
    "Take one model back to the people who disagreed and let them argue at it.",
    "Write to be read: models, examples, numbered rules, not prose.",
    "Record open decisions with a named owner, not only agreed ones.",
    "Stay involved through build and testing.",
  ],

  proTips: [
    "In your first week on any process, ask to see the last five real cases rather than a typical one. Typical cases are a fiction people construct to explain their work. The real five will contain at least one thing nobody mentioned in any interview.",
    "When two people describe the same process differently, do not decide who is right. Put them in front of one diagram together. The disagreement is information, and it is almost always about an exception that matters more than the main path.",
    "Keep a running list of every question a developer asks you during build. That list is a precise specification of what you left out, and it is the fastest way to improve your next spec.",
    "The phrase 'we always do it this way, except when' is the most valuable sentence in this profession. When you hear it, stop and follow the exception all the way down.",
  ],

  businessApplications: [
    "Process improvement work where no software is built at all, which is a large and underrated part of the job.",
    "Software selection, where the analysis decides whether an off-the-shelf product actually fits.",
    "System integration, where the work is about the meaning of data rather than the steps of a process.",
    "Regulatory change, where the requirement is externally defined and the job is working out what it means here.",
    "Migration and decommissioning, where the hard part is discovering everything the old system quietly does.",
    "Post-merger integration, where two organisations describe the same operation in incompatible language.",
  ],

  faqs: [
    {
      q: "Do I need a technical background?",
      a: "For a BA role, no, though comfort with data helps enormously. For a Business Systems Analyst role you need enough to read a data model, understand what an API does, and hold a credible conversation about why something is hard. You do not need to write production code.",
    },
    {
      q: "What is the difference between a BA and a Product Owner?",
      a: "A Product Owner typically owns priority and the decision about what gets built. A BA typically owns understanding and specification. In smaller companies one person does both, and there the discipline is being clear which hat you are wearing in any given meeting.",
    },
    {
      q: "Is the role at risk from AI?",
      a: "The documentation part is getting faster. The part where you sit with a frustrated operations manager and work out that the real constraint is a rule nobody has questioned since 2011 is not close to automation, because that information is not written down anywhere.",
    },
    {
      q: "Which certification is worth it?",
      a: "Certifications get you past filters, not through interviews. If your market screens on them, get one. Spend the rest of your effort on things you can describe concretely, because every interview question worth answering starts with 'tell me about a time'.",
    },
    {
      q: "How do I get the first role without experience?",
      a: "Analyse something where you already are. Almost every job contains a broken process. Map it, find the root cause, propose the change, measure what happened. That is a portfolio piece and it beats any course.",
    },
  ],

  tools: [
    { name: "A diagramming tool your business can open", what: "Swimlanes and flows. The one that already exists at your company beats the better one nobody has a licence for.", cost: "Varies" },
    { name: "A spreadsheet", what: "Still the most-used analysis tool in this job. Volume counts, cycle times and exception rates all start here.", cost: "Varies" },
    { name: "SQL, at a basic level", what: "The ability to check a claim against the data yourself instead of waiting three days for someone to run a query.", cost: "Free" },
    { name: "A decision log", what: "One page, dated, with owners. Prevents the most common project argument, which is about what was agreed.", cost: "Free" },
  ],

  resources: [
    { title: "The Top Reasons Startups Fail", kind: "Docs", note: "Founder post-mortems. The clearest available evidence for why understanding the need comes before building.", url: "https://www.cbinsights.com/research/report/startup-failure-reasons-top/" },
  ],

  internalLinks: [
    { slug: "symptom-versus-problem", anchor: "telling a symptom from the real problem", context: "The core skill" },
    { slug: "learning-a-business-fast", anchor: "understanding an operation quickly", context: "First weeks" },
    { slug: "reading-a-business-analyst-job-spec", anchor: "decoding what employers actually want", context: "Getting the role" },
  ],

  relatedGuides: ["symptom-versus-problem", "learning-a-business-fast", "reading-a-business-analyst-job-spec"],

  conclusion: [
    "Pick one request that landed on you this week and ask the two questions: what happens today, and why is that needed. Follow it two levels down. That is the entire job in miniature and you can do it before Friday.",
  ],
};

export default guide;
