import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "putting-a-model-into-a-real-process",
  seoTitle: "Getting a Model Into a Process People Actually Use",
  metaDescription:
    "A model that works is not a model that helps. Where the answer appears, who acts on it, what happens when it is wrong, and how to know it is being used.",
  title: "Getting a Model Into Real Use",
  keywords: [
    "deploying a model business",
    "model adoption",
    "operationalising machine learning",
    "model in a business process",
    "ai in the workflow",
    "model handover",
  ],
  category: "automation",
  level: "Intermediate",
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 13,

  intro: [
    "A model that works is not a model that helps. Between the two sits the part almost everybody underestimates: getting the answer in front of the right person, at the right moment, in a form they will act on, with somebody accountable for what happens next.",
    "The pattern is depressingly consistent. Months of careful work produce something accurate, it gets delivered as a daily list or a number on a screen, and six months later nothing in the business is measurably different. The model was never the problem.",
    "This is the last mile, and it is where the value either arrives or does not. Most of it is not technical at all. It is the same work as putting any change into a business that has to keep running.",
  ],

  whyItMatters: [
    "This is where the return on the whole project is decided. Everything before it is cost. If nobody acts differently, an accurate model has produced exactly the same business outcome as no model.",
    "It is also the part with no natural owner. The technical team consider their job done when it works. The business considers it a technical project. The gap between those two positions is where these things die.",
    "And it is entirely predictable. Every failure in this area comes from a short list of causes, all of them avoidable if somebody thinks about them before the model is finished rather than after.",
  ],

  coreConcepts: [
    {
      term: "Where the answer appears decides whether it gets used",
      explain:
        "The same prediction in a daily email, on the screen somebody already works from, or in a separate system they have to log into produces completely different results.",
      detail:
        "Put it where the work already happens. Anything requiring somebody to go and look at a second place will be used for a fortnight and then quietly abandoned.",
    },
    {
      term: "The moment matters as much as the place",
      explain:
        "A score that arrives after the decision has been made is decoration. It has to be there when somebody is deciding.",
      detail:
        "Ask when the decision actually gets taken, and make sure the answer is available before that. This sounds obvious and gets missed regularly, because the model runs on a schedule that suited the technical side.",
    },
    {
      term: "Say why, or people will override it",
      explain:
        "A number on its own gets ignored by anybody with their own view. Two lines saying what pushed it up or down changes that completely.",
      detail:
        "This is not a nice extra. People do not act on things they cannot interrogate, and a model more accurate than the humans that nobody follows is worth nothing at all.",
    },
    {
      term: "Somebody has to be accountable for the action",
      explain:
        "Not for the model. For what happens as a result. Who acts, how quickly, and what they do.",
      detail:
        "Without a name, the output lands in a shared inbox and becomes everybody's problem, which means nobody's. This is the most common single reason for a technically successful project delivering nothing.",
    },
    {
      term: "The volume has to match what people can do",
      explain:
        "A list of six hundred for a team of three is not a list, it is a wall. They will work the top few and stop opening it.",
      detail:
        "Set the volume from real capacity and rank so the best candidates are at the top. This one adjustment saves more of these projects than any improvement in accuracy.",
    },
    {
      term: "Decide what happens when it is wrong",
      explain:
        "Somebody gets flagged who should not have been. What happens? Who can override it, how, and does anything get recorded?",
      detail:
        "An override route is not a sign of failure, it is what makes people willing to use the thing at all. And recorded overrides are the most useful feedback you will ever get.",
    },
    {
      term: "People need to know it might be wrong",
      explain:
        "If nobody tells them, some people will treat it as authoritative and others will ignore it entirely. Both are worse than telling them how often it is right.",
      detail:
        "Say plainly how often it is wrong and in which direction. Teams handle that well. What they handle badly is discovering it themselves after acting on something incorrect.",
    },
    {
      term: "Check afterwards who it is affecting",
      explain:
        "For anything about people, look at outcomes broken down by group after it has been running. You cannot see this from the model itself.",
      detail:
        "A model learns whatever pattern was in the history, including ones nobody would endorse. Checking outcomes afterwards is the only reliable way to catch it, and somebody has to be given that job.",
    },
    {
      term: "Hold some back so you can tell whether it helped",
      explain:
        "A random group who do not get the action. Compare after an agreed period. Without this you can never say whether any of it worked.",
      detail:
        "It costs almost nothing at the start and becomes politically difficult to add later, because introducing it means admitting nobody knows. Build it in from day one.",
    },
    {
      term: "Somebody has to own it after the project team leaves",
      explain:
        "Who monitors it, who refreshes it, who can switch it off. Named, before go-live, not after.",
      detail:
        "The most common ending for one of these is that the person who built it moved on, nobody replaced them, and it quietly degraded until somebody turned it off. Naming the owner in advance prevents most of that.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "What checking afterwards would have caught.",
      walkthrough:
        "Amazon developed a system to score job applicants, trained on CVs submitted over the previous decade. Because that pool was overwhelmingly male, the model learned that male candidates had been preferred. By 2015 it was penalising CVs containing the word women's and favouring verbs more common on men's applications. The company concluded it could not reliably make the model neutral and abandoned it.",
      result:
        "The engineering was competent and the model fitted its data faithfully. Nothing about the accuracy figures would have shown this. The lesson for putting anything into a real process is that when a model affects people, checking outcomes by group after it has been running is not optional, and somebody has to be given that job before go-live.",
      source: {
        label: "Dastin, Reuters (10 October 2018). Amazon scraps secret AI recruiting tool that showed bias against women",
        url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women",
      },
    },
    {
      kind: "illustration",
      scenario: "An accurate list that nobody opened.",
      walkthrough:
        "The problem: a business built something predicting which customers were likely to leave. It worked reasonably well. The output was a list with a score against each name, emailed to the account team every Monday. What was happening: six months later a BA asked what they did with it. Nothing, mostly. Nobody had agreed what score was worth acting on, what the action was, or who had the time.",
      result:
        "What changed: they agreed the action first. Anybody above a certain score gets a call from their account manager within two working days, the list was cut to the twenty highest, and those account managers had that time protected in their week. The model had never been the problem.",
    },
    {
      kind: "illustration",
      scenario: "Two lines that stopped the overrides.",
      walkthrough:
        "The problem: a planning team was given predicted delivery times on their screen and kept overriding them. What was happening: asked why, they said they had no idea where the number came from and their own experience said otherwise. The model was actually more accurate than they were on average, and it made no difference at all.",
      result:
        "What changed: they added two lines under each number saying what pushed it up or down. Distance, number of drops, time of day. Overrides fell sharply, and the ones that remained turned out to be genuinely useful, because the planners knew things about specific customers the model did not. Showing why is what turns a number into something people act on.",
    },
  ],

  learningPath: [
    {
      title: "Agree the action before the model is finished",
      body: "Who acts, what they do, how quickly, and where the time comes from. Get it agreed by whoever manages that team.",
      effort: "A conversation",
      outcome: "The thing that decides whether any of this delivers anything.",
    },
    {
      title: "Decide where the answer appears",
      body: "In the screen people already work from, at the moment they decide. Not a separate system, not an email nobody opens.",
      effort: "1 hour to decide",
      outcome: "The difference between something used daily and something used for a fortnight.",
    },
    {
      title: "Set the volume from real capacity",
      body: "Ask the team how many they can properly handle. Set the output to roughly that, ranked with the best candidates at the top.",
      effort: "One conversation",
      outcome: "A list people work through rather than a wall they stop looking at.",
    },
    {
      title: "Add the reason to every answer",
      body: "Two lines saying what pushed it up or down, in business language. This is what stops people overriding on principle.",
      effort: "Part of the build",
      outcome: "Something people are willing to act on.",
    },
    {
      title: "Build the override route and record it",
      body: "Anybody can disagree, easily, and the reason gets captured. Those recorded reasons are the best feedback you will get.",
      effort: "Part of the build",
      outcome: "Trust, plus a stream of information about where the model is weak.",
    },
    {
      title: "Tell people how often it is wrong",
      body: "Plainly, in the training and in the interface. Teams handle honesty well and handle discovering it themselves badly.",
      effort: "Part of the rollout",
      outcome: "Sensible use rather than either blind trust or blanket dismissal.",
    },
    {
      title: "Set up the held-back group and the group check",
      body: "A random group who do not get the action, so you can measure. And a check on outcomes by group, for anything affecting people.",
      effort: "Part of the design",
      outcome: "The ability to say whether it worked, and the only reliable way to catch an unfair pattern.",
    },
    {
      title: "Name the owner for after the project ends",
      body: "Who monitors, who refreshes, who can switch it off. Named before go-live.",
      effort: "A conversation",
      outcome: "Something that survives the project team moving on.",
    },
  ],

  exercises: [
    {
      title: "Follow the output to the action",
      brief:
        "For any model in your business, follow its output all the way to somebody doing something differently. Ask the person at the end what they actually do with it.",
      success:
        "You can name the specific action and the person, or you have found that the trail goes cold.",
      time: "1 hour",
    },
    {
      title: "Check the volume against the capacity",
      brief:
        "Count how many items any model-driven list produces and ask the team how many they can properly handle. Compare.",
      success:
        "You can say whether the list is workable, and usually it is several times too long.",
      time: "45 minutes",
    },
    {
      title: "Ask about the held-back group",
      brief:
        "For any model-driven action running in your business, ask how they know the action helps. Listen for whether anybody is deliberately left out as a comparison.",
      success:
        "You either find a proper comparison or you establish that nobody knows whether the action does anything.",
      time: "30 minutes",
    },
  ],

  mistakes: [
    {
      mistake: "Treating go-live as the finish",
      why: "Everything up to that point is cost. If nobody acts differently, an accurate model has produced the same outcome as no model at all.",
      fix: "Agree the action, the owner and the timing before the model is finished, not after.",
    },
    {
      mistake: "Putting the answer somewhere people do not already go",
      why: "Anything requiring a second system or a separate email gets used briefly and then quietly abandoned, whatever its quality.",
      fix: "Put it in the screen people already work from, at the moment they decide.",
    },
    {
      mistake: "Sending a number with no reason attached",
      why: "People with their own view override anything they cannot interrogate. You end up with something more accurate than the humans that changes nothing.",
      fix: "Two lines saying what pushed it up or down, in business language.",
    },
    {
      mistake: "Producing more than the team can handle",
      why: "A list several times longer than capacity gets abandoned entirely, so a model that would have helped delivers nothing.",
      fix: "Set the volume from real capacity, ranked with the best at the top.",
    },
    {
      mistake: "No override route",
      why: "People will not use something they cannot disagree with, and you lose the best feedback available about where it is weak.",
      fix: "Make overriding easy and capture the reason. Treat those reasons as valuable rather than as a problem.",
    },
    {
      mistake: "Never checking outcomes by group",
      why: "A model reproduces whatever pattern was in the history, and nothing in its accuracy figures will show you an unfair one.",
      fix: "For anything affecting people, check outcomes by group after it has been running, and give somebody that job.",
    },
    {
      mistake: "No held-back group",
      why: "You can never tell whether the action helps. Adding one later is politically difficult because it means admitting nobody knows.",
      fix: "Build it in from day one. It costs almost nothing at the start.",
    },
    {
      mistake: "No owner after the project ends",
      why: "The person who built it moves on, nothing replaces them, and it degrades quietly until somebody turns it off.",
      fix: "Name the owner before go-live, with authority to refresh and to switch off.",
    },
  ],

  bestPractices: [
    "Agree the action, the person and the timing before the model is finished.",
    "Put the answer where people already work, at the moment they decide.",
    "Set the volume from real capacity and rank the output.",
    "Show two lines of reason with every answer.",
    "Make overriding easy and capture the reason.",
    "Tell people plainly how often it is wrong.",
    "Hold back a random group so you can measure whether it helped.",
    "Check outcomes by group for anything affecting people.",
    "Name the owner for after the project team leaves.",
  ],

  proTips: [
    "Sit with somebody using it in the second week and again in the sixth. What you see in week two is people trying it. What you see in week six is what they have actually settled into, which is frequently a workaround you would never have predicted. Neither shows up in any usage statistic.",
    "Read the override reasons every month for the first six months. They are the most honest description you will get of where the model is weak and what it does not know, and they cost nothing to collect because people are writing them anyway.",
    "Ask what the team did before the model existed, and make sure the new way is genuinely less work rather than more. A prediction that adds a step to somebody's day competes with everything else they have to do, and it usually loses however accurate it is.",
    "Ask who gets blamed if somebody acts on a wrong answer. If the person receiving it carries all the downside and none of the authority, they will quietly ignore it, and no amount of accuracy fixes that. It is a governance question rather than a technical one.",
  ],

  businessApplications: [
    "Putting any prediction in front of a team who have to act on it.",
    "Reviewing a model that works and is not delivering anything.",
    "Handing a model over from a project team to the business.",
    "Deciding whether a model can act automatically or needs a person.",
    "Rolling out a supplier's model into your own process.",
    "Working out why an accurate system is being overridden constantly.",
  ],

  checklist: [
    "Action, person and timing agreed before the model was finished.",
    "Answer appears where people already work, at the deciding moment.",
    "Volume matched to real capacity, output ranked.",
    "Reasons shown alongside every answer.",
    "Override route built, with reasons captured.",
    "People told plainly how often it is wrong.",
    "Random held-back group in place.",
    "Outcome check by group scheduled for anything affecting people.",
    "Named owner for monitoring, refreshing and switching off.",
    "Week two and week six observation sessions booked.",
  ],

  faqs: [
    {
      q: "Why do accurate models so often change nothing?",
      a: "Because accuracy was never the constraint. The constraint is whether the answer reaches the right person at the right moment in a form they will act on, and whether anybody has the time and the authority to act.",
    },
    {
      q: "Should people be able to override it?",
      a: "Almost always yes, and the reasons should be captured. Overriding is what makes people willing to use it, and the recorded reasons are the best information you will get about where it is weak.",
    },
    {
      q: "How do we know if it is being used?",
      a: "Watch somebody use it in week two and week six, and read the override reasons. Usage statistics tell you people opened something. They do not tell you whether anybody did anything differently.",
    },
    {
      q: "Do we have to hold a group back?",
      a: "If you want to be able to say whether it helped, yes. It costs almost nothing at the start and becomes very awkward to introduce later, because doing so means admitting nobody knows.",
    },
    {
      q: "Who should own it after go-live?",
      a: "One named person in the business who monitors it, decides when to refresh it, and can switch it off. Not the supplier and not the project team, both of whom will move on.",
    },
    {
      q: "How do we check for an unfair pattern?",
      a: "Look at outcomes broken down by group after it has been running. You cannot see this from the model or from its accuracy figures, and somebody has to be given the job of looking.",
    },
  ],

  tools: [
    { name: "A named action and owner", what: "Who does what, how quickly, agreed before the model is finished.", cost: "Free" },
    { name: "A capacity figure", what: "How many the team can properly handle. Sets the volume and saves more of these projects than accuracy does.", cost: "Free" },
    { name: "Two lines of reason per answer", what: "What pushed it up or down. What stops people overriding on principle.", cost: "Free" },
    { name: "A random held-back group", what: "The only way to know whether the action helped. Costs almost nothing on day one.", cost: "Free" },
  ],

  resources: [
    { title: "Amazon scraps secret AI recruiting tool", kind: "Docs", note: "The clearest case of a competently built model reproducing a pattern from its history that nobody would endorse, and that no accuracy figure would have revealed.", url: "https://www.euronews.com/business/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women" },
  ],

  internalLinks: [
    { slug: "why-models-stop-working", anchor: "keeping it working afterwards", context: "Ongoing" },
    { slug: "predicting-versus-deciding", anchor: "turning the answer into an action", context: "The action" },
    { slug: "delivering-change-into-a-business", anchor: "the wider skill of landing a change", context: "Change" },
  ],

  relatedGuides: ["why-models-stop-working", "predicting-versus-deciding", "delivering-change-into-a-business"],

  conclusion: [
    "Take any model running in your business and follow its output all the way to somebody doing something differently. If the trail goes cold at a list in an inbox, you have found where the value is being lost, and it has nothing to do with the model.",
  ],
};

export default guide;
