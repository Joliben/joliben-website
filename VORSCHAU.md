# Produktvisionen – eigenständige Vorschau

**Deutsch** · [English](VORSCHAU.en.md)

## Zweisprachige Ausgabe vom 23.10.2026

`JOLIBEN-Vorschau.html` bündelt die acht aktuellen Präsentationsseiten mit eingebetteten Styles, Skripten und Bildern. Über DE/EN lässt sich die Sprache einschließlich der Demo-Fälle und gekennzeichneten englischen Leseübersetzungen der Quellenauszüge wechseln. Die deutschen Originalauszüge bleiben verfügbar. Die großen Videos sind in dieser Offline-Fassung durch Standbilder ersetzt. Auf der [Live-Website](https://joliben.github.io/joliben-website/) bleiben die ursprünglichen Videos mit deutscher Sprecherstimme erhalten; in Bilder eingebrannter Text wird nicht übersetzt.

Zum Öffnen auf GitHub **Code → Download ZIP** wählen, das Archiv vollständig entpacken und `JOLIBEN-Vorschau.html` im Browser öffnen. PDF- und GitHub-Verweise benötigen eine Internetverbindung. Für die vollständige Website einschließlich Videos im entpackten Ordner mit Python 3 `python3 -m http.server 8000 --bind 127.0.0.1` starten und `http://127.0.0.1:8000` öffnen; mit Strg+C beenden.

Die Prüfung dieser Ausgabe betrifft Übersetzungen, Sprachwechsel, Dokumentverweise und statische Demo-Abläufe. Sie ist kein neuer Testlauf des privaten Produkts. Keine Live-KI-Aufrufe; keine Verbindung zum privaten Core.

## Historischer Vermerk zur ursprünglichen Integration

Die folgenden Angaben dokumentieren den damaligen Vorschau- und Abnahmestand. Aussagen über einen noch offenen Merge oder eine ausstehende Abnahme beziehen sich auf diesen historischen Stand, nicht auf den Veröffentlichungsstatus der zweisprachigen Ausgabe.

Dieser Branch enthält die Integration von KIBORAYA, Kanzlei Lab und Commerce Lab.
Er ist zur Prüfung vorgesehen und wird noch nicht mit `main` zusammengeführt.

## Vorschau öffnen

1. Auf GitHub **Code → Download ZIP** wählen und das Archiv vollständig entpacken.
2. `JOLIBEN-Vorschau.html` öffnen: eine eigenständige Vorschau mit eingebetteten
   Styles, Bildern und Demo-Seiten. Die großen Videos sind hier durch Film-Standbilder ersetzt.
3. Für die vollständige Website im entpackten Ordner mit Python 3 starten:
   `python3 -m http.server 8000 --bind 127.0.0.1`
   und im Browser `http://127.0.0.1:8000` öffnen. Mit Strg+C beenden.

Die eigenständige HTML-Vorschau wurde im Chromium-Browser mit gesperrten
Netzwerkzugriffen geprüft: Layout, alle drei Demos, Sprachwechsel, Simulation
und Rückwege. Die vollständige Fassung wurde über einen lokalen Webserver
auf Desktop, Tablet und Smartphone geprüft.

Die eingebetteten Demo-Daten und ursprünglichen Demo-Skripte bleiben erhalten.
Die ursprüngliche KIBORAYA-OXXC-Referenzdatei im Upload bleibt unverändert;
die Website-Fassung enthält ergänzende Navigation und Verlinkungen.

Keine Live-KI-Aufrufe. Keine echte Kanzlei- oder Commerce-Anwendung.
Die menschliche Abnahme dieser Website-Integration steht noch aus.

## Überarbeitete Navigation

Die Hauptnavigation ist auf allen Seiten identisch. Unter „Produktvisionen“
öffnet ein per Klick, Tastatur oder Touch bedienbares Untermenü die drei Labs
oder die gemeinsame Übersicht. Die jeweils aktuelle Produktseite ist markiert.
Die Sprunglinks eines Labs (z. B. Rollen und Falllabor) stehen in einer eigenen,
schmalen Zeile unter der Hauptnavigation. Mobil bleibt diese Zeile horizontal
bedienbar; die vollständige Hauptnavigation öffnet sich über den Menüknopf.
Die drei Vorschaukarten auf der Startseite und die Demo-Inhalte sind unverändert.
