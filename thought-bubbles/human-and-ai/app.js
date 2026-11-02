const responseCopy = {
  work: {
    security: "Your hours continue to shrink, but your home no longer depends on keeping them. You can care for your father or begin again without falling into poverty. The immediate fear recedes, although the empty calendar does not.",
    contribution: "The city begins building places where care, study, civic work, and local creation are visible. You gain new ways to be needed, but you also notice how quickly an invitation to contribute can become another demand to prove your worth.",
    freedom: "No institution tells you what should replace the missing hours. The freedom is real, but so is the inequality inside it. A person with money, confidence, and companions receives an open horizon, while someone else receives an empty day.",
    work: "The hospital is required to keep a meaningful human role around the system, so you retain a schedule, colleagues, and bargaining power. Some tasks remain because they form people, while others remain because society is not yet willing to admit that they are unnecessary."
  },
  wealth: {
    income: "A payment arrives in your account each month whether or not the hospital needs you. You can refuse poor work and plan beyond the next bill. You remain secure, but still dependent on systems you do not own or control.",
    ownership: "You receive a dividend from a public trust that owns part of the infrastructure. You are no longer only a recipient of help; you hold a claim on the wealth. Whether that claim becomes real power depends on who governs the trust.",
    jobs: "The city protects employment and gives workers a voice over automation. You keep both income and bargaining power, although useful automation slows and some people begin performing tasks whose quiet purpose is to prove that they still deserve security.",
    market: "New occupations appear around trust, taste, care, and the tools themselves. You may find work no planner could have named, but reinvention is easier for people with savings and connections. For everyone else, adaptation can feel like abandonment."
  },
  time: {
    service: "Every resident spends part of the year in community service. You gain routine, new encounters, and a responsibility beyond the market, while also wondering who will decide which service counts and whether refusal will remain possible.",
    care: "The time you spend with your father becomes visible, supported, and shared. Dependency moves to the center of public life, although care may still fall to the same people, praised warmly and supported poorly.",
    projects: "Drawing begins to organize your week while other people choose study, craft, research, or creation. Chosen projects can become commitments, but not everyone begins with the same confidence, education, space, or audience.",
    open: "Nothing is required of you. Your time belongs to you, including the right to rest or do something that cannot be justified in advance. The old structures, however, disappear more quickly than new places to belong."
  },
  ability: {
    experience: "You keep drawing because the hour of looking changes you, even when the image is worse. This protects play, practice, and participation, although the same answer becomes harder to defend at the hospital, where another person needs the best available outcome.",
    relationship: "The letter matters because your daughter wrote it. A better sentence from nowhere would not be the same gift, although relationship cannot excuse poor care or deny someone a tool that could genuinely help them.",
    responsibility: "At the hospital, a named person must still decide. They can explain, reconsider, apologize, and be held accountable. The role matters only if they understand the system and possess the authority to disagree.",
    quality: "You accept that a patient should receive the better diagnosis, even when it comes from a machine. Human roles are not preserved for sentiment alone. The harder question is whether every valuable activity should be judged like a diagnosis."
  },
  judgment: {
    foundations: "Leia learns enough mathematics, language, and logic to test the tutor’s answer rather than trust it by default. The foundation protects independence, although deciding how much is enough becomes harder as knowledge grows more specialized.",
    expression: "When the purpose is to discover what she thinks, Leia writes before asking for help. The finished work may be less polished, but the making has changed her, and the boundary blurs as assistance enters every stage.",
    stakes: "AI can advise, but decisions affecting liberty, health, and opportunity remain answerable to a person. Human involvement matters only if that person retains the knowledge and authority to say no.",
    choice: "Leia may decide which capacities to keep unaided and which to extend. Others may choose differently, and the freedom is meaningful only if opting out does not cost someone an education, a livelihood, or an essential service."
  },
  value: {
    yes: "You tell Leia that some distinctly human practices must be protected, even when they are inefficient. The answer preserves a boundary, but it also risks defining humanity too narrowly and treating difference as proof of superiority.",
    no: "You tell her that worth was never earned by being the most capable. No person must outperform a machine in order to matter. The claim is simple, although building institutions that truly live by it will not be.",
    unsure: "You admit that you do not know. Human beings built status, education, and identity around ability for centuries, so a person can reject superiority in principle and still grieve its loss."
  }
};

