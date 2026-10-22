# Fallstudie: einen KI-unterstützten Entwicklungsauftrag kontrolliert übernehmen

**Dokumentierter Projektstand: 20.10.2026 · öffentliche Zusammenfassung: 22.10.2026**

## Die Aufgabe

Eine begrenzte Zuverlässigkeitskorrektur sollte so bearbeitet werden, dass sich Auftrag, Änderung, Prüfung und Integrationsentscheidung nachvollziehen lassen. Der Produktivbetrieb war nicht Teil dieses Arbeitsauftrags.

## Das Vorgehen

| Schritt | Vorgehen | Bedeutung für die Zusammenarbeit |
| --- | --- | --- |
| 1. Auftrag begrenzen | Ziel, Änderungsumfang und passende Prüfungen festlegen | Die Bearbeitung bekommt einen überprüfbaren Rahmen |
| 2. Ausgangsverhalten prüfen | Bestehende Prüfungen ausführen und zwei neue Fehlerfälle formulieren | Der gewünschte Unterschied wird vor der Korrektur sichtbar |
| 3. Gezielte Korrektur | KI-unterstützte Implementierung im begrenzten Entwicklungsstand | Der Lösungsumfang bleibt am Auftrag ausgerichtet |
| 4. Ergebnis prüfen | Relevante Prüfungen und ausgewählte Nachbarfälle ausführen | Die Bewertung umfasst den Fehlerfall und betroffene Übergänge |
| 5. Review und Entscheidung | Änderung und Nachweise zusammen prüfen; menschliche Freigabe | Technische Umsetzung und Ergebnisannahme bleiben unterscheidbar |
| 6. Übernahme | Den geprüften Stand über einen Pull Request integrieren | Die Integration bleibt nachvollziehbar; ein Rollout folgt als eigener Schritt |

## Das dokumentierte Ergebnis

| Prüfschritt | Berichtetes Ergebnis |
| --- | --- |
| Bestehende Baseline | 6 Prüfungen bestanden |
| Zwei neue Prüfungen gegen das bisherige Verhalten | 2 fehlgeschlagen, 6 bestanden |
| Nach der gezielten Korrektur | 8 Prüfungen bestanden |
| Erweiterter ausgewählter Regressionstest | 16 Prüfungen bestanden |
| Review und menschliche Integration | Änderung übernommen |
| Produktivrollout im beschriebenen Zyklus | Nicht Bestandteil des Auftrags |

Die Prüfmengen überschneiden sich und werden nicht addiert. Der Lauf mit 16 bestandenen Prüfungen ist die ausgewählte Regression dieses Falls, kein Full-Suite-Ergebnis. Die Zahlen stammen aus dem damaligen Entwicklungsbericht; sie wurden für diese Veröffentlichung nicht neu ausgeführt. Der Merge-Status wurde am 22.10.2026 über GitHub abgeglichen.

## Was die Arbeitsprobe zeigt

Das Ergebnis ist ein konkretes Beispiel für die Verbindung von KI-Unterstützung mit sauberer Auftragsklärung, gezielter Qualitätssicherung und menschlicher Entscheidung. Für mich als Initiator und Product Owner ist diese Verbindung wesentlich: Ich definiere Ziel und Kriterien, steuere die Zusammenarbeit mit KI-Werkzeugen und begleite die Bewertung und Annahme des Ergebnisses.

Der Fall liefert einen begrenzten Nachweis. Die Übertragung auf weitere Aufgaben und die vollständige Verbindung aller Teilwege bleiben Entwicklungsarbeit.

[Projektüberblick](../README.md) · [Meine Rolle](THIEMO_GERHARDT.md)
