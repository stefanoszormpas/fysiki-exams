/* Γ΄ Λυκείου — Θέματα Πανελλαδικών · Κβαντική: Θέμα Γ (Compton και φωτοηλεκτρικό)
   Πηγή: θέματα Πανελλαδικών Εξετάσεων (συλλογή Μ. Παναγιωτόπουλου). Λύσεις: νεο επικεντρο.
   Σύνδεσμος για QR: index.html#e=pan-kv3 */
(function () {
  const R = String.raw;
  const tag = s => `<div class="pantag">Πανελλαδικές · ${s}</div>`;
  const TOP = { co: "Compton", fe: "Φωτοηλεκτρικό" };
  const n = (id, topic, diff, src, stem, unit, answer, explain) => ({ id, type: "numeric", topic, diff, unit, stem: tag(src) + stem, answer, tol: 0.02, explain });
  const S = "Ημερήσιες 2026";

  const exam = {
    id: "pan-kv3", chapter: 6, lang: "el", group: "Γ΄ Λυκείου — Θέματα Πανελλαδικών",
    title: "Κβαντική: Θέμα Γ (Compton και φωτοηλεκτρικό)",
    subtitle: "Κβαντική — σκέδαση Compton και φωτοηλεκτρικό φαινόμενο στο ίδιο πρόβλημα",
    sections: [
      {
        name: "Θέμα Γ",
        minutes: 15,
        questions: [
          n("g1", TOP.co, 1, S, R`Μονοχρωματική δέσμη φωτονίων με \(\lambda=8\lambda_C\) προσπίπτει σε υλικό, όπου \(\lambda_C=\tfrac{h}{m_ec}\) το μήκος κύματος Compton του ηλεκτρονίου. Δίνονται \(m_ec^2=5\cdot10^5\) eV, \(hc=1200\) eV·nm, \(h=6{,}4\cdot10^{-34}\) J·s, \(1\) eV \(=1{,}6\cdot10^{-19}\) J. <b>Γ1.</b> Ένα φωτόνιο σκεδάζεται σε γωνία \(\varphi=180^\circ\) από πρακτικά ακίνητο ηλεκτρόνιο. Το μήκος κύματός του είναι \(\lambda'=k\,\lambda_C\). Να βρείτε το \(k\).`, "", 10,
            R`\(\lambda'=\lambda+\lambda_C(1-\sigma\upsilon\nu180^\circ)=8\lambda_C+2\lambda_C=10\lambda_C\).`),
          n("g2", TOP.co, 1, S, R`(συνέχεια) <b>Γ2.</b> Η ενέργεια του προσπίπτοντος φωτονίου γράφεται \(E_\varphi=k\,m_ec^2\). Να βρείτε το \(k\).`, "", 0.125,
            R`\(E_\varphi=\tfrac{hc}{8\lambda_C}=\tfrac{m_ec^2}{8}\), αφού \(\tfrac{hc}{\lambda_C}=m_ec^2\).`),
          n("g3", TOP.co, 1, S, R`(συνέχεια) Η ενέργεια του σκεδαζόμενου φωτονίου γράφεται \(E'_\varphi=k\,m_ec^2\). Να βρείτε το \(k\).`, "", 0.1,
            R`\(E'_\varphi=\tfrac{hc}{10\lambda_C}=\tfrac{m_ec^2}{10}\).`),
          n("g4", TOP.co, 1, S, R`(συνέχεια) Να υπολογίσετε την κινητική ενέργεια του ανακρουόμενου ηλεκτρονίου.`, "eV", 12500,
            R`\(K_e=E_\varphi-E'_\varphi=m_ec^2\big(\tfrac18-\tfrac1{10}\big)=\tfrac{m_ec^2}{40}=12\,500\) eV.`),
          n("g5", TOP.fe, 1, S, R`Τα σκεδαζόμενα φωτόνια, μέσω κατάλληλου υλικού, παράγουν φωτόνια \(\lambda_1=400\) nm που πέφτουν σε φωτοκύτταρο με έργο εξαγωγής \(\Phi=1{,}4\) eV. <b>Γ3.</b> Να υπολογίσετε τη συχνότητα κατωφλίου \(f_0\).`, "×10¹⁴ Hz", 3.5,
            R`\(hf_0=\Phi\Rightarrow f_0=\tfrac{1{,}4\cdot1{,}6\cdot10^{-19}}{6{,}4\cdot10^{-34}}=3{,}5\cdot10^{14}\) Hz.`),
          n("g6", TOP.fe, 1, S, R`(συνέχεια) <b>Γ4.</b> Να υπολογίσετε το δυναμικό αποκοπής \(V_0\) όταν η κάθοδος φωτίζεται με \(\lambda_1=400\) nm.`, "V", 1.6,
            R`\(E=\tfrac{1200}{400}=3\) eV, \(K_{max}=3-1{,}4=1{,}6\) eV, άρα \(V_0=1{,}6\) V.`)
        ]
      }
    ]
  };
  (window.EXAMS = window.EXAMS || []).push(exam);
})();