const scenarios = {
  civic: {
    number: "Scenario 01",
    title: "The Civic Abundance Society",
    deck: "AI creates enormous wealth, but no one is asked to live as a passive recipient of it. The systems are treated as a common inheritance, and contribution moves from the workplace into public life.",
    paragraphs: [
      "In this version of your life, your first empty Monday does not remain empty for long. The city converts old offices into workshops, classrooms, kitchens, rehearsal rooms, and community centers. Some people care for relatives, restore public gardens, teach children, or study subjects they once considered impractical. A public dividend pays for the ordinary costs of living, and shared institutions give the week a new shape.",
      "The decisive change happened in ownership. A portion of the computing infrastructure, energy systems, and highly automated companies came to be held through public trusts. Their returns now fund income, healthcare, education, and local projects. People are not supported because they failed to remain useful. They receive a share because generations of public knowledge and collective labor made the technology possible.",
      "This society does not abolish ambition. People still build companies, become excellent at difficult things, and compete for recognition. But paid employment is no longer the only visible proof that a person is participating. Care, study, civic service, and creation have places, institutions, and rituals of their own. A person can answer the question of what they do without naming an employer.",
      "The arrangement is generous, but not innocent. The institutions that recognize contribution can begin to define it. Public service can become compulsory in all but name. Shared ownership can become remote bureaucracy. The society must repeatedly decide whether it is creating genuine belonging or simply replacing the authority of the employer with the authority of the state."
    ],
    protects: "Material security, shared power, care, and visible forms of contribution outside the market.",
    risks: "Bureaucracy, compulsory usefulness, political capture, and a narrow public definition of a worthy life.",
    question: "Can a society invite everyone to contribute without requiring people to prove, once again, that they deserve to belong?"
  },
  protected: {
    number: "Scenario 02",
    title: "The Protected Human Economy",
    deck: "Society decides that work is more than a method of production. Certain roles, skills, and encounters remain human, even when automation could perform them faster.",
    paragraphs: [
      "In this version of your life, you never leave the hospital. Your week becomes shorter, but your role remains recognizable. A child still learns from a teacher who knows their name. A patient receives a diagnosis generated by a system, but a doctor remains responsible for understanding it and deciding what happens next. Courts, newspapers, and care homes preserve human roles with real authority, not ceremonial signatures at the end of an automated process.",
      "Work has changed, but it has not disappeared. The average week is shorter. Productivity gains are divided between higher wages, public services, and time. Labor law gives workers a voice in which tasks are automated. Some industries carry a human-made designation, much like protections once used for local food or traditional craft. The label does not claim that human work is always better. It says that the process can matter alongside the result.",
      "This future protects the places where people learn competence, meet strangers, and become responsible for something outside themselves. It refuses the idea that efficiency is the only measure available to a civilization. Human distinctiveness is treated less as proof of superiority than as a practice that can weaken if it is never exercised.",
      "The cost appears gradually. Some services remain more expensive. Some errors that a machine might have prevented still occur. Protected roles can harden into privileges held by those already secure, while dangerous or invisible work is automated first. The line between preserving human development and staging human busyness is never stable."
    ],
    protects: "Skilled human roles, social structure, worker power, responsibility, and practices through which ability is formed.",
    risks: "Artificial scarcity, higher costs, protected elites, and work preserved for symbolism rather than need.",
    question: "Which forms of human effort are worth protecting when another system can produce a better result?"
  },
  open: {
    number: "Scenario 03",
    title: "The Open Horizon",
    deck: "No institution decides in advance what people should do with abundance. AI lowers the cost of making and learning, while individuals build lives through markets, projects, and voluntary communities.",
    paragraphs: [
      "In this version of your life, you leave the hospital and begin again. You start a small school that helps families navigate medical systems, using AI to translate documents and create personalized guides that once required an entire organization. Most projects around you fail, some find a community, and a few become professions that did not exist five years earlier.",
      "The state provides basic services and prevents the worst forms of exclusion, but it does not prescribe a common purpose. New markets appear around trust, taste, physical presence, local knowledge, and experiences whose value comes from choosing them. People move between paid work, learning, creation, and rest. Reputation matters as much as credentials. Small groups form and dissolve quickly.",
      "This future takes freedom seriously. It does not assume that a meaningful life must resemble a job, or that a public institution can know what forms of value will emerge. Human ability is amplified rather than fenced off. Someone may use AI to become capable of something that their education, body, language, or location once placed beyond reach.",
      "Freedom, however, magnifies starting conditions. A person with confidence, savings, and a strong network experiences possibility. Another sees an endless field with no path through it. Communities can become temporary, attention can become the scarcest resource, and every interest can feel pressure to turn itself into an audience or income. No one is forced to perform usefulness, but many feel compelled to perform a self."
    ],
    protects: "Choice, experimentation, plural ways of living, rapid adaptation, and access to powerful creative tools.",
    risks: "Isolation, unequal starting points, unstable income, attention markets, and the pressure to turn identity into a project.",
    question: "When every path is open, who helps a person learn how to choose one and remain with it?"
  },
  partnership: {
    number: "Scenario 04",
    title: "The Accountable Partnership",
    deck: "AI performs much of the analysis, but human beings retain responsibility for decisions that shape another person’s life. The central institution of this future is not work itself. It is answerability.",
    paragraphs: [
      "In this version of your life, your role at the hospital becomes smaller and more serious. An AI system may discover the pattern, draft the recommendation, and predict the likely result, but it cannot issue the final decision alone. A named person must understand the reasoning, hear the affected person, and possess the authority to disagree. When harm occurs, the explanation cannot end with the model.",
      "Education changes around this demand. Students use AI early, but they also learn the foundations needed to question it. They practice making decisions under uncertainty, explaining their reasons, and noticing when a clean answer hides a human cost. Expertise is no longer defined only by recalling more information than a system. It is defined by knowing what the information cannot settle.",
      "The economy remains mixed. Some people work less, and income may come from several sources. What society protects most deliberately are roles of stewardship. Doctors, judges, teachers, engineers, journalists, and public officials are valued for carrying responsibility through time. Their judgment can be aided, but not rented from a machine.",
      "This arrangement can also become a fiction. A person may approve hundreds of decisions they had no realistic time to examine. Institutions may place a human name on a machine’s choice in order to distribute blame. As systems become more capable, retaining enough knowledge to challenge them becomes expensive and difficult. Human oversight matters only while refusal remains possible."
    ],
    protects: "Moral agency, contestability, foundational knowledge, and a person’s right to receive reasons from someone answerable for them.",
    risks: "Rubber-stamp oversight, blame shifted onto nominal decision makers, slower services, and expertise that quietly becomes dependent.",
    question: "How much understanding and authority must a person retain before human responsibility is real rather than ceremonial?"
  },
  supported: {
    number: "Scenario 05",
    title: "Supported Independence",
    deck: "Security is separated from employment, while purpose remains personal. Society supplies a floor and places to begin, but resists telling people what a meaningful life must contain.",
    paragraphs: [
      "In this version of your life, your first open year feels like relief. Housing, food, healthcare, and education no longer depend entirely on keeping a job. People leave abusive workplaces, care for children, recover from exhaustion, or attempt work that may never earn money. Time becomes available before everyone knows how to use it.",
      "A network of libraries, workshops, studios, gardens, sports clubs, and learning houses grows around that open time. They are public without being compulsory. A person can join a research group, learn carpentry, make music, mentor someone, or do very little for a while. The institutions offer structure without making support conditional on participation.",
      "This future begins from a strong claim: a person does not need to remain economically necessary, intellectually superior, or permanently productive in order to deserve a life. Excellence still matters to those who pursue it. It becomes a form of devotion rather than a receipt for dignity. People can choose difficulty because of what it develops in them, not because scarcity forces them to compete.",
      "The deepest risk is not idleness but disconnection. Some people find commitments that organize decades. Others move through endless beginnings. Old inequalities of education and confidence continue to shape who can turn freedom into a life. A guaranteed floor can prevent desperation, but it cannot make someone feel expected, loved, or necessary to another person."
    ],
    protects: "Unconditional dignity, freedom from degrading work, rest, experimentation, and the right not to justify every hour.",
    risks: "Isolation, drift, unequal access to confidence and community, and a political backlash against people seen as unproductive.",
    question: "Can society offer belonging without making belonging another obligation a person must satisfy?"
  },
  negotiated: {
    number: "Scenario 06",
    title: "The Negotiated Middle",
    deck: "Your choices do not point toward a single governing principle. This future treats that tension as permanent and builds different rules for different parts of life.",
    paragraphs: [
      "In this version of your life, there is no clean break between the old economy and the new one. Your hours fall, rise, and change again. Some industries automate rapidly while others preserve human work. A public dividend provides a modest floor, unions bargain over the deployment of AI, and local institutions offer care, service, and learning. Markets create unfamiliar professions at the edges of all three.",
      "The boundaries depend on the stakes. A person may let an AI plan a journey, design a room, or teach a technical skill. Decisions about liberty, medical treatment, education, and public benefits require a human appeal. Creative work carries labels explaining how it was made, but audiences decide whether the distinction matters.",
      "This future looks inconsistent because it is. It accepts that efficiency, freedom, equality, responsibility, and human development cannot always be maximized together. Instead of resolving the conflict once, institutions expose it. Rules expire. Public assemblies revisit them. Different communities try different arrangements, and people can compare what each one makes possible.",
      "Compromise can be a form of wisdom. It can also protect the status quo until private power becomes too strong to challenge. A society that negotiates every boundary may respond too slowly to a technology moving at extraordinary speed. The middle remains humane only if revision is real and the people carrying the costs possess an equal voice."
    ],
    protects: "Plural values, experimentation, democratic revision, and different boundaries for low-stakes and high-stakes life.",
    risks: "Complexity, inconsistency, slow action, hidden capture, and temporary compromises that quietly become permanent.",
    question: "Can a society keep renegotiating its relationship with AI after convenience and power have made certain choices difficult to reverse?"
  }
};

