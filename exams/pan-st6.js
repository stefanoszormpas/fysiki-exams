/* Γ΄ Λυκείου — Θέματα Πανελλαδικών · Στερεό: Στροφορμή υλικού σημείου και μονάδες
   Πηγή: θέματα Πανελλαδικών Εξετάσεων (συλλογή Μ. Παναγιωτόπουλου). Λύσεις: νεο επικεντρο.
   Σύνδεσμος για QR: index.html#e=pan-st6 */
(function () {
  const R = String.raw;
  const tag = s => `<div class="pantag">Πανελλαδικές · ${s}</div>`;
  const SL = tag("Ερώτηση Σωστού – Λάθους");
  const fig = (f, w) => `<br><img src="exams/img/st/${f}.png" alt="" style="max-width:100%;width:${w}px;height:auto"><br>`;
  const TOP = { L: "Στροφορμή υλικού σημείου", mon: "Μονάδες" };
  const MATCH = tag("Ομογενείς 2002 · Αντιστοίχιση") + `Στήλη I: μήκος κύματος, γωνιακή επιτάχυνση, ροπή δύναμης, ορμή, στροφορμή. Στήλη II: rad/s², N·m, m, kg·m²/s, kg·m/s, m/s.<br>`;
  const U = ["rad/s²", "N·m", "m", "kg·m²/s", "kg·m/s", "m/s"];

  const exam = {
    id: "pan-st6", chapter: 3, lang: "el", group: "Γ΄ Λυκείου — Θέματα Πανελλαδικών",
    title: "Στροφορμή υλικού σημείου",
    subtitle: "Στερεό — στροφορμή υλικού σημείου, ρυθμός μεταβολής της και μονάδες",
    sections: [
      {
        name: "Θέμα Α — Πολλαπλής επιλογής",
        minutes: 6,
        questions: [
          {
            id: "a1", type: "single", topic: TOP.mon, diff: 1,
            stem: tag("Εσπερινά 2003") + R`Η μονάδα μέτρησης της στροφορμής είναι`,
            options: [R`1 kg·m²/s`, R`1 kg·m/s²`, R`1 kg·m²`, R`1 kg·m/s`],
            answer: 0,
            explain: R`\(L=m\upsilon r\): kg·(m/s)·m = kg·m²/s.`
          },
          {
            id: "a2", type: "single", topic: TOP.mon, diff: 1,
            stem: tag("Ομογενείς 2005") + R`Η μονάδα μέτρησης της στροφορμής στο σύστημα S.I. είναι`,
            options: [R`1 kg·m/s`, R`1 kg·m²/s²`, R`1 kg·m/s²`, R`1 J·s`],
            answer: 3,
            explain: R`kg·m²/s = (kg·m²/s²)·s = J·s.`
          },
          {
            id: "a3", type: "single", topic: TOP.mon, diff: 1,
            stem: tag("Επαναληπτικές Ημερήσιες – Ομογενείς 2019") + R`Μία από τις μονάδες μέτρησης της στροφορμής των στοιχειωδών σωματιδίων στο SI είναι`,
            options: [R`J·s²`, R`J·s`, R`kg·m²/s²`, R`kg·m/s²`],
            answer: 1,
            explain: R`Η στροφορμή μετριέται σε kg·m²/s = J·s.`
          },
          {
            id: "a4", type: "single", topic: TOP.L, diff: 1,
            stem: tag("Επαναληπτικές Εσπερινά 2010") + R`Υλικό σημείο μάζας \(m\) και ταχύτητας \(\upsilon\) κινείται σε περιφέρεια οριζόντιου κύκλου ακτίνας \(r\), όπως στο σχήμα.` + fig("a11", 260) + R`Η στροφορμή του υλικού σημείου ως προς τον άξονα zz΄, που διέρχεται από το κέντρο της τροχιάς και είναι κάθετος στο επίπεδό της,`,
            options: [R`είναι μονόμετρο μέγεθος.`, R`έχει μέτρο \(m\upsilon r\).`, R`είναι διάνυσμα με διεύθυνση κάθετη στον άξονα zz΄.`, R`έχει μονάδα το kg·m.`],
            answer: 1,
            explain: R`\(L=m\upsilon r\), διάνυσμα πάνω στον άξονα zz΄ (κάθετο στο επίπεδο της τροχιάς), με μονάδα kg·m²/s.`
          }
        ]
      },
      {
        name: "Θέμα Α — Σωστό – Λάθος και αντιστοίχιση",
        minutes: 10,
        questions: [
          {
            id: "s1", type: "single", topic: TOP.L, diff: 1,
            stem: SL + R`Η Γη έχει στροφορμή λόγω της κίνησής της γύρω από τον Ήλιο.`,
            options: ["Σωστό", "Λάθος"],
            answer: 0,
            explain: R`Ως υλικό σημείο σε τροχιά γύρω από τον Ήλιο: \(L=m\upsilon r\).`
          },
          {
            id: "s2", type: "single", topic: TOP.L, diff: 1,
            stem: SL + R`Η στροφορμή είναι μονόμετρο μέγεθος.`,
            options: ["Σωστό", "Λάθος"],
            answer: 1,
            explain: R`Είναι διανυσματικό μέγεθος.`
          },
          {
            id: "s3", type: "single", topic: TOP.mon, diff: 1,
            stem: SL + R`Η μονάδα μέτρησης του ρυθμού μεταβολής της στροφορμής στο SI είναι το 1 kg·m²/s².`,
            options: ["Σωστό", "Λάθος"],
            answer: 0,
            explain: R`\(\tfrac{\Delta L}{\Delta t}\): (kg·m²/s)/s = kg·m²/s² (= N·m).`
          },
          {
            id: "s4", type: "single", topic: TOP.mon, diff: 1,
            stem: SL + R`Ο ρυθμός μεταβολής της στροφορμής μετριέται σε kg·m²/s.`,
            options: ["Σωστό", "Λάθος"],
            answer: 1,
            explain: R`Αυτή είναι η μονάδα της στροφορμής· ο ρυθμός μεταβολής μετριέται σε kg·m²/s².`
          },
          {
            id: "s5", type: "single", topic: TOP.mon, diff: 1,
            stem: SL + R`Μονάδα μέτρησης του ρυθμού μεταβολής της στροφορμής είναι και το 1 N·m.`,
            options: ["Σωστό", "Λάθος"],
            answer: 0,
            explain: R`\(\tfrac{dL}{dt}=\Sigma\tau\), μονάδα N·m.`
          },
          {
            id: "s6", type: "single", topic: TOP.mon, diff: 1,
            stem: SL + R`Μονάδα μέτρησης της στροφορμής στο SI είναι το 1 N·m·s.`,
            options: ["Σωστό", "Λάθος"],
            answer: 0,
            explain: R`N·m·s = (kg·m/s²)·m·s = kg·m²/s.`
          },
          {
            id: "m1", type: "single", topic: TOP.mon, diff: 1,
            stem: MATCH + R`Η μονάδα του <b>μήκους κύματος</b> είναι`,
            options: U, answer: 2,
            explain: R`Μήκος: m.`
          },
          {
            id: "m2", type: "single", topic: TOP.mon, diff: 1,
            stem: MATCH + R`Η μονάδα της <b>γωνιακής επιτάχυνσης</b> είναι`,
            options: U, answer: 0,
            explain: R`\(\tfrac{\Delta\omega}{\Delta t}\): rad/s².`
          },
          {
            id: "m3", type: "single", topic: TOP.mon, diff: 1,
            stem: MATCH + R`Η μονάδα της <b>ροπής δύναμης</b> είναι`,
            options: U, answer: 1,
            explain: R`\(\tau=Fd\): N·m.`
          },
          {
            id: "m4", type: "single", topic: TOP.mon, diff: 1,
            stem: MATCH + R`Η μονάδα της <b>ορμής</b> είναι`,
            options: U, answer: 4,
            explain: R`\(p=m\upsilon\): kg·m/s.`
          },
          {
            id: "m5", type: "single", topic: TOP.mon, diff: 1,
            stem: MATCH + R`Η μονάδα της <b>στροφορμής</b> είναι`,
            options: U, answer: 3,
            explain: R`\(L=m\upsilon r\): kg·m²/s. (Η m/s περισσεύει.)`
          }
        ]
      }
    ]
  };
  (window.EXAMS = window.EXAMS || []).push(exam);
})();
