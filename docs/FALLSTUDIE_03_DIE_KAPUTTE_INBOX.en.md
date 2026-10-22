# Case study 03: The broken Inbox — and the decision to take a closer look

[Deutsch](FALLSTUDIE_03_DIE_KAPUTTE_INBOX.md) · [English](FALLSTUDIE_03_DIE_KAPUTTE_INBOX.en.md)

**JOLIBEN · Thiemo Gerhardt, Initiator & Product Owner**  
**Documented case: 15 October 2026 · Editorial version: 22 October 2026 · English edition: 23 October 2026**

## The case in one minute

JOLIBEN's task overview returned a server error. Diagnosis led to conflicts in a global continuation history. The decisive step was then to interpret the finding correctly: A global conflict was not evidence that every affected individual task was defective.

An initial repair proposal had passed 338 selected tests. It was nevertheless deliberately rejected because it would have attributed global conflict messages to individual tasks. The later repair was limited to the read-only display. Existing start and authorisation checks remained unchanged, and the global warning remained visible.

The final report documents 344 selected tests passed, 13 isolated HTTP checks and an Inbox that was accessible again. It classifies the subsequent browser confirmation as a user confirmation. The global history conflict remained a separate, unresolved issue.

[Designed case study as a PDF](JOLIBEN_Fallstudie_03_Die_kaputte_Inbox_EN.pdf) · [Public project profile](https://github.com/Joliben/joliben-website/blob/main/README.en.md)

## 1. The visible error was only the beginning

The Inbox is the overview of existing tasks. In the case examined, opening it failed with HTTP 500. This initially revealed a concrete usability problem: The overview could not be displayed properly.

Read-only diagnosis led to a shared validation path for the global continuation history. A conflict detected there was translated into an error when the task overview loaded. This diagnosis did not, however, establish that individual tasks were damaged or that their execution should be authorised.

The associated snapshot made the distinction clear:

| Observation in the snapshot examined | What follows from it | What does not follow from it |
| --- | --- | --- |
| The strict global validation path reported 42 conflicts | There was a global history finding that needed to be taken seriously | That 42 individual tasks were each demonstrably defective |
| The existing task-specific display path reported 0 conflicts in that snapshot | The two validation paths had different scopes | That all tasks or execution states were entirely free of errors |

The figures describe this specific diagnosis. They are neither a general error rate nor a complete review of the system's existing state.

## 2. Why the first repair was rejected

According to the report, the first candidate had passed 338 selected tests. Its substantive evaluation still revealed a problem: Global conflicts would have appeared as warnings on individual tasks. This would have implied a connection that the diagnosis had not established for those individual tasks.

The decision was therefore not to adopt this candidate. The key criterion was the meaning of the display: Does the warning actually describe the state of this task, or a finding at a higher level?

A passing selection of tests provided evidence for its specific test scope. It did not replace that product decision. The case therefore illustrates a practical responsibility in AI-assisted development: Check the technical results while also assessing whether the resulting interface communicates the right information.

## 3. The later repair was given a narrower scope

![Decision path in the historical Inbox case: diagnosis of the global conflict, a rejected candidate with misleading attribution, and an adopted, limited display repair. The Inbox became accessible again; the global history and strict start checks remained separate.](../assets/portfolio/fallstudie-03-entscheidung.en.png)

The adopted change concerned the Inbox's read-only display. It separated the global notice from the display of individual tasks. The repair did not change the existing rules for starting and authorising work.

| Area | Limits of the adopted repair |
| --- | --- |
| **Task overview** | Make the read-only display usable again |
| **Global warning** | Keep it visible as a global finding that remained unresolved |
| **Individual tasks** | Avoid presenting global conflicts as individual task errors without supporting evidence |
| **Start and authorisation** | Keep the existing strict checks unchanged |
| **History** | Do not incidentally repair or change the global continuation history |

The visible global notice contained no start or authorisation button. A page responding with HTTP 200 again did not grant permission to start a blocked continuation.

The graphic is an editorial illustration of the documented decision path. It is not a screenshot and does not depict an additional product feature.

## 4. What was evidenced at the end of the case

| Evidence according to the final report of 15 October 2026 | Documented result | Limit of the claim |
| --- | --- | --- |
| **Selected tests** | 344 passed | No claim that the entire repository test suite passed |
| **Isolated HTTP checks** | 13 checks documented | No comprehensive measurement of load, security or availability |
| **Inbox access** | HTTP 200 both directly and through the fronting web gateway; previously HTTP 500 on both routes | Evidence for these access routes in the state at that time |
| **Browser use** | After the change was adopted, the user confirmed that the Inbox worked again | Attributed user confirmation; no comprehensive UX or design sign-off |

The report separately records technical validation, adoption in production and subsequent browser confirmation. The user confirmation did not retrospectively alter the original technical record. This prevents different types of evidence from silently becoming a single blanket success claim.

338 and 344 are two reported test scopes for different candidates. They are neither added together nor combined into a quality metric. The decisive difference was the appropriate substantive scope of the change that was later adopted.

## 5. What deliberately remained open

The Inbox was accessible again in the reported state. The display repair had not resolved the global history conflict. The status update of 20 October 2026 also continued to list it as a historical unresolved issue.

Addressing it required a separate repair assignment with a clearly defined scope. A functioning overview did not replace clarification of the history or the existing checks before further execution.

The case study does not establish the complete state of the system today. It makes no claim about general resilience, the safety of all start paths or the entire product being free of errors. Recovery time, economic benefit and general time savings were not measured for this work sample.

## 6. My contribution as Initiator and Product Owner

At JOLIBEN, I am responsible for the product idea, requirements, priorities and substantive evaluation of results. Implementation and technical analysis are carried out in collaboration with AI tools.

This case shows which responsibilities matter in this role:

| Competency | Connection to the documented case |
| --- | --- |
| **Problem clarification** | Distinguish the visible usability problem from the global technical cause |
| **Evaluation of AI results** | Assess a passing selection of tests together with the substantive meaning of the display |
| **Prioritisation and scope definition** | Separate a limited restoration of usability from a distinct history repair |
| **Responsible automation** | Avoid treating a display repair as authorisation to execute |
| **Traceable communication** | Explain technical evidence, human confirmation and remaining problems separately |

The work sample therefore demonstrates product responsibility in handling a concrete operational problem. It does not claim that I programmed the underlying application code alone or without AI assistance.

## 7. What can be transferred as a working principle

When an AI-assisted tool proposes a change, several questions need separate answers: Does the diagnosis fit the problem? Does the interface describe the correct state? Is the change limited to the necessary scope? And which unresolved causes remain for a separate assignment?

The Inbox case provides a documented example. Whether the same approach is suitable in another organisation or system would need to be assessed separately. This is an internal project case, not a client commission.

**The central idea: A successful repair makes work possible again and keeps its limits visible.**

## Source basis and publication limits

The basis is the internal project final report on the interface and Inbox, including scope boundaries, dated 15 October 2026, particularly its sections on milestones, the cause of the Inbox problem, the repair and unresolved risks. The status update of 20 October 2026 provides context for the history conflict that remained unresolved.

The final report itself refers to original technical evidence and the subsequent browser confirmation. Those original exports and the runtime from that time were not independently re-examined for this editorial account. No product checks, models, workers or deployments were started. The review of this publication concerns documents, references and presentation only.

Internal identifiers, code paths, addresses and operational details are omitted. The application code and detailed internal architecture remain private.

**Thiemo Gerhardt · Initiator & Product Owner**  
[Contact](mailto:thiemo.gerhardt@icloud.com) · [Website](https://joliben.github.io/joliben-website/?lang=en) · [Case study 01](https://github.com/Joliben/joliben-website/blob/main/docs/FALLBEISPIEL_KONTROLLIERTE_ENTWICKLUNG.en.md) · [Case study 02](https://github.com/Joliben/joliben-website/blob/main/docs/FALLSTUDIE_02_VOM_WUNSCH_ZUR_AUFGABE.en.md)