const weights = {
  work: {
    security: { dignity: 3, commons: 1 }, contribution: { commons: 2, agency: 1 },
    freedom: { autonomy: 3, dignity: 1 }, work: { continuity: 4 }
  },
  wealth: {
    income: { dignity: 3, commons: 1 }, ownership: { commons: 4 },
    jobs: { continuity: 4 }, market: { autonomy: 4 }
  },
  time: {
    service: { commons: 3, agency: 1 }, care: { commons: 2, dignity: 2 },
    projects: { autonomy: 3, agency: 1 }, open: { autonomy: 3, dignity: 1 }
  },
  ability: {
    experience: { dignity: 2, autonomy: 1 }, relationship: { commons: 2, dignity: 1 },
    responsibility: { agency: 3 }, quality: { autonomy: 2 }
  },
  judgment: {
    foundations: { agency: 3, continuity: 1 }, expression: { autonomy: 2, dignity: 1 },
    stakes: { agency: 4 }, choice: { autonomy: 4 }
  },
  value: {
    yes: { continuity: 3, agency: 1 }, no: { dignity: 4 },
    unsure: { commons: 1, dignity: 1, agency: 1, autonomy: 1, continuity: 1 }
  }
};

const axisToScenario = {
  commons: "civic",
  continuity: "protected",
  autonomy: "open",
  agency: "partnership",
  dignity: "supported"
};

