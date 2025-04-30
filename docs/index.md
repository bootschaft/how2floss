# How2floß

## Vor der Abfahrt

- Strom anmachen:
  - Sicherung 11 (Motor) anschalten
  - Sicherung 6 (Verbraucher) anschalten
- Checken
  - Batterieladestand ausreichend für geplane Tour?
  - Dreht sich der Lüfter (8) - sonst nicht losfahren bzw. maximal 15 Minuten fahren!
  - Bei Nachtfahrt: Positionslichter prüfen

## Nach der Floßfahrt

- Strom
  - Sicherung 10 (Batterie) und 3 (PV) anlassen
  - Alle anderen Sicherung ausmachen (grünes Symbol im Sichtfenster)
- Alle Kisten wieder verschlossen?
- Müll mitgenommen?

## Elektrik

Ein kurzer Überblick und Erklärung der Komponenten für die Elektrik findet man hier.

### Überblick

![Elektrik Überblick](<wackelberry foto.png>)

1. Solar-Laderegler
2. Anschlüsse 12-V Bank I (2b - Bank II rechts daneben)
3. Sicherung Solarzellen (nicht im Bild)
4. Konverter 48->12V Bank I
5. Konverter 48->12V Bank II
6. Sicherung der Konverter 4 und 5
7. 7a Pluspol / 7b Minuspol des 48V-Knotens
8. Motor-Controller Engine I
9. Konverter 48->5V für Raspberry Pi (always on)
10. Sicherung Batterien
11. Sicherung Engine I
12. Sicherung Engine II
13. Sicherung 230V-Wechselrichter + Notladegerät

48V Nominalspannung: Variiert zwischen 52-58 V

### Elektrik Schematik

![Elektrik Überblick](<wackelberry schematic.png>)
