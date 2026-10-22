# Case study: controlled integration of an AI-assisted development task

[Deutsch](FALLBEISPIEL_KONTROLLIERTE_ENTWICKLUNG.md) · **English**

**Documented project state: 20 October 2026 · public summary: 22 October 2026**

## The task

A bounded reliability fix was to be handled in a way that made the task, change, verification and integration decision traceable. Production operation was outside the scope of this task.

## The approach

| Step | Approach | Significance for collaboration |
| --- | --- | --- |
| 1. Bound the task | Define the goal, scope of changes and appropriate checks | The work has a verifiable framework |
| 2. Check the existing behaviour | Run existing checks and define two new failure cases | The intended difference becomes visible before the fix |
| 3. Make a targeted correction | AI-assisted implementation within the bounded development state | The solution stays aligned with the task |
| 4. Verify the result | Run relevant checks and selected related cases | Assessment covers the failure case and affected transitions |
| 5. Review and decide | Review the change and evidence together; obtain human approval | Technical implementation and acceptance of the result remain distinct |
| 6. Integrate | Integrate the verified state through a pull request | Integration remains traceable; rollout is a separate subsequent step |

## The documented result

| Verification step | Reported result |
| --- | --- |
| Existing baseline | 6 checks passed |
| Two new checks against the existing behaviour | 2 failed, 6 passed |
| After the targeted correction | 8 checks passed |
| Expanded, selected regression test run | 16 checks passed |
| Review and human-approved integration | Change accepted |
| Production rollout in the cycle described | Outside the task's scope |

The sets of checks overlap and are not added together. The run with 16 passing checks is the selected regression test run for this case, not a full-suite result. The figures come from the development report at the time; the checks were not rerun for this publication. The merge status was checked against GitHub on 22 October 2026.

## What the work sample demonstrates

The result is a concrete example of combining AI assistance with clear task definition, targeted quality assurance and human decision-making. As initiator and Product Owner, I consider this combination essential: I define the goal and criteria, direct collaboration with AI tools, and oversee the assessment and acceptance of the result.

The case provides limited evidence. Applying this approach to further tasks and fully connecting all component workflows remain development work.

[Case study as a PDF](JOLIBEN_Fallstudie_01_Kontrollierte_Entwicklung_EN.pdf) · [Project overview](../README.en.md) · [My role](THIEMO_GERHARDT.en.md)
