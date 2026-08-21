import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "stakeholder-management-in-practice",
  seoTitle: "Stakeholder Management for Analysts, Without the Grid",
  metaDescription:
    "Finding the stakeholders nobody listed, working out what each actually wants, handling genuine conflict, and keeping a sponsor engaged when the work gets slow.",
  title: "Stakeholder Management in Practice",
  keywords: [
    "stakeholder management",
    "stakeholder analysis",
    "managing conflicting requirements",
    "business analyst stakeholders",
    "stakeholder engagement plan",
    "project sponsor",
  ],
  category: "leadership",
  level: "Intermediate",
  updated: "2026-08-21",
  author: PETER_NGUYEN,
  readingTime: 17,

  intro: [
    "The influence and interest grid is the first thing anyone learns about stakeholders and roughly the least useful. It sorts people into four boxes and then tells you to keep two of them satisfied, which is not advice. It also implies the hard part is classification, when the hard part is that two senior people want incompatible things and both of them are right about their own department.",
    "What actually determines whether a piece of work succeeds is more specific: did you find the people nobody listed, do you know what each of them is measured on, and have you built enough credit with them that you can deliver bad news without losing access.",
    "This guide is the practical version. How to find the invisible stakeholders, how to work out what somebody really wants as opposed to what they asked for, how to handle a genuine conflict rather than smoothing it, and how to keep a sponsor engaged through the months when there is nothing visible to show.",
  ],

  whyItMatters: [
    "Almost every project problem that looks technical is a stakeholder problem underneath. Requirements that keep changing usually mean the wrong person was consulted. Scope that keeps growing usually means nobody has authority to say no. A solution rejected at acceptance usually means somebody who mattered was found too late.",
    "The consequences also land on you personally in a way they do not for most roles. A BA operates almost entirely without formal authority. You cannot instruct anyone. Everything you achieve happens because people choose to give you time and tell you the truth, and both of those are earned rather than allocated.",
    "And access compounds. The people who trust you tell you things earlier, which makes your analysis better, which makes them trust you more. The reverse compounds just as fast, and it is much harder to recover from.",
  ],

  coreConcepts: [
    {
      term: "Find the stakeholders nobody lists",
      explain:
        "Four groups are routinely missed: the downstream consumer of the output, the person who handles exceptions, the team who will support the thing after go-live, and whoever performs a control that your change would remove.",
      detail:
        "Follow the process rather than the org chart. Ask at every step who receives this, who fixes it when it is wrong, and who would notice if it stopped. That question set finds more real stakeholders than any list a project manager can give you.",
    },
    {
      term: "The register that is worth keeping",
      explain:
        "Name, role, what they are measured on, what they want from this, what they stand to lose, how they prefer to be engaged, and who they listen to. Seven columns, and the third is the one that does the work.",
      detail:
        "What somebody is measured on predicts their behaviour better than anything they say in a meeting. An operations manager measured on cost per unit and a sales director measured on new accounts will disagree about your project forever, and neither is being difficult.",
    },
    {
      term: "What they ask for and what they need are different things",
      explain:
        "People express needs as solutions. A director asking for a dashboard usually wants to stop being surprised in a meeting, and there may be five ways to achieve that.",
      detail:
        "Ask what decision this would help them make, or what they will do differently once they have it. If the answer is vague, the request is a proxy for something else and you have not found it yet.",
    },
    {
      term: "Separate the sponsor from the decision maker from the user",
      explain:
        "The sponsor pays and unblocks. The decision maker resolves conflicting requirements. The users live with the result. These are frequently three different people and occasionally nobody has been given the second role.",
      detail:
        "Find out on day one who resolves a genuine disagreement between two departments. If the answer is that it gets escalated to a committee, expect every conflict to take a month, and plan the analysis around that reality.",
    },
    {
      term: "Conflict is information, not a problem to smooth",
      explain:
        "When two stakeholders want incompatible things, that is usually a real tension in the business that predates your project. Papering over it produces a compromise that serves neither and satisfies nobody.",
      detail:
        "Make the conflict explicit, quantify both sides, and take it to whoever can decide. Your job is to frame the choice accurately, not to resolve it by finding a middle point that nobody asked for.",
    },
    {
      term: "Quantify positions before escalating",
      explain:
        "Two people disagreeing is a dispute. Two options with volumes, costs and consequences attached is a decision, and decisions get made.",
      detail:
        "Never escalate a disagreement without the numbers. Senior people resent being asked to arbitrate between two opinions, and they respond well to being asked to choose between two costed outcomes.",
    },
    {
      term: "Build credit before you need it",
      explain:
        "The time to establish that you are useful and honest is before you have to tell somebody their requirement is out of scope. Answer small questions quickly, share findings that help them, credit them publicly.",
      detail:
        "The single cheapest deposit is following up on something they mentioned in passing. It demonstrates that you were listening, and it costs ten minutes.",
    },
    {
      term: "Deliver bad news early, in person, and with an option",
      explain:
        "The instinct is to wait until you have a solution. The result is that the stakeholder hears about a problem late, from someone else, and concludes you were managing them.",
      detail:
        "Say it early, say what you propose to do about it, and say what you need from them. People forgive problems and they do not forgive being surprised, particularly in front of their own manager.",
    },
    {
      term: "The disengaged sponsor is a risk to be managed, not tolerated",
      explain:
        "A sponsor who stops attending has usually either lost confidence or been reassigned in practice if not on paper. Both are serious and both are recoverable if caught early.",
      detail:
        "Ask directly whether this is still a priority and what would make it worth their time. The worst outcome is discovering at a steering group that the project has quietly lost its backing months earlier.",
    },
    {
      term: "Manage the person who will not engage",
      explain:
        "Sometimes a key stakeholder will not give you time. Record what you need from them, what you assumed in their absence, and the risk that carries, and send it to them and to your sponsor.",
      detail:
        "This is not a political move, it is a factual one. In my experience roughly half of non-engagers respond to a specific written assumption about their area, because correcting something wrong is easier than starting from nothing.",
    },
    {
      term: "Match the format to the person",
      explain:
        "Some people read documents, some need a five-minute conversation, some will only engage with a diagram. Sending everybody the same thirty-page pack is efficient for you and ineffective for most of them.",
      detail:
        "Ask directly how they prefer to receive things. It is a question almost nobody is asked, people answer it honestly, and it substantially changes how much attention your work gets.",
    },
    {
      term: "Write down who decided what, and when",
      explain:
        "A dated decision log with names is the single most valuable political artefact a BA maintains, and it is not a defensive one.",
      detail:
        "Its real value is that it stops the same decision being made three times with different answers. Circulate it after each meeting and let corrections come back, which is also how you find out that somebody heard something different from what was said.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The stakeholder found in user acceptance testing.",
      walkthrough:
        "A new order process is built with sales, operations and finance closely involved. At acceptance testing, someone brings in a member of the credit control team, who points out that the redesigned order record no longer carries a field they use to flag accounts under review. They use it several times a day and it has never been mentioned, because nobody in the project had reason to know credit control read that record at all.",
      result:
        "The fix was small and the timing was expensive. The stakeholder was missed because the project team listed departments involved in the process rather than following the record to everybody who reads it. The question that would have found them: who else looks at this after we are finished with it, and what do they do with it?",
    },
    {
      kind: "illustration",
      scenario: "Two directors, one incompatible pair of requirements.",
      walkthrough:
        "Sales wants orders to progress immediately on submission. Finance wants a credit check completed before anything is committed. The BA's first instinct is to find a compromise, perhaps a check that runs in parallel. Instead she quantifies both sides: how many orders per month come from accounts that would fail a check, what those orders are worth, what the historical bad debt on that category has been, and how much delay a check actually adds.",
      result:
        "With numbers on the table, the decision took one meeting and produced a threshold rule that neither director had proposed: full check above a value, automatic approval below it, reviewed quarterly. The compromise she would have designed herself would have satisfied neither. Quantifying a conflict converts it from a contest of seniority into a decision somebody can actually take.",
    },
    {
      kind: "illustration",
      scenario: "The assumption that produced an answer.",
      walkthrough:
        "A department head has cancelled four meetings and does not respond to requests. The BA writes half a page: this is what we believe your team needs, this is what we have assumed about your approval limits, this is the risk if the assumption is wrong, and we will proceed on this basis from a stated date unless corrected. It goes to the department head and the sponsor together.",
      result:
        "A detailed correction arrived within two days. Reviewing something specific and wrong takes five minutes, and engaging with an open-ended request takes an hour that nobody has. This works often enough to be a standard move, and when it does not work it produces a documented record of what you assumed and why.",
    },
  ],

  learningPath: [
    {
      title: "Build the register by walking the process",
      body: "For every step, ask who does it, who receives the output, who fixes it when it goes wrong, who supports the system, and who performs any control. Do not start from the org chart.",
      effort: "Half a day",
      outcome: "A stakeholder list that includes the four groups normally missed.",
    },
    {
      title: "Find out what each one is measured on",
      body: "Ask directly. What does a good quarter look like for you, and what would make this project a nuisance? People answer this candidly far more often than you would expect.",
      effort: "1-2 days of short conversations",
      outcome: "A predictive model of how each person will behave, which is more useful than any classification grid.",
    },
    {
      title: "Establish who decides",
      body: "Identify the sponsor, the decision maker for conflicting requirements, and the accountable owner for each area. Where the second is unclear, raise it now rather than at the first conflict.",
      effort: "1 hour",
      outcome: "A known escalation route before you need one, which is the only time it can be established calmly.",
    },
    {
      title: "Agree engagement format with each person",
      body: "Ask how they want to receive things and how often. Document it. Then actually do it, including the ones who want less contact than you would prefer.",
      effort: "Included in the first conversations",
      outcome: "Materially better response rates, for the cost of one question.",
    },
    {
      title: "Make one deposit with each key stakeholder",
      body: "Answer something small, share a finding that helps them, or follow up on something they mentioned in passing. Do this before you need anything difficult from them.",
      effort: "Ongoing, minutes each",
      outcome: "The credit you will spend later, when you have to say no to something.",
    },
    {
      title: "Run the first conflict properly",
      body: "Quantify both positions, present them as costed options, take them to the decision maker, record the outcome. Resist designing a compromise yourself.",
      effort: "2-3 days",
      outcome: "A decision rather than a fudge, and a demonstration of how you will handle the next one.",
    },
  ],

  exercises: [
    {
      title: "The missing stakeholder hunt",
      brief:
        "Take any current project and walk its main output forward: who receives it, who reads it, who reports on it, who fixes it when wrong, who supports the system. Compare that list against the project's stakeholder list.",
      success:
        "You find at least one person or team not on the official list who would be materially affected, and you can say what they would lose.",
      time: "2 hours",
    },
    {
      title: "The measured-on interview",
      brief:
        "Ask three stakeholders on your project what a good quarter looks like for them personally, and what would make this project an inconvenience. Write both answers down verbatim.",
      success:
        "You can predict at least one position each of them will take later, and explain it without reference to personality.",
      time: "1 hour",
    },
    {
      title: "Quantify a live disagreement",
      brief:
        "Find a disagreement currently unresolved on your project. Write both positions as costed options: volumes, cost, consequence, who is affected. Do not recommend one.",
      success:
        "The disagreement becomes a decision somebody can take in a single meeting, and you can name who that person is.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Building the stakeholder list from the org chart",
      why: "Organisational structure describes reporting lines, not information flows. The people affected by a change frequently sit outside the departments named in the project brief.",
      fix: "Walk the process and the output. Ask who receives, who fixes, who supports and who controls, at every step.",
    },
    {
      mistake: "Interviewing only managers",
      why: "Managers describe the process as designed. The workarounds, exceptions and undocumented rules live with the people running it, and those are what break a build.",
      fix: "Speak to whoever performs the task, and watch them do it where you can. Use managers for priorities and constraints.",
    },
    {
      mistake: "Smoothing conflict instead of surfacing it",
      why: "A compromise designed by the analyst satisfies neither party and has no owner, so it is abandoned the moment it becomes inconvenient.",
      fix: "Quantify both positions and take them to the person who can decide. Frame the choice, do not make it.",
    },
    {
      mistake: "Escalating without numbers",
      why: "You are asking a senior person to arbitrate between two opinions, which they resent, and the outcome tends to follow seniority rather than evidence.",
      fix: "Present costed options with volumes and consequences. Decisions get taken, disputes get deferred.",
    },
    {
      mistake: "Saving bad news until you have a solution",
      why: "The stakeholder hears about it late, often from somebody else, and concludes you were managing them rather than working with them. That impression is very hard to reverse.",
      fix: "Raise it early with what you propose to do and what you need. People forgive problems and not surprises.",
    },
    {
      mistake: "Accepting a disengaged sponsor",
      why: "A project without active sponsorship loses its escalation route and its funding protection, and you usually find out at the worst possible moment.",
      fix: "Ask directly whether it is still a priority. If the answer is soft, put the risk in writing to whoever appointed them.",
    },
    {
      mistake: "Treating everybody with the same format and cadence",
      why: "Most of your communication is ignored, and you conclude people are not engaged when they are simply not reading a thirty-page pack.",
      fix: "Ask each person how they want to receive things, record it, and follow it even when it is inefficient for you.",
    },
    {
      mistake: "Not recording decisions",
      why: "The same decision gets made several times with different answers, and eventually a version surfaces that contradicts what was built.",
      fix: "Dated decision log with names and reasoning, circulated after each meeting so corrections come back quickly.",
    },
  ],

  bestPractices: [
    "Build the stakeholder list by walking the process, never from the org chart.",
    "Include downstream consumers, exception handlers, support teams and control owners.",
    "Record what each stakeholder is measured on.",
    "Ask what decision a request would help them make.",
    "Identify the sponsor, the decision maker and the accountable owner separately.",
    "Ask each person how they want to be engaged, and follow it.",
    "Make small deposits of usefulness before you need anything difficult.",
    "Quantify both sides of a conflict before escalating.",
    "Frame decisions rather than designing compromises.",
    "Deliver bad news early, in person, with an option attached.",
    "Put written assumptions in front of people who will not engage.",
    "Keep a dated decision log and circulate it.",
  ],

  proTips: [
    "Ask every stakeholder what they think this project is for, in their own words, and write the answers down side by side. On one engagement I collected six materially different answers from people who had all attended the same kick-off, and showing that page to the sponsor was more useful than anything else I did that month.",
    "The most valuable person on any project is usually the one who has been there longest in an unglamorous role. They know why the odd rule exists, which system nobody trusts, and what was tried in 2018 and failed. Find them in the first week and treat their time as the scarce resource it is.",
    "When somebody blocks a change, find out what they are protecting rather than assuming resistance. Most obstruction turns out to be a control that matters, a workload they cannot absorb, or a commitment they made to somebody else. All three are solvable and none of them respond to persuasion.",
    "Send your notes to the person you interviewed within a day, and ask them to correct anything you got wrong. Half will correct something, which improves your analysis, and all of them register that you took them seriously. It is the highest-return ten minutes in the job.",
  ],

  businessApplications: [
    "Cross-departmental projects, where the conflict between two teams' measures is the actual problem to be solved.",
    "System replacement, where the support team and the exception handlers are the stakeholders most often missed.",
    "Mergers and restructures, where the decision route is genuinely unclear and establishing it early is most of the work.",
    "Vendor implementations, where the vendor is a stakeholder with different incentives from everyone else in the room.",
    "Regulatory change, where the compliance function holds a veto that is easier to work with than around.",
    "Any change reducing somebody's headcount or control, where honesty about intent determines whether you get real information.",
  ],

  checklist: [
    "Stakeholder list built by walking the process and the output.",
    "Downstream consumers, exception handlers, support and control owners included.",
    "What each stakeholder is measured on is recorded.",
    "The real want behind each request has been established.",
    "Sponsor, decision maker and accountable owners identified by name.",
    "Escalation route agreed before the first conflict.",
    "Preferred format and cadence recorded per stakeholder.",
    "At least one deposit of usefulness made with each key person.",
    "Conflicts quantified and presented as costed options.",
    "Bad news raised early with a proposal attached.",
    "Written assumptions issued to anyone who will not engage.",
    "Decision log maintained, dated, named and circulated.",
  ],

  faqs: [
    {
      q: "How do I handle a stakeholder who keeps changing their mind?",
      a: "Usually it is not indecision but a need that was never properly understood, or someone else influencing them between meetings. Go back to what they are trying to achieve rather than what they asked for last time, and find out who they talk to afterwards.",
    },
    {
      q: "What do I do when the sponsor is not senior enough?",
      a: "You will discover it at the first cross-departmental conflict, when they cannot resolve it. Raise it early as a specific risk with an example of a decision they would not be able to make, rather than as a general concern about seniority.",
    },
    {
      q: "How much time should stakeholder work take?",
      a: "More than you expect, and front-loaded. A good rule is that if you have not spoken to somebody in a fortnight, you no longer know their position. On a busy project this is a day a week and it is not overhead.",
    },
    {
      q: "Should I tell people the change may affect their jobs?",
      a: "Say what you know and be plain about what you do not. Reassurance you cannot guarantee is the fastest way to lose the room permanently. People are much better with an honest I have not been told than with a promise that later proves false.",
    },
    {
      q: "What if two stakeholders give contradictory requirements and neither will move?",
      a: "That is a business decision, not an analysis problem. Quantify both, present them as options with consequences, and take them to whoever owns both areas. If nobody owns both, you have found the real finding.",
    },
    {
      q: "Is a RACI matrix worth producing?",
      a: "Occasionally, in large programmes with genuinely unclear ownership. On most projects it becomes an artefact nobody consults. A short list of who decides what, kept current, does the same job and gets read.",
    },
  ],

  tools: [
    { name: "A seven-column stakeholder register", what: "Name, role, measured on, wants, stands to lose, preferred engagement, who they listen to.", cost: "Free" },
    { name: "A dated decision log", what: "Decision, date, who decided, reasoning, who was consulted. Circulated after each meeting.", cost: "Free" },
    { name: "A one-page conflict framing template", what: "Two positions, volumes, costs, consequences, decision required, decision owner. Turns disputes into decisions.", cost: "Free" },
    { name: "Interview notes returned within a day", what: "Costs ten minutes, improves accuracy and demonstrates that you listened. The cheapest trust-building available.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "asking-questions-that-get-answers", anchor: "getting real answers from these people", context: "Elicitation" },
    { slug: "delivering-change-into-a-business", anchor: "engaging them through implementation", context: "Delivery" },
    { slug: "clear-writing-that-gets-read", anchor: "writing that people actually read", context: "Communication" },
  ],

  relatedGuides: ["asking-questions-that-get-answers", "delivering-change-into-a-business", "clear-writing-that-gets-read"],

  conclusion: [
    "Ask three stakeholders on your current project what they think it is for, in their own words, and write the answers side by side. If they differ materially, and they usually do, that page is the most useful thing you will produce this week and it took an hour.",
  ],
};

export default guide;
