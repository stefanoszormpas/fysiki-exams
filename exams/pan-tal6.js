/* Γ΄ Λυκείου — Θέματα Πανελλαδικών · Ταλαντώσεις: Ταλαντωτής ελατηρίου (3)
   Πηγή: θέματα Πανελλαδικών Εξετάσεων (συλλογή Μ. Παναγιωτόπουλου). Λύσεις: νεο επικεντρο.
   Σύνδεσμος για QR: index.html#e=pan-tal6 */
(function () {
  const R = String.raw;
  const tag = s => `<div class="pantag">Πανελλαδικές · ${s}</div>`;
  const SL = tag("Ερώτηση Σωστού – Λάθους");
  const img = (f, w) => () => `<img src="exams/img/tal/${f}.png" alt="" style="max-width:100%;width:${w}px;height:auto">`;
  const TOP = {
      "hor": "Οριζόντιος ταλαντωτής",
      "vert": "Κατακόρυφος ταλαντωτής",
      "plag": "Πλάγιος ταλαντωτής"
  };

  const exam = {
    id: "pan-tal6", chapter: 2, lang: "el", group: "Γ΄ Λυκείου — Θέματα Πανελλαδικών",
    title: "Ταλαντωτής ελατηρίου (3)",
    subtitle: "Ταλαντώσεις — ασκήσεις με οριζόντιο, κατακόρυφο και πλάγιο ταλαντωτή",
    sections: [
      {
        name: "Θέμα Γ — Ασκήσεις",
        minutes: 40,
        questions: [
          {
            id: "g1", type: "numeric", topic: TOP.hor, diff: 2, unit: "m",
            stem: tag("Εσπερινά 2007") + R`Στο ένα άκρο ιδανικού ελατηρίου είναι στερεωμένο σώμα μάζας \(m_1=1{,}44\) kg, ενώ το άλλο άκρο είναι ακλόνητο. Πάνω στο σώμα κάθεται πουλί μάζας \(m_2\) και το σύστημα ταλαντώνεται σε λείο οριζόντιο επίπεδο. Η μέγιστη ταχύτητα είναι \(0{,}4\pi\) m/s και η δυναμική ενέργεια μηδενίζεται κάθε \(0{,}5\) s. Όταν το σύστημα περνά από ακραία θέση, το πουλί πετά κατακόρυφα και το νέο σύστημα ταλαντώνεται με κυκλική συχνότητα \(2{,}5\pi\) rad/s.<br><b>Α.</b> Να βρείτε το πλάτος της αρχικής ταλάντωσης.`,
            answer: 0.2, tol: 0.001,
            explain: R`Η \(U\) μηδενίζεται στη ΘΙ, δύο φορές ανά περίοδο: \(T=1\) s, \(\omega=2\pi\). \(A=\tfrac{\upsilon_{max}}{\omega}=\tfrac{0{,}4\pi}{2\pi}=0{,}2\) m.`
          },
          {
            id: "g2", type: "numeric", topic: TOP.hor, diff: 2, unit: "N/m",
            stem: tag("Εσπερινά 2007") + R`(συνέχεια) <b>Β.</b> Να βρείτε τη σταθερά του ελατηρίου. <span class="muted">(με \(\pi^2\approx10\) ή με ακρίβεια)</span>`,
            answer: 88.8, tol: 1.5,
            explain: R`Μετά την αναχώρηση ταλαντώνεται μόνο το \(m_1\): \(k=m_1\omega'^2=1{,}44\cdot6{,}25\pi^2=9\pi^2\approx88{,}8\) N/m (≈90 N/m με \(\pi^2=10\)).`
          },
          {
            id: "g3", type: "numeric", topic: TOP.hor, diff: 2, unit: "m/s",
            stem: tag("Εσπερινά 2007") + R`(συνέχεια) <b>Γ.</b> Να βρείτε τη μέγιστη ταχύτητα της νέας ταλάντωσης.`,
            answer: 1.571, tol: 0.01,
            explain: R`Το πουλί φεύγει σε ακραία θέση (\(\upsilon=0\)), άρα το πλάτος μένει \(0{,}2\) m: \(\upsilon'_{max}=\omega'A=2{,}5\pi\cdot0{,}2=0{,}5\pi\approx1{,}57\) m/s.`
          },
          {
            id: "g4", type: "numeric", topic: TOP.hor, diff: 2, unit: "kg",
            stem: tag("Εσπερινά 2007") + R`(συνέχεια) <b>Δ.</b> Να βρείτε τη μάζα του πουλιού.`,
            answer: 0.81, tol: 0.01,
            explain: R`\(m_1+m_2=\tfrac{k}{\omega^2}=\tfrac{9\pi^2}{4\pi^2}=2{,}25\) kg \(\Rightarrow m_2=0{,}81\) kg.`
          },
          {
            id: "g5", type: "numeric", topic: TOP.vert, diff: 1, unit: "m",
            figure: img("g5", 90),
            stem: tag("Ομογενείς 2014") + R`Στο κάτω άκρο κατακόρυφου ελατηρίου σταθεράς \(k=100\) N/m, που κρέμεται από την οροφή, είναι δεμένο σώμα \(\Sigma\) μάζας \(m=1\) kg. Το σώμα ισορροπεί με τη βοήθεια κατακόρυφου νήματος, δεμένου στο δάπεδο, που του ασκεί δύναμη \(F=20\) N (σχήμα). \(g=10\) m/s².<br><b>Γ1.</b> Να υπολογίσετε την επιμήκυνση του ελατηρίου.`,
            answer: 0.3, tol: 0.001,
            explain: R`Το νήμα τραβά προς τα κάτω: \(k\Delta\ell=mg+F=30\) N \(\Rightarrow\Delta\ell=0{,}3\) m.`
          },
          {
            id: "g6", type: "numeric", topic: TOP.vert, diff: 1, unit: "m",
            stem: tag("Ομογενείς 2014") + R`(συνέχεια) Τη στιγμή \(t_0=0\) κόβεται το νήμα. <b>Γ2.</b> Να υπολογίσετε το πλάτος της ταλάντωσης.`,
            answer: 0.2, tol: 0.001,
            explain: R`Νέα ΘΙ: \(\Delta\ell_0=\tfrac{mg}k=0{,}1\) m. Ξεκινά ακίνητο 0,2 m πιο κάτω: \(A=0{,}2\) m.`
          },
          {
            id: "g7", type: "single", topic: TOP.vert, diff: 2,
            stem: tag("Ομογενείς 2014") + R`(συνέχεια) <b>Γ3.</b> Θετική φορά η φορά του βάρους. Η απομάκρυνση σε συνάρτηση με τον χρόνο είναι (S.I.)`,
            options: [R`\(x=0{,}2\,\eta\mu10t\)`, R`\(x=0{,}2\,\eta\mu\big(10t+\tfrac\pi2\big)\)`, R`\(x=0{,}3\,\eta\mu\big(10t+\tfrac\pi2\big)\)`, R`\(x=0{,}2\,\eta\mu\big(10\sqrt{10}\,t\big)\)`],
            answer: 1,
            explain: R`\(\omega=\sqrt{k/m}=10\) rad/s. Στο \(t=0\) βρίσκεται στην κάτω ακραία θέση, που είναι θετική: \(x=+A\Rightarrow\varphi_0=\tfrac\pi2\).`
          },
          {
            id: "g8", type: "numeric", topic: TOP.vert, diff: 2, unit: "m/s",
            stem: tag("Ομογενείς 2014") + R`(συνέχεια) <b>Γ4.</b> Να υπολογίσετε το μέτρο της ταχύτητας όταν η δυναμική ενέργεια ταλάντωσης είναι τα \(\tfrac45\) της ολικής.`,
            answer: 0.894, tol: 0.01,
            explain: R`\(K=\tfrac E5\Rightarrow\upsilon=\tfrac{\upsilon_{max}}{\sqrt5}=\tfrac{2}{\sqrt5}\approx0{,}89\) m/s (\(\upsilon_{max}=\omega A=2\) m/s).`
          },
          {
            id: "g9", type: "numeric", topic: TOP.plag, diff: 1, unit: "Hz",
            figure: img("g6", 330),
            stem: tag("Ομογενείς 2015") + R`Λείο κεκλιμένο επίπεδο έχει γωνία \(\varphi=30^\circ\). Στο ανώτερο σημείο Α στερεώνεται το άνω άκρο ιδανικού ελατηρίου σταθεράς \(k=200\) N/m, στο άλλο άκρο του οποίου ισορροπεί σώμα \(\Sigma\) μάζας \(m=2\) kg (σχήμα). Απομακρύνουμε το σώμα προς τα κάτω κατά \(d=0{,}1\) m από τη ΘΙ και το αφήνουμε. \(g=10\) m/s².<br><b>Γ1.</b> Να υπολογίσετε τη συχνότητα της ταλάντωσης.`,
            answer: 1.592, tol: 0.01,
            explain: R`\(\Sigma F=-kx\) (το \(mg\eta\mu\varphi\) εξουδετερώνεται στη ΘΙ). \(\omega=\sqrt{200/2}=10\) rad/s, \(f=\tfrac{5}{\pi}\approx1{,}59\) Hz.`
          },
          {
            id: "g10", type: "numeric", topic: TOP.plag, diff: 2, unit: "m",
            stem: tag("Ομογενείς 2015") + R`(συνέχεια) <b>Γ2.</b> Σε ποιες απομακρύνσεις ισχύει \(\tfrac KE=\tfrac14\); Δώσε τη θετική τιμή.`,
            answer: 0.0866, tol: 0.001,
            explain: R`\(U=\tfrac34E\Rightarrow x=\pm\tfrac{\sqrt3}2A=\pm0{,}05\sqrt3\approx\pm0{,}087\) m.`
          },
          {
            id: "g11", type: "numeric", topic: TOP.plag, diff: 2,
            stem: tag("Ομογενείς 2015") + R`(συνέχεια) <b>Γ3.</b> Να υπολογίσετε τον λόγο \(\tfrac{F_{\varepsilon\lambda}}{F_{\varepsilon\pi}}\) των μέτρων στην ανώτερη θέση της ταλάντωσης.`,
            answer: 0.5, tol: 0.001,
            explain: R`ΘΙ: επιμήκυνση \(\tfrac{mg\eta\mu\varphi}{k}=0{,}05\) m. Ανώτερη θέση (0,1 m πιο πάνω): συμπίεση 0,05 m → \(F_{\varepsilon\lambda}=10\) N. \(F_{\varepsilon\pi}=kA=20\) N. Λόγος \(0{,}5\).`
          },
          {
            id: "g12", type: "numeric", topic: TOP.plag, diff: 2, unit: "s",
            stem: tag("Ομογενείς 2015") + R`(συνέχεια) <b>Γ4.</b> Αν τη στιγμή \(t=0\) το σώμα περνά από τη ΘΙ κινούμενο προς τα πάνω (θετική φορά), ποια στιγμή περνά για πρώτη φορά από τη θέση φυσικού μήκους;`,
            answer: 0.05236, tol: 0.001,
            explain: R`\(x=0{,}1\eta\mu10t\). Φυσικό μήκος στο \(x=+0{,}05\) m: \(\eta\mu10t=\tfrac12\Rightarrow10t=\tfrac\pi6\Rightarrow t=\tfrac{\pi}{60}\approx0{,}052\) s.`
          }
        ]
      }
    ]
  };
  (window.EXAMS = window.EXAMS || []).push(exam);
})();
