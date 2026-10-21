/* Εξέταση Κεφαλαίου 1 — Κινηματική στο επίπεδο (Physique 2CB/2CC) · g = 10 m/s² */
(function () {
  const R = String.raw;
  const TOP = {
    ref: { fr: "Référentiel et trajectoire", el: "Πλαίσιο αναφοράς και τροχιά" },
    vec: { fr: "Grandeurs vectorielles", el: "Διανυσματικά μεγέθη" },
    th: { fr: "Tir horizontal", el: "Οριζόντια βολή" },
    to: { fr: "Tir oblique", el: "Πλάγια βολή" },
    atn: { fr: "Accélérations tangentielle et normale", el: "Εφαπτομενική και κάθετη επιτάχυνση" },
    vert: { fr: "Mouvement vertical", el: "Κατακόρυφη κίνηση" }
  };
  const range = (a, b, n) => Array.from({ length: n + 1 }, (_, i) => a + (b - a) * i / n);

  /* --- Σχήματα --- */
  const figDisp = l => FIG.graph({ xmax: 10, ymax: 12, xstep: 2, ystep: 2, xlabel: "x (m)", ylabel: "y (m)",
    dots: [[2, 3, "M₁"], [8, 11, "M₂"]], arrows: [{ p: [2, 3], d: [6, 8], label: "Δr", dx: 10, dy: 18 }] }, l);
  const figTH = l => FIG.graph({ xmax: 70, ymax: 90, xstep: 10, ystep: 10, xlabel: "x (m)", ylabel: "y (m)",
    lines: [{ pts: range(0, 60, 40).map(x => [x, 80 - 5 * (x / 15) ** 2]) }],
    arrows: [{ p: [0, 80], d: [14, 0], label: "v₀ = 15 m/s", dx: 6, dy: -10 }],
    dots: [[0, 80]], texts: [{ p: [3, 70], t: "h = 80 m" }] }, l);
  const tan30 = Math.tan(Math.PI / 6);
  const figTO = l => FIG.graph({ xmax: 40, ymax: 6, xstep: 5, ystep: 1, xlabel: "x (m)", ylabel: "y (m)",
    lines: [{ pts: range(0, 34.64, 50).map(x => [x, tan30 * x - x * x / 60]) }],
    dots: [[17.32, 5, "S"], [34.64, 0, "I"]], texts: [{ p: [1, 5.55], t: "v₀ = 20 m/s · α = 30°" }] }, l);
  const figAT = l => {
    const pts = range(0.15, 1.45, 40).map(a => [5 * Math.cos(a), 5 * Math.sin(a)]);
    return FIG.graph({ bare: true, w: 380, h: 380, xmin: -1, xmax: 6.5, ymin: -1, ymax: 6.5, lines: [{ pts, color: "#98a2b3" }],
      arrows: [{ p: [3.54, 3.54], d: [-1.5, 1.5], label: "v", dx: -16, dy: -6 }, { p: [3.54, 3.54], d: [-0.4, -2.1], label: "a", dx: 8, dy: 12, color: "#0f6e6b" }],
      dots: [[3.54, 3.54, "M"]] }, l);
  };

  const exam = {
    id: "kef1", chapter: 1,
    title: { fr: "Cinématique dans le plan", el: "Κινηματική στο επίπεδο" },
    subtitle: { fr: "Physique 2CB/2CC — Chapitre 1", el: "Κεφάλαιο 1" },
    sections: [
      {
        name: { fr: "Section 1 — Référentiel, vecteurs et tir horizontal", el: "Ενότητα 1 — Πλαίσιο αναφοράς, διανύσματα και οριζόντια βολή" },
        minutes: 22,
        questions: [
          {
            id: "ref1", type: "single", topic: TOP.ref, diff: 1,
            stem: { fr: R`Un passager, dans un train qui roule à vitesse constante en ligne droite, lâche une balle. Quelle est la trajectoire de la balle par rapport à un observateur immobile sur le quai ?`,
                    el: R`Ένας επιβάτης σε τρένο που κινείται με σταθερή ταχύτητα σε ευθεία αφήνει μια μπάλα να πέσει. Ποια είναι η τροχιά της μπάλας ως προς έναν ακίνητο παρατηρητή στην αποβάθρα;` },
            options: [{ fr: "Une droite verticale", el: "Κατακόρυφη ευθεία" }, { fr: "Une parabole", el: "Παραβολή" }, { fr: "Une droite horizontale", el: "Οριζόντια ευθεία" }, { fr: "Un cercle", el: "Κύκλος" }, { fr: "Une droite oblique", el: "Πλάγια ευθεία" }],
            answer: 1,
            explain: { fr: R`Dans le référentiel du quai, la balle a une vitesse horizontale constante (celle du train) et tombe en chute libre : la superposition donne une parabole. Pour le passager, c'est une droite verticale.`,
                       el: R`Ως προς την αποβάθρα, η μπάλα έχει σταθερή οριζόντια ταχύτητα (του τρένου) και πέφτει ελεύθερα: η σύνθεση δίνει παραβολή. Για τον επιβάτη είναι κατακόρυφη ευθεία.` }
          },
          {
            id: "ref2", type: "single", topic: TOP.ref, diff: 1,
            stem: { fr: R`Un point \(A\) est situé au bord de la roue d'une bicyclette. Dans le référentiel « roue », le point \(A\) est :`,
                    el: R`Ένα σημείο \(A\) βρίσκεται στο άκρο του τροχού ενός ποδηλάτου. Ως προς το πλαίσιο «τροχός», το σημείο \(A\) είναι:` },
            options: [{ fr: "immobile", el: "ακίνητο" }, { fr: "animé d'un mouvement circulaire", el: "σε κυκλική κίνηση" }, { fr: "animé d'un mouvement cycloïdal", el: "σε κυκλοειδή κίνηση" }, { fr: "animé d'un mouvement rectiligne", el: "σε ευθύγραμμη κίνηση" }, { fr: "animé d'un mouvement parabolique", el: "σε παραβολική κίνηση" }],
            answer: 0,
            explain: { fr: R`Dans le référentiel « roue », \(A\) est fixe. Dans le référentiel « axe de rotation » il décrit un cercle ; dans le référentiel « sol », une cycloïde.`,
                       el: R`Ως προς τον τροχό το \(A\) είναι ακίνητο. Ως προς τον άξονα περιστροφής διαγράφει κύκλο· ως προς το έδαφος, κυκλοειδή.` }
          },
          {
            id: "ref3", type: "multi", topic: TOP.ref, diff: 2,
            stem: { fr: R`Sélectionner <b>toutes</b> les affirmations correctes.`, el: R`Επίλεξε <b>όλες</b> τις σωστές προτάσεις.` },
            options: [
              { fr: "Le mouvement et le repos sont relatifs au référentiel choisi.", el: "Η κίνηση και η ηρεμία είναι σχετικές ως προς το πλαίσιο αναφοράς." },
              { fr: "La forme de la trajectoire ne dépend pas du référentiel.", el: "Η μορφή της τροχιάς δεν εξαρτάται από το πλαίσιο αναφοράς." },
              { fr: "Le référentiel géocentrique est utilisé pour étudier les satellites terrestres.", el: "Το γεωκεντρικό πλαίσιο χρησιμοποιείται για τους δορυφόρους της Γης." },
              { fr: "Le référentiel héliocentrique est utilisé pour étudier les planètes.", el: "Το ηλιοκεντρικό πλαίσιο χρησιμοποιείται για τους πλανήτες." },
              { fr: "Le référentiel terrestre a son origine au centre du Soleil.", el: "Το γήινο πλαίσιο έχει αρχή στο κέντρο του Ήλιου." }
            ],
            answer: [0, 2, 3],
            explain: { fr: R`La trajectoire dépend du référentiel. Le référentiel terrestre est lié au sol, le géocentrique à la Terre (origine : son centre), l'héliocentrique au Soleil.`,
                       el: R`Η τροχιά εξαρτάται από το πλαίσιο. Το γήινο πλαίσιο συνδέεται με το έδαφος, το γεωκεντρικό με το κέντρο της Γης, το ηλιοκεντρικό με τον Ήλιο.` }
          },
          {
            id: "vec1", type: "single", topic: TOP.vec, diff: 1,
            stem: { fr: R`Le vecteur vitesse instantanée d'un mobile est toujours :`, el: R`Το διάνυσμα της στιγμιαίας ταχύτητας ενός κινητού είναι πάντα:` },
            options: [
              { fr: "tangent à la trajectoire, de sens celui du mouvement", el: "εφαπτόμενο στην τροχιά, με τη φορά της κίνησης" },
              { fr: "perpendiculaire à la trajectoire", el: "κάθετο στην τροχιά" },
              { fr: "orienté vers l'intérieur de la concavité de la trajectoire", el: "προς το εσωτερικό της κυρτότητας της τροχιάς" },
              { fr: "parallèle au vecteur accélération", el: "παράλληλο προς το διάνυσμα της επιτάχυνσης" },
              { fr: "dirigé vers le centre de la Terre", el: "κατευθυνόμενο προς το κέντρο της Γης" }
            ],
            answer: 0,
            explain: { fr: R`\(\vec v=\dfrac{d\vec r}{dt}\) : tangent à la trajectoire, de sens celui du mouvement.`, el: R`\(\vec v=\dfrac{d\vec r}{dt}\): εφαπτόμενο στην τροχιά, με τη φορά της κίνησης.` }
          },
          {
            id: "vec2", type: "numeric", topic: TOP.vec, diff: 1, unit: "m/s",
            stem: { fr: R`Un mobile a pour composantes de vitesse \(v_x=12\ \text{m/s}\) et \(v_y=-16\ \text{m/s}\). Quelle est la norme de sa vitesse ?`,
                    el: R`Ένα κινητό έχει συνιστώσες ταχύτητας \(v_x=12\) m/s και \(v_y=-16\) m/s. Ποιο είναι το μέτρο της ταχύτητάς του;` },
            answer: 20, tol: 0.01,
            explain: { fr: R`\(v=\sqrt{v_x^2+v_y^2}=\sqrt{144+256}=20\ \text{m/s}\).`, el: R`\(v=\sqrt{v_x^2+v_y^2}=\sqrt{144+256}=20\) m/s.` }
          },
          {
            id: "vec3", type: "numeric", topic: TOP.vec, diff: 2, unit: "m", figure: figDisp,
            stem: { fr: R`Un mobile passe de la position \(M_1\) à la position \(M_2\) (voir figure). Quelle est la norme du vecteur déplacement \(\Delta\vec r\) ?`,
                    el: R`Ένα κινητό μετακινείται από τη θέση \(M_1\) στη θέση \(M_2\) (βλ. σχήμα). Ποιο είναι το μέτρο του διανύσματος μετατόπισης \(\Delta\vec r\);` },
            answer: 10, tol: 0.01,
            explain: { fr: R`\(\Delta\vec r=\overrightarrow{M_1M_2}=(8-2)\vec i+(11-3)\vec j\), donc \(\|\Delta\vec r\|=\sqrt{6^2+8^2}=10\ \text{m}\).`,
                       el: R`\(\Delta\vec r=\overrightarrow{M_1M_2}=(8-2)\vec i+(11-3)\vec j\), άρα \(\|\Delta\vec r\|=\sqrt{6^2+8^2}=10\) m.` }
          },
          {
            id: "vec4", type: "numeric", topic: TOP.vec, diff: 2, unit: "m/s",
            stem: { fr: R`Un mobile part de l'origine \(O\) à \(t=0\) et arrive au point \(M(12\ \text{m};\,16\ \text{m})\) à \(t=4\ \text{s}\). Quelle est la norme de sa vitesse moyenne ?`,
                    el: R`Ένα κινητό ξεκινά από την αρχή \(O\) τη στιγμή \(t=0\) και φτάνει στο σημείο \(M(12\ \text{m};\,16\ \text{m})\) τη στιγμή \(t=4\) s. Ποιο είναι το μέτρο της μέσης ταχύτητάς του;` },
            answer: 5, tol: 0.01,
            explain: { fr: R`\(\vec v_m=\dfrac{\Delta\vec r}{\Delta t}\), \(\|\Delta\vec r\|=\sqrt{12^2+16^2}=20\ \text{m}\), donc \(v_m=20/4=5\ \text{m/s}\).`,
                       el: R`\(\vec v_μ=\dfrac{\Delta\vec r}{\Delta t}\), \(\|\Delta\vec r\|=\sqrt{12^2+16^2}=20\) m, άρα \(v_μ=20/4=5\) m/s.` }
          },
          {
            id: "vec5", type: "single", topic: TOP.vec, diff: 1,
            stem: { fr: R`Le vecteur accélération instantanée d'un mobile sur une trajectoire courbe est orienté :`, el: R`Το διάνυσμα της στιγμιαίας επιτάχυνσης ενός κινητού σε καμπύλη τροχιά κατευθύνεται:` },
            options: [
              { fr: "vers l'intérieur de la concavité de la trajectoire", el: "προς το εσωτερικό της κυρτότητας της τροχιάς" },
              { fr: "tangentiellement à la trajectoire, dans le sens de \\(\\vec v\\)", el: "εφαπτομενικά, κατά τη φορά του \\(\\vec v\\)" },
              { fr: "vers l'extérieur de la concavité de la trajectoire", el: "προς το εξωτερικό της κυρτότητας της τροχιάς" },
              { fr: "toujours perpendiculairement à \\(\\vec v\\)", el: "πάντα κάθετα στο \\(\\vec v\\)" },
              { fr: "toujours dans le sens opposé à \\(\\vec v\\)", el: "πάντα αντίθετα από το \\(\\vec v\\)" }
            ],
            answer: 0,
            explain: { fr: R`\(\vec a=d\vec v/dt\) pointe vers l'intérieur de la concavité. Sa composante tangentielle peut être nulle, positive ou négative ; elle n'est pas toujours perpendiculaire à \(\vec v\).`,
                       el: R`Η \(\vec a=d\vec v/dt\) δείχνει προς το εσωτερικό της κυρτότητας. Η εφαπτομενική συνιστώσα μπορεί να είναι μηδέν, θετική ή αρνητική· δεν είναι πάντα κάθετη στο \(\vec v\).` }
          },
          {
            id: "th1", type: "numeric", topic: TOP.th, diff: 2, unit: "s", figure: figTH,
            stem: { fr: R`Un colis est lâché horizontalement à \(15\ \text{m/s}\) d'un hélicoptère à \(80\ \text{m}\) de hauteur (voir figure). Quelle est la durée de la chute ? (\(g=10\ \text{m/s}^2\), frottements négligés)`,
                    el: R`Ένα δέμα ρίχνεται οριζόντια με 15 m/s από ελικόπτερο σε ύψος 80 m (βλ. σχήμα). Πόσο διαρκεί η πτώση; (\(g=10\) m/s², χωρίς τριβές)` },
            answer: 4, tol: 0.01,
            explain: { fr: R`Verticalement : chute libre sans vitesse initiale, \(h=\tfrac12gt^2\Rightarrow t=\sqrt{2h/g}=\sqrt{16}=4\ \text{s}\).`,
                       el: R`Κατακόρυφα: ελεύθερη πτώση χωρίς αρχική ταχύτητα, \(h=\tfrac12gt^2\Rightarrow t=\sqrt{2h/g}=\sqrt{16}=4\) s.` }
          },
          {
            id: "th2", type: "numeric", topic: TOP.th, diff: 2, unit: "m", figure: figTH,
            stem: { fr: R`Quelle est la distance horizontale parcourue par le colis avant de toucher le sol ?`,
                    el: R`Ποια οριζόντια απόσταση διανύει το δέμα πριν φτάσει στο έδαφος;` },
            answer: 60, tol: 0.01,
            explain: { fr: R`Horizontalement : MRU, \(x=v_0t=15\cdot4=60\ \text{m}\).`, el: R`Οριζόντια: ΕΟΚ, \(x=v_0t=15\cdot4=60\) m.` }
          },
          {
            id: "th3", type: "compare", topic: TOP.th, diff: 2, figure: figTH,
            stem: { fr: R`<b>Quantité A :</b> durée de chute du colis lancé horizontalement à \(15\ \text{m/s}\).<br><b>Quantité B :</b> durée de chute d'un autre colis lâché sans vitesse initiale de la même hauteur.`,
                    el: R`<b>Ποσότητα Α:</b> διάρκεια πτώσης του δέματος που ρίχνεται οριζόντια με 15 m/s.<br><b>Ποσότητα Β:</b> διάρκεια πτώσης άλλου δέματος που αφήνεται χωρίς αρχική ταχύτητα από το ίδιο ύψος.` },
            answer: 2,
            explain: { fr: R`Les mouvements horizontal et vertical sont indépendants : la durée de chute ne dépend que de \(h\) et de \(g\).`,
                       el: R`Οι οριζόντιες και κατακόρυφες κινήσεις είναι ανεξάρτητες: η διάρκεια πτώσης εξαρτάται μόνο από το \(h\) και το \(g\).` }
          },
          {
            id: "th4", type: "numeric", topic: TOP.th, diff: 3, unit: "m/s", figure: figTH,
            stem: { fr: R`Quelle est la norme de la vitesse du colis juste avant l'impact ?`, el: R`Ποιο είναι το μέτρο της ταχύτητας του δέματος αμέσως πριν την πρόσκρουση;` },
            answer: 42.7, tol: 0.01,
            explain: { fr: R`\(v_x=15\ \text{m/s}\), \(v_y=gt=10\cdot4=40\ \text{m/s}\). \(v=\sqrt{15^2+40^2}=\sqrt{1825}\approx42{,}7\ \text{m/s}\).`,
                       el: R`\(v_x=15\) m/s, \(v_y=gt=10\cdot4=40\) m/s. \(v=\sqrt{15^2+40^2}=\sqrt{1825}\approx42{,}7\) m/s.` }
          },
          {
            id: "th5", type: "multi", topic: TOP.th, diff: 2,
            stem: { fr: R`Pour un tir horizontal sans frottement, sélectionner <b>toutes</b> les affirmations correctes.`, el: R`Για οριζόντια βολή χωρίς τριβές, επίλεξε <b>όλες</b> τις σωστές προτάσεις.` },
            options: [
              { fr: "La composante horizontale de la vitesse est constante.", el: "Η οριζόντια συνιστώσα της ταχύτητας είναι σταθερή." },
              { fr: "La composante verticale de la vitesse est constante.", el: "Η κατακόρυφη συνιστώσα της ταχύτητας είναι σταθερή." },
              { fr: "L'accélération est \\(\\vec g\\), dirigée vers le bas.", el: "Η επιτάχυνση είναι \\(\\vec g\\), προς τα κάτω." },
              { fr: "La trajectoire est une parabole.", el: "Η τροχιά είναι παραβολή." },
              { fr: "La durée de chute dépend de la masse du projectile.", el: "Η διάρκεια πτώσης εξαρτάται από τη μάζα του βλήματος." }
            ],
            answer: [0, 2, 3],
            explain: { fr: R`\(a_x=0\), \(a_y=g\) : \(v_x\) constante, \(v_y=gt\) croît. La masse n'intervient pas.`, el: R`\(a_x=0\), \(a_y=g\): η \(v_x\) είναι σταθερή, η \(v_y=gt\) αυξάνεται. Η μάζα δεν παίζει ρόλο.` }
          }
        ]
      },
      {
        name: { fr: "Section 2 — Tir oblique et accélérations", el: "Ενότητα 2 — Πλάγια βολή και επιταχύνσεις" },
        minutes: 20,
        questions: [
          {
            id: "to1", type: "numeric", topic: TOP.to, diff: 2, unit: "s", figure: figTO,
            stem: { fr: R`Un projectile est lancé du sol avec \(v_0=20\ \text{m/s}\) sous un angle \(\alpha=30^\circ\) (voir figure). Après combien de temps atteint-il le sommet \(S\) ? (\(g=10\ \text{m/s}^2\))`,
                    el: R`Ένα βλήμα εκτοξεύεται από το έδαφος με \(v_0=20\) m/s υπό γωνία \(\alpha=30^\circ\) (βλ. σχήμα). Μετά από πόσο χρόνο φτάνει στην κορυφή \(S\);` },
            answer: 1, tol: 0.01,
            explain: { fr: R`Au sommet \(v_y=0\) : \(t_S=\dfrac{v_0\sin\alpha}{g}=\dfrac{20\cdot0{,}5}{10}=1\ \text{s}\).`, el: R`Στην κορυφή \(v_y=0\): \(t_S=\dfrac{v_0\sin\alpha}{g}=\dfrac{20\cdot0{,}5}{10}=1\) s.` }
          },
          {
            id: "to2", type: "numeric", topic: TOP.to, diff: 2, unit: "m", figure: figTO,
            stem: { fr: R`Quelle est l'altitude \(y_S\) du sommet de la trajectoire ?`, el: R`Ποιο είναι το ύψος \(y_S\) της κορυφής της τροχιάς;` },
            answer: 5, tol: 0.01,
            explain: { fr: R`\(y_S=\dfrac{v_0^2\sin^2\alpha}{2g}=\dfrac{400\cdot0{,}25}{20}=5\ \text{m}\).`, el: R`\(y_S=\dfrac{v_0^2\sin^2\alpha}{2g}=\dfrac{400\cdot0{,}25}{20}=5\) m.` }
          },
          {
            id: "to3", type: "numeric", topic: TOP.to, diff: 3, unit: "m", figure: figTO,
            stem: { fr: R`Quelle est la portée \(x_I\) du tir (distance horizontale jusqu'au point d'impact \(I\), au même niveau que le point de départ) ?`,
                    el: R`Ποιο είναι το βεληνεκές \(x_I\) της βολής (οριζόντια απόσταση μέχρι το σημείο πρόσκρουσης \(I\), στο ίδιο επίπεδο με την εκτόξευση);` },
            answer: 34.6, tol: 0.01,
            explain: { fr: R`\(x_I=\dfrac{v_0^2\sin(2\alpha)}{g}=\dfrac{400\cdot\sin60^\circ}{10}\approx34{,}6\ \text{m}\).`, el: R`\(x_I=\dfrac{v_0^2\sin(2\alpha)}{g}=\dfrac{400\cdot\sin60^\circ}{10}\approx34{,}6\) m.` }
          },
          {
            id: "to4", type: "compare", topic: TOP.to, diff: 2, figure: figTO,
            stem: { fr: R`<b>Quantité A :</b> norme de la vitesse du projectile au sommet \(S\).<br><b>Quantité B :</b> composante horizontale de la vitesse initiale, \(v_0\cos\alpha\).`,
                    el: R`<b>Ποσότητα Α:</b> μέτρο της ταχύτητας του βλήματος στην κορυφή \(S\).<br><b>Ποσότητα Β:</b> οριζόντια συνιστώσα της αρχικής ταχύτητας, \(v_0\cos\alpha\).` },
            answer: 2,
            explain: { fr: R`Au sommet \(v_y=0\) et \(v_x=v_0\cos\alpha\) est constante : \(v_S=v_0\cos\alpha\).`, el: R`Στην κορυφή \(v_y=0\) και η \(v_x=v_0\cos\alpha\) είναι σταθερή: \(v_S=v_0\cos\alpha\).` }
          },
          {
            id: "to5", type: "single", topic: TOP.to, diff: 2, figure: figTO,
            stem: { fr: R`Que vaut le vecteur accélération du projectile au sommet \(S\) ?`, el: R`Ποια είναι η επιτάχυνση του βλήματος στην κορυφή \(S\);` },
            options: [
              { fr: "Nul", el: "Μηδενική" },
              { fr: "Vertical, vers le bas, de norme \\(10\\ \\text{m/s}^2\\)", el: "Κατακόρυφη, προς τα κάτω, μέτρου 10 m/s²" },
              { fr: "Horizontal, dans le sens du mouvement", el: "Οριζόντια, κατά τη φορά της κίνησης" },
              { fr: "Vertical, vers le haut, de norme \\(10\\ \\text{m/s}^2\\)", el: "Κατακόρυφη, προς τα πάνω, μέτρου 10 m/s²" },
              { fr: "Tangent à la trajectoire, de norme \\(10\\ \\text{m/s}^2\\)", el: "Εφαπτομενική, μέτρου 10 m/s²" }
            ],
            answer: 1,
            explain: { fr: R`Pendant tout le vol \(\vec a=\vec g\). Au sommet, \(\vec a\perp\vec v\) : \(a_\tau=0\) et \(a_n=g\).`, el: R`Σε όλη τη διάρκεια της πτήσης \(\vec a=\vec g\). Στην κορυφή, \(\vec a\perp\vec v\): \(a_\tau=0\) και \(a_n=g\).` }
          },
          {
            id: "to6", type: "single", topic: TOP.to, diff: 3, figure: figTO,
            stem: { fr: R`Quel angle la vitesse fait-elle avec l'horizontale au point d'impact \(I\) (au même niveau que le départ) ?`,
                    el: R`Ποια γωνία σχηματίζει η ταχύτητα με την οριζόντια στο σημείο πρόσκρουσης \(I\) (στο ίδιο επίπεδο με την εκτόξευση);` },
            options: ["15°", "30°", "45°", "60°", "90°"], answer: 1,
            explain: { fr: R`La trajectoire est symétrique : \(v_x=v_0\cos\alpha\) et \(v_y=-v_0\sin\alpha\). L'angle d'impact est \(\alpha=30^\circ\) (sous l'horizontale).`,
                       el: R`Η τροχιά είναι συμμετρική: \(v_x=v_0\cos\alpha\) και \(v_y=-v_0\sin\alpha\). Η γωνία πρόσκρουσης είναι \(\alpha=30^\circ\) (κάτω από την οριζόντια).` }
          },
          {
            id: "to7", type: "compare", topic: TOP.to, diff: 3,
            stem: { fr: R`Deux tirs partent du sol avec la même vitesse initiale.<br><b>Quantité A :</b> portée pour \(\alpha=30^\circ\).<br><b>Quantité B :</b> portée pour \(\alpha=60^\circ\).`,
                    el: R`Δύο βολές ξεκινούν από το έδαφος με την ίδια αρχική ταχύτητα.<br><b>Ποσότητα Α:</b> βεληνεκές για \(\alpha=30^\circ\).<br><b>Ποσότητα Β:</b> βεληνεκές για \(\alpha=60^\circ\).` },
            answer: 2,
            explain: { fr: R`\(x_I\propto\sin(2\alpha)\) : \(\sin60^\circ=\sin120^\circ\). Les portées sont égales (angles complémentaires), mais le tir à \(60^\circ\) monte plus haut.`,
                       el: R`\(x_I\propto\sin(2\alpha)\): \(\sin60^\circ=\sin120^\circ\). Τα βεληνεκή είναι ίσα (συμπληρωματικές γωνίες), αλλά η βολή στις \(60^\circ\) ανεβαίνει ψηλότερα.` }
          },
          {
            id: "to8", type: "numeric", topic: TOP.to, diff: 3, unit: "m",
            stem: { fr: R`Une balle est lancée du sol avec \(v_0=30\ \text{m/s}\). Quelle est la portée maximale possible (en choisissant le meilleur angle) ?`,
                    el: R`Μια μπάλα εκτοξεύεται από το έδαφος με \(v_0=30\) m/s. Ποιο είναι το μέγιστο δυνατό βεληνεκές (με την καλύτερη γωνία);` },
            answer: 90, tol: 0.01,
            explain: { fr: R`Maximale pour \(\alpha=45^\circ\) (\(\sin2\alpha=1\)) : \(x_{max}=\dfrac{v_0^2}{g}=\dfrac{900}{10}=90\ \text{m}\).`, el: R`Μέγιστο για \(\alpha=45^\circ\) (\(\sin2\alpha=1\)): \(x_{max}=\dfrac{v_0^2}{g}=\dfrac{900}{10}=90\) m.` }
          },
          {
            id: "at1", type: "single", topic: TOP.atn, diff: 2, figure: figAT,
            stem: { fr: R`La figure montre la vitesse \(\vec v\) et l'accélération \(\vec a\) d'un mobile au point \(M\) d'une trajectoire circulaire. Comment évolue la norme de la vitesse ?`,
                    el: R`Το σχήμα δείχνει την ταχύτητα \(\vec v\) και την επιτάχυνση \(\vec a\) ενός κινητού στο σημείο \(M\) κυκλικής τροχιάς. Πώς μεταβάλλεται το μέτρο της ταχύτητας;` },
            options: [
              { fr: "Elle est constante (mouvement uniforme)", el: "Είναι σταθερή (ομαλή κίνηση)" },
              { fr: "Elle augmente (mouvement accéléré)", el: "Αυξάνεται (επιταχυνόμενη κίνηση)" },
              { fr: "Elle diminue (mouvement ralenti)", el: "Μειώνεται (επιβραδυνόμενη κίνηση)" },
              { fr: "On ne peut pas le savoir", el: "Δεν μπορούμε να το γνωρίζουμε" }
            ],
            answer: 2,
            explain: { fr: R`\(\vec a\) a une composante normale (vers le centre) et une composante tangentielle de sens opposé à \(\vec v\) : \(a_\tau<0\), donc la norme de \(\vec v\) diminue.`,
                       el: R`Η \(\vec a\) έχει κάθετη συνιστώσα (προς το κέντρο) και εφαπτομενική αντίθετη από το \(\vec v\): \(a_\tau<0\), άρα το μέτρο του \(\vec v\) μειώνεται.` }
          },
          {
            id: "at2", type: "multi", topic: TOP.atn, diff: 3,
            stem: { fr: R`Sélectionner <b>toutes</b> les affirmations correctes.`, el: R`Επίλεξε <b>όλες</b> τις σωστές προτάσεις.` },
            options: [
              { fr: "En mouvement circulaire uniforme, \\(a_\\tau=0\\).", el: "Σε ομαλή κυκλική κίνηση, \\(a_\\tau=0\\)." },
              { fr: "En mouvement rectiligne, \\(a_n=0\\).", el: "Σε ευθύγραμμη κίνηση, \\(a_n=0\\)." },
              { fr: "En mouvement circulaire uniforme, \\(a_n=0\\).", el: "Σε ομαλή κυκλική κίνηση, \\(a_n=0\\)." },
              { fr: "Au sommet d'un tir oblique, \\(a_\\tau=0\\).", el: "Στην κορυφή πλάγιας βολής, \\(a_\\tau=0\\)." },
              { fr: "En MRUV, \\(a_\\tau=0\\).", el: "Σε ΕΟΜΚ, \\(a_\\tau=0\\)." }
            ],
            answer: [0, 1, 3],
            explain: { fr: R`\(a_\tau\) renseigne sur la norme de \(\vec v\) ; \(a_n\) sur sa direction. MCU : \(a_\tau=0\), \(a_n\ne0\). MRUV : \(a_n=0\), \(a_\tau\ne0\). Au sommet \(\vec a=\vec g\perp\vec v\).`,
                       el: R`Η \(a_\tau\) αφορά το μέτρο της \(\vec v\)· η \(a_n\) τη διεύθυνσή της. ΟΚΚ: \(a_\tau=0\), \(a_n\ne0\). ΕΟΜΚ: \(a_n=0\), \(a_\tau\ne0\). Στην κορυφή \(\vec a=\vec g\perp\vec v\).` }
          },
          {
            id: "ve1", type: "numeric", topic: TOP.vert, diff: 2, unit: "m/s",
            stem: { fr: R`Une balle est lancée verticalement vers le haut à \(25\ \text{m/s}\). Quelle est sa vitesse à \(t=3\ \text{s}\) (axe orienté vers le haut) ? (\(g=10\ \text{m/s}^2\))`,
                    el: R`Μια μπάλα εκτοξεύεται κατακόρυφα προς τα πάνω με 25 m/s. Ποια είναι η ταχύτητά της τη στιγμή \(t=3\) s (άξονας προς τα πάνω);` },
            answer: -5, tol: 0.01,
            explain: { fr: R`\(v=v_0-gt=25-30=-5\ \text{m/s}\) : la balle redescend.`, el: R`\(v=v_0-gt=25-30=-5\) m/s: η μπάλα κατεβαίνει.` }
          },
          {
            id: "ve2", type: "numeric", topic: TOP.vert, diff: 3, unit: "m",
            stem: { fr: R`Robin des Bois tire une flèche verticalement vers le haut depuis \(2\ \text{m}\) au-dessus du sol, à \(30\ \text{m/s}\). Quelle altitude maximale (par rapport au sol) la flèche atteint-elle ?`,
                    el: R`Ο Ρομπέν των Δασών εκτοξεύει ένα βέλος κατακόρυφα προς τα πάνω από ύψος 2 m πάνω από το έδαφος, με 30 m/s. Ποιο το μέγιστο ύψος (ως προς το έδαφος) που φτάνει το βέλος;` },
            answer: 47, tol: 0.01,
            explain: { fr: R`Montée : \(h=\dfrac{v_0^2}{2g}=\dfrac{900}{20}=45\ \text{m}\). Altitude maximale : \(2+45=47\ \text{m}\).`, el: R`Άνοδος: \(h=\dfrac{v_0^2}{2g}=\dfrac{900}{20}=45\) m. Μέγιστο ύψος: \(2+45=47\) m.` }
          }
        ]
      }
    ],
    formulas: [
      { t: { fr: "Constante", el: "Σταθερά" }, f: R`g = 10 m/s²` },
      { t: { fr: "Vecteur position, déplacement", el: "Διάνυσμα θέσης, μετατόπιση" }, f: R`\(\vec r=x\vec i+y\vec j\) · \(\Delta\vec r=\vec r_2-\vec r_1\)` },
      { t: { fr: "Vitesse moyenne, instantanée", el: "Μέση, στιγμιαία ταχύτητα" }, f: R`\(\vec v_m=\dfrac{\Delta\vec r}{\Delta t}\) · \(\vec v=\dfrac{d\vec r}{dt}\)` },
      { t: { fr: "Norme et angle de la vitesse", el: "Μέτρο και γωνία ταχύτητας" }, f: R`\(v=\sqrt{v_x^2+v_y^2}\) · \(\tan\theta=\dfrac{v_y}{v_x}\)` },
      { t: { fr: "Tir horizontal (axe \\(y\\) vers le bas)", el: "Οριζόντια βολή (άξονας \\(y\\) προς τα κάτω)" }, f: R`\(x=v_0t\) · \(v_y=gt\) · \(y=\tfrac12gt^2\)` },
      { t: { fr: "Tir oblique", el: "Πλάγια βολή" }, f: R`\(v_x=v_0\cos\alpha\) · \(v_y=-gt+v_0\sin\alpha\)<br>\(x=v_0\cos\alpha\,t\) · \(y=-\tfrac12gt^2+v_0\sin\alpha\,t\)` },
      { t: { fr: "Sommet", el: "Κορυφή" }, f: R`\(t_S=\dfrac{v_0\sin\alpha}{g}\) · \(y_S=\dfrac{v_0^2\sin^2\alpha}{2g}\)` },
      { t: { fr: "Portée (\\(y_0=0\\))", el: "Βεληνεκές (\\(y_0=0\\))" }, f: R`\(x_I=\dfrac{v_0^2\sin(2\alpha)}{g}\)` },
      { t: { fr: "Composantes de l'accélération", el: "Συνιστώσες επιτάχυνσης" }, f: R`\(\vec a=\vec a_\tau+\vec a_n\) · \(a_\tau\): norme de \(\vec v\) · \(a_n\): direction de \(\vec v\)` }
    ]
  };
  window.EXAMS = window.EXAMS || [];
  window.EXAMS.push(exam);
})();
