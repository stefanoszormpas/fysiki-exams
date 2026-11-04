/* Γ΄ Λυκείου — Θέματα Πανελλαδικών · Κρούσεις: πλάγια και έκκεντρη κρούση (2) — ασκήσεις, σκέδαση
   Πηγή: θέματα Πανελλαδικών Εξετάσεων (συλλογή Μ. Παναγιωτόπουλου). Λύσεις: νεο επικεντρο.
   Από θέματα που συνεχίζουν με ταλάντωση κρατήθηκαν μόνο τα υποερωτήματα που λύνονται με κρούσεις.
   Σύνδεσμος για QR: index.html#e=pan-kr10 */
(function () {
  const R = String.raw;
  const tag = s => `<div class="pantag">Πανελλαδικές · ${s}</div>`;
  const SL = tag("Ερώτηση Σωστού – Λάθους");
  const SLO = ["Σωστό", "Λάθος"];
  const AIT = `<br><span class="muted">Στις Πανελλαδικές πρέπει και να αιτιολογήσεις. Σκέψου την αιτιολόγηση πριν απαντήσεις.</span>`;
  const img = (f, w) => () => `<img src="exams/img/kr/${f}.png" alt="" style="max-width:100%;width:${w}px;height:auto">`;
  const TOP = {
    sked: "Σκέδαση",
    plag: "Πλάγια ελαστική κρούση",
    plast: "Πλαστική κρούση μετά από πλάγια"
  };

  const exam = {
    id: "pan-kr10", chapter: 1, lang: "el", group: "Γ΄ Λυκείου — Θέματα Πανελλαδικών",
    title: "Πλάγια και έκκεντρη κρούση (2)",
    subtitle: "Κρούσεις — πλάγια ελαστική κρούση ίσων μαζών, διαδοχικές κρούσεις, σκέδαση",
    sections: [
      {
        name: "Θέμα Α — Σωστό – Λάθος",
        minutes: 3,
        questions: [
          {
            id: "a1", type: "single", topic: TOP.sked, diff: 1,
            stem: SL + R`Κρούση στον μικρόκοσμο ονομάζεται το φαινόμενο στο οποίο τα «συγκρουόμενα» σωματίδια αλληλεπιδρούν με σχετικά μεγάλες δυνάμεις για πολύ μικρό χρονικό διάστημα.`,
            options: SLO, answer: 0,
            explain: R`Σωστό. Είναι ο ορισμός της σκέδασης (κρούση στον μικρόκοσμο): μεγάλες δυνάμεις, πολύ μικρός χρόνος, χωρίς απαραίτητα επαφή.`
          },
          {
            id: "a2", type: "single", topic: TOP.sked, diff: 1,
            stem: SL + R`Σκέδαση ονομάζεται κάθε φαινόμενο του μικρόκοσμου στο οποίο τα «συγκρουόμενα» σωματίδια αλληλεπιδρούν με σχετικά μικρές δυνάμεις για πολύ μικρό χρόνο.`,
            options: SLO, answer: 1,
            explain: R`Λάθος. Οι δυνάμεις είναι σχετικά <b>μεγάλες</b>.`
          }
        ]
      },
      {
        name: "Θέμα Β — Επιλογή και αιτιολόγηση",
        minutes: 12,
        questions: [
          {
            id: "b1", type: "single", topic: TOP.plag, diff: 2,
            stem: tag("Επαναληπτικές Ημερήσια – Ομογενείς 2019") + R`Σε λείο οριζόντιο επίπεδο σφαίρα \(\Sigma_1\) μάζας \(m\) συγκρούεται ελαστικά, αλλά όχι κεντρικά, με όμοια ακίνητη σφαίρα \(\Sigma_2\) ίσης μάζας. Μετά την κρούση οι σφαίρες κινούνται με ταχύτητες \(\vec\upsilon_1\) και \(\vec\upsilon_2\). Η γωνία μεταξύ των \(\vec\upsilon_1\) και \(\vec\upsilon_2\) είναι` + AIT,
            options: [R`\(60^\circ\)`, R`\(90^\circ\)`, R`\(120^\circ\)`],
            answer: 1,
            explain: R`Ορμή: \(\vec\upsilon=\vec\upsilon_1+\vec\upsilon_2\). Ενέργεια: \(\upsilon^2=\upsilon_1^2+\upsilon_2^2\). Από την πρώτη \(\upsilon^2=\upsilon_1^2+\upsilon_2^2+2\vec\upsilon_1\cdot\vec\upsilon_2\), άρα \(\vec\upsilon_1\cdot\vec\upsilon_2=0\): οι ταχύτητες είναι κάθετες.`
          },
          {
            id: "b2", type: "single", topic: TOP.plast, diff: 3,
            figure: img("b33", 380),
            stem: tag("Ημερήσια 2021") + R`Σε λείο οριζόντιο επίπεδο σφαίρα \(\Sigma_1\) μάζας \(m_1=m\), με ταχύτητα \(\upsilon_1\), συγκρούεται ελαστικά, αλλά όχι κεντρικά, με ακίνητη σφαίρα \(\Sigma_2\) μάζας \(m_2=2m\). Αμέσως μετά, η \(\Sigma_1\) κινείται κάθετα στην αρχική της διεύθυνση με ταχύτητα \(\upsilon_1'\) και η \(\Sigma_2\) με ταχύτητα \(\upsilon_2'\) σε διεύθυνση που σχηματίζει γωνία \(30^\circ\) με την αρχική διεύθυνση της \(\Sigma_1\). Στη συνέχεια η \(\Sigma_1\) συγκρούεται κεντρικά και πλαστικά με ακίνητη σφαίρα \(\Sigma_3\) μάζας \(m_3=m\) (κάτοψη στο σχήμα). Ο λόγος της τελικής κινητικής ενέργειας του συσσωματώματος \(\Sigma_1\)–\(\Sigma_3\) προς την αρχική κινητική ενέργεια της \(\Sigma_1\) είναι` + AIT,
            options: [R`\(\dfrac12\)`, R`\(\dfrac13\)`, R`\(\dfrac16\)`],
            answer: 2,
            explain: R`Άξονας \(x\) η αρχική διεύθυνση: \(m\upsilon_1=2m\upsilon_2'\sigma\upsilon\nu30^\circ\Rightarrow\upsilon_2'=\dfrac{\upsilon_1}{\sqrt3}\). Άξονας \(y\): \(m\upsilon_1'=2m\upsilon_2'\eta\mu30^\circ\Rightarrow\upsilon_1'=\dfrac{\upsilon_1}{\sqrt3}\). Πλαστική με ίση ακίνητη μάζα: \(V=\dfrac{\upsilon_1'}{2}\). \(K=\tfrac12\,2m\dfrac{\upsilon_1^2}{12}=\dfrac{m\upsilon_1^2}{12}\), δηλαδή \(\dfrac16\) της \(\tfrac12m\upsilon_1^2\).`
          }
        ]
      },
      {
        name: "Θέμα Δ — Άσκηση (μέρη θεμάτων)",
        minutes: 20,
        questions: [
          {
            id: "d1", type: "numeric", topic: TOP.plag, diff: 2, unit: "°",
            stem: tag("Επαναληπτικές Εσπερινά 2012") + R`Σε λείο οριζόντιο επίπεδο σφαίρα μάζας \(m_1=1\) kg, με ταχύτητα \(\upsilon=\dfrac{4}{\sqrt3}\) m/s, συγκρούεται ελαστικά αλλά όχι κεντρικά με όμοια σφαίρα μάζας \(m_2=m_1\), που είναι αρχικά ακίνητη. Μετά την κρούση οι σφαίρες έχουν ταχύτητες μέτρων \(\upsilon_1\) και \(\upsilon_2=\upsilon_1\sqrt3\).<br><br><b>Δ1.</b> Να βρείτε τη γωνία \(\varphi\) που σχηματίζει η \(\vec\upsilon_2\) με την \(\vec\upsilon_1\). <span class="muted">(σε μοίρες)</span>`,
            answer: 90, tol: 0.01,
            explain: R`Ίσες μάζες, ελαστική, ο στόχος ακίνητος: οι ταχύτητες μετά την κρούση είναι κάθετες, \(\varphi=90^\circ\) (όπως στο προηγούμενο θέμα Β).`
          },
          {
            id: "d2", type: "numeric", topic: TOP.plag, diff: 2, unit: "m/s",
            stem: tag("Επαναληπτικές Εσπερινά 2012") + R`(συνέχεια) <b>Δ2.</b> Να υπολογίσετε το μέτρο \(\upsilon_1\). <span class="muted">(δύο δεκαδικά)</span>`,
            answer: 1.15, tol: 0.01,
            explain: R`\(\upsilon^2=\upsilon_1^2+\upsilon_2^2=4\upsilon_1^2\Rightarrow\upsilon_1=\dfrac\upsilon2=\dfrac{2}{\sqrt3}=\dfrac{2\sqrt3}{3}\simeq1{,}15\) m/s.`
          },
          {
            id: "d3", type: "numeric", topic: TOP.plag, diff: 1, unit: "m/s",
            stem: tag("Επαναληπτικές Εσπερινά 2012") + R`(συνέχεια) Να υπολογίσετε το μέτρο \(\upsilon_2\).`,
            answer: 2, tol: 0.01,
            explain: R`\(\upsilon_2=\upsilon_1\sqrt3=\dfrac{2}{\sqrt3}\sqrt3=2\) m/s.`
          },
          {
            id: "d4", type: "numeric", topic: TOP.plast, diff: 2, unit: "J",
            figure: img("d10", 420),
            stem: tag("Επαναληπτικές Εσπερινά 2012") + R`(συνέχεια) Σώμα μάζας \(M=3m_1\) ισορροπεί δεμένο στο άκρο οριζόντιου ελατηρίου σταθεράς \(k\), που έχει το φυσικό του μήκος. Η σφαίρα \(m_1\), κινούμενη οριζόντια με ταχύτητα \(\upsilon_1\) (κατά τον άξονα του ελατηρίου), σφηνώνεται στο \(M\).<br><b>Δ3.</b> Να βρείτε τη μεταβολή της κινητικής ενέργειας του συστήματος \((M,m_1)\) κατά την κρούση. <span class="muted">(με πρόσημο)</span>`,
            answer: -0.5, tol: 0.01,
            explain: R`\(V=\dfrac{m_1\upsilon_1}{4m_1}=\dfrac{\upsilon_1}{4}\). \(\Delta K=\tfrac12\cdot4\cdot\dfrac{\upsilon_1^2}{16}-\tfrac12\cdot1\cdot\upsilon_1^2=-\dfrac38\upsilon_1^2=-\dfrac38\cdot\dfrac43=-0{,}5\) J.`
          },
          {
            id: "d5", type: "numeric", topic: TOP.plast, diff: 3, unit: "N/m",
            stem: tag("Επαναληπτικές Εσπερινά 2012") + R`(συνέχεια) <b>Δ4.</b> Ο συντελεστής τριβής μεταξύ του συσσωματώματος και του οριζόντιου επιπέδου είναι \(\mu=\dfrac1{12}\) και η μέγιστη συσπείρωση του ελατηρίου μετά την κρούση είναι \(x_{max}=0{,}02\) m. Να βρείτε τη σταθερά \(k\). (\(g=10\) m/s²)`,
            answer: 500, tol: 0.01,
            explain: R`\(K'=\tfrac12\cdot4\cdot\dfrac{1}{12}=\dfrac16\) J. Θεώρημα έργου–ενέργειας ως τη μέγιστη συσπείρωση: \(\dfrac16=\tfrac12k(0{,}02)^2+\mu(4)(10)(0{,}02)=0{,}0002k+\dfrac1{15}\Rightarrow0{,}0002k=0{,}1\Rightarrow k=500\) N/m.`
          },
          {
            id: "d6", type: "numeric", topic: TOP.plast, diff: 3, unit: "J",
            stem: tag("Επαναληπτικές Ημερήσια 2012") + R`Στο θέμα των ημερήσιων (ίδια πρώτη κρούση, \(\upsilon_1=\dfrac2{\sqrt3}\) m/s), το σώμα \(M=3m_1\) ισορροπεί δεμένο σε ελατήριο που βρίσκεται κατά μήκος κεκλιμένου επιπέδου γωνίας \(\theta=30^\circ\). Η σφαίρα \(m_1\), κινούμενη <b>οριζόντια</b> με ταχύτητα \(\upsilon_1\), σφηνώνεται στο \(M\), και το συσσωμάτωμα κινείται κατά μήκος του κεκλιμένου επιπέδου.<br><b>Δ3.</b> Να βρείτε τη μεταβολή της κινητικής ενέργειας του συστήματος \((M,m_1)\) κατά την κρούση. <span class="muted">(με πρόσημο, δύο δεκαδικά)</span>`,
            answer: -0.54, tol: 0.01,
            explain: R`Το επίπεδο ασκεί κάθετη ώθηση, οπότε διατηρείται μόνο η συνιστώσα της ορμής <b>κατά μήκος</b> του κεκλιμένου: \(m_1\upsilon_1\sigma\upsilon\nu30^\circ=4m_1V\Rightarrow V=\dfrac{2}{\sqrt3}\cdot\dfrac{\sqrt3}{2}\cdot\dfrac14=\dfrac14\) m/s. \(\Delta K=\tfrac12\cdot4\cdot\dfrac1{16}-\tfrac12\cdot1\cdot\dfrac43=\dfrac18-\dfrac23=-\dfrac{13}{24}\simeq-0{,}54\) J. (Το Δ4 θέλει ταλαντώσεις.)`
          }
        ]
      }
    ]
  };
  window.EXAMS = window.EXAMS || [];
  window.EXAMS.push(exam);
})();
