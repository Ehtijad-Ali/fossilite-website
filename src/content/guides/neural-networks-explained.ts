import type { Guide } from "../types";
import { PETER_NGUYEN } from "../authors";

export const guide: Guide = {
  slug: "neural-networks-explained",
  seoTitle: "Neural Networks Explained: How Deep Learning Works",
  metaDescription:
    "How neural networks actually learn: layers, weights, backpropagation and why depth helps. A clear, technically accurate guide with no brain metaphors.",
  title: "Neural Networks Explained",
  keywords: [
    "how neural networks work",
    "deep learning explained",
    "backpropagation",
    "neural network layers",
    "activation function",
    "what is a neural network",
  ],
  category: "deep-learning",
  level: "Intermediate",
  updated: "2026-08-04",
  author: PETER_NGUYEN,
  readingTime: 14,

  intro: [
    "Neural networks are routinely explained by pointing at a diagram of the brain, which is a shame, because the brain analogy is both inaccurate and unnecessary. An artificial neuron shares roughly as much with a biological one as a paper aeroplane shares with a pigeon: it was loosely inspired by it, and the resemblance stops being useful almost immediately.",
    "Here is the accurate version. A neural network is a stack of simple mathematical operations: multiply the inputs by some numbers, add them up, apply one non-linear function, pass the result to the next layer. Repeat. That's the entire architecture. What makes it powerful is not any individual step but the fact that you can automatically compute how every one of those numbers should change to reduce the error, and then change them, millions of times.",
    "This guide assumes you understand the basics of machine learning: that a model has parameters, and training adjusts them to reduce a loss. If that's unfamiliar, start with how machine learning actually works and come back. What follows is specifically about what the layers do, why non-linearity is the load-bearing ingredient, how backpropagation works without the calculus, and why depth turned out to matter so much.",
  ],

  whyItMatters: [
    "Every system currently described as AI — language models, image generators, speech recognition, protein structure prediction — is a neural network underneath. Understanding the architecture is what lets you reason about the whole category rather than treating each new product as a separate mystery.",
    "It also explains the economics, which is where most business decisions actually get made. Why training costs what it does, why inference is cheap by comparison, why GPUs matter, why fine-tuning a large model is affordable while training one from scratch is not — all of these fall directly out of how the computation works. People who don't understand the architecture consistently misjudge what an AI project will cost.",
    "And it explains the failure modes that look like nonsense from outside. Why a network can classify a thousand object categories superbly and then be fooled by a few pixels of noise. Why it produces confident outputs on inputs unlike anything it trained on. These aren't bugs: they follow from what the network is actually computing, and once you see that, they stop being surprising.",
  ],

  coreConcepts: [
    {
      term: "A neuron is a weighted sum plus one function",
      explain:
        "Each artificial neuron takes several numbers in, multiplies each by its own weight, adds them together with a bias term, and passes the total through a single non-linear function. That's the complete operation.",
      detail:
        "Written out: output = f(w₁x₁ + w₂x₂ + … + b). The weights and bias are the learned parameters. The function f is chosen by you and doesn't change during training.",
    },
    {
      term: "Layers are just neurons applied in parallel",
      explain:
        "A layer is a group of neurons all reading the same inputs, each with its own weights, producing its own output. Those outputs become the inputs to the next layer.",
      detail:
        "In practice this is one matrix multiplication, which is why GPUs are so effective here — they were designed to multiply large matrices fast for graphics, and the operation turned out to be identical.",
    },
    {
      term: "Non-linearity is the whole reason depth works",
      explain:
        "Without the non-linear function between layers, stacking layers is pointless. A chain of linear operations collapses mathematically into a single linear operation, so a hundred layers would have exactly the capacity of one.",
      detail:
        "The activation function — usually ReLU, which simply outputs zero for negatives and the input itself for positives — is what stops the collapse. It is almost embarrassingly simple, and removing it destroys the model entirely.",
    },
    {
      term: "Depth builds features on top of features",
      explain:
        "Early layers detect simple patterns. Later layers combine those into more complex ones. In an image network, this progresses roughly from edges, to textures, to object parts, to whole objects.",
      detail:
        "Nobody specifies this hierarchy. It emerges because composing simple detected features is an efficient way to reduce the loss, and training finds efficient solutions.",
    },
    {
      term: "The forward pass computes; the loss scores",
      explain:
        "Data flows in at the first layer and out at the last. That's the forward pass. The loss function then compares the output to the correct answer and produces one number.",
      detail:
        "That single number is the only feedback the entire network receives. Everything the model learns is squeezed through it, which is why the choice of loss function shapes the model so completely.",
    },
    {
      term: "Backpropagation assigns blame efficiently",
      explain:
        "To improve, you need to know how much each individual weight contributed to the error. Backpropagation computes this by working backwards from the output, using the chain rule to pass responsibility layer by layer.",
      detail:
        "Its significance is efficiency rather than novelty. Computing each gradient independently would be hopelessly slow; backpropagation gets all of them in roughly the cost of one extra forward pass, which is what makes large networks trainable at all.",
    },
    {
      term: "Batches, epochs and learning rate",
      explain:
        "Weights are updated using small batches of examples rather than one at a time or all at once. An epoch is one full pass through the training data. The learning rate scales how large each update is.",
      detail:
        "These three are where most practical training time goes. Too large a learning rate and the loss diverges; too small and training crawls. Batch size trades gradient quality against memory and speed.",
    },
    {
      term: "Overfitting is easier here, so regularisation matters more",
      explain:
        "Networks have enough parameters to memorise their training data outright. Techniques like dropout (randomly switching off neurons during training), weight decay and early stopping exist to prevent that.",
      detail:
        "Dropout is the counter-intuitive one: deliberately damaging the network during training forces it to spread its representation across many neurons rather than relying on a few, which generalises better.",
    },
    {
      term: "Architecture encodes assumptions about the data",
      explain:
        "Convolutional networks assume nearby pixels are related and that a pattern means the same thing wherever it appears. Transformers assume any element may need to relate to any other. Choosing an architecture is choosing a prior.",
      detail:
        "This is why the same amount of data gets very different results with different architectures. The architecture is doing some of the work that data would otherwise have to do.",
    },
    {
      term: "Transfer learning is why you rarely train from scratch",
      explain:
        "A network trained on a large general dataset has learned reusable low-level features. You can keep those and retrain only the final layers on your much smaller specific dataset.",
      detail:
        "This is the difference between a project needing millions of examples and one needing a few thousand. For almost all applied work, fine-tuning an existing model is the correct default.",
    },
  ],

  learningPath: [
    {
      title: "Watch a tiny network train",
      body: "Use TensorFlow Playground before writing any code. Add and remove layers, change the activation function to linear and watch the network lose the ability to separate anything non-linear, then set the learning rate to maximum and watch it diverge.",
      effort: "1–2 hours",
      outcome: "You can explain from observation why non-linearity is required.",
    },
    {
      title: "Implement one neuron by hand",
      body: "In plain Python with no framework, write the forward pass for a single neuron, compute a loss, work out the gradient manually, and update the weight. Do it for a handful of iterations and watch the loss fall.",
      effort: "3–4 hours",
      outcome: "You've done by hand what a framework does invisibly, once.",
    },
    {
      title: "Build a small network from scratch",
      body: "Two layers, on a simple dataset, still without a framework. Implement the forward pass, the loss, backpropagation and the weight update. This is the single most clarifying exercise in deep learning and most people skip it.",
      effort: "10–15 hours",
      outcome: "You can explain every line of a training loop because you wrote one.",
    },
    {
      title: "Rebuild the same thing in PyTorch",
      body: "Now use the framework. Map each part of your hand-written version onto its PyTorch equivalent — `nn.Linear`, the optimiser, `loss.backward()`, `optimizer.step()`. The framework stops being magic at this point.",
      effort: "4–6 hours",
      outcome: "You know exactly what each framework call is doing on your behalf.",
    },
    {
      title: "Learn to read training curves",
      body: "Plot training and validation loss on every run. Deliberately induce each failure: divergence from too high a learning rate, overfitting from too little data, underfitting from too small a model. Learn their signatures by sight.",
      effort: "5–8 hours",
      outcome: "You can diagnose a bad run from its curves before reading the code.",
    },
    {
      title: "Fine-tune a pre-trained model",
      body: "Take an existing image or text model and adapt it to your own small dataset by retraining the final layers. Compare against training the same architecture from scratch on the same data.",
      effort: "6–10 hours",
      outcome: "You've measured the value of transfer learning yourself.",
    },
    {
      title: "Break a working model adversarially",
      body: "Take a trained classifier and find inputs that fool it — small perturbations that flip the prediction while looking unchanged to you. It's a sobering and permanently useful demonstration of what the network is not doing.",
      effort: "4–6 hours",
      outcome: "You understand that high accuracy and human-like perception are different things.",
    },
  ],

  examples: [
    {
      kind: "documented",
      scenario: "AlexNet wins ImageNet 2012 and restarts the entire field.",
      walkthrough:
        "Krizhevsky, Sutskever and Hinton entered a deep convolutional network in the 2012 ImageNet Large Scale Visual Recognition Challenge, trained on GPUs with ReLU activations and dropout. The competing approaches relied on hand-engineered visual features designed by researchers over many years: edge detectors, texture descriptors, and so on. The network was given raw pixels and learned its own features.",
      result:
        "It achieved a top-5 error rate of 15.3% against 26.2% for the second-placed entry — a margin large enough that it could not be attributed to tuning. The significance was not the architecture, most of which had been known for years, but the demonstration that learned features beat hand-designed ones given enough data and compute. Essentially every vision system built since descends from this result.",
      source: {
        label: "Krizhevsky, Sutskever & Hinton (2012) — ImageNet Classification with Deep Convolutional Neural Networks, NeurIPS",
        url: "https://proceedings.neurips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf",
      },
    },
    {
      kind: "illustration",
      scenario: "Removing the activation function from a deep network.",
      walkthrough:
        "A demonstration worth running rather than reading about. Take a network with several hidden layers that successfully separates a non-linearly-separable dataset: two interleaved spirals, say. Replace every activation function with the identity function, so each layer is purely linear, and retrain with everything else unchanged.",
      result:
        "The network collapses to the capacity of a single linear layer and can only draw a straight boundary, no matter how many layers you give it. This isn't a training failure — the chain of linear operations is mathematically equivalent to one linear operation. It's the clearest possible demonstration that non-linearity, not depth, is what makes depth worth having.",
    },
    {
      kind: "illustration",
      scenario: "A classifier that is confident about an input unlike anything it has seen.",
      walkthrough:
        "Train a network to distinguish ten categories, then feed it something from an eleventh category it has never encountered. The final layer produces scores across the ten categories it knows, those scores get normalised into something that looks like a probability distribution, and one category wins.",
      result:
        "The output is a confident classification of an object the model has no concept of, because 'none of these' was never an available answer. If your system needs to handle unfamiliar inputs, that capability has to be designed in — an explicit rejection class, an out-of-distribution detector, or a confidence threshold you have actually calibrated.",
    },
  ],

  mistakes: [
    {
      mistake: "Reaching for deep learning on tabular data",
      why: "On structured rows-and-columns data, gradient-boosted trees usually match or beat neural networks while training in seconds and remaining inspectable. Deep learning's advantage is in raw signals — pixels, audio, text — where the input has structure worth learning from scratch.",
      fix: "Use the simplest model class that suits your data type. Reserve neural networks for problems where hand-designing features would be infeasible.",
    },
    {
      mistake: "Training from scratch when fine-tuning would do",
      why: "It requires orders of magnitude more data, compute and time to reach the same result, and almost always ends up worse.",
      fix: "Start from a pre-trained model and adapt it. Training from scratch is justified only when your domain doesn't resemble anything a public model has seen.",
    },
    {
      mistake: "Tuning the architecture before checking the data",
      why: "Adding layers is satisfying and rarely the bottleneck. Mislabelled examples, a broken preprocessing step, or a leaked feature will cap your performance regardless of architecture.",
      fix: "Look at fifty individual errors before changing the model. Most early gains come from the data pipeline, not the network.",
    },
    {
      mistake: "Ignoring the learning rate",
      why: "It's the single most consequential hyperparameter. Too high and the loss oscillates or explodes; too low and training appears to work while going nowhere useful.",
      fix: "Run a learning-rate range test before a long training run, and use a schedule that decays over time. This is a ten-minute investment that regularly saves hours.",
    },
    {
      mistake: "Evaluating only on aggregate accuracy",
      why: "A network can achieve strong overall accuracy while failing systematically on a subgroup or an input type, and the headline number will never reveal it.",
      fix: "Break performance down by class and by any subgroup that matters, and inspect the confusion matrix rather than only the top-line score.",
    },
    {
      mistake: "Treating the softmax output as a calibrated probability",
      why: "Neural networks are typically overconfident. A 0.97 output does not mean the model is right 97% of the time, and routing decisions on that assumption produces silent errors.",
      fix: "Calibrate explicitly — temperature scaling is cheap and effective — then verify on held-out data that the stated confidence matches observed accuracy.",
    },
    {
      mistake: "Assuming the network perceives the way you do",
      why: "High accuracy on a benchmark does not imply human-like understanding. Networks can be highly sensitive to perturbations that are invisible to people, and insensitive to changes that would obviously matter.",
      fix: "Test with deliberately adversarial and out-of-distribution inputs before deployment, particularly if the system faces the public.",
    },
  ],

  bestPractices: [
    "Start from a pre-trained model unless you have a specific reason not to. This is the default that most applied projects should never depart from.",
    "Establish a non-neural baseline first. If logistic regression gets you within a couple of points, the network is not earning its operational cost.",
    "Log every run: architecture, hyperparameters, data version, random seed, final metrics. Deep learning experiments are irreproducible by default and you will need to reconstruct one.",
    "Fix the random seed for debugging, then verify your final result across several seeds. A result that only holds for one seed isn't a result.",
    "Normalise your inputs. It's mundane and it's one of the most common causes of a network that trains far more slowly than it should.",
    "Watch validation loss, not training loss, and stop early when it turns upward. Training loss falling is not evidence of anything useful.",
    "Start smaller than you think you need. Small models train fast, expose data problems quickly, and set a floor for whether scale is actually helping.",
    "Budget for inference, not just training. A model that's expensive per prediction can be commercially unviable however good its accuracy.",
  ],

  proTips: [
    "Overfit a single batch deliberately before any real training run. A correctly wired network should drive the loss on ten examples to nearly zero within a few hundred steps. If it can't, you have a bug, and you've found it in two minutes instead of after an eight-hour run.",
    "Plot the distribution of activations and gradients per layer when training misbehaves. Vanishing or exploding values show up immediately in those histograms and are nearly invisible in the loss curve.",
    "When accuracy plateaus, add data or augmentation before adding parameters. More capacity on the same data usually buys overfitting rather than performance.",
    "Keep a fixed, hand-checked evaluation set that never enters training. After fifty experiments your validation score has quietly become optimistic through repeated selection, and this set is the only honest number you have left.",
    "Time one training run precisely and extrapolate before committing to a large sweep. Teams routinely discover mid-week that their planned experiment would take eleven days.",
    "Read the model's most confident errors first. Confident and wrong is where the systematic problems live; uncertain and wrong is usually just hard examples.",
  ],

  businessApplications: [
    "Visual inspection and defect detection, where hand-writing rules for 'looks wrong' is impossible but examples are easy to collect.",
    "Document understanding: extracting structured fields from scanned forms, invoices and contracts, including handwriting and inconsistent layouts.",
    "Speech transcription and call analysis, where fine-tuning an existing model on your domain vocabulary usually beats any off-the-shelf option.",
    "Recommendation and ranking systems that learn from interaction data rather than hand-tuned business rules.",
    "Demand and time-series forecasting where the signal is complex: though be honest about whether it is, since simpler methods win more often than practitioners expect.",
    "Anomaly detection in sensor or transaction streams, where the network learns what normal looks like and flags departures from it.",
  ],

  lifeApplications: [
    "Understanding the AI products you use daily: why a photo app groups faces well but occasionally makes a bizarre mistake, and why it improves after an update.",
    "Judging claims about AI capability. Knowing that a network optimises a chosen loss on a chosen dataset makes 'superhuman performance' a question rather than a statement.",
    "Recognising the limits of pattern-matching in your own thinking. A network trained on the past reproduces the past; so does a person who only ever learns from what already happened to them.",
    "Making better decisions about learning anything: transfer learning is a real phenomenon in people too, and starting from an adjacent skill beats starting from nothing.",
  ],

  exercises: [
    {
      title: "Kill the non-linearity",
      brief:
        "Take a working network on a non-linearly-separable dataset. Replace every activation with the identity function. Retrain and record what the decision boundary can now represent.",
      success: "You can explain the collapse mathematically, not just describe it.",
      time: "1 hour",
    },
    {
      title: "Backpropagation by hand",
      brief:
        "On paper, for a two-layer network with two inputs and one output, compute the forward pass and then the gradient of the loss with respect to every weight. Verify against a framework's autograd.",
      success: "Your hand-computed gradients match the framework's to several decimal places.",
      time: "3–4 hours",
    },
    {
      title: "The single-batch sanity check",
      brief:
        "Take ten training examples and train until the loss is nearly zero. Then introduce a deliberate bug — wrong loss, detached gradient, frozen layer — and observe how each failure looks.",
      success: "You can identify three distinct bugs from the loss curve alone.",
      time: "2 hours",
    },
    {
      title: "Transfer versus scratch",
      brief:
        "Train the same architecture two ways on a small dataset: from random initialisation, and fine-tuned from pre-trained weights. Plot both learning curves on the same axes.",
      success: "A measured gap in both final accuracy and time to reach it.",
      time: "4–6 hours",
    },
    {
      title: "Find an adversarial example",
      brief:
        "Take a trained classifier and search for a small input perturbation that flips its prediction while remaining imperceptible to you.",
      success: "One image the model gets confidently wrong and you get obviously right.",
      time: "3–4 hours",
    },
  ],

  checklist: [
    "I can explain what one neuron computes without reference to biology",
    "I can explain why removing the activation function collapses the network",
    "I started from a pre-trained model, or can justify why not",
    "I established a simpler non-neural baseline and beat it",
    "I overfit a single batch first to verify the training loop works",
    "Inputs are normalised and the preprocessing is version-controlled",
    "I ran a learning-rate range test rather than guessing",
    "I monitor validation loss and stop early when it turns",
    "Results hold across multiple random seeds, not just one",
    "Confidence scores are calibrated before any decision is routed by them",
    "I tested with out-of-distribution and adversarial inputs",
  ],

  faqs: [
    {
      q: "Do I need to understand calculus to use neural networks?",
      a: "To use them, no — frameworks compute gradients automatically. To debug them properly, a conceptual grasp of what a derivative represents is useful. You need the intuition much more than the ability to differentiate by hand.",
    },
    {
      q: "How many layers should my network have?",
      a: "Start with the smallest architecture that could plausibly work, or better, start from a proven pre-trained one. Depth is not a dial you turn up for accuracy: it increases capacity, training cost and overfitting risk together.",
    },
    {
      q: "Why do neural networks need so much data?",
      a: "Because they learn their own features rather than being given them, which is exactly why they work well on raw signals. Transfer learning is the standard escape: reuse features learned on a large dataset and adapt them with a small one.",
    },
    {
      q: "What's the difference between deep learning and machine learning?",
      a: "Deep learning is a subset of machine learning that uses multi-layer neural networks. All the machine learning fundamentals — train/test splits, overfitting, evaluation metrics — apply unchanged.",
    },
    {
      q: "Are neural networks a black box?",
      a: "You can inspect every weight, so not literally. But the learned representation is distributed across millions of parameters with no human-readable structure, so interpretability tools give you evidence about behaviour rather than an explanation of reasoning.",
    },
    {
      q: "Why are GPUs used for training?",
      a: "A layer's computation is a large matrix multiplication, and GPUs were built to do exactly that in parallel for graphics. The overlap was coincidental and turned out to be one of the most consequential accidents in the field.",
    },
    {
      q: "Can a small model ever beat a large one?",
      a: "Frequently, on narrow well-defined tasks, and it will be faster and cheaper to run. Size helps most with breadth and complex reasoning. Match the model to the task rather than defaulting to the largest available.",
    },
  ],

  tools: [
    { name: "PyTorch", what: "The dominant framework in research and increasingly in production. Learn this one first.", cost: "Free", url: "https://pytorch.org" },
    { name: "TensorFlow Playground", what: "Browser visualisation of a network training live. The fastest route to intuition about layers and activations.", cost: "Free", url: "https://playground.tensorflow.org" },
    { name: "Hugging Face", what: "Pre-trained models and datasets for almost every task. Where fine-tuning projects should start.", cost: "Freemium", url: "https://huggingface.co" },
    { name: "Google Colab", what: "Free GPU access with no local setup. Enough to train real models while learning.", cost: "Freemium", url: "https://colab.research.google.com" },
    { name: "Weights & Biases", what: "Experiment tracking. Deep learning runs are irreproducible without it, and you will need to reproduce one.", cost: "Freemium", url: "https://wandb.ai" },
    { name: "Netron", what: "Visualises a model's architecture from its saved file. Useful for understanding a model someone else built.", cost: "Free", url: "https://netron.app" },
  ],

  resources: [
    { title: "Neural Networks: Zero to Hero — Andrej Karpathy", kind: "Video", note: "Builds backpropagation and then a language model from scratch, line by line. The best free deep learning material that exists.", url: "https://karpathy.ai/zero-to-hero.html" },
    { title: "Neural Networks and Deep Learning — Michael Nielsen", kind: "Book", note: "Free online, and the clearest written explanation of backpropagation available.", url: "http://neuralnetworksanddeeplearning.com" },
    { title: "Dive into Deep Learning", kind: "Book", note: "Free, interactive, with runnable code in multiple frameworks alongside the maths.", url: "https://d2l.ai" },
    { title: "fast.ai — Practical Deep Learning for Coders", kind: "Course", note: "Top-down and fine-tuning-first, which matches how applied work is actually done.", url: "https://course.fast.ai" },
    { title: "ImageNet Classification with Deep CNNs (AlexNet)", kind: "Paper", note: "The 2012 paper that restarted the field. Short and readable once you know the vocabulary.", url: "https://proceedings.neurips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf" },
  ],

  internalLinks: [
    { slug: "how-machine-learning-actually-works", anchor: "the machine learning fundamentals underneath", context: "In the introduction" },
    { slug: "how-large-language-models-work", anchor: "how transformers apply these ideas to language", context: "In the architecture concept" },
    { slug: "python-for-data-work", anchor: "the Python you need to implement this", context: "In the learning path" },
  ],

  relatedGuides: [
    "how-machine-learning-actually-works",
    "how-large-language-models-work",
    "python-for-data-work",
  ],

  conclusion: [
    "If you do one thing from this guide, build a two-layer network from scratch without a framework. It takes a weekend, and afterwards no deep learning code will ever look like magic again.",
  ],

};

export default guide;
