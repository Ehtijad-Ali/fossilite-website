import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "who-will-change-their-mind",
  seoTitle: "Who Will Change Their Mind Because You Called?",
  metaDescription:
    "Uplift modelling in plain English. The four kinds of customer, why the most likely to leave are usually the worst ones to call, and the group you should never contact.",
  title: "Who Will Change Their Mind?",
  keywords: [
    "uplift modelling explained",
    "persuadable customers",
    "incremental impact marketing",
    "who to target retention",
    "causal model business",
    "treatment effect model",
  ],
  category: "business-analysis",
  level: "Advanced",
  updated: "2026-08-25",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "Most retention programmes work like this. Build something that predicts who is likely to leave, sort the list, call the top of it. It feels obviously right and it is usually the wrong thing to do.",
    "The people at the very top of that list have frequently already decided. They have looked at alternatives, they may have already tried to cancel, and a friendly call from an account manager is not going to change anything. You are spending your most limited resource on the least persuadable people in your entire customer base.",
    "The better question is not who is likely to leave. It is who would stay because we called. Those are different groups, and separating them is one of the highest-value things a business can do with its data. It also produces the finding that surprises people most: there is a group of customers you should deliberately never contact.",
  ],

  whyItMatters: [
    "Contacting people costs money and attention, and both are strictly limited. A team that can call forty customers a week wants those forty to be the ones where the call changes something, not the ones where it definitely will not.",
    "It also stops you doing harm. There is a group who were perfectly content until a retention call reminded them they had a contract, or a discount offer suggested they had been overpaying. Contacting them makes things worse, and nobody finds out because nobody measures it.",
    "And it changes what success means. A retention programme that reports most of the people we called stayed is measuring nothing, because most customers stay anyway. The honest measure is how many stayed who otherwise would not have.",
  ],

  coreConcepts: [
    {
      term: "Four kinds of customer",
      explain:
        "The ones who will stay whatever you do. The ones who will leave whatever you do. The ones who will stay because you contacted them. And the ones who will leave because you contacted them.",
      detail:
        "Only the third group is worth your time. The first two waste it, and the fourth actively costs you. That framing alone changes how most people think about targeting.",
    },
    {
      term: "The last group is real and nobody measures it",
      explain:
        "A perfectly happy customer gets a retention call, is reminded their contract is up, and starts looking around. An offer of a discount suggests they have been paying too much.",
      detail:
        "This sounds like a curiosity and it is not. In several documented kinds of campaign it is a substantial group. If you have never measured it, you do not know whether your programme is net positive.",
    },
    {
      term: "Likely to leave and worth calling are different lists",
      explain:
        "Ranking by likelihood of leaving puts the already-decided at the top. Ranking by how much a call would change things puts the genuinely persuadable at the top.",
      detail:
        "The two lists overlap much less than people expect. In practice the persuadable group frequently sits in the middle of the risk ranking rather than at the extreme.",
    },
    {
      term: "You cannot build this without a proper test",
      explain:
        "To know whether contacting somebody changed the outcome, you need people you contacted and comparable people you deliberately did not.",
      detail:
        "This is the barrier and it is not a technical one. If your business has always contacted everybody flagged, you have no way of separating the four groups and you have to start by holding some back.",
    },
    {
      term: "Hold a group back permanently, not once",
      explain:
        "A random group who never get the action, kept aside on an ongoing basis. Not a one-off experiment that gets closed after a month.",
      detail:
        "It costs a small amount of forgone activity and it is the only thing that lets you keep learning. Businesses that skip it end up unable to say whether any of it works, forever.",
    },
    {
      term: "Measure the difference, not the outcome",
      explain:
        "Not how many of the contacted people stayed. The gap between how many contacted people stayed and how many comparable uncontacted people stayed.",
      detail:
        "That gap is the entire value of the programme. Reporting the raw retention rate of contacted customers is one of the most common and most misleading measures in business.",
    },
    {
      term: "The effect is usually smaller than everybody expects",
      explain:
        "When businesses measure this properly for the first time, the honest number is frequently a fraction of what was assumed.",
      detail:
        "That is uncomfortable and it is useful. A small real effect concentrated on the right group is still worth having, and knowing its true size lets you decide how much to spend on it.",
    },
    {
      term: "It works for anything you do to people",
      explain:
        "Retention calls, discounts, marketing emails, collections letters, upgrade offers, health interventions. Anywhere you take an action hoping to change behaviour.",
      detail:
        "The framing is usually described in marketing terms and it applies to any intervention. Collections is a particularly good example, because chasing the wrong people damages relationships for no gain.",
    },
    {
      term: "Start by finding the group you are wasting effort on",
      explain:
        "Before building anything sophisticated, split your existing contacted group by likelihood and check where the effect actually is.",
      detail:
        "Frequently you find the whole effect sits in one band and the rest of the effort is doing nothing. That finding needs a held-back group and no modelling at all.",
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "The top of the list was the worst place to spend the calls.",
      walkthrough:
        "The problem: a subscription business ranked customers by likelihood of leaving and called down the list with the capacity it had. Retention barely moved. What was happening: they ran a proper test, calling a random selection across all likelihood levels and leaving comparable people alone. The very top of the list showed almost no effect. Those customers had usually already decided, and several had already tried to cancel.",
      result:
        "What changed: the biggest effect was in the middle of the ranking. They re-ranked by how much a call appeared to change the outcome rather than by risk of leaving, and the same number of calls produced considerably more retained customers. Nothing about the calls changed. Only who received them.",
    },
    {
      kind: "illustration",
      scenario: "The customers who should never have been contacted.",
      walkthrough:
        "The problem: a business ran a retention offer to customers approaching renewal. Overall it looked mildly positive. What was happening: an analyst split the results by how engaged customers had been beforehand. Among the least engaged, the offer helped. Among the most engaged, long-standing, entirely content customers, the contacted group cancelled slightly more often than the comparable group who were left alone.",
      result:
        "What changed: they stopped contacting the most content segment entirely. The overall effect improved because they stopped doing harm to part of it. Nobody had suspected this, because the programme had only ever been measured in total. Splitting by group is what made it visible.",
    },
    {
      kind: "illustration",
      scenario: "Two years of a programme nobody could evaluate.",
      walkthrough:
        "The problem: a business had run a retention programme for two years and considered it a success, on the basis that most contacted customers stayed. What was happening: a BA asked how they knew the calls helped. Everybody flagged had been called, so there was no comparison. Most customers stay anyway, so the measure being used would have looked good whether or not the programme did anything at all.",
      result:
        "What changed: they held back a random ten per cent for three months. The calls did help, by less than everybody had assumed, and the effect was concentrated in one particular group. The programme continued with a much better idea of where to spend its time. Holding some back costs very little and it is the only way to know.",
    },
  ],

  learningPath: [
    {
      title: "Check whether you can measure anything at all",
      body: "Ask whether anybody is ever deliberately left out of the action. If not, you cannot separate the four groups and that is your starting problem.",
      effort: "One question",
      outcome: "An honest view of whether the current programme can be evaluated.",
    },
    {
      title: "Set up a permanent held-back group",
      body: "A random percentage who never receive the action, on an ongoing basis rather than as a one-off study.",
      effort: "Part of the design",
      outcome: "The thing everything else depends on, and it costs very little.",
    },
    {
      title: "Measure the difference, not the raw outcome",
      body: "Retention among contacted people minus retention among comparable uncontacted people. Report that gap as the result.",
      effort: "Part of reporting",
      outcome: "A number that means something, rather than one that would look good regardless.",
    },
    {
      title: "Split the effect by likelihood band",
      body: "Break the results into bands by risk of leaving and look at where the difference actually appears. Do this before building anything sophisticated.",
      effort: "Half a day",
      outcome: "Frequently the whole finding, with no modelling required.",
    },
    {
      title: "Look for the group where the effect is negative",
      body: "Check every band, including the most content customers. If contacting a group makes things worse, that is the most valuable thing you will find.",
      effort: "Part of the analysis",
      outcome: "A group to stop contacting, which improves results by subtraction.",
    },
    {
      title: "Re-rank by effect rather than by risk",
      body: "Once you can estimate how much the action changes things for different kinds of customer, target on that instead of on likelihood of leaving.",
      effort: "Weeks",
      outcome: "The same effort producing considerably more, which is the whole point.",
    },
    {
      title: "Report the honest effect size to the business",
      body: "It will be smaller than people assumed. Say so plainly and let the business decide what to spend on it.",
      effort: "A conversation",
      outcome: "Spending decisions based on the real number rather than a comfortable one.",
    },
  ],

  exercises: [
    {
      title: "Ask how they know it works",
      brief:
        "For any retention, collections or marketing programme in your business, ask how they know the action helps. Listen specifically for whether anybody is deliberately left out.",
      success:
        "You either find a proper comparison group or you establish that nobody can say whether the programme does anything.",
      time: "30 minutes",
    },
    {
      title: "Find where the effect actually is",
      brief:
        "If a comparison group exists, split the results into bands by likelihood and look at the difference in each band separately.",
      success:
        "You can say which bands the effect sits in, and usually it is not the one being prioritised.",
      time: "Half a day",
    },
    {
      title: "Look for the negative band",
      brief:
        "In the same analysis, check whether any group did worse for being contacted. Pay particular attention to your most content, longest-standing customers.",
      success:
        "You either rule it out or you have found a group to stop contacting, which improves things immediately.",
      time: "1 hour",
    },
  ],

  mistakes: [
    {
      mistake: "Targeting the most likely to leave",
      why: "They have frequently already decided. You spend your most limited resource on the least persuadable people in the base.",
      fix: "Target by how much the action changes the outcome, which usually points at the middle of the risk ranking.",
    },
    {
      mistake: "Contacting everybody who gets flagged",
      why: "Without anybody left out, you can never separate the four groups or say whether the programme works, and that stays true forever.",
      fix: "Hold back a random group permanently. It costs a small amount of forgone activity.",
    },
    {
      mistake: "Reporting the raw outcome of contacted customers",
      why: "Most customers stay anyway, so that figure looks good whether or not the programme does anything. It is one of the most misleading measures in business.",
      fix: "Report the gap between contacted and comparable uncontacted people. That gap is the whole value.",
    },
    {
      mistake: "Never checking for a group that reacts badly",
      why: "Contacting content customers can prompt them to look around. Measured only in total, that harm is invisible and it offsets your gains.",
      fix: "Split by group and check every band, including the ones nobody worries about.",
    },
    {
      mistake: "Adding the comparison group later",
      why: "After two years of contacting everybody, introducing one means admitting nobody knows whether the programme has been working, which is politically hard.",
      fix: "Build it in from day one, when it is uncontroversial and costs almost nothing.",
    },
    {
      mistake: "Presenting a comfortable effect size",
      why: "The honest number is usually much smaller than assumed. Reporting the flattering version means the business over-invests in something with a modest real effect.",
      fix: "Report the true difference plainly. A small real effect on the right group is still worth having.",
    },
  ],

  bestPractices: [
    "Think in four groups, not two.",
    "Hold back a random group permanently, not as a one-off study.",
    "Measure the difference between contacted and comparable uncontacted people.",
    "Split the effect by likelihood band before building anything sophisticated.",
    "Check every band for a group that reacts badly to being contacted.",
    "Target by how much the action changes things, not by risk.",
    "Report the honest effect size, however small.",
    "Apply the same thinking to collections, marketing and any other intervention.",
  ],

  proTips: [
    "Ask what proportion of customers stay anyway, before looking at any retention figure. If eighty per cent stay regardless, a programme reporting that eighty-five per cent of contacted customers stayed has demonstrated almost nothing, and that arithmetic takes thirty seconds.",
    "Pay particular attention to your happiest, longest-standing customers when checking for harm. That is where the group who react badly usually sits, and it is the group nobody thinks to check because they are not the ones at risk.",
    "When a business resists holding a group back, ask what they would do if the programme turned out not to work. If there is no answer, the resistance is really about not wanting to find out, and that is worth naming gently rather than arguing about statistics.",
    "Start with splitting the existing results by band rather than proposing a modelling project. Frequently the whole finding is there already, it needs half a day, and it is far easier to get agreement for looking at data you already have.",
  ],

  businessApplications: [
    "Deciding which at-risk customers are worth a retention call.",
    "Choosing who to send a discount or an offer to, and who to leave alone.",
    "Collections, where chasing the wrong people damages relationships for no gain.",
    "Marketing campaigns, where the honest measure is incremental rather than total response.",
    "Deciding which leads are worth a salesperson's time.",
    "Any intervention where you have limited capacity and want it spent where it changes something.",
  ],

  checklist: [
    "Established whether anybody is currently left out of the action.",
    "Permanent random held-back group in place.",
    "Reporting shows the difference, not the raw outcome.",
    "Results split by likelihood band.",
    "Every band checked for a negative effect.",
    "Most content, longest-standing customers checked specifically.",
    "Targeting based on effect rather than on risk.",
    "Honest effect size reported to the business.",
  ],

  faqs: [
    {
      q: "Why not just call the people most likely to leave?",
      a: "Because they have often already decided. The people worth calling are the ones a conversation would actually change, and those usually sit in the middle of the risk ranking rather than at the top.",
    },
    {
      q: "Is the group who react badly to contact real?",
      a: "Yes, and it is usually your most content customers. A retention call reminds somebody their contract is up. An offer suggests they have been overpaying. Measured only in total, that harm is invisible.",
    },
    {
      q: "How big does the held-back group need to be?",
      a: "Small. A few per cent is frequently enough to detect a meaningful difference, and the cost is that few per cent of forgone activity. It is much cheaper than most people assume.",
    },
    {
      q: "What if we have always contacted everybody?",
      a: "Then you cannot currently say whether the programme works, and starting a held-back group is your first piece of work. Expect some resistance, and note that the resistance is usually about not wanting to find out.",
    },
    {
      q: "How do we report this to the business?",
      a: "As the difference between contacted and comparable uncontacted people, expressed in customers retained or money. Never as the retention rate of contacted customers, which would look good regardless.",
    },
    {
      q: "Does this apply outside marketing?",
      a: "Yes. Collections, upgrade offers, support outreach, anything where you take an action hoping to change what somebody does. Collections is a particularly good candidate because chasing the wrong people has a real relationship cost.",
    },
  ],

  tools: [
    { name: "A permanent held-back group", what: "A random few per cent who never get the action. Everything else depends on it existing.", cost: "Free" },
    { name: "The difference, not the outcome", what: "Contacted retention minus comparable uncontacted retention. The only honest measure.", cost: "Free" },
    { name: "Results split by likelihood band", what: "Half a day, and frequently the whole finding without any modelling.", cost: "Free" },
    { name: "A check on your happiest customers", what: "Where the group who react badly usually sits, and the one nobody thinks to look at.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "predicting-versus-deciding", anchor: "why predicting is not the same as knowing what to do", context: "Background" },
    { slug: "predicting-yes-or-no", anchor: "the ordinary churn model this improves on", context: "Comparison" },
    { slug: "measuring-whether-it-worked", anchor: "measuring an intervention honestly", context: "Measurement" },
  ],

  relatedGuides: ["predicting-versus-deciding", "predicting-yes-or-no", "measuring-whether-it-worked"],

  conclusion: [
    "For any retention or marketing programme in your business, ask what proportion of customers stay anyway. If most of them do, then reporting that most contacted customers stayed has demonstrated nothing at all, and that arithmetic takes thirty seconds to do in a meeting.",
  ],
};

export default guide;