const selections = {};
const interactions = [...document.querySelectorAll(".interaction")];
const progressBar = document.getElementById("reading-progress-bar");
const scenarioTitle = document.getElementById("scenario-title");
const scenarioNumber = document.getElementById("scenario-number");
const scenarioDeck = document.getElementById("scenario-deck");
const scenarioProgress = document.getElementById("scenario-progress");
const scenarioProgressCount = document.getElementById("scenario-progress-count");
const scenarioProgressBar = document.getElementById("scenario-progress-bar");
const scenarioPath = document.getElementById("scenario-path");
const scenarioChips = document.getElementById("scenario-chips");
const scenarioNarrative = document.getElementById("scenario-narrative");
const scenarioAnalysis = document.getElementById("scenario-analysis");
const scenarioNote = document.getElementById("scenario-note");

function saveSelections() {
  try {
    localStorage.setItem("what-are-we-for-selections", JSON.stringify(selections));
  } catch (error) {
    return;
  }
}

function getSelectedPhrases() {
  return interactions
    .filter((interaction) => selections[interaction.dataset.question])
    .map((interaction) => interaction.querySelector(`[data-value="${selections[interaction.dataset.question]}"]`))
    .filter(Boolean)
    .map((button) => button.dataset.short);
}

function deriveScenario() {
  const scores = { commons: 0, continuity: 0, autonomy: 0, agency: 0, dignity: 0 };
  Object.entries(selections).forEach(([question, value]) => {
    const contribution = weights[question] && weights[question][value];
    if (!contribution) return;
    Object.entries(contribution).forEach(([axis, points]) => { scores[axis] += points; });
  });

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [first, second] = ranked;
  if (first[1] - second[1] <= 1) return "negotiated";
  return axisToScenario[first[0]];
}

