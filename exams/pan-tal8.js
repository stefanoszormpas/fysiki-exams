/* Γ΄ Λυκείου — Θέματα Πανελλαδικών · Ταλαντώσεις: Κρούση και ταλάντωση (1)
   Πηγή: θέματα Πανελλαδικών Εξετάσεων (συλλογή Μ. Παναγιωτόπουλου). Λύσεις: νεο επικεντρο.
   Σύνδεσμος για QR: index.html#e=pan-tal8 */
(function () {
  const R = String.raw;
  const tag = s => `<div class="pantag">Πανελλαδικές · ${s}</div>`;
  const SL = tag("Ερώτηση Σωστού – Λάθους");
  const img = (f, w) => () => `<img src="exams/img/tal/${f}.png" alt="" style="max-width:100%;width:${w}px;height:auto">`;
  const TOP = {
      "hor": "Κρούση με οριζόντιο ταλαντωτή",
      "vert": "Κρούση με κατακόρυφο ταλαντωτή",
      "vlima": "Βλήμα που διαπερνά"
  };

  const exam = {
    id: "pan-tal8", chapter: 2, lang: "el", group: "Γ΄ Λυκείου — Θέματα Πανελλαδικών",
    title: "Κρούση και ταλάντωση (1)",
    subtitle: "Ταλαντώσεις — πλαστική κρούση και βλήμα σε ταλαντωτή",
    sections: [
      {
        name: "Θέμα Β — Επιλογή και αιτιολόγηση",
        minutes: 10,
        questions: [
          {
            id: "b1", type: "single", topic: TOP.hor, diff: 2,
            figure: img("b24", 360),
            stem: tag("Ημερήσια 2014") + R`Δύο όμοια σώματα μάζας \(m\) συνδέονται με όμοια ελατήρια σταθεράς \(k\), που έχουν τα άλλα άκρα σε ακλόνητα σημεία· τα ελατήρια έχουν το φυσικό τους μήκος και το επίπεδο είναι λείο (σχήμα). Μετακινούμε το σώμα 1 προς τα αριστερά κατά \(d\) και το αφήνουμε. Συγκρούεται πλαστικά με το σώμα 2 και το συσσωμάτωμα εκτελεί ΑΑΤ με \(D=2k\). Αν \(A_1\) το πλάτος του σώματος 1 πριν την κρούση και \(A_2\) του συσσωματώματος, ο λόγος \(\tfrac{A_1}{A_2}\) είναι<br><span class="muted">Στις Πανελλαδικές πρέπει και να αιτιολογήσεις. Σκέψου την αιτιολόγηση πριν απαντήσεις.</span>`,
            options: [R`1`, R`\(\tfrac12\)`, R`2`],
            answer: 2,
            explain: R`\(A_1=d\), και στη ΘΙ \(\upsilon=\omega d\) με \(\omega=\sqrt{k/m}\). ΑΔΟ: \(V=\tfrac{\omega d}2\). Η κρούση γίνεται στη ΘΙ του συσσωματώματος, με \(\omega'=\sqrt{2k/2m}=\omega\): \(A_2=\tfrac V{\omega}=\tfrac d2\). Λόγος 2.`
          },
          {
            id: "b2", type: "single", topic: TOP.vert, diff: 3,
            figure: img("b32", 180),
            stem: tag("Επαναληπτικές Ημερήσια 2021") + R`Σώμα \(\Sigma_1\) μάζας \(m_1\) ισορροπεί στο πάνω άκρο κατακόρυφου ελατηρίου σταθεράς \(K\), συμπιεσμένου κατά \(\Delta\ell_0\). Από ύψος \(h=3\Delta\ell_0\) πάνω από το \(\Sigma_1\) αφήνεται σώμα \(\Sigma_2\) με \(m_2=m_1=m\), που συγκρούεται πλαστικά με το \(\Sigma_1\). Το συσσωμάτωμα εκτελεί ΑΑΤ με \(D=K\) και πλάτος<br><span class="muted">Στις Πανελλαδικές πρέπει και να αιτιολογήσεις. Σκέψου την αιτιολόγηση πριν απαντήσεις.</span>`,
            options: [R`\(\tfrac{2mg}K\)`, R`\(\tfrac{3mg}K\)`, R`\(\tfrac{4mg}K\)`],
            answer: 0,
            explain: R`\(\upsilon_2^2=2g\cdot3\Delta\ell_0\), \(V=\tfrac{\upsilon_2}2\). Η νέα ΘΙ είναι \(\Delta\ell_0=\tfrac{mg}K\) πιο κάτω· \(\omega^2=\tfrac K{2m}\). \(A^2=\Delta\ell_0^2+\tfrac{V^2}{\omega^2}=\Delta\ell_0^2+\tfrac{6g\Delta\ell_0}{4}\cdot\tfrac{2m}{K}=4\Delta\ell_0^2\Rightarrow A=\tfrac{2mg}K\).`
          }
        ]
      },
      {
        name: "Θέμα Γ — Ασκήσεις",
        minutes: 20,
        questions: [
          {
            id: "g1", type: "numeric", topic: TOP.vlima, diff: 1, unit: "m/s",
            figure: img("g10", 340),
            stem: tag("Ομογενείς 2021") + R`Ξύλινο κιβώτιο μάζας \(M=980\) g, στερεωμένο σε οριζόντιο ελατήριο σταθεράς \(k=100\) N/m (φυσικό μήκος), ισορροπεί σε λείο δάπεδο (σχήμα). Βλήμα μάζας \(m=20\) g κινείται οριζόντια με \(\upsilon=100\) m/s και σφηνώνεται στο κιβώτιο.<br><b>Γ1.</b> Να υπολογίσετε το μέτρο της ταχύτητας του συσσωματώματος.`,
            answer: 2, tol: 0.01,
            explain: R`ΑΔΟ: \(0{,}02\cdot100=1\cdot V\Rightarrow V=2\) m/s.`
          },
          {
            id: "g2", type: "numeric", topic: TOP.vlima, diff: 1, unit: "J",
            stem: tag("Ομογενείς 2021") + R`(συνέχεια) <b>Γ2.</b> Να υπολογίσετε την απώλεια μηχανικής ενέργειας κατά την κρούση.`,
            answer: 98, tol: 0.1,
            explain: R`\(\tfrac12\cdot0{,}02\cdot100^2-\tfrac12\cdot1\cdot2^2=100-2=98\) J.`
          },
          {
            id: "g3", type: "numeric", topic: TOP.vlima, diff: 1, unit: "m",
            stem: tag("Ομογενείς 2021") + R`(συνέχεια) <b>Γ3.</b> Να υπολογίσετε το πλάτος της ΑΑΤ του συσσωματώματος.`,
            answer: 0.2, tol: 0.001,
            explain: R`Κρούση στη ΘΙ: \(A=\tfrac V\omega\), \(\omega=\sqrt{100/1}=10\) rad/s → \(0{,}2\) m.`
          },
          {
            id: "g4", type: "numeric", topic: TOP.vlima, diff: 2, unit: "m/s",
            stem: tag("Ομογενείς 2021") + R`(συνέχεια) <b>Γ4.</b> Να υπολογίσετε το μέτρο της ταχύτητας όπου \(K=3U\).`,
            answer: 1.732, tol: 0.01,
            explain: R`\(K=\tfrac34E\Rightarrow\upsilon=\tfrac{\sqrt3}{2}\upsilon_{max}=\sqrt3\) m/s.`
          },
          {
            id: "g5", type: "numeric", topic: TOP.hor, diff: 2, unit: "m",
            figure: img("g7", 440),
            stem: tag("Εσπερινά 2018") + R`Δύο ελατήρια \(k_1=k_2=k=50\) N/m στερεωμένα σε Γ και Ζ (σχήμα) έχουν στα άκρα τους σώματα \(m_1=m_2=2\) kg, που αρχικά εφάπτονται ακίνητα με τα ελατήρια στο φυσικό μήκος. Εκτρέπουμε το \(m_1\) συμπιέζοντας το \(k_1\) κατά \(\Delta\ell=0{,}4\) m και το αφήνουμε. Όταν περνά από τη ΘΙ του συγκρούεται πλαστικά με το \(m_2\).<br><b>Γ1.</b> Το συσσωμάτωμα εκτελεί ΑΑΤ με \(D=2k\). Να υπολογίσετε το πλάτος.`,
            answer: 0.2, tol: 0.001,
            explain: R`\(\upsilon_1=\omega\Delta\ell=5\cdot0{,}4=2\) m/s. ΑΔΟ: \(V=1\) m/s. \(\omega'=\sqrt{100/4}=5\) rad/s, κρούση στη ΘΙ: \(A=\tfrac V{\omega'}=0{,}2\) m.`
          },
          {
            id: "g6", type: "single", topic: TOP.hor, diff: 1,
            stem: tag("Εσπερινά 2018") + R`(συνέχεια) <b>Γ2.</b> Με \(t=0\) τη στιγμή της κρούσης και θετική φορά την κατεύθυνση κίνησης του συσσωματώματος αμέσως μετά, η εξίσωση της απομάκρυνσης είναι (S.I.)`,
            options: [R`\(x=0{,}2\,\eta\mu5t\)`, R`\(x=0{,}2\,\eta\mu\big(5t+\tfrac\pi2\big)\)`, R`\(x=0{,}4\,\eta\mu5t\)`, R`\(x=0{,}2\,\eta\mu10t\)`],
            answer: 0,
            explain: R`Στο \(t=0\): \(x=0\) με \(\upsilon>0\) → \(\varphi_0=0\).`
          },
          {
            id: "g7", type: "numeric", topic: TOP.hor, diff: 1, unit: "N",
            stem: tag("Εσπερινά 2018") + R`(συνέχεια) <b>Γ3.</b> Να υπολογίσετε τον μέγιστο ρυθμό μεταβολής της ορμής του συσσωματώματος.`,
            answer: 20, tol: 0.01,
            explain: R`\(|\Sigma F|_{max}=DA=100\cdot0{,}2=20\) N.`
          }
        ]
      },
      {
        name: "Θέμα Δ — Πρόβλημα",
        minutes: 12,
        questions: [
          {
            id: "d1", type: "numeric", topic: TOP.vlima, diff: 1, unit: "m/s",
            figure: img("d3", 380),
            stem: tag("Εσπερινά 2004") + R`Σώμα \(\Sigma\) μάζας \(M=0{,}1\) kg δεμένο σε οριζόντιο ελατήριο σταθεράς \(k=1000\) N/m ηρεμεί σε λείο δάπεδο. Βλήμα μάζας \(m=0{,}001\) kg, με \(\upsilon_1=200\) m/s κατά μήκος του άξονα του ελατηρίου, διαπερνά ακαριαία το σώμα και εξέρχεται με \(\upsilon=\tfrac{\upsilon_1}{2}\) (σχήμα).<br><b>α.</b> Να βρείτε την ταχύτητα του \(\Sigma\) αμέσως μετά.`,
            answer: 1, tol: 0.01,
            explain: R`ΑΔΟ: \(0{,}001\cdot200=0{,}001\cdot100+0{,}1V\Rightarrow V=1\) m/s.`
          },
          {
            id: "d2", type: "numeric", topic: TOP.vlima, diff: 1, unit: "m",
            stem: tag("Εσπερινά 2004") + R`(συνέχεια) <b>β.</b> Να βρείτε τη μέγιστη επιμήκυνση του ελατηρίου.`,
            answer: 0.01, tol: 0.0005,
            explain: R`Κρούση στη ΘΙ: \(A=\tfrac V\omega\), \(\omega=\sqrt{1000/0{,}1}=100\) rad/s → \(0{,}01\) m (η μέγιστη επιμήκυνση ισούται με το πλάτος).`
          },
          {
            id: "d3", type: "numeric", topic: TOP.vlima, diff: 1, unit: "s",
            stem: tag("Εσπερινά 2004") + R`(συνέχεια) <b>γ.</b> Να βρείτε την περίοδο ταλάντωσης του \(\Sigma\).`,
            answer: 0.0628, tol: 0.001,
            explain: R`\(T=\tfrac{2\pi}{100}=\tfrac{\pi}{50}\approx0{,}063\) s.`
          },
          {
            id: "d4", type: "numeric", topic: TOP.vlima, diff: 2, unit: "J",
            stem: tag("Εσπερινά 2004") + R`(συνέχεια) <b>δ.</b> Να βρείτε την ελάττωση της μηχανικής ενέργειας κατά την κρούση.`,
            answer: 14.95, tol: 0.01,
            explain: R`\(\tfrac12\cdot0{,}001(200^2-100^2)-\tfrac12\cdot0{,}1\cdot1^2=15-0{,}05=14{,}95\) J.`
          }
        ]
      }
    ]
  };
  (window.EXAMS = window.EXAMS || []).push(exam);
})();
