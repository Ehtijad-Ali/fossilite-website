import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "learning-by-trying",
  seoTitle: "Testing That Shifts Traffic as It Learns",
  metaDescription:
    "Multi-armed bandits explained simply. Why a normal split test sends half your customers to the losing option for the whole test, and when that matters.",
  title: "Testing That Learns as It Goes",
  keywords: [
    "multi armed bandit explained",
    "bandit vs ab test",
    "adaptive testing business",
    "reinforcement learning business use",
    "explore exploit tradeoff",
    "which offer to show",
  ],
  category: "machine-learning",
  level: "Intermediate",
  updated: "2026-08-26",
  author: PETER_NGUYEN,
  readingTime: 15,

  brief: {
    inOneMinute:
      "A four-week test spends four weeks sending most of your traffic to options you suspect are worse. When feedback arrives in minutes, you can learn and earn at the same time.",
    problem: {
      headline: "Five offers, an eleven-week season, and a four-week test",
      detail:
        "An online outdoor equipment retailer with 40,000 visits a week and no agreement on which checkout offer to run.",
    },
    wrongApproach: {
      what: "Split traffic evenly, then switch to the day-one leader",
      why: "Two failures at once. An even split spends a month on options that are probably worse, and with a few hours of data the leader is usually just the lucky one.",
    },
    rightApproach: {
      what: "Move traffic gradually towards what is working, and never switch anything off",
      why: "As evidence builds, more traffic goes to the better performers. A floor stays under the laggards, so an early run of bad luck cannot permanently condemn the best option.",
    },
    context: {
      where: "Web offers, subject lines, layouts, pricing tests, ad creative.",
      decision: "What to show the next visitor.",
      metric: "Revenue during the test, not just after it.",
    },
    takeaway:
      "The test for whether this fits: how fast does the outcome arrive? Minutes, and it works. Six weeks, and a conventional test is the right tool.",
  },

  story: {
    title: "Learning and earning at the same time",
    caption:
      "There is no moment where somebody declares the test over, which removed the argument that usually consumes half the season.",
    stages: [
      { stage: "Problem", label: "A short season and no agreement", detail: "Five candidate offers, and the usual method spends a third of the season deciding." },
      { stage: "Data", label: "Checkout conversion, within minutes", detail: "Fast feedback is the precondition. Without it this whole approach has nothing to work with." },
      { stage: "Model", label: "Allocate by how uncertain you are", detail: "The less sure you are about an option, the more worth there is in showing it. Certainty concentrates traffic on its own." },
      { stage: "Prediction", label: "Which offer to show this visitor", detail: "Updated hourly, with a floor beneath every option so nothing is ever fully off." },
      { stage: "Decision", label: "One offer withdrawn by a human", detail: "On margin grounds rather than conversion, which is a business call the system cannot make." },
      { stage: "Result", label: "Traffic concentrates in days, not weeks", detail: "And when shopper behaviour shifted later in the season, the allocation followed without anybody intervening." },
    ],
  },

  calculator: {
    title: "What does a conventional test cost you while it runs?",
    intro:
      "Splitting traffic evenly means sending most of it to options you suspect are worse. Put in your own test and see what those weeks cost.",
    inputs: [
      { id: "visitors", label: "Visitors a week", min: 500, max: 200000, step: 500, value: 40000 },
      { id: "options", label: "Options being tested", min: 2, max: 8, step: 1, value: 5 },
      { id: "weeks", label: "Weeks the test would run", min: 1, max: 12, step: 1, value: 4 },
      { id: "gap", label: "Gap between best and average option", min: 1, max: 50, step: 1, value: 12, suffix: "%", help: "How much better the winner converts than the middle of the pack." },
      { id: "value", label: "Value of a conversion", min: 1, max: 1000, step: 1, value: 38, prefix: "\u00a3" },
    ],
    compute: (v) => {
      const total = v.visitors * v.weeks;
      const misdirected = total * ((v.options - 1) / v.options);
      // Baseline conversion is not asked for; the gap is expressed against a
      // nominal 3% so the output stays a comparison rather than a forecast.
      const lost = misdirected * 0.03 * (v.gap / 100) * v.value * 0.5;
      return {
        outputs: [
          {
            label: "Roughly what the test period costs you",
            value: `\u00a3${Math.round(lost).toLocaleString()}`,
            hero: true,
            tone: lost > 5000 ? "bad" : "neutral",
            note: "Traffic sent to options that turn out to be worse, while you wait for a verdict.",
          },
          {
            label: "Visits going to non-winning options",
            value: `${Math.round(misdirected).toLocaleString()}`,
            note: `Out of ${total.toLocaleString()} over the ${v.weeks} weeks.`,
          },
          {
            label: "Is this the right tool?",
            value: "Only if feedback is fast",
            note: "Conversion known in minutes: shifting traffic gradually works. Outcome known in six weeks: run the conventional test and accept the cost.",
          },
        ],
      };
    },
    footnote:
      "Assumes a nominal three percent baseline conversion so the figure stays comparative, and that the winner beats the average by the gap you set. It is meant to show whether the waiting cost is material at your traffic, not to forecast a number.",
  },

  intro: [
    "You have five possible subject lines for an email going to a hundred thousand people. The usual approach is to send each to a slice, wait, see which won, and then send the winner to everybody else. That works, and it means four fifths of your test group got something worse than the best option, and you found out too late to do anything about it.",
    "There is another way. Start by sending each option to a small equal share. As results come in, shift more of the remaining traffic towards whatever is doing well, while still giving the others a chance in case they turn out better than they first looked.",
    "That family of approaches is usually called multi-armed bandits, which is a terrible name derived from fruit machines. The useful way to think about it is a shop manager deciding how much shelf space to give a new product. You give it a bit, watch, and adjust as you go rather than committing to a fixed split for a month.",
  ],

  whyItMatters: [
    "Ordinary split testing has a real cost that nobody accounts for. For the whole duration, a share of your customers is deliberately getting the worse experience, and if the difference is large that cost is substantial.",
    "It also fits how businesses actually behave. Nobody wants to be told they cannot look at the results for three weeks. This family looks at results continuously by design, which removes the temptation to peek and stop early that ruins so many ordinary tests.",
    "And it is how a lot of decisions in a business could be made continuously rather than as one-off projects. Which of six offers to show, which of four layouts, which price band. Those are ongoing questions rather than experiments with an end date.",
  ],

  coreConcepts: [
    {
      term: "It shifts effort towards what is working, while still checking the rest",
      explain:
        "Start with an even spread. As results arrive, send more towards whatever is doing well. Keep sending a little to the others, in case early results were luck.",
      detail:
        "That balance is the whole idea. Commit too fast and you lock in an early fluke. Never commit and you have just run an ordinary test with extra complexity.",
    },
    {
      term: "It reduces what you lose while learning",
      explain:
        "In a normal test, the losing options keep receiving their full share until the end. Here the losers get less traffic as soon as evidence starts to accumulate.",
      detail:
        "This is the main practical benefit and it matters most when the gap between options is large or the volume is high. For a small test where all options are similar, the saving is modest.",
    },
    {
      term: "It needs fast feedback",
      explain:
        "The whole mechanism depends on seeing results quickly enough to adjust. Clicks and purchases arrive in minutes. Whether somebody renewed arrives in a year.",
      detail:
        "This is the single clearest test of whether the approach suits your problem. If the outcome takes months, there is nothing to adjust on, and you should run an ordinary test.",
    },
    {
      term: "It is worse at telling you how much better",
      explain:
        "Because it deliberately stops sending much traffic to the weaker options, you end up with far less evidence about them and a less reliable estimate of the difference.",
      detail:
        "So if the point of the exercise is to learn something you will use elsewhere, an ordinary test with a fixed split gives you a cleaner answer. If the point is simply to do well now, this is better.",
    },
    {
      term: "The world moving underneath it is a real risk",
      explain:
        "It settles on whatever worked. If customer behaviour, the season or your product range changes, it may keep favouring something that was right last quarter.",
      detail:
        "Ask how often it re-explores. Some versions handle a changing world explicitly and some assume the best option stays the best forever, which is rarely true in a business.",
    },
    {
      term: "It can lock in early luck",
      explain:
        "If one option happens to do well in its first fifty impressions, it starts receiving more traffic, which gives it more chance to look good, and the others never get a fair hearing.",
      detail:
        "Guard against it by setting a minimum number of impressions each option must receive before the shifting starts. Ask whether that minimum exists.",
    },
    {
      term: "It works best with several options, not two",
      explain:
        "With two options, an ordinary test is simple and adequate. With eight subject lines or twelve creative variants, testing them all conventionally is slow and wasteful.",
      detail:
        "The advantage grows with the number of things you are choosing between, which is why this shows up most in content, offers and layout rather than in single feature decisions.",
    },
    {
      term: "It is a continuous process, not a project",
      explain:
        "There is no end date. It carries on choosing and learning, and new options can be added to the pool as they are created.",
      detail:
        "That changes who owns it. Somebody has to monitor it, add and retire options, and notice when it has settled on something that no longer makes sense.",
    },
    {
      term: "It picks what does well by your chosen measure, exactly",
      explain:
        "If you tell it to maximise clicks, it will find whatever gets clicked, including things that get clicked and then disappoint.",
      detail:
        "Choose the measure with more care than usual, because this family optimises harder and faster than a person adjusting things manually would. Watch returns, unsubscribes and complaints alongside whatever you told it to chase.",
    },
  ],

  diagrams: [
    {
      kind: "workflow",
      title: "The outdoor retailer: five offers, eleven weeks, no declared winner",
      caption:
        "The test for whether this suits you is in step four. Checkout conversion is known in minutes. If the outcome took six weeks to observe, this approach would have nothing to work with.",
      trigger: "Day one of an eleven week season",
      runtime: "Updates hourly, for the whole season, with nobody managing it.",
      stages: [
        {
          actor: "system",
          label: "Five offers, all live from day one",
          detail: "Rather than four weeks of even splitting, in which four fifths of the traffic goes to options you already suspect are worse.",
          output: "every visitor sees one of the five",
        },
        {
          actor: "model",
          label: "Shift traffic towards whatever is performing",
          detail: "Gradually, and never all at once.",
          output: "a split that changes hour by hour",
        },
        {
          actor: "rule",
          label: "Keep a floor under the laggards",
          detail: "Two hundred visits is not a verdict. The offer leading on day one is usually the lucky one, not the best one.",
          exception: "An option that has not had a fair hearing keeps its floor, however badly it is currently doing.",
        },
        {
          actor: "rule",
          label: "Only use this where the feedback is fast",
          detail: "This is the test for whether to use the approach at all, and it belongs at the start rather than the end.",
          output: "a yes or a no on the whole method",
        },
        {
          actor: "person",
          label: "Watch margin, not only conversion",
          detail: "The offer that converts best is very often the one giving most away.",
          exception: "A winner that is winning purely on discount gets stopped by a person. The maths will never do that on its own.",
        },
      ],
      loop: "No end date and no declared winner. It follows the season on its own, and the season is what changes.",
      outcome:
        "A four week test spends four weeks paying for an answer you could have been earning from the whole time.",
    },
    {
      kind: "curve",
      lesson: {
        problem: "Five checkout offers, an eleven week season, and no agreement on which to run.",
        wrong: {
          label: "Split traffic evenly",
          why: "Four fifths of a month's traffic goes to options you suspect are worse, and you find out which was best only once the season is nearly over.",
        },
        right: {
          label: "Shift as you learn",
          why: "All five stay live. Traffic moves towards whatever is performing as evidence accumulates, so you are earning from the winner while you are still learning which it is.",
        },
        discovery: "The offer leading on day one was the lucky one, not the best one. Switching everything to it would have run the season on the wrong offer.",
        decisions: [
          { tone: "protect", label: "Keep a floor under every option" },
          { tone: "monitor", label: "Margin, not just conversion" },
          { tone: "investigate", label: "Only where feedback is fast" },
        ],
        takeaway: "A four week test spends four weeks paying for an answer you could have been earning from.",
      },
      naive: {
        series: [
          { name: "Each of five offers", points: [[0, 20], [25, 20], [50, 20], [75, 20], [100, 20]] },
          { name: "Verdict arrives", dashed: true, points: [[72, 0], [72, 100]] },
        ],
        notes: [{ x: 25, y: 20, text: "four fifths going to losers, for a month" }],
      },
      title: "Traffic moves towards what is working, without anybody calling it",
      caption:
        "All five run from day one. Traffic concentrates as evidence builds, and nothing is ever switched off completely, so an early run of bad luck cannot permanently condemn the best offer. There is no moment where somebody has to declare the test over.",
      xLabel: "days into the season",
      yLabel: "share of traffic",
      series: [
        {
          name: "Offer that turned out best",
          points: [[0, 20], [6, 24], [14, 36], [24, 52], [36, 64], [50, 71], [70, 74], [100, 76]],
        },
        {
          name: "A middling offer",
          points: [[0, 20], [6, 22], [14, 20], [24, 17], [36, 15], [50, 13], [70, 12], [100, 11]],
        },
        {
          name: "The day-one leader, which was luck",
          dashed: true,
          points: [[0, 20], [6, 30], [14, 22], [24, 14], [36, 9], [50, 7], [70, 6], [100, 5]],
        },
      ],
      notes: [{ x: 6, y: 30, text: "switching everything here would have cost the season" }],
    },
    {
      kind: "flow",
      title: "The outdoor retailer: five offers and an eleven-week season",
      caption:
        "The test for whether this approach fits is in the last box. Checkout conversion is known in minutes. If the outcome took six weeks to observe, this would have nothing to work with and a conventional test would be right.",
      steps: [
        { label: "Five offers, all live from day one", note: "Rather than four weeks of even splitting", tone: "input" },
        { label: "Shift traffic as evidence builds", note: "Gradually, never all at once", tone: "model" },
        { label: "Keep a floor under the laggards", note: "Two hundred visits is not a verdict" },
        { label: "Update hourly, because feedback is fast", note: "This is the test for whether to use it at all" },
        { label: "No end date, no declared winner", note: "It follows the season on its own", tone: "output" },
      ],
    },
  ],

  examples: [
    {
      kind: "illustration",
      scenario: "Eight subject lines and a hundred thousand recipients.",
      walkthrough:
        "The problem: a marketing team wanted to test eight subject lines. Testing conventionally meant sending each to a meaningful slice, waiting a day, and then sending the winner to the rest. Seven eighths of the test group would get something worse than the best. What was happening: they used an approach that started with an even spread across a first tranche, then shifted the remaining sends towards whatever was performing.",
      result:
        "What changed: the poor performers stopped being sent within a couple of hours rather than at the end of the test window. Overall response was higher than the conventional approach would have produced, because far fewer people received the weak options. The clean comparison of how much better each option was got worse, and in this case nobody needed that.",
    },
    {
      kind: "illustration",
      scenario: "Locked in by fifty lucky impressions.",
      walkthrough:
        "The problem: a business set one of these running across six website layouts and it settled almost immediately on one. Nobody was quite sure why, because it was not the one anybody expected. What was happening: a BA asked how much traffic each option had received before the shifting began. The answer was that there was no minimum. One layout had a good first afternoon by chance, started receiving more traffic, and the others never got enough exposure to prove otherwise.",
      result:
        "What changed: they set a minimum number of impressions each option had to receive before any shifting, and reran it. A different layout won, by a clear margin, and the team had far more confidence in the answer. Ask whether a minimum exists. It is one question and it prevents the most common failure here.",
    },
    {
      kind: "illustration",
      scenario: "The wrong approach for a slow outcome.",
      walkthrough:
        "The problem: a business wanted to use this to choose between four onboarding journeys, where the outcome that mattered was whether the customer was still there after six months. What was happening: a BA pointed out that the mechanism depends on adjusting as results arrive, and no results would arrive for half a year. There would be nothing to shift traffic on.",
      result:
        "What changed: they ran an ordinary split test with a fixed allocation, and used a faster signal, completion of onboarding, as an early indicator only. When the outcome takes months, this family has nothing to work with, and asking how quickly results arrive settles it in one question.",
    },
  ],

  learningPath: [
    {
      title: "Ask how quickly the outcome arrives",
      body: "Minutes and hours means this can work. Weeks and months means it cannot, because there is nothing to adjust on.",
      effort: "One question",
      outcome: "The single clearest test of whether this approach suits your problem.",
    },
    {
      title: "Count how many options you are choosing between",
      body: "Two options rarely justify it. Six or more, where testing conventionally would be slow and wasteful, is where the advantage sits.",
      effort: "5 minutes",
      outcome: "A view on whether the added complexity is worth it.",
    },
    {
      title: "Decide what you are optimising, carefully",
      body: "This family chases your chosen measure harder and faster than a person would. Pick something that reflects what the business actually wants.",
      effort: "A conversation",
      outcome: "Protection against optimising something that looks good and helps nobody.",
    },
    {
      title: "Insist on a minimum exposure per option",
      body: "Every option must receive a set number of impressions before any shifting starts. Otherwise early luck locks in.",
      effort: "One requirement",
      outcome: "Prevention of the most common failure with this approach.",
    },
    {
      title: "Ask how it handles the world changing",
      body: "Does it periodically re-explore, or does it assume the winner stays the winner? Businesses change and the second assumption is usually wrong.",
      effort: "One question",
      outcome: "A view on whether it will still be sensible in six months.",
    },
    {
      title: "Watch the warning signals alongside",
      body: "Returns, unsubscribes, complaints, cancellations. Whatever might get worse while your chosen measure gets better.",
      effort: "Part of the design",
      outcome: "Early sight of it optimising something that helps the number and hurts the business.",
    },
    {
      title: "Give it an owner",
      body: "Somebody who adds and retires options, watches what it has settled on, and notices when that no longer makes sense.",
      effort: "A conversation",
      outcome: "Something that keeps working rather than quietly settling on last year's answer.",
    },
  ],

  exercises: [
    {
      title: "Work out what a normal test costs you",
      brief:
        "For a recent split test in your business, work out how many customers received the losing option and roughly what the difference in response was worth.",
      success:
        "You have a figure for what the testing itself cost, which almost nobody calculates and which is the argument for this approach.",
      time: "45 minutes",
    },
    {
      title: "Ask about the minimum",
      brief:
        "For any adaptive testing running in your business, ask whether each option has to receive a minimum amount of traffic before the system starts shifting.",
      success:
        "You get a specific number, or you have found the most common failure mode with this approach.",
      time: "15 minutes",
    },
    {
      title: "Check the speed of feedback",
      brief:
        "For any decision somebody wants to test continuously, work out how long after showing an option you find out whether it worked.",
      success:
        "You can say whether this family is even applicable, which settles a lot of proposals quickly.",
      time: "20 minutes",
    },
  ],

  caseStudy: {
    business:
      "An online retailer of outdoor equipment. Roughly forty thousand visits a week to the site.",
    problem:
      "Five different offers for the checkout page and no agreement on which to run. The usual approach was a straight split test over four weeks, which meant sending four fifths of traffic to offers that were probably worse for a month, and the season only lasted eleven weeks.",
    analysis: [
      "The cost of a conventional test is the traffic spent on the losing options while you wait for a verdict. That cost is usually invisible because nobody writes it down, and in a short season it is the dominant consideration.",
      "The decision here is repeated thousands of times a day and the feedback is fast, arriving within minutes. That combination is what makes the alternative approach appropriate. It would be the wrong choice for a decision made once a quarter.",
      "The tension is genuine and worth stating plainly: you want to learn which offer is best, and you want to earn from the best one while learning. Committing entirely to either is wrong.",
      "The obvious mistake was already in the plan. Somebody proposed watching the first day and switching everything to the leader. With a day of data the leader is frequently just the lucky one, and locking in early is how you spend a season on the second-best offer.",
      "Ruled out: a longer test. The season was too short. Getting a clean answer in week nine of an eleven-week season is an academic result.",
    ],
    aiApproach: [
      {
        step: "Shift traffic gradually instead of splitting it evenly",
        detail:
          "Start by showing all five roughly equally. As evidence accumulates, send more traffic to the ones performing better and less to the ones performing worse. Nothing is eliminated outright, because early evidence is weak.",
      },
      {
        step: "Keep sending a little traffic to the laggards",
        detail:
          "An offer that looks poor after two hundred visits may be fine. Retaining a small share is what stops an early run of bad luck permanently condemning the best option, and it costs very little.",
      },
      {
        step: "Let the confidence drive the allocation",
        detail:
          "The less certain you are about an option, the more worth there is in showing it. As certainty grows, traffic concentrates on its own. There is no moment where somebody has to decide the test is over, which removes the argument entirely.",
      },
      {
        step: "Match the pace to the feedback",
        detail:
          "Checkout conversion is known within minutes, so the allocation can update hourly. If the outcome took six weeks to observe this whole approach would be inappropriate, and that is the test for whether to use it.",
      },
      {
        step: "Watch for the ground moving",
        detail:
          "An offer that wins in October may lose in December. Because allocation keeps updating, this adapts on its own, which is an advantage over a test that concluded in week four and was then trusted for the rest of the season.",
      },
    ],
    solution: [
      "All five offers live from day one, with traffic allocation updating hourly.",
      "A floor beneath every option so nothing is ever fully switched off.",
      "A weekly readout showing where traffic has settled and how confident that is.",
      "No end date and no moment of declaring a winner, because neither is needed.",
      "One offer withdrawn manually after a fortnight, on margin grounds rather than conversion, which is a business decision the system cannot make.",
    ],
    impact: [
      "Traffic concentrated on the better offers within days rather than after four weeks, which in an eleven-week season is most of the value.",
      "The weakest offers stopped receiving a fifth of traffic each almost immediately.",
      "The argument about when the test could be called never happened, because there was no cutoff to argue about.",
      "When shopper behaviour shifted later in the season, the allocation followed it without anybody intervening.",
    ],
    whatWouldHaveKilledIt:
      "Switching everything to the day-one leader. With a few hours of data the leader is usually noise, and the whole season would have run on an offer chosen by luck. The other misuse is applying this where feedback is slow: for a decision whose outcome takes weeks to observe, this approach has nothing to work with and a conventional test is the right tool.",
  },

  mistakes: [
    {
      mistake: "Using it when the outcome takes months",
      why: "The entire mechanism depends on adjusting as results arrive. With a slow outcome there is nothing to adjust on and you have added complexity for nothing.",
      fix: "Ask how quickly results arrive. Slow outcomes need an ordinary test with a fixed split.",
    },
    {
      mistake: "No minimum exposure per option",
      why: "One option has a lucky first hour, starts receiving more traffic, and the others never get enough exposure to prove otherwise. It settles on a fluke.",
      fix: "Require a minimum number of impressions per option before any shifting begins.",
    },
    {
      mistake: "Expecting a clean estimate of how much better",
      why: "It deliberately starves the weaker options of traffic, so you learn much less about them. If you need a reliable figure for the difference, this is the wrong tool.",
      fix: "Use an ordinary fixed-split test when the point is to learn something you will apply elsewhere.",
    },
    {
      mistake: "Choosing the measure casually",
      why: "It optimises harder and faster than a person would. Told to chase clicks, it will find whatever gets clicked, including things that disappoint immediately afterwards.",
      fix: "Choose the measure with care and watch returns, unsubscribes and complaints alongside it.",
    },
    {
      mistake: "Assuming the winner stays the winner",
      why: "Seasons change, products change, customers change. Something that settled on an answer last quarter may be confidently wrong now.",
      fix: "Ask how it re-explores, and make sure somebody notices when the settled answer stops making sense.",
    },
    {
      mistake: "Treating it as a project rather than a process",
      why: "It has no end date. Without an owner adding and retiring options, it slowly becomes a system running on a stale set of choices.",
      fix: "Name somebody responsible for the pool of options and for watching what it has settled on.",
    },
  ],

  bestPractices: [
    "Ask how quickly the outcome arrives before anything else.",
    "Use it where there are several options rather than two.",
    "Choose the measure being optimised with unusual care.",
    "Require a minimum exposure per option before any shifting.",
    "Ask how it handles the world changing underneath it.",
    "Watch returns, complaints and unsubscribes alongside the target measure.",
    "Use an ordinary fixed-split test when you need a clean estimate of the difference.",
    "Give it an owner who manages the pool of options.",
  ],

  proTips: [
    "Work out what your last ordinary split test cost in lost response. Nobody calculates this and it is the actual argument for adaptive testing. If the losing option went to twenty thousand people for three weeks and performed noticeably worse, that is a real number and it makes the case better than any explanation of the method.",
    "Ask whether every option gets a guaranteed minimum before the system starts favouring anything. It is one question, it needs no technical understanding, and it catches the failure where a lucky first afternoon locks in an answer nobody believes.",
    "Be careful about letting one of these choose what customers see without a person reviewing the pool of options periodically. It will happily settle on something that performs well and reads badly, and nothing in its measures will tell you that.",
    "If somebody proposes this for a decision where the outcome takes months, the honest answer is that it cannot work and an ordinary test is what they need. That conversation is much easier if you frame it as a question about feedback speed rather than as a criticism of the proposal.",
  ],

  businessApplications: [
    "Choosing between several email subject lines or message variants.",
    "Deciding which of a set of offers or promotions to show.",
    "Website layout and content choices where response is immediate.",
    "Which product to feature in a limited slot.",
    "Price testing where purchase decisions happen quickly.",
    "Any ongoing choice between several options with fast feedback.",
  ],

  checklist: [
    "Speed of feedback established and confirmed as fast.",
    "Number of options counted and enough to justify the approach.",
    "Measure being optimised chosen deliberately with the business.",
    "Minimum exposure per option required and set.",
    "Approach to re-exploring after the world changes established.",
    "Warning signals monitored alongside the target measure.",
    "Named owner for the pool of options.",
    "Decided whether you need a clean estimate of the difference, and used a fixed test if so.",
  ],

  faqs: [
    {
      q: "How is this different from an ordinary split test?",
      a: "An ordinary test keeps the split fixed until the end, so the losing options keep receiving their full share throughout. This shifts traffic towards what is working as evidence accumulates, so fewer customers get the weaker option.",
    },
    {
      q: "When should we use an ordinary test instead?",
      a: "When the outcome takes weeks or months, when you have only two options, or when you need a reliable figure for how much better one is because you will apply that knowledge elsewhere.",
    },
    {
      q: "Why does it give a worse estimate of the difference?",
      a: "Because it deliberately stops sending much traffic to the weaker options, so you end up with far less evidence about them. That is the trade: you do better now and you learn less about the alternatives.",
    },
    {
      q: "Can it get stuck on the wrong answer?",
      a: "Yes, if one option gets lucky early and starts receiving more traffic before the others have had a fair hearing. Requiring a minimum exposure per option before any shifting prevents most of it.",
    },
    {
      q: "Does it cope with things changing over time?",
      a: "Some versions do and some assume the best option stays best. Ask which you have, because in a real business the best option rarely stays best for long.",
    },
    {
      q: "Is this the same as reinforcement learning?",
      a: "It is the simplest member of that family. Full reinforcement learning deals with sequences of decisions where each one affects what happens next. For choosing between options one at a time, this is the practical version and it is much easier to run.",
    },
  ],

  tools: [
    { name: "A feedback speed check", what: "How long between showing an option and knowing whether it worked. Settles most proposals in one question.", cost: "Free" },
    { name: "A minimum exposure requirement", what: "Every option gets a guaranteed share before shifting begins. Prevents early luck locking in.", cost: "Free" },
    { name: "A carefully chosen measure", what: "It optimises harder than a person would, so the measure matters more than usual.", cost: "Free" },
    { name: "Warning signals alongside", what: "Returns, unsubscribes, complaints. What might get worse while the target measure gets better.", cost: "Free" },
  ],

  internalLinks: [
    { slug: "bayesian-thinking-for-business-decisions", anchor: "the reasoning underneath most of these methods", context: "Background" },
    { slug: "who-will-change-their-mind", anchor: "testing whether an action changes anything at all", context: "Related" },
    { slug: "measuring-whether-it-worked", anchor: "measuring a change honestly", context: "Measurement" },
  ],

  relatedGuides: ["bayesian-thinking-for-business-decisions", "who-will-change-their-mind", "measuring-whether-it-worked"],

  conclusion: [
    "Work out how many customers received the losing option in your last split test, and roughly what that cost in response. Nobody calculates it, it takes forty-five minutes, and it is the honest argument for testing that adapts as it learns.",
  ],
};

export default guide;