function updateScenario() {
  const answered = Object.keys(selections).length;
  const remaining = interactions.length - answered;
  const phrases = getSelectedPhrases();

  scenarioProgressCount.textContent = `${answered} of ${interactions.length} decisions made`;
  scenarioProgressBar.style.width = `${(answered / interactions.length) * 100}%`;
  scenarioChips.innerHTML = phrases.map((phrase) => `<span>${phrase}</span>`).join("");
  scenarioPath.hidden = answered === 0;

  if (remaining > 0) {
    scenarioNumber.textContent = "Scenario forming";
    scenarioTitle.textContent = answered === 0
      ? "Six decisions stand between you and a future."
      : `${remaining} decision${remaining === 1 ? " remains" : "s remain"}.`;
    scenarioDeck.textContent = answered === 0
      ? "Finish the essay to see how your choices about work, wealth, time, ability, judgment, and human value combine into a possible society."
      : "Your priorities are beginning to form a society. The conclusion will appear when every choice has been made.";
    scenarioProgress.hidden = false;
    scenarioNarrative.hidden = true;
    scenarioAnalysis.hidden = true;
    scenarioNote.hidden = true;
    return;
  }

  const scenario = scenarios[deriveScenario()];
  scenarioNumber.textContent = scenario.number;
  scenarioTitle.textContent = scenario.title;
  scenarioDeck.textContent = scenario.deck;
  scenarioNarrative.innerHTML = scenario.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("") + `<p>${scenario.question}</p>`;
  document.getElementById("scenario-protects").textContent = scenario.protects;
  document.getElementById("scenario-risks").textContent = scenario.risks;
  document.getElementById("scenario-question").textContent = scenario.question;
  scenarioProgress.hidden = true;
  scenarioNarrative.hidden = false;
  scenarioAnalysis.hidden = false;
  scenarioNote.hidden = false;
}

function selectChoice(interaction, value, shouldSave = true) {
  const question = interaction.dataset.question;
  const copy = responseCopy[question] && responseCopy[question][value];
  if (!copy) return;

  interaction.querySelectorAll("button[data-value]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.value === value));
  });

  const response = interaction.querySelector(".choice-response");
  response.innerHTML = `<p>${copy}</p>`;
  response.hidden = false;
  interaction.querySelector(".continue-link").hidden = false;
  selections[question] = value;
  if (shouldSave) saveSelections();
  updateScenario();
}

interactions.forEach((interaction) => {
  interaction.querySelectorAll("button[data-value]").forEach((button) => {
    button.addEventListener("click", () => selectChoice(interaction, button.dataset.value));
  });
});

try {
  const stored = JSON.parse(localStorage.getItem("what-are-we-for-selections") || "{}");
  interactions.forEach((interaction) => {
    const value = stored[interaction.dataset.question];
    if (value) selectChoice(interaction, value, false);
  });
  updateScenario();
} catch (error) {
  updateScenario();
}

document.getElementById("reset-button").addEventListener("click", () => {
  Object.keys(selections).forEach((key) => delete selections[key]);
  interactions.forEach((interaction) => {
    interaction.querySelectorAll("button[data-value]").forEach((button) => button.setAttribute("aria-pressed", "false"));
    interaction.querySelector(".choice-response").hidden = true;
    interaction.querySelector(".continue-link").hidden = true;
  });
  saveSelections();
  updateScenario();
  document.getElementById("chapter-1").scrollIntoView({ behavior: "smooth" });
});

function updateReadingProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  progressBar.style.width = `${progress * 100}%`;
}

window.addEventListener("scroll", updateReadingProgress, { passive: true });
updateReadingProgress();

const railLinks = [...document.querySelectorAll(".chapter-rail a")];
const chapters = [...document.querySelectorAll(".essay-section[data-chapter]")];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    railLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-20% 0px -68% 0px", threshold: 0 });

chapters.forEach((chapter) => observer.observe(chapter));
