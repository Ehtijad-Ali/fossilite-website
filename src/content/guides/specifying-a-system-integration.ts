import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "specifying-a-system-integration",
  seoTitle: "Connecting Two Systems: The Questions Nobody Asks",
  metaDescription:
    "Getting two systems to talk is the easy part. The hard part is agreeing what the words mean, who is right when they disagree, and what people do while it is broken.",
  title: "Connecting Two Systems Together",
  keywords: [
    "integration requirements",
    "interface specification",
    "business systems analyst integration",
    "api requirements",
    "system interface design",
    "data exchange specification",
  ],
  category: "api-integration",
  level: "Advanced",
  updated: "2026-08-22",
  author: PETER_NGUYEN,
  readingTime: 15,

  intro: [
    "Connecting two systems looks like a technical job and mostly is not. Getting information from one place to another is a solved problem. Developers do it every day and they are good at it.",
    "What is not solved, and what nobody except an analyst is going to sort out, is the awkward stuff underneath. Does customer mean the same thing in both systems? When the two disagree about an address, which one is right? And what are people supposed to do on the morning the connection is down?",
    "Those are all business questions. If nobody answers them out loud, they get answered quietly by whoever writes the code. Their answers will be sensible and some of them will be wrong, and you will find out months later when two reports do not match and nobody can say why.",
  ],

  whyItMatters: [
    "Connections break differently from normal software. When an application breaks, it stops and somebody notices. When a connection breaks, it often keeps running and just sends nothing, or sends something slightly wrong. The first sign is usually a customer or an accountant asking why two numbers do not agree.",
    "The damage also builds up quietly. A field matched to the wrong thing produces bad data every day it runs. By the time anyone investigates there might be two years of it, and no easy way to tell which records are affected.",
    "And this is where two departments, or two companies, meet. Each has its own words, its own release dates and its own priorities. Somebody has to make that boundary explicit, and it is not going to be either of the development teams.",
  ],

  coreConcepts: [
    {
      term: "Start with what happened, not what gets sent",
      explain:
        "Something happened in the real world and that is why data needs to move. A customer placed an order. A payment cleared. An engineer finished a job. That event is the requirement. The message is just how it gets there.",
      detail:
        "Start from the list of fields instead and you get a connection that copies data. Start from the event and you get one that actually tells the other side something. The difference shows up the first time the business changes how it works.",
    },
    {
      term: "Decide which system is right when they disagree",
      explain:
        "For every important fact, pick one system that is in charge of it. The others hold a copy. Write down which is which and who is accountable for it being correct.",
      detail:
        "If both systems let people edit the same thing, you have created reconciliation work that will run forever. That might be an acceptable trade. It has to be a decision somebody made, not something that just happens.",
    },
    {
      term: "Get both sides to define the same word separately",
      explain:
        "Ask each system's owner to write down what customer, or order, or complete means in their system. Separately, without seeing each other's answer. Do this before anybody matches up a single field.",
      detail:
        "This is the best hour you will spend on the whole project. Two systems using one word for two different things is completely normal, and matching field to field hides it perfectly until the record counts come out different.",
    },
    {
      term: "Which way, what starts it, and how fast are three separate questions",
      explain:
        "Data flowing one way or both ways. What kicks it off. And how quickly it has to get there. Overnight, hourly, or the moment it happens are three very different things for the business.",
      detail:
        "Work out the speed from a consequence, not a preference. If being four hours behind causes a customer problem and twenty minutes does not, you have your answer and you can defend it. If somebody just prefers real time, that is not a reason.",
    },
    {
      term: "Say what the receiving system does with each message",
      explain:
        "Create a new record, or update one that already exists? If updating, matched on what? And if it cannot find a match, does it create one or reject it?",
      detail:
        "Matching is a business rule and it is usually vague. Two customers with the same name. An order number reused after an old system was replaced. A record that exists on one side and not the other. Each needs a written answer.",
    },
    {
      term: "The same message will arrive twice, so decide what that means",
      explain:
        "Networks retry. Systems get restarted halfway through. Someone reruns yesterday's file by mistake. It will happen. The question is whether it does any harm.",
      detail:
        "Ask it as a business question: if this came through twice, would the customer be charged twice, would stock come down twice, would they get two emails? Then say what makes two messages the same one, so the system can spot it.",
    },
    {
      term: "Messages can arrive out of order",
      explain:
        "An update can overtake the thing it is updating. Or two updates arrive the wrong way round and the older value ends up sticking.",
      detail:
        "Where the order matters, say so and say how you tell which came first. Where it does not matter, say that too, so nobody builds machinery for a problem you do not have.",
    },
    {
      term: "Say what happens when it fails, in four parts",
      explain:
        "What does the user see. What gets written down. Does it try again, and how many times. And is anything left half-done.",
      detail:
        "That last one causes the most lasting damage. A transfer that updates one system and then fails before updating the other leaves the business in a state neither side knows is wrong. Somebody has to decide in advance how that gets spotted and fixed.",
    },
    {
      term: "Say what people do while it is broken",
      explain:
        "Not what the system does. What the person does. Do they wait, do it on paper, or turn the customer away? And what happens to that paper work when the connection comes back?",
      detail:
        "This is the thing most often missing completely, and it is the one the operation needs on the first bad day. Work done manually during an outage that then has to be typed in and checked by hand is a decision, not an accident.",
    },
    {
      term: "Agree how you will check both sides match, before it goes live",
      explain:
        "What gets counted, how often, by whom, and how big a difference is acceptable. Number of records, total value, count by status.",
      detail:
        "Without this, a connection that has been quietly dropping a few records a day looks exactly like one that is working perfectly. A daily count on both sides is cheap and it is the only way anybody ever finds out.",
    },
    {
      term: "Ask what happens on the big days",
      explain:
        "How many messages a day, what the busiest day looks like, and what happens during something unusual like a price change across the whole catalogue or a bulk customer update.",
      detail:
        "A connection built for a steady trickle behaves very differently when fifty thousand records arrive at once. Those days are usually foreseeable, and they are what breaks connections.",
    },
    {
      term: "The other side has its own release schedule",
      explain:
        "If the other end is another company or another department, their change dates, their version numbers and how they tell you about changes are all constraints you have to live with.",
      detail:
        "Agree early how you will be told when something changes at their end, and what happens if you are not. The answer nobody likes is that you find out when it breaks, and it is much better to know that in advance.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "One word, two meanings, and a count that never matched.",
      walkthrough:
        "The problem: two systems were exchanging customer records and the totals never agreed. Nobody could explain the gap. What was happening: the BA asked both system owners to define customer, separately. Billing created one record per paying entity, so a group of companies paying centrally showed up as a single customer. The CRM had one record per trading business. Both were right for their own purpose and neither team had ever had a reason to compare.",
      result:
        "What changed: they wrote a rule for how group structures map across, which nobody had thought to specify. The general lesson is one hour of work: before matching up any records, get both owners to write their definition down separately and put the two sentences side by side.",
    },
    {
      kind: "illustration",
      scenario: "The order that was confirmed and never picked.",
      walkthrough:
        "The problem: customers were waiting for goods that had never been sent. What was happening: confirming an order updated the order system and then told the warehouse system. Under load, that second call failed now and then. The order showed as confirmed, the warehouse never heard about it, and nothing looked broken because the order system's own part had worked perfectly.",
      result:
        "What changed: they decided that an order could not be confirmed until the warehouse had acknowledged it. The specification had covered what happens when the message is sent, and said nothing about what happens when the second half fails. That is a business decision about whether a customer should be told yes before the warehouse knows, and it is not a question a developer should be answering alone at the end of a sprint.",
    },
    {
      kind: "illustration",
      scenario: "Quietly losing records for months.",
      walkthrough:
        "The problem: a connection had been running for months and everyone considered it stable. What was happening: the BA introduced a simple daily check. Records sent, records received, records rejected, and the total value on each side. On the very first day the counts did not match. Records with a particular character in the address field were failing a check at the receiving end and being thrown away without any alert.",
      result:
        "What changed: they fixed the validation and added the daily check permanently. Nobody knew how long it had been happening or which records had gone. This is why checking both sides match is not optional housekeeping. Without it, a partly broken connection looks identical to a working one, and it is designed to fail silently.",
    },
  ],

  learningPath: [
    {
      title: "Write down what happened in the real world",
      body: "The events that mean data needs to move, and what the receiving business does as a result. One sentence each.",
      effort: "2 hours",
      outcome: "A requirement about communicating something, rather than about copying fields.",
    },
    {
      title: "Get both sides to define the shared words",
      body: "Each owner writes what every shared term means in their system, separately. Then compare and chase down every difference.",
      effort: "Half a day",
      outcome: "The mismatches that would otherwise show up later as counts that do not agree.",
    },
    {
      title: "Decide which system is in charge of each fact",
      body: "One system in charge, with a named person accountable. Flag anywhere both sides can edit the same thing.",
      effort: "Half a day",
      outcome: "The decision that drives direction, conflict handling and the daily checks.",
    },
    {
      title: "Match up the fields with no blanks",
      body: "For each field at the receiving end: which field it comes from, anything that changes on the way, what to do when the source is empty, what to do when the value is not one the receiver accepts, what the default is, and who confirmed what it means.",
      effort: "2-5 days",
      outcome: "Something a developer can build without guessing.",
    },
    {
      title: "Sort out matching, duplicates and ordering",
      body: "What identifies an incoming record, what happens when nothing matches, what a duplicate would mean for the customer, and whether order matters.",
      effort: "1 day",
      outcome: "The three questions that cause the most expensive problems later.",
    },
    {
      title: "Write down what happens when it breaks",
      body: "What the user sees, what gets recorded, whether it retries, what is left half-done, and what people do while it is down.",
      effort: "1 day",
      outcome: "A business that can keep working on a bad day, and a plan for tidying up afterwards.",
    },
    {
      title: "Agree the daily check and the volumes before build",
      body: "What gets counted on each side, how often, who looks, and what size of difference matters. Plus daily volume, busiest day, message size and the bulk events.",
      effort: "Half a day",
      outcome: "The ability to tell whether it is working, which you otherwise do not have at all.",
    },
  ],

  exercises: [
    {
      title: "Ask both sides what a word means",
      brief:
        "Pick two systems in your business that exchange information about the same thing. Ask one person from each to define it in a sentence, without seeing the other's answer. Compare.",
      success:
        "You can name at least one real case the two definitions would count differently, and say what the connection currently does with it.",
      time: "1 hour",
    },
    {
      title: "What if it ran twice?",
      brief:
        "Take any existing connection and work out what would happen if yesterday's batch got processed a second time by mistake. Ask the business what the customer would see.",
      success:
        "You can say whether it is safe to rerun, and if not, what somebody would have to do to sort it out.",
      time: "1 hour",
    },
    {
      title: "Count both sides for a week",
      brief:
        "For one live connection, set up a daily count: records sent, received, rejected, and a total value on each side. Run it for a week and compare.",
      success:
        "You have a working daily check, and you know whether that connection is currently losing anything.",
      time: "Half a day plus a week of running",
    },
  ],

  mistakes: [
    {
      mistake: "Starting from the list of fields",
      why: "You get a connection that copies data rather than one that communicates something, and it stops making sense the first time the business changes how it works.",
      fix: "Write the events first: what happened, and what the receiving side does about it. Work out the message from there.",
    },
    {
      mistake: "Matching fields without checking what the words mean",
      why: "Two systems using one word for two different things is normal, and a field-by-field match hides it completely until the counts come out different.",
      fix: "Get both owners to write their definitions down separately, before any matching happens.",
    },
    {
      mistake: "Leaving empty fields and defaults to the developer",
      why: "They will pick something reasonable for the code. Whether a missing delivery date means today, or blank, or reject the whole thing is a business decision with real consequences.",
      fix: "Make the source, the change on the way, the empty-field behaviour and the default compulsory columns. No blanks allowed.",
    },
    {
      mistake: "Not saying what a duplicate means",
      why: "Retries and reruns are normal. Without a rule for spotting the same message twice, the business finds out through double charges or double deliveries.",
      fix: "Ask what the customer would experience if it came through twice, then say what makes two messages the same one.",
    },
    {
      mistake: "Ignoring the half-finished case",
      why: "A transfer that updates one side and fails before the other leaves a mismatch neither system knows about, and a customer usually finds it before you do.",
      fix: "Write down exactly what state the business is in after each possible failure point, and how it gets spotted and fixed.",
    },
    {
      mistake: "No plan for what people do while it is down",
      why: "On the first outage the team invents something under pressure, and the work done that day has to be sorted out by hand afterwards with no plan for it.",
      fix: "Say what the person does while it is broken, and what happens to that work when it comes back.",
    },
    {
      mistake: "No daily check",
      why: "A connection quietly losing a few records looks exactly like one that works, and by the time anyone notices you cannot tell what went missing.",
      fix: "Agree the counts, the acceptable difference, who looks and who they tell, before it goes live.",
    },
    {
      mistake: "Only designing for a normal day",
      why: "Bulk events break connections. A price change across the catalogue, a data migration, a mass customer update. These are all foreseeable and usually not considered.",
      fix: "Write down normal volume, the busiest day, message size, growth, and specifically what happens during a bulk event.",
    },
  ],

  bestPractices: [
    "Start from what happened in the real world, not from the list of fields.",
    "Name one system in charge of each fact, with an accountable person.",
    "Get both sides to define shared words separately, in writing.",
    "Treat direction, trigger and speed as three separate questions.",
    "Work out the speed requirement from a consequence, not a preference.",
    "Say what identifies an incoming record and what happens when nothing matches.",
    "Say what a duplicate would mean for the customer and how one gets spotted.",
    "Say whether order matters, and how you tell which came first.",
    "Cover failure in four parts, including anything left half-done.",
    "Say what people do while the connection is unavailable.",
    "Agree the daily counts and acceptable difference before go-live.",
    "Include normal volume, busiest day, message size and bulk events.",
    "Agree how the other side will tell you when something changes.",
  ],

  proTips: [
    "Ask what the two systems disagreed about last time and how it got sorted out. Any connection that has been running a while has a history of arguments about numbers, and the pattern in them tells you exactly where the definitions differ. It is faster than reading any documentation and it comes from the people who had to fix it.",
    "Insist on seeing real messages, not a description of what a message should contain. The description tells you what is allowed. Real ones show you what actually gets sent, including the field that is always empty, the code that is not in anybody's list, and the one somebody has been using to write notes in.",
    "Write the daily check before you write the connection. It forces you to decide what working would even look like, and that usually turns up something vague in the requirement itself. It is also the thing the support team will thank you for, which matters the next time you need something from them.",
    "Where the other end is a different company, ask what happens if they change their format without telling you, and write down the answer even when the answer is that you find out when it breaks. Sometimes writing it down makes somebody fix it. When it does not, at least the risk has been accepted on purpose.",
  ],

  businessApplications: [
    "Adding a new application to an existing set of systems, where the words have drifted apart over years.",
    "Connections to suppliers and partners, where their release dates are a constraint you do not control.",
    "Deciding which system owns customer data, where that question is the whole project.",
    "Replacing a system, where connections have to work with both old and new during the changeover.",
    "Reporting to a regulator, where completeness and matching totals are things you have to prove.",
    "Mergers, where two businesses hold information about the same customers under different rules.",
  ],

  checklist: [
    "Real-world events written down, with what the receiving business does about each.",
    "One system named as in charge of each fact, with an owner.",
    "Both system owners have defined shared words separately.",
    "Direction, trigger and speed decided separately and justified.",
    "Field matching complete with no blank cells anywhere.",
    "Matching rule written, including what happens when nothing matches.",
    "Duplicate handling written, including how a duplicate is recognised.",
    "Ordering requirement stated, with how you tell which came first.",
    "Failure covered: what the user sees, what is recorded, retries, half-finished work.",
    "Manual fallback written, including tidying up afterwards.",
    "Daily counts, frequency, acceptable difference, owner and escalation agreed.",
    "Volume, busiest day, message size, growth and bulk events documented.",
    "Change notification with the other side agreed.",
  ],

  faqs: [
    {
      q: "How technical does a BA need to be for this?",
      a: "Enough to follow a conversation about data and about things being retried. You do not need to design the technical solution. You need to be able to say what the business requires of it, which nobody else in the room can do.",
    },
    {
      q: "Overnight batch or straight away?",
      a: "Decide from consequence. If being a few hours behind causes a real customer problem, you need something closer to immediate. If not, an overnight run is cheaper, easier to check and easier to rerun when something goes wrong.",
    },
    {
      q: "Why does it matter if the same message arrives twice?",
      a: "Because retries and reruns happen constantly, and the consequence is a business question. Would the customer get charged twice, or receive two emails, or have stock taken off twice? That is yours to specify, not the developer's to discover.",
    },
    {
      q: "Who decides when the two systems disagree?",
      a: "Whoever owns that piece of information, which is why naming the system in charge comes before everything else. If both systems can edit the same thing, you have signed up for permanent checking work and that should be a conscious choice.",
    },
    {
      q: "The other company will not engage. What do I do?",
      a: "Write down what you will send and what you expect back, state your assumptions plainly, and send it to them and to your sponsor. People correct something specific and wrong far more readily than they answer an open question, and if they do not correct it you have a documented position.",
    },
    {
      q: "Do I need to say how it should be built technically?",
      a: "No. Say what the business needs: what happened, what the words mean, how fast, what happens when it breaks, how much, and how you will check. Picking the technology is a technical decision, and constraining it for no reason removes options that might be cheaper.",
    },
  ],

  tools: [
    { name: "A field matching sheet", what: "Receiving field, source field, anything that changes, what to do when empty, what to do with unknown values, default, who confirmed the meaning. No blanks.", cost: "Free" },
    { name: "Real sample messages", what: "Not a description of what should be sent. What actually gets sent, including the fields nobody documented.", cost: "Free" },
    { name: "A daily count on both sides", what: "Records sent, received, rejected, total value. Write it before you write the connection.", cost: "Free" },
    { name: "A two-column glossary", what: "Each word as each side defines it, side by side, with the rule that resolves the difference.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "data-requirements-for-analysts", anchor: "checking what the data on both sides actually looks like", context: "Before matching" },
    { slug: "api-integration-that-doesnt-break", anchor: "the engineering side of the same problem", context: "Technical context" },
    { slug: "impact-assessment-before-a-change", anchor: "who else is using this data", context: "Impact" },
  ],

  relatedGuides: ["data-requirements-for-analysts", "api-integration-that-doesnt-break", "impact-assessment-before-a-change"],

  conclusion: [
    "Take one connection your business already runs and set up a daily count on both sides: sent, received, rejected, and total value. Run it for a week. If the numbers differ you have found something that has been happening quietly for a long time, and if they match you have built the only thing that will ever tell you when they stop.",
  ],
};

export default guide;
