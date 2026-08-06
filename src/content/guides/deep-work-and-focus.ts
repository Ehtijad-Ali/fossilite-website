import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "deep-work-and-focus",
  seoTitle: "Deep Work: How to Actually Concentrate Again",
  metaDescription:
    "A practical guide to sustained focus: what interruption really costs, why task-switching lingers, and how to build a working day that protects concentration.",
  title: "Deep Work and the Recovery of Focus",
  keywords: [
    "how to focus",
    "deep work",
    "attention residue",
    "cost of interruptions",
    "concentration at work",
    "focus techniques",
  ],
  category: "productivity",
  level: "Beginner",
  updated: "2026-08-04",
  author: PETER_NGUYEN,
  readingTime: 12,

  intro: [
    "There is a particular kind of exhausting day that produces nothing. You were busy from nine until six, you answered everything, you attended every meeting, and the one piece of work that actually mattered has not moved. You weren't lazy. You were fragmented.",
    "Most advice about focus treats this as a willpower problem, which is why most advice about focus doesn't work. The research points somewhere more useful: the cost isn't the interruption itself but what happens either side of it. The way part of your attention stays behind on the previous task, and the way a fragmented environment quietly trains you to expect fragmentation.",
    "This guide is about designing a working day where concentration is possible, rather than trying to summon it through discipline. It draws on published research where research exists, is honest about where it doesn't, and is aimed at people whose work requires thinking rather than only responding.",
  ],

  whyItMatters: [
    "Almost all valuable knowledge work has a minimum viable block of attention below which it simply cannot be done. Writing something coherent, designing a system, understanding a complex problem, learning a difficult skill: these need a runway. Work that arrives in fifteen-minute slices between meetings never gets airborne, and the frustrating result is that a full day of effort produces nothing you'd point at.",
    "The professional consequence compounds quietly. If your day only permits shallow work, you only ever produce shallow work, and over years that shapes what you're capable of rather than just what you did this week. The skills that require sustained concentration to build are exactly the ones that stay scarce.",
    "There's also a straightforward wellbeing argument, and it's supported by the research below: working in a fragmented way doesn't just reduce output. People compensate for interruptions by working faster, and pay for it in stress and time pressure. The fragmentation is costing you something even on days where the work still gets finished.",
  ],

  coreConcepts: [
    {
      term: "Attention residue",
      explain:
        "When you switch from one task to another, part of your attention stays with the first: particularly if it was left unfinished. You are physically working on the new task while a portion of your cognitive capacity is still occupied by the old one.",
      detail:
        "This is why 'I'll just quickly check that' is more expensive than the time it takes. The cost isn't the two minutes; it's the degraded quality of the twenty minutes after.",
    },
    {
      term: "Unfinished tasks are stickier than finished ones",
      explain:
        "Residue is strongest when the previous task was incomplete, time-pressured, or emotionally engaging. Completing something, or reaching a clean stopping point, reduces what it leaves behind.",
      detail:
        "Practically: finishing a small thing before switching is often worth more than the small thing itself, because it clears the channel for what comes next.",
    },
    {
      term: "Speed compensation",
      explain:
        "People adapt to interruption not by taking longer but by working faster to make up the time. The work gets done. The cost shows up as stress, frustration, time pressure and effort rather than as a missed deadline.",
      detail:
        "This is why fragmentation is so easy to ignore organisationally. The output metrics look fine while the people producing them are steadily depleted.",
    },
    {
      term: "Depth requires an uninterrupted runway",
      explain:
        "Complex work has a warm-up period before productive thinking begins. If your longest uninterrupted block is shorter than that warm-up, you never reach the productive part regardless of total hours.",
      detail:
        "Two hours of continuous work is not equivalent to four thirty-minute blocks. For hard problems it's not even close, and treating them as interchangeable in a calendar is the root of a lot of unproductive days.",
    },
    {
      term: "Self-interruption is the larger share",
      explain:
        "A substantial portion of interruptions are self-initiated: checking messages, opening a tab, remembering something and acting on it immediately. Nobody interrupted you; the habit did.",
      detail:
        "This is good news, because self-interruption is the part you can actually control. Blaming your colleagues for a problem that's mostly internal leads to solutions that don't work.",
    },
    {
      term: "Environment beats willpower",
      explain:
        "Focus achieved by continuously resisting temptation is expensive and unreliable. Focus achieved by removing the temptation is cheap and durable.",
      detail:
        "Phone in another room beats phone face-down. Notifications off beats notifications ignored. The aim is to need less discipline, not to have more.",
    },
    {
      term: "A defined stopping point",
      explain:
        "Knowing when the working day ends changes how you work within it. Open-ended availability encourages pacing yourself indefinitely and never fully disengaging.",
      detail:
        "It also protects recovery, which is not a luxury. The capacity for concentration is finite daily and replenishes with rest rather than with effort.",
    },
    {
      term: "Shallow work is necessary, not shameful",
      explain:
        "Email, admin, coordination and quick responses are real work that has to happen. The goal isn't to eliminate them but to batch them so they don't fragment everything else.",
      detail:
        "Most people don't need more deep work hours than they think. They need the deep and shallow hours to stop being interleaved.",
    },
  ],

  learningPath: [
    {
      title: "Measure your actual fragmentation for a week",
      body: "Don't change anything yet. Just record, each day, your longest uninterrupted work block and roughly how many times you switched context. Most people are startled. The honest number is usually far lower than the felt one.",
      effort: "5 minutes a day",
      outcome: "A real baseline instead of an impression.",
    },
    {
      title: "Separate self-interruption from external interruption",
      body: "For a few days, when you break focus, note which it was: someone contacted you, or you left on your own. This determines what to fix, and the split is usually not what people expect.",
      effort: "A week, passively",
      outcome: "You know whether your problem is your environment or your habits.",
    },
    {
      title: "Protect one block, not your whole day",
      body: "Choose 90 minutes at the time your energy is highest. Same time each day. Phone elsewhere, notifications off, one task, no email. Start there rather than attempting to restructure everything.",
      effort: "90 minutes daily",
      outcome: "One reliably productive block you can build around.",
    },
    {
      title: "Make the block harder to break",
      body: "Remove the specific things you actually reach for. Log out, use a site blocker, put the phone in a drawer in another room. Address your real distractions rather than a generic list.",
      effort: "1 hour of setup",
      outcome: "Breaking focus requires deliberate effort rather than a reflex.",
    },
    {
      title: "Batch the shallow work",
      body: "Set two or three fixed windows for messages, email and admin. Outside those windows, they wait. Tell colleagues your response pattern so their expectations adjust. Most people mind far less than you fear.",
      effort: "Ongoing",
      outcome: "Shallow work stops leaking into every hour.",
    },
    {
      title: "End at a clean stopping point",
      body: "Finish a unit of work or write down exactly where you stopped and what comes next. This reduces residue overnight and removes the cost of reloading context tomorrow.",
      effort: "5 minutes daily",
      outcome: "You start the next session already oriented.",
    },
    {
      title: "Extend gradually and defend the calendar",
      body: "Once 90 minutes is reliable, extend toward two hours or add a second block. Then start declining meetings that fragment those windows, offering an alternative time rather than a refusal.",
      effort: "Ongoing",
      outcome: "Your calendar has defended territory rather than aspiration.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "Researchers measure what interruption actually costs.",
      walkthrough:
        "Mark, Gudith and Klocke ran a controlled study in which participants performed work tasks under interrupted and uninterrupted conditions, presented at CHI 2008. The intuitive prediction is that interrupted work takes longer and comes out worse. The measured result was more interesting than that.",
      result:
        "Participants completed interrupted tasks in less time, with no difference in quality. They compensated by working faster. The cost appeared elsewhere: they reported significantly higher stress, frustration, time pressure and effort. This reframes the whole problem. Fragmentation is not primarily a throughput issue that shows up in your output metrics; it's a load issue that shows up in the person. (Worth noting: the widely-quoted '23 minutes to refocus' figure is not from this paper, despite frequently being attributed to it.)",
      source: {
        label: "Mark, Gudith & Klocke (2008). The Cost of Interrupted Work: More Speed and Stress, CHI '08",
        url: "https://ics.uci.edu/~gmark/chi08-mark.pdf",
      },
    },
    {
      kind: "documented",
      scenario: "Why you can't concentrate on the new task after switching.",
      walkthrough:
        "Sophie Leroy investigated what happens cognitively when people move between work tasks, introducing the concept of attention residue in Organizational Behavior and Human Decision Processes. Participants switched from one task to another under conditions that varied whether the first task was completed or left unfinished.",
      result:
        "Performance on the second task was measurably worse when the first had been left incomplete: part of attention remained with it. The effect is strongest when the previous task was unfinished, time-pressured, or emotionally engaging. This is the mechanism behind the felt experience of sitting down to write and finding your mind still in the meeting you just left, and it's why reaching a clean stopping point is worth more than the few minutes it costs.",
      source: {
        label: "Leroy (2009). Why Is It So Hard to Do My Work? The Challenge of Attention Residue When Switching Between Work Tasks",
        url: "https://www.uwb.edu/business/faculty/sophie-leroy/attention-residue",
      },
    },
    {
      kind: "illustration",
      scenario: "The calendar with no runway.",
      walkthrough:
        "A pattern worth checking for in your own week. Meetings at 10:00, 11:30 and 14:00, each an hour. The gaps look substantial in aggregate: several hours of 'free' time. But no single gap exceeds ninety minutes, and each one is bracketed by preparing for the next meeting and recovering from the last. Work requiring a long runway never gets one, and the day still ends with the important thing untouched.",
      result:
        "The fix is structural rather than motivational: consolidate meetings into a contiguous band and defend the remaining block, rather than distributing meetings evenly through the day. Two meetings back to back cost less than the same two meetings spaced apart, which is the opposite of how most people schedule.",
    },
  ],

  mistakes: [
    {
      mistake: "Treating focus as a willpower problem",
      why: "Resisting a notification you can see costs attention whether or not you give in. Building a day that depends on continuous resistance means depending on your worst hour.",
      fix: "Change the environment instead. The goal is that focusing requires no decision, because the alternatives aren't available.",
    },
    {
      mistake: "Trying to restructure the entire day at once",
      why: "Ambitious systems collide with an existing calendar and other people's expectations, fail within a fortnight, and leave you concluding that focus isn't possible in your job.",
      fix: "Protect one block. Make it reliable. Extend only once it survives a bad week.",
    },
    {
      mistake: "Scheduling deep work whenever there's a gap",
      why: "Concentration capacity varies substantially through the day, and the gap in your calendar is rarely your best hour. Hard work in a low-energy slot mostly produces the feeling of having tried.",
      fix: "Identify when you actually think well and put the block there permanently, even if it means moving something else.",
    },
    {
      mistake: "Blaming interruptions from other people",
      why: "A large share of interruptions are self-initiated. Directing all the effort at colleagues fixes the smaller half of the problem and generates friction doing it.",
      fix: "Measure the split first. If most of your interruptions are self-generated, the solution is on your desk, not in someone else's behaviour.",
    },
    {
      mistake: "Leaving work mid-thought when the block ends",
      why: "An abruptly abandoned task produces the maximum attention residue, so it follows you into the next activity and into the evening.",
      fix: "Spend the last five minutes reaching a clean stopping point, or writing down precisely where you are and what comes next.",
    },
    {
      mistake: "Treating all work as deserving deep focus",
      why: "Most tasks don't need it, and trying to apply protected focus to email produces guilt rather than productivity.",
      fix: "Sort work honestly into deep and shallow, and batch the shallow. The aim is separation, not elimination.",
    },
    {
      mistake: "Sacrificing sleep and recovery for more hours",
      why: "Concentration capacity is finite each day and restored by rest, not by effort. Extending hours at the expense of recovery reduces tomorrow's capacity more than it adds to today's.",
      fix: "Treat sleep and a real stopping time as inputs to focus rather than as competitors for it.",
    },
  ],

  bestPractices: [
    "Put the same block in the same slot every day. Consistency removes the daily negotiation about whether and when, which is itself a drain.",
    "Decide what you'll work on before the block starts. Deciding at the start of a focus session burns the freshest part of it.",
    "Physically separate yourself from your phone. In another room beats face-down beats silent: proximity matters more than people expect.",
    "Close everything not needed for the task, including the tabs you 'might need'. Visible options are open loops.",
    "Batch messages into two or three fixed windows and tell people what those are. Predictability satisfies most of what colleagues actually want from responsiveness.",
    "End the day by writing tomorrow's first task in one specific sentence. It removes the morning's hardest decision.",
    "Consolidate meetings into a band rather than spreading them out. Adjacent meetings destroy far less of a day than spaced ones.",
    "Protect recovery deliberately: a real stopping time, sleep, and breaks that aren't just a different screen.",
  ],

  proTips: [
    "Note where you stopped in enough detail that restarting requires no thinking. 'Halfway through the pricing section, next: rewrite the objection paragraph' costs thirty seconds and saves ten minutes of reorientation.",
    "When you notice the impulse to check something, write it on a piece of paper instead and continue. Most items turn out not to matter, and capturing them satisfies the urge without paying the switching cost.",
    "Do the hard thing first, before anything else opens. The quality of attention available before your inbox is qualitatively different from what's left after it, and no amount of later effort recovers it.",
    "If you're stuck for more than twenty minutes, change modality rather than pushing: walk, write it out longhand, explain the problem aloud. Stuck-and-staring is not deep work; it's the appearance of it.",
    "Track your longest daily uninterrupted block as your metric, not hours worked. It's the number that actually predicts whether hard things got done.",
    "When declining a meeting, offer a specific alternative time inside your shallow band. Almost nobody objects to being moved; people object to being refused.",
  ],

  businessApplications: [
    "Meeting policy: consolidating meetings into defined bands and leaving protected no-meeting periods, which costs nothing and returns real capacity.",
    "Response-time expectations: agreeing explicitly that internal messages get a reply within hours rather than minutes, which removes the pressure to monitor continuously.",
    "Handover quality: teams that document a clean stopping point lose far less time to context reconstruction, especially across time zones.",
    "Recruitment and retention: fragmented work is a significant and under-recognised driver of burnout in knowledge roles, and it's cheaper to fix than to backfill.",
    "Estimating: work requiring long runways is systematically underestimated when planners count total hours rather than available uninterrupted blocks.",
    "Onboarding: new joiners need more uninterrupted time than experienced staff, and typically get less of it.",
  ],

  lifeApplications: [
    "Learning anything difficult outside work (an instrument, a language, a technical subject) where the same runway requirement applies and the same fragmentation prevents progress.",
    "Being present with people. Attention residue doesn't respect the boundary between work and home, and arriving mentally still at work is the same mechanism.",
    "Reading properly again. Sustained reading is a trainable capacity that erodes with fragmented attention and returns with deliberate practice.",
    "Creative work of any kind, which is unusually sensitive to interruption because it depends on holding a lot of loose material in mind at once.",
    "Recognising when you're busy rather than productive: a distinction that's easy to lose and expensive to keep losing.",
  ],

  exercises: [
    {
      title: "The fragmentation baseline",
      brief:
        "For one week, record your longest uninterrupted block each day and count context switches. Change nothing else.",
      success: "You can state your real average longest block, in minutes.",
      time: "5 minutes a day",
    },
    {
      title: "Source the interruptions",
      brief:
        "For three days, mark each break in focus as self-initiated or external. Total them at the end.",
      success: "You know your split, and therefore which problem to solve.",
      time: "3 days, passively",
    },
    {
      title: "The 90-minute block",
      brief:
        "Same time daily for two weeks. One task, phone in another room, notifications off. Note what broke it each time it failed.",
      success: "Ten of fourteen blocks completed, with a written list of what interfered.",
      time: "90 minutes daily",
    },
    {
      title: "The clean stop",
      brief:
        "For a week, spend the last five minutes of each session writing exactly where you stopped and what comes next. Note how long restarting takes compared to before.",
      success: "A noticeably shorter warm-up at the start of each session.",
      time: "5 minutes daily",
    },
    {
      title: "Batch your messages",
      brief:
        "Move all email and chat into two fixed windows for one week. Tell colleagues in advance. Record what went wrong as a result.",
      success: "A list of actual consequences, which is almost always shorter than the anticipated one.",
      time: "One week",
    },
  ],

  checklist: [
    "I know my current average longest uninterrupted block",
    "I know whether my interruptions are mostly self-initiated or external",
    "One block is protected at the same time every day",
    "That block sits in my genuinely highest-energy hours",
    "My phone is physically elsewhere during it, not just silenced",
    "I decide the task before the block starts, not during it",
    "Messages and admin are batched into defined windows",
    "I end each session at a clean stopping point or write down where I stopped",
    "Meetings are consolidated rather than spread through the day",
    "I have a real stopping time and protect sleep as an input to focus",
  ],

  faqs: [
    {
      q: "How long should a deep work block be?",
      a: "Long enough to get past the warm-up, which for most complex work means at least 60–90 minutes. Start with 90 and extend once it's reliable. What matters more than the length is that it's uninterrupted and consistently scheduled.",
    },
    {
      q: "What if my job makes uninterrupted time impossible?",
      a: "Some roles are response-driven, and in those cases the honest answer is that deep work has to be negotiated rather than found. Start by protecting one block a week and measuring what actually breaks: the expected consequences usually exceed the real ones.",
    },
    {
      q: "Does the Pomodoro technique work?",
      a: "It helps people who struggle to start, because 25 minutes is a low bar to clear. For work with a long warm-up it can be counterproductive. The timer interrupts you at the point you'd have become productive. Use it to begin, not to structure everything.",
    },
    {
      q: "Is multitasking ever fine?",
      a: "For automatic tasks, yes. For anything requiring thought, what feels like multitasking is rapid switching, and it carries attention residue each way. The cost is real and mostly invisible while you're paying it.",
    },
    {
      q: "How do I stop checking my phone?",
      a: "Put it somewhere that requires standing up. Willpower against a visible phone is a losing daily battle; distance converts it into a decision you'd have to make deliberately, which is a much easier fight.",
    },
    {
      q: "Should I listen to music while working?",
      a: "It varies more between people than most advice admits. Music without lyrics interferes less with verbal work for most people. Test it deliberately on your own hard tasks rather than adopting someone else's answer.",
    },
    {
      q: "How long until focus improves?",
      a: "Expect a couple of uncomfortable weeks. The restlessness when you remove the usual escapes is real and temporary. Most people notice a meaningful difference in their ability to stay with something within a month of consistent blocks.",
    },
  ],

  tools: [
    { name: "Freedom / Cold Turkey", what: "Blocks sites and apps across devices. Useful precisely because it's difficult to disable mid-session.", cost: "Freemium" },
    { name: "Focus modes (iOS / Android / macOS / Windows)", what: "Built in and free. Configure one properly rather than installing something new.", cost: "Free" },
    { name: "Calendar blocking", what: "Whatever calendar you already use. Deep work blocks belong in it as real events others can see.", cost: "Free" },
    { name: "A paper notebook", what: "For capturing intrusive thoughts without opening a device. Deliberately analogue. Opening an app to log a distraction is itself a distraction.", cost: "Free" },
    { name: "Toggl", what: "Time tracking, if you want data on where the day actually goes rather than an impression.", cost: "Freemium", url: "https://toggl.com" },
  ],

  resources: [
    { title: "The Cost of Interrupted Work: More Speed and Stress", kind: "Paper", note: "Mark, Gudith & Klocke (2008). Short and readable, and the source of the counter-intuitive finding above.", url: "https://ics.uci.edu/~gmark/chi08-mark.pdf" },
    { title: "Sophie Leroy on attention residue", kind: "Paper", note: "The original research on why switching tasks leaves part of your attention behind.", url: "https://www.uwb.edu/business/faculty/sophie-leroy/attention-residue" },
    { title: "Deep Work: Cal Newport", kind: "Book", note: "The book that popularised the term. Strong on the argument and the practices; treat its broader cultural claims as opinion rather than evidence." },
    { title: "Attention Span: Gloria Mark", kind: "Book", note: "From the researcher behind the interruption studies. More empirically grounded than most books in this genre." },
  ],

  internalLinks: [
    { slug: "clear-writing-that-gets-read", anchor: "the kind of work that needs a runway", context: "In the concept on depth requiring uninterrupted time" },
    { slug: "prompt-engineering-fundamentals", anchor: "deciding what you want before you start", context: "In the learning path step on choosing the task in advance" },
  ],

  relatedGuides: ["clear-writing-that-gets-read", "prompt-engineering-fundamentals"],

  conclusion: [
    "Start by measuring your longest uninterrupted block for a week without changing anything. Whatever number you get is the real constraint on what kind of work you can currently do, and it's usually the moment the problem stops being abstract.",
  ],

};

export default guide;
