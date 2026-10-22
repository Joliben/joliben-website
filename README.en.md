# JOLIBEN

## Practical AI. Reviewable results. Human decisions.

**An independent AI and product-development project by Thiemo Gerhardt**  
**Initiator & Product Owner · Dresden region, Germany · active development**

[Explore the website](https://joliben.github.io/joliben-website/?lang=en) · [Agent simulation](https://joliben.github.io/joliben-website/agenten.html?lang=en) · [Project profile, PDF in German](docs/JOLIBEN_Projektprofil_Thiemo_Gerhardt.pdf) · [Deutsch](README.md)

JOLIBEN explores how AI assistance can become a traceable workflow: understand the goal, use relevant context, propose a plan, review the result and make deliberate human decisions about the next step.

Selected planning, task-creation and interface workflows have been implemented and tried in specific user cases. A separate AI-assisted development workflow has been demonstrated on a bounded change through testing, review and a human-approved merge. The complete integrated workflow and controlled knowledge feedback remain in development.

## What has been demonstrated

| Area | Documented result | Scope |
| --- | --- | --- |
| Planning and task creation | Selected browser workflows preserve the original plan and its task association | Creating a task does not grant permission for every subsequent action |
| AI-assisted development | A bounded change passed targeted tests and was merged following review and human approval | No production deployment was part of that cycle |
| Public agent experience | An interactive explanatory simulation is available in the presentation website | No live model calls or connection to the private system |
| Brain & Learn | Controlled knowledge import, retrieval and feedback are being developed | An integrated learning capability has not yet been demonstrated |

## Two case studies

### Case study 01: Controlled development

Two new checks first failed against the existing behaviour. After a focused correction, the relevant checks passed and a broader selection of 16 regression tests passed. The change was reviewed and merged following human approval. These figures refer to that specific reported test scope, not the full repository suite or an independent certification. This publication summarises an existing development record; it is not a fresh test run.

[Read the case study in German](docs/FALLBEISPIEL_KONTROLLIERTE_ENTWICKLUNG.md)

### Case study 02: From a request to a traceable task

A documented internal case from 19 October 2026 follows a review request through an AI-generated plan, deliberate project selection and explicit task creation. The original plan remained traceable at the task. The subsequent read-only investigation and completed findings report were still outside the demonstrated workflow.

The case shows both an implemented transition and a concrete next product requirement: clarify the type of work, expected result and acceptance criteria while preserving the original source.

[Read case study 02 in German](docs/FALLSTUDIE_02_VOM_WUNSCH_ZUR_AUFGABE.md) · [Designed PDF in German](docs/JOLIBEN_Fallstudie_02_Vom_Wunsch_zur_Aufgabe.pdf)

## My role

I initiated JOLIBEN and act as its Product Owner. My contribution includes defining the problem and product direction, prioritising requirements, setting boundaries and acceptance criteria, guiding AI-assisted implementation and reviewing results. My background combines IT and entrepreneurial experience. Implementation and technical analysis are carried out with AI tools.

## Explore

- [Website](https://joliben.github.io/joliben-website/?lang=en)
- [Selected work](https://joliben.github.io/joliben-website/arbeiten.html?lang=en)
- [Interactive agent simulation](https://joliben.github.io/joliben-website/agenten.html?lang=en)
- [Contact Thiemo Gerhardt](mailto:thiemo.gerhardt@icloud.com)

This repository contains the public static HTML/CSS/JavaScript presentation and selected portfolio materials. Application source code and detailed internal architecture remain private. This publication does not release the application core as open source.

Editorial update: 22 October 2026. Technical statements refer to documented project records from 15-20 October 2026.
