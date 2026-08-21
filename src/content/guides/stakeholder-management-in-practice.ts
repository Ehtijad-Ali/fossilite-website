import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "stakeholder-management-in-practice",
  seoTitle: "Working With People When You Cannot Tell Anyone What to Do",
  metaDescription:
    "Finding the people nobody listed, working out what each of them is measured on, turning a disagreement into a decision, and keeping a sponsor engaged.",
  title: "Working With People Who Do Not Report to You",
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
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "The grid where you plot people by how much power and interest they have is the first thing anybody learns about this and roughly the least useful. It sorts people into four boxes and then tells you to keep two of them satisfied, which is not advice. It also suggests the hard part is sorting people, when the hard part is that two senior people want incompatible things and both of them are right about their own department.",
    "What actually decides whether a piece of work succeeds is more specific. Did you find the people nobody listed. Do you know what each of them gets judged on. And have you built enough goodwill that you can deliver bad news without losing access.",
    "This guide is the practical version. How to find the invisible people, how to work out what somebody really wants as opposed to what they asked for, how to handle a real disagreement rather than smoothing it over, and how to keep a sponsor engaged through the months when there is nothing to show.",
  ],

  whyItMatters: [
    "Almost every project problem that looks technical is a people problem underneath. Requirements that keep changing usually mean the wrong person was asked. Scope that keeps growing usually means nobody has the authority to say no. Something rejected at testing usually means somebody who mattered was found too late.",
    "The consequences also land on you in a way they do not for most jobs. A BA operates almost entirely without authority. You cannot tell anybody to do anything. Everything you achieve happens because people choose to give you their time and tell you the truth, and both are earned rather than allocated.",
    "And it compounds. The people who trust you tell you things earlier, which makes your work better, which makes them trust you more. It compounds the other way just as fast, and that is much harder to recover from.",
  ],

  coreConcepts: [
    {
      term: "Find the people nobody lists",
      explain:
        "Four groups get missed routinely: whoever receives the output downstream, whoever handles the awkward cases, the team who will support it after go-live, and whoever performs a check that your change would remove.",
      detail:
        "Follow the process rather than the org chart. At every step ask who receives this, who fixes it when it is wrong, and who would notice if it stopped. That finds more real stakeholders than any list a project manager can give you.",
    },
    {
      term: "The list worth keeping has seven columns",
      explain:
        "Name, role, what they get judged on, what they want from this, what they stand to lose, how they prefer to be dealt with, and who they listen to. The third column is the one that does the work.",
      detail:
        "What somebody is measured on predicts their behaviour better than anything they say in a meeting. An operations manager judged on cost per unit and a sales director judged on new accounts will disagree about your project forever, and neither of them is being difficult.",
    },
    {
      term: "What they ask for and what they need are different",
      explain:
        "People express what they need as solutions. A director asking for a dashboard usually wants to stop being surprised in a meeting, and there might be five ways to achieve that.",
      detail:
        "Ask what decision this would help them make, or what they will do differently once they have it. If the answer is vague, the request stands in for something else and you have not found it yet.",
    },
    {
      term: "The sponsor, the decision maker and the users are usually three people",
      explain:
        "The sponsor pays and unblocks. The decision maker settles arguments between departments. The users live with the result. They are frequently three different people, and occasionally nobody has been given the second job.",
      detail:
        "Find out on day one who settles a genuine disagreement between two departments. If the answer is that it goes to a committee, expect every disagreement to take a month, and plan around that.",
    },
    {
      term: "Disagreement is information, not a problem to smooth over",
      explain:
        "When two people want incompatible things, that is usually a real tension in the business that predates your project. Papering over it produces a compromise that serves neither and that nobody owns.",
      detail:
        "Make it explicit, put numbers on both sides, and take it to whoever can decide. Your job is to frame the choice accurately, not to settle it by finding a middle point nobody asked for.",
    },
    {
      term: "Put numbers on both sides before escalating",
      explain:
        "Two people disagreeing is an argument. Two options with volumes, costs and consequences attached is a decision, and decisions get made.",
      detail:
        "Never escalate a disagreement without the numbers. Senior people resent being asked to referee between two opinions, and they respond well to being asked to choose between two costed outcomes.",
    },
    {
      term: "Build goodwill before you need it",
      explain:
        "The time to establish that you are useful and honest is before you have to tell somebody their request is out of scope. Answer small questions quickly, share findings that help them, give them credit publicly.",
      detail:
        "The cheapest deposit is following up on something they mentioned in passing. It shows you were listening and it costs ten minutes.",
    },
    {
      term: "Deliver bad news early, in person, with an option",
      explain:
        "The instinct is to wait until you have a solution. The result is that they hear about a problem late, often from somebody else, and conclude you were managing them.",
      detail:
        "Say it early, say what you propose to do, and say what you need from them. People forgive problems and they do not forgive being surprised, particularly in front of their own boss.",
    },
    {
      term: "A sponsor who has gone quiet is a risk, not an inconvenience",
      explain:
        "A sponsor who stops turning up has usually either lost confidence or been reassigned in practice if not on paper. Both are serious and both are recoverable if you catch them early.",
      detail:
        "Ask directly whether this is still a priority and what would make it worth their time. The worst outcome is finding out at a steering group that the project quietly lost its backing months ago.",
    },
    {
      term: "Handling somebody who will not engage",
      explain:
        "Sometimes a key person will not give you time. Write down what you need from them, what you have assumed in their absence, and the risk that carries, and send it to them and to your sponsor.",
      detail:
        "This is not a political move, it is a factual one. Roughly half of people who will not engage respond to a specific written assumption about their area, because correcting something wrong is much easier than starting from nothing.",
    },
    {
      term: "Match the format to the person",
      explain:
        "Some people read documents, some need a five-minute conversation, some will only engage with a picture. Sending everybody the same thirty-page pack is efficient for you and useless for most of them.",
      detail:
        "Ask directly how they prefer to receive things. Almost nobody gets asked, people answer honestly, and it substantially changes how much attention your work gets.",
    },
    {
      term: "Write down who decided what, and when",
      explain:
        "A dated log with names is the single most valuable political artefact a BA keeps, and it is not a defensive one.",
      detail:
        "Its real value is that it stops the same decision being made three times with different answers. Send it round after each meeting and let corrections come back, which is also how you find out that somebody heard something different from what was said.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The person found during testing.",
      walkthrough:
        "The problem: a new order process was built with sales, operations and finance closely involved. What was happening: at testing, somebody brought in a member of the credit control team, who pointed out that the redesigned order record no longer carried a field they use to flag accounts under review. They use it several times a day and it had never been mentioned, because nobody in the project had any reason to know credit control read that record at all.",
      result:
        "What changed: the fix was small and the timing was expensive. They were missed because the project listed the departments involved in the process rather than following the record to everybody who reads it. The question that would have found them: who else looks at this after we are finished with it, and what do they do with it?",
    },
    {
      kind: "illustration",
      scenario: "Two directors, one impossible pair of requirements.",
      walkthrough:
        "The problem: sales wanted orders to go straight through on submission. Finance wanted a credit check done before anything was committed. What was happening: the BA's first instinct was to find a compromise, maybe a check running alongside. Instead she put numbers on both sides: how many orders a month come from accounts that would fail a check, what those orders are worth, what the bad debt on that category has actually been, and how much delay a check really adds.",
      result:
        "What changed: with numbers on the table the decision took one meeting and produced a threshold rule neither director had suggested. Full check above a value, straight through below it, reviewed quarterly. The compromise she would have designed herself would have satisfied nobody. Putting numbers on a disagreement turns it from a contest of seniority into a decision somebody can actually take.",
    },
    {
      kind: "illustration",
      scenario: "The assumption that got an answer.",
      walkthrough:
        "The problem: a department head had cancelled four meetings and was not replying to anything. What was happening: the BA wrote half a page. This is what we believe your team needs, this is what we have assumed about your approval limits, this is the risk if the assumption is wrong, and we will proceed on this basis from a stated date unless corrected. It went to the department head and the sponsor together.",
      result:
        "What changed: a detailed correction arrived within two days. Reviewing something specific and wrong takes five minutes. Engaging with an open-ended request takes an hour nobody has. This works often enough to be a standard move, and when it does not work it produces a written record of what you assumed and why.",
    },
  ],

  learningPath: [
    {
      title: "Build the list by walking the process",
      body: "For every step, ask who does it, who receives the output, who fixes it when it goes wrong, who supports the system, and who performs any check. Do not start from the org chart.",
      effort: "Half a day",
      outcome: "A list that includes the four groups normally missed.",
    },
    {
      title: "Find out what each of them is judged on",
      body: "Ask directly. What does a good quarter look like for you, and what would make this project a nuisance? People answer this candidly far more often than you would expect.",
      effort: "1-2 days of short conversations",
      outcome: "A way of predicting how each person will behave, which is more useful than any grid.",
    },
    {
      title: "Work out who decides",
      body: "Identify the sponsor, whoever settles arguments between departments, and the owner of each area. Where the second is unclear, raise it now rather than at the first disagreement.",
      effort: "1 hour",
      outcome: "A known escalation route before you need one, which is the only time it can be established calmly.",
    },
    {
      title: "Agree how each person wants to be dealt with",
      body: "Ask how they want to receive things and how often. Write it down. Then actually do it, including for the ones who want less contact than you would prefer.",
      effort: "Part of the first conversations",
      outcome: "Materially better response rates, for the cost of one question.",
    },
    {
      title: "Do one useful thing for each key person",
      body: "Answer something small, share a finding that helps them, or follow up on something they mentioned in passing. Do this before you need anything difficult from them.",
      effort: "Ongoing, minutes each",
      outcome: "The goodwill you will spend later when you have to say no to something.",
    },
    {
      title: "Handle the first disagreement properly",
      body: "Put numbers on both positions, present them as costed options, take them to whoever decides, record the outcome. Resist designing a compromise yourself.",
      effort: "2-3 days",
      outcome: "A decision rather than a fudge, and a demonstration of how you will handle the next one.",
    },
  ],

  exercises: [
    {
      title: "Hunt the missing person",
      brief:
        "Take any current project and follow its main output forwards: who receives it, who reads it, who reports on it, who fixes it when it is wrong, who supports the system. Compare that against the project's official list.",
      success:
        "You find at least one person or team not on the list who would be materially affected, and you can say what they would lose.",
      time: "2 hours",
    },
    {
      title: "Ask what a good quarter looks like",
      brief:
        "Ask three people on your project what a good quarter looks like for them personally, and what would make this project an inconvenience. Write both answers down word for word.",
      success:
        "You can predict at least one position each will take later, and explain it without reference to their personality.",
      time: "1 hour",
    },
    {
      title: "Put numbers on a live disagreement",
      brief:
        "Find an unresolved disagreement on your project. Write both positions as costed options: volumes, cost, consequence, who is affected. Do not recommend either.",
      success:
        "The disagreement becomes a decision somebody can take in one meeting, and you can name who that person is.",
      time: "Half a day",
    },
  ],

  mistakes: [
    {
      mistake: "Building the list from the org chart",
      why: "The structure describes reporting lines, not how information flows. The people affected by a change frequently sit outside the departments named in the project brief.",
      fix: "Walk the process and the output. Ask who receives, who fixes, who supports and who checks, at every step.",
    },
    {
      mistake: "Only talking to managers",
      why: "Managers describe the process as designed. The workarounds, exceptions and unwritten rules live with the people running it, and those are what break a build.",
      fix: "Talk to whoever does the task, and watch them do it where you can. Use managers for priorities and constraints.",
    },
    {
      mistake: "Smoothing over a disagreement instead of surfacing it",
      why: "A compromise designed by the analyst satisfies neither party and has no owner, so it gets abandoned the moment it becomes inconvenient.",
      fix: "Put numbers on both positions and take them to whoever can decide. Frame the choice, do not make it.",
    },
    {
      mistake: "Escalating without numbers",
      why: "You are asking a senior person to referee between two opinions, which they resent, and the outcome then follows seniority rather than evidence.",
      fix: "Present costed options with volumes and consequences. Decisions get made, arguments get deferred.",
    },
    {
      mistake: "Saving bad news until you have a solution",
      why: "They hear about it late, often from somebody else, and conclude you were managing them rather than working with them. That impression is very hard to reverse.",
      fix: "Raise it early with what you propose and what you need. People forgive problems and not surprises.",
    },
    {
      mistake: "Accepting a sponsor who has gone quiet",
      why: "A project without active backing loses its escalation route and its funding protection, and you usually find out at the worst possible moment.",
      fix: "Ask directly whether it is still a priority. If the answer is soft, put the risk in writing to whoever appointed them.",
    },
    {
      mistake: "Treating everybody the same way",
      why: "Most of what you send gets ignored, and you conclude people are disengaged when they simply are not reading a thirty-page pack.",
      fix: "Ask each person how they want to receive things, write it down, and follow it even when it is inconvenient for you.",
    },
    {
      mistake: "Not writing down decisions",
      why: "The same decision gets made several times with different answers, and eventually a version surfaces that contradicts what was built.",
      fix: "Dated log with names and reasoning, sent round after each meeting so corrections come back quickly.",
    },
  ],

  bestPractices: [
    "Build the list by walking the process, never from the org chart.",
    "Include people downstream, people handling exceptions, support teams and check owners.",
    "Write down what each person is judged on.",
    "Ask what decision a request would help them make.",
    "Identify the sponsor, the decision maker and the area owners separately.",
    "Ask each person how they want to be dealt with, and follow it.",
    "Do small useful things before you need anything difficult.",
    "Put numbers on both sides of a disagreement before escalating.",
    "Frame decisions rather than designing compromises.",
    "Deliver bad news early, in person, with an option attached.",
    "Put written assumptions in front of anybody who will not engage.",
    "Keep a dated decision log and send it round.",
  ],

  proTips: [
    "Ask every person what they think this project is for, in their own words, and write the answers down side by side. On one job I collected six materially different answers from people who had all been at the same kick-off, and showing that page to the sponsor was more useful than anything else I did that month.",
    "The most valuable person on any project is usually the one who has been there longest in an unglamorous job. They know why the odd rule exists, which system nobody trusts, and what was tried in 2018 and failed. Find them in the first week and treat their time as the scarce resource it is.",
    "When somebody blocks a change, find out what they are protecting rather than assuming they are being difficult. Most obstruction turns out to be a check that matters, a workload they cannot absorb, or a promise they made to somebody else. All three are solvable and none of them respond to persuasion.",
    "Send your notes back to whoever you interviewed within a day, and ask them to correct anything you got wrong. Half will correct something, which improves your work, and all of them register that you took them seriously. It is the highest-return ten minutes in the job.",
  ],

  businessApplications: [
    "Projects spanning departments, where the tension between two teams' targets is the actual problem to solve.",
    "Replacing a system, where the support team and the people handling exceptions are the ones most often missed.",
    "Mergers and restructures, where who decides is genuinely unclear and establishing it early is most of the work.",
    "Supplier implementations, where the supplier is a stakeholder with different incentives from everybody else in the room.",
    "Legal and compliance change, where the compliance team holds a veto that is easier to work with than around.",
    "Any change that reduces somebody's headcount or control, where being honest about intent decides whether you get real information.",
  ],

  checklist: [
    "List built by walking the process and the output.",
    "Downstream, exception handling, support and check owners included.",
    "What each person is judged on is written down.",
    "The real want behind each request has been established.",
    "Sponsor, decision maker and area owners identified by name.",
    "Escalation route agreed before the first disagreement.",
    "Preferred format and frequency recorded per person.",
    "At least one useful thing done for each key person.",
    "Disagreements costed and presented as options.",
    "Bad news raised early with a proposal attached.",
    "Written assumptions sent to anybody who will not engage.",
    "Decision log kept, dated, named and sent round.",
  ],

  faqs: [
    {
      q: "How do I handle somebody who keeps changing their mind?",
      a: "Usually it is not indecision but a need that was never properly understood, or somebody else influencing them between meetings. Go back to what they are trying to achieve rather than what they asked for last time, and find out who they talk to afterwards.",
    },
    {
      q: "What do I do when the sponsor is not senior enough?",
      a: "You will find out at the first disagreement between departments, when they cannot settle it. Raise it early as a specific risk with an example of a decision they would not be able to make, rather than as a general worry about seniority.",
    },
    {
      q: "How much time should this take?",
      a: "More than you expect, and mostly early. A good rule is that if you have not spoken to somebody in a fortnight, you no longer know their position. On a busy project that is a day a week and it is not overhead.",
    },
    {
      q: "Should I tell people the change may affect their jobs?",
      a: "Say what you know and be plain about what you do not. Reassurance you cannot guarantee is the fastest way to lose the room permanently. People handle an honest I have not been told far better than a promise that later proves false.",
    },
    {
      q: "What if two people give contradictory requirements and neither will move?",
      a: "That is a business decision, not an analysis problem. Put numbers on both, present them as options with consequences, and take them to whoever owns both areas. If nobody owns both, you have found the real finding.",
    },
    {
      q: "Is a responsibility matrix worth producing?",
      a: "Occasionally, in large programmes where ownership is genuinely unclear. On most projects it becomes something nobody looks at. A short list of who decides what, kept current, does the same job and gets read.",
    },
  ],

  tools: [
    { name: "A seven-column list", what: "Name, role, what they are judged on, what they want, what they could lose, how they want to be dealt with, who they listen to.", cost: "Free" },
    { name: "A dated decision log", what: "Decision, date, who decided, reasoning, who was consulted. Sent round after each meeting.", cost: "Free" },
    { name: "A one-page disagreement template", what: "Two positions, volumes, costs, consequences, decision needed, who decides. Turns arguments into decisions.", cost: "Free" },
    { name: "Notes returned within a day", what: "Costs ten minutes, improves accuracy and shows you listened. The cheapest trust-building there is.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "asking-questions-that-get-answers", anchor: "getting real answers from these people", context: "Getting information" },
    { slug: "delivering-change-into-a-business", anchor: "keeping them with you through the change", context: "Delivery" },
    { slug: "presenting-analysis-to-executives", anchor: "taking a decision to the people who make it", context: "Decisions" },
  ],

  relatedGuides: ["asking-questions-that-get-answers", "delivering-change-into-a-business", "presenting-analysis-to-executives"],

  conclusion: [
    "Ask three people on your current project what they think it is for, in their own words, and write the answers side by side. If they differ materially, and they usually do, that page is the most useful thing you will produce this week and it took an hour.",
  ],
};

export default guide;
