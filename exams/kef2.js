/* Εξέταση Κεφαλαίου 2 — Δυναμική (Physique 2CB/2CC) · g = 10 m/s²
   Τύποι ερωτήσεων: single | multi | numeric | compare
   answer: single/compare -> index · multi -> [indices] · numeric -> αριθμός (tol = σχετική ανοχή) */
(function () {
  const R = String.raw;
  const TOP = {
    newton: { fr: "Lois de Newton", el: "Νόμοι του Νεύτωνα" },
    incline: { fr: "Plan incliné et frottement", el: "Κεκλιμένο επίπεδο και τριβή" },
    circ: { fr: "Mouvement circulaire", el: "Κυκλική κίνηση" },
    energy: { fr: "Travail et énergie", el: "Έργο και ενέργεια" },
    momentum: { fr: "Quantité de mouvement", el: "Ορμή" },
    collision: { fr: "Collisions", el: "Κρούσεις" }
  };

  const exam = {
    id: "kef2",
    chapter: 2,
    title: { fr: "Dynamique", el: "Δυναμική" },
    subtitle: { fr: "Physique 2CB/2CC — Chapitre 2", el: "Κεφάλαιο 2" },
    gravity: 10,
    sections: [
      {
        name: { fr: "Section 1 — Forces et énergie", el: "Ενότητα 1 — Δυνάμεις και ενέργεια" },
        minutes: 18,
        questions: [
          {
            id: "q1", type: "numeric", topic: TOP.incline, diff: 1, unit: "",
            stem: {
              fr: R`Une caisse de \(12\ \text{kg}\) est poussée sur un sol horizontal à vitesse constante par une force horizontale de \(30\ \text{N}\). Quel est le coefficient de frottement \(\mu\) entre la caisse et le sol ? (\(g=10\ \text{m/s}^2\))`,
              el: R`Ένα κιβώτιο 12 kg σπρώχνεται σε οριζόντιο δάπεδο με σταθερή ταχύτητα από οριζόντια δύναμη 30 N. Ποιος είναι ο συντελεστής τριβής \(\mu\) κιβωτίου–δαπέδου;`
            },
            answer: 0.25, tol: 0.02,
            explain: {
              fr: R`Vitesse constante \(\Rightarrow\) \(F=F_f=\mu R\) avec \(R=mg=120\ \text{N}\). Donc \(\mu=30/120=0{,}25\).`,
              el: R`Σταθερή ταχύτητα \(\Rightarrow\) \(F=T=\mu N\), με \(N=mg=120\) N. Άρα \(\mu=30/120=0{,}25\).`
            }
          },
          {
            id: "q2", type: "numeric", topic: TOP.newton, diff: 1, unit: "m/s²",
            stem: {
              fr: R`Deux forces perpendiculaires de \(6\ \text{N}\) et \(8\ \text{N}\) s'exercent sur un solide de \(2\ \text{kg}\). Quelle est la norme de son accélération ?`,
              el: R`Δύο κάθετες δυνάμεις 6 N και 8 N ασκούνται σε σώμα 2 kg. Ποιο είναι το μέτρο της επιτάχυνσής του;`
            },
            answer: 5, tol: 0.01,
            explain: {
              fr: R`\(F_{res}=\sqrt{6^2+8^2}=10\ \text{N}\), puis \(a=F_{res}/m=10/2=5\ \text{m/s}^2\).`,
              el: R`\(F_{ολ}=\sqrt{6^2+8^2}=10\) N, άρα \(a=F_{ολ}/m=10/2=5\) m/s².`
            }
          },
          {
            id: "q3", type: "compare", topic: TOP.newton, diff: 1,
            stem: {
              fr: R`Un camion lourd percute frontalement une petite voiture.<br><b>Quantité A :</b> intensité de la force exercée par le camion sur la voiture.<br><b>Quantité B :</b> intensité de la force exercée par la voiture sur le camion.`,
              el: R`Ένα βαρύ φορτηγό συγκρούεται μετωπικά με ένα μικρό αυτοκίνητο.<br><b>Ποσότητα Α:</b> μέτρο της δύναμης του φορτηγού στο αυτοκίνητο.<br><b>Ποσότητα Β:</b> μέτρο της δύναμης του αυτοκινήτου στο φορτηγό.`
            },
            answer: 2,
            explain: {
              fr: R`3<sup>e</sup> loi de Newton : \(\vec F_{A/B}=-\vec F_{B/A}\). Les normes sont égales ; seules les accélérations diffèrent (\(a=F/m\)).`,
              el: R`3ος νόμος του Νεύτωνα: \(\vec F_{A/B}=-\vec F_{B/A}\). Τα μέτρα είναι ίσα· διαφέρουν μόνο οι επιταχύνσεις (\(a=F/m\)).`
            }
          },
          {
            id: "q4", type: "single", topic: TOP.incline, diff: 2,
            stem: {
              fr: R`Un bloc de \(4\ \text{kg}\) glisse sans frottement sur un plan incliné de \(30^\circ\) (\(g=10\ \text{m/s}^2\)). Quelle est la norme de la force résultante qui s'exerce sur lui ?`,
              el: R`Σώμα 4 kg ολισθαίνει χωρίς τριβή σε κεκλιμένο επίπεδο 30°. Ποιο είναι το μέτρο της συνισταμένης δύναμης;`
            },
            options: ["10 N", "17,3 N", "20 N", "34,6 N", "40 N"], answer: 2,
            explain: {
              fr: R`Sans frottement, la composante du poids le long du plan est la force résultante : \(mg\sin30^\circ=4\cdot10\cdot0{,}5=20\ \text{N}\).`,
              el: R`Χωρίς τριβή, η συνιστώσα του βάρους κατά μήκος του επιπέδου είναι η συνισταμένη: \(mg\sin30^\circ=4\cdot10\cdot0{,}5=20\) N.`
            }
          },
          {
            id: "q5", type: "multi", topic: TOP.circ, diff: 2,
            stem: {
              fr: R`Un solide décrit un mouvement circulaire uniforme. Sélectionner <b>toutes</b> les affirmations correctes.`,
              el: R`Ένα σώμα εκτελεί ομαλή κυκλική κίνηση. Επίλεξε <b>όλες</b> τις σωστές προτάσεις.`
            },
            options: [
              { fr: "La force résultante n'est pas nulle.", el: "Η συνισταμένη δύναμη δεν είναι μηδέν." },
              { fr: "La force résultante est dirigée vers le centre du cercle.", el: "Η συνισταμένη δύναμη κατευθύνεται προς το κέντρο του κύκλου." },
              { fr: "Le vecteur vitesse est constant.", el: "Το διάνυσμα της ταχύτητας είναι σταθερό." },
              { fr: "La norme de la vitesse est constante.", el: "Το μέτρο της ταχύτητας είναι σταθερό." },
              { fr: "L'accélération est nulle.", el: "Η επιτάχυνση είναι μηδέν." }
            ],
            answer: [0, 1, 3],
            explain: {
              fr: R`La direction de \(\vec v\) change, donc \(\vec a\neq\vec 0\) et \(\vec F_{res}=m\vec a\) est centripète. Seule la <i>norme</i> de \(\vec v\) est constante.`,
              el: R`Η διεύθυνση του \(\vec v\) αλλάζει, άρα \(\vec a\neq\vec 0\) και η \(\vec F_{ολ}=m\vec a\) είναι κεντρομόλος. Σταθερό είναι μόνο το <i>μέτρο</i> του \(\vec v\).`
            }
          },
          {
            id: "q6", type: "compare", topic: TOP.incline, diff: 2,
            stem: {
              fr: R`Deux blocs glissent sans frottement sur le même plan incliné.<br><b>Quantité A :</b> accélération du bloc de \(2\ \text{kg}\).<br><b>Quantité B :</b> accélération du bloc de \(6\ \text{kg}\).`,
              el: R`Δύο σώματα ολισθαίνουν χωρίς τριβή στο ίδιο κεκλιμένο επίπεδο.<br><b>Ποσότητα Α:</b> επιτάχυνση του σώματος 2 kg.<br><b>Ποσότητα Β:</b> επιτάχυνση του σώματος 6 kg.`
            },
            answer: 2,
            explain: {
              fr: R`\(a=g\sin\alpha\) : la masse se simplifie. Les deux accélérations sont égales.`,
              el: R`\(a=g\sin\alpha\): η μάζα απλοποιείται. Οι δύο επιταχύνσεις είναι ίσες.`
            }
          },
          {
            id: "q7", type: "numeric", topic: TOP.newton, diff: 2, unit: "N",
            stem: {
              fr: R`Dans un ascenseur qui accélère vers le haut à \(2\ \text{m/s}^2\), une personne de \(60\ \text{kg}\) est debout sur une balance. Quelle force la balance indique-t-elle (réaction du plancher) ? (\(g=10\ \text{m/s}^2\))`,
              el: R`Σε ανελκυστήρα που επιταχύνεται προς τα πάνω με \(2\) m/s², άτομο 60 kg στέκεται σε ζυγαριά. Ποια δύναμη δείχνει η ζυγαριά (αντίδραση του δαπέδου);`
            },
            answer: 720, tol: 0.01,
            explain: {
              fr: R`Axe vers le haut : \(R-mg=ma\Rightarrow R=m(g+a)=60\cdot12=720\ \text{N}\).`,
              el: R`Άξονας προς τα πάνω: \(R-mg=ma\Rightarrow R=m(g+a)=60\cdot12=720\) N.`
            }
          },
          {
            id: "q8", type: "numeric", topic: TOP.energy, diff: 2, unit: "N",
            stem: {
              fr: R`Une voiture de \(1000\ \text{kg}\) roulant à \(20\ \text{m/s}\) s'arrête sur \(40\ \text{m}\) sous l'effet d'une force de freinage constante. Quelle est l'intensité de cette force ?`,
              el: R`Αυτοκίνητο 1000 kg με ταχύτητα 20 m/s σταματά σε απόσταση 40 m υπό σταθερή δύναμη πέδησης. Ποιο είναι το μέτρο της δύναμης;`
            },
            answer: 5000, tol: 0.01,
            explain: {
              fr: R`TEC : \(-F\,d=0-\tfrac12mv^2\Rightarrow F=\dfrac{mv^2}{2d}=\dfrac{1000\cdot400}{80}=5000\ \text{N}\).`,
              el: R`ΘΜΚΕ: \(-F\,d=0-\tfrac12mv^2\Rightarrow F=\dfrac{mv^2}{2d}=\dfrac{1000\cdot400}{80}=5000\) N.`
            }
          },
          {
            id: "q9", type: "compare", topic: TOP.energy, diff: 3,
            stem: {
              fr: R`Une même voiture freine avec la même force constante.<br><b>Quantité A :</b> distance d'arrêt depuis \(30\ \text{m/s}\).<br><b>Quantité B :</b> le double de la distance d'arrêt depuis \(15\ \text{m/s}\).`,
              el: R`Το ίδιο αυτοκίνητο φρενάρει με την ίδια σταθερή δύναμη.<br><b>Ποσότητα Α:</b> απόσταση πέδησης από 30 m/s.<br><b>Ποσότητα Β:</b> το διπλάσιο της απόστασης πέδησης από 15 m/s.`
            },
            answer: 0,
            explain: {
              fr: R`\(d=\dfrac{mv^2}{2F}\propto v^2\). Si \(d_{15}=d\), alors A \(=d_{30}=4d\) et B \(=2d\). Donc A \(>\) B.`,
              el: R`\(d=\dfrac{mv^2}{2F}\propto v^2\). Αν \(d_{15}=d\), τότε Α \(=d_{30}=4d\) και Β \(=2d\). Άρα Α \(>\) Β.`
            }
          }
        ]
      },
      {
        name: { fr: "Section 2 — Quantité de mouvement et collisions", el: "Ενότητα 2 — Ορμή και κρούσεις" },
        minutes: 18,
        questions: [
          {
            id: "q10", type: "numeric", topic: TOP.momentum, diff: 1, unit: "kg·m/s",
            stem: {
              fr: R`Une balle de \(0{,}15\ \text{kg}\) arrive sur un mur à \(20\ \text{m/s}\) et rebondit en sens inverse à \(10\ \text{m/s}\). Quelle est la norme de sa variation de quantité de mouvement \(|\Delta p|\) ?`,
              el: R`Μπάλα 0,15 kg χτυπά τοίχο με 20 m/s και ανακλάται αντίθετα με 10 m/s. Ποιο είναι το μέτρο της μεταβολής της ορμής \(|\Delta p|\);`
            },
            answer: 4.5, tol: 0.01,
            explain: {
              fr: R`Axe orienté vers le mur : \(\Delta p=m(v_f-v_i)=0{,}15\,(-10-20)=-4{,}5\ \text{kg·m/s}\). Donc \(|\Delta p|=4{,}5\).`,
              el: R`\(\Delta p=m(v_τ-v_α)=0{,}15\,(-10-20)=-4{,}5\) kg·m/s. Άρα \(|\Delta p|=4{,}5\).`
            }
          },
          {
            id: "q11", type: "single", topic: TOP.momentum, diff: 1,
            stem: {
              fr: R`Pourquoi un airbag réduit-il les blessures lors d'un choc frontal ?`,
              el: R`Γιατί ο αερόσακος μειώνει τους τραυματισμούς σε μετωπική σύγκρουση;`
            },
            options: [
              { fr: "Il diminue la variation de quantité de mouvement du conducteur.", el: "Μειώνει τη μεταβολή της ορμής του οδηγού." },
              { fr: "Il augmente la durée du choc, donc diminue la force moyenne pour la même variation de quantité de mouvement.", el: "Αυξάνει τη διάρκεια της κρούσης, άρα μειώνει τη μέση δύναμη για την ίδια μεταβολή ορμής." },
              { fr: "Il diminue la masse du conducteur.", el: "Μειώνει τη μάζα του οδηγού." },
              { fr: "Il supprime la force de contact avec le véhicule.", el: "Εξαλείφει τη δύναμη επαφής με το όχημα." },
              { fr: "Il augmente la vitesse du conducteur avant l'arrêt.", el: "Αυξάνει την ταχύτητα του οδηγού πριν σταματήσει." }
            ],
            answer: 1,
            explain: {
              fr: R`\(F_{moy}=\dfrac{|\Delta p|}{\Delta t}\) : \(\Delta p\) est imposée par l'arrêt ; allonger \(\Delta t\) diminue \(F_{moy}\).`,
              el: R`\(F_{μ}=\dfrac{|\Delta p|}{\Delta t}\): η \(\Delta p\) είναι δεδομένη· μεγαλώνοντας το \(\Delta t\) μειώνεται η \(F_{μ}\).`
            }
          },
          {
            id: "q12", type: "numeric", topic: TOP.momentum, diff: 2, unit: "m/s",
            stem: {
              fr: R`Un fusil de \(4\ \text{kg}\), initialement au repos, tire une balle de \(20\ \text{g}\) à \(500\ \text{m/s}\). Quelle est la norme de la vitesse de recul du fusil ?`,
              el: R`Όπλο 4 kg, αρχικά ακίνητο, εκτοξεύει βλήμα 20 g με 500 m/s. Ποιο είναι το μέτρο της ταχύτητας ανάκρουσης του όπλου;`
            },
            answer: 2.5, tol: 0.01,
            explain: {
              fr: R`Conservation de la quantité de mouvement (\(p_{init}=0\)) : \(m_f v_f=m_b v_b\Rightarrow v_f=\dfrac{0{,}02\cdot500}{4}=2{,}5\ \text{m/s}\).`,
              el: R`Διατήρηση ορμής (\(p_{αρχ}=0\)): \(m_o v_o=m_β v_β\Rightarrow v_o=\dfrac{0{,}02\cdot500}{4}=2{,}5\) m/s.`
            }
          },
          {
            id: "q13", type: "numeric", topic: TOP.collision, diff: 2, unit: "m/s",
            stem: {
              fr: R`Un chariot de \(3\ \text{kg}\) roulant à \(4\ \text{m/s}\) heurte un chariot de \(1\ \text{kg}\) au repos. Ils restent accrochés. Quelle est leur vitesse commune après le choc ?`,
              el: R`Βαγονάκι 3 kg με 4 m/s συγκρούεται με ακίνητο βαγονάκι 1 kg και παραμένουν ενωμένα. Ποια είναι η κοινή ταχύτητα μετά την κρούση;`
            },
            answer: 3, tol: 0.01,
            explain: {
              fr: R`\(3\cdot4=(3+1)\,v'\Rightarrow v'=3\ \text{m/s}\).`,
              el: R`\(3\cdot4=(3+1)\,v'\Rightarrow v'=3\) m/s.`
            }
          },
          {
            id: "q14", type: "single", topic: TOP.collision, diff: 3,
            stem: {
              fr: R`Pour le choc de la question précédente, quel pourcentage de l'énergie cinétique initiale est dissipé ?`,
              el: R`Για την κρούση της προηγούμενης ερώτησης, ποιο ποσοστό της αρχικής κινητικής ενέργειας διαχέεται;`
            },
            options: ["0 %", "12,5 %", "25 %", "50 %", "75 %"], answer: 2,
            explain: {
              fr: R`\(E_c^{avant}=\tfrac12\cdot3\cdot4^2=24\ \text{J}\) ; \(E_c^{après}=\tfrac12\cdot4\cdot3^2=18\ \text{J}\). Perte : \(6/24=25\ \%\).`,
              el: R`\(E_κ^{πριν}=\tfrac12\cdot3\cdot4^2=24\) J· \(E_κ^{μετά}=\tfrac12\cdot4\cdot3^2=18\) J. Απώλεια: \(6/24=25\,\%\).`
            }
          },
          {
            id: "q15", type: "compare", topic: TOP.collision, diff: 2,
            stem: {
              fr: R`Deux chariots forment un système isolé et subissent un choc parfaitement inélastique.<br><b>Quantité A :</b> quantité de mouvement totale juste avant le choc.<br><b>Quantité B :</b> quantité de mouvement totale juste après le choc.`,
              el: R`Δύο βαγονάκια αποτελούν μονωμένο σύστημα και συγκρούονται πλαστικά.<br><b>Ποσότητα Α:</b> ολική ορμή αμέσως πριν την κρούση.<br><b>Ποσότητα Β:</b> ολική ορμή αμέσως μετά την κρούση.`
            },
            answer: 2,
            explain: {
              fr: R`La quantité de mouvement d'un système isolé se conserve dans tous les types de chocs ; seule l'énergie cinétique diffère.`,
              el: R`Η ορμή μονωμένου συστήματος διατηρείται σε όλους τους τύπους κρούσης· διαφέρει μόνο η κινητική ενέργεια.`
            }
          },
          {
            id: "q16", type: "multi", topic: TOP.collision, diff: 2,
            stem: {
              fr: R`Sélectionner <b>toutes</b> les affirmations correctes à propos d'un choc élastique.`,
              el: R`Επίλεξε <b>όλες</b> τις σωστές προτάσεις για μια ελαστική κρούση.`
            },
            options: [
              { fr: "La quantité de mouvement totale se conserve.", el: "Η ολική ορμή διατηρείται." },
              { fr: "L'énergie cinétique totale se conserve.", el: "Η ολική κινητική ενέργεια διατηρείται." },
              { fr: "Les deux corps restent accrochés après le choc.", el: "Τα δύο σώματα παραμένουν ενωμένα μετά την κρούση." },
              { fr: "Pour deux masses égales, l'une au repos, en choc frontal : les vitesses s'échangent.", el: "Για ίσες μάζες, η μία ακίνητη, μετωπική κρούση: ανταλλάσσουν ταχύτητες." },
              { fr: "L'énergie cinétique totale diminue.", el: "Η ολική κινητική ενέργεια μειώνεται." }
            ],
            answer: [0, 1, 3],
            explain: {
              fr: R`Choc élastique : \(\vec p\) et \(E_c\) conservées. Rester accrochés ou perdre de l'énergie cinétique caractérise un choc inélastique.`,
              el: R`Ελαστική κρούση: διατηρούνται η \(\vec p\) και η \(E_κ\). Η συγκόλληση ή η απώλεια κινητικής ενέργειας χαρακτηρίζει ανελαστική κρούση.`
            }
          },
          {
            id: "q17", type: "numeric", topic: TOP.collision, diff: 3, unit: "m/s",
            stem: {
              fr: R`Choc <b>élastique</b> frontal : une masse de \(2\ \text{kg}\) à \(3\ \text{m/s}\) heurte une masse de \(1\ \text{kg}\) au repos. Quelle est la vitesse de la masse de \(1\ \text{kg}\) après le choc ?`,
              el: R`<b>Ελαστική</b> μετωπική κρούση: μάζα 2 kg με 3 m/s χτυπά ακίνητη μάζα 1 kg. Ποια η ταχύτητα της μάζας 1 kg μετά την κρούση;`
            },
            answer: 4, tol: 0.01,
            explain: {
              fr: R`\(v_2'=\dfrac{2m_1}{m_1+m_2}\,v_1=\dfrac{4}{3}\cdot3=4\ \text{m/s}\) (et \(v_1'=\dfrac{m_1-m_2}{m_1+m_2}v_1=1\ \text{m/s}\)). Vérification : \(2\cdot1+1\cdot4=6=2\cdot3\) ✓.`,
              el: R`\(v_2'=\dfrac{2m_1}{m_1+m_2}\,v_1=\dfrac{4}{3}\cdot3=4\) m/s (και \(v_1'=\dfrac{m_1-m_2}{m_1+m_2}v_1=1\) m/s). Έλεγχος ορμής: \(2\cdot1+1\cdot4=6=2\cdot3\) ✓.`
            }
          },
          {
            id: "q18", type: "numeric", topic: TOP.energy, diff: 3, unit: "m",
            stem: {
              fr: R`Un bloc de \(2\ \text{kg}\) glisse à \(6\ \text{m/s}\) sur un sol horizontal rugueux (\(\mu=0{,}2\), \(g=10\ \text{m/s}^2\)). Quelle distance parcourt-il avant de s'arrêter ?`,
              el: R`Σώμα 2 kg ολισθαίνει με 6 m/s σε τραχύ οριζόντιο δάπεδο (\(\mu=0{,}2\)). Ποια απόσταση διανύει μέχρι να σταματήσει;`
            },
            answer: 9, tol: 0.01,
            explain: {
              fr: R`TEC : \(-\mu mg\,d=-\tfrac12mv^2\Rightarrow d=\dfrac{v^2}{2\mu g}=\dfrac{36}{4}=9\ \text{m}\).`,
              el: R`ΘΜΚΕ: \(-\mu mg\,d=-\tfrac12mv^2\Rightarrow d=\dfrac{v^2}{2\mu g}=\dfrac{36}{4}=9\) m.`
            }
          }
        ]
      }
    ],
    formulas: [
      { t: { fr: "Constante", el: "Σταθερά" }, f: R`g = 10 m/s²` },
      { t: { fr: "2<sup>e</sup> loi de Newton", el: "2ος νόμος Νεύτωνα" }, f: R`\(\sum\vec F=m\vec a\)` },
      { t: { fr: "Poids, frottement", el: "Βάρος, τριβή" }, f: R`\(P=mg\) · \(F_f=\mu R\)` },
      { t: { fr: "Plan incliné (sans frottement)", el: "Κεκλιμένο (χωρίς τριβή)" }, f: R`\(a=g\sin\alpha\)` },
      { t: { fr: "Travail d'une force constante", el: "Έργο σταθερής δύναμης" }, f: R`\(W=F\,d\cos\alpha\)` },
      { t: { fr: "Énergie cinétique, TEC", el: "Κινητική ενέργεια, ΘΜΚΕ" }, f: R`\(E_c=\tfrac12mv^2\) · \(\Delta E_c=\sum W\)` },
      { t: { fr: "Quantité de mouvement", el: "Ορμή" }, f: R`\(\vec p=m\vec v\) · \(\vec F_{moy}=\dfrac{\Delta\vec p}{\Delta t}\)` },
      { t: { fr: "Système isolé", el: "Μονωμένο σύστημα" }, f: R`\(\sum\vec p_{avant}=\sum\vec p_{après}\)` },
      { t: { fr: R`Choc élastique frontal (\(m_2\) au repos)`, el: R`Ελαστική κρούση (\(m_2\) ακίνητη)` }, f: R`\(v_1'=\dfrac{m_1-m_2}{m_1+m_2}v_1\) · \(v_2'=\dfrac{2m_1}{m_1+m_2}v_1\)` },
      { t: { fr: "Choc parfaitement inélastique", el: "Πλαστική κρούση" }, f: R`\(v'=\dfrac{m_1v_1+m_2v_2}{m_1+m_2}\)` }
    ]
  };


  /* ===== Ερωτήσεις με σχήμα ===== */
  const GT = { fr: "Lecture de graphiques", el: "Ανάγνωση γραφημάτων" };
  const figVT = l => FIG.graph({ xmax: 10, ymax: 10, xstep: 1, ystep: 2, xlabel: "t (s)", ylabel: "v (m/s)",
    lines: [{ pts: [[0, 0], [4, 8], [8, 8], [10, 0]] }] }, l);
  const figFT = l => FIG.graph({ xmax: 4, ymax: 8, xstep: 1, ystep: 2, xlabel: "t (s)", ylabel: "F (N)",
    lines: [{ pts: [[0, 6], [2, 6], [4, 0]] }] }, l);
  const F1 = {
    id: "f1", type: "numeric", topic: GT, diff: 1, unit: "m/s²", figure: figVT,
    stem: { fr: R`Le graphique donne la vitesse d'un chariot en fonction du temps. Quelle est son accélération entre \(t=0\) et \(t=4\ \text{s}\) ?`,
            el: R`Το γράφημα δίνει την ταχύτητα ενός βαγονιού σε συνάρτηση με τον χρόνο. Ποια είναι η επιτάχυνσή του από \(t=0\) έως \(t=4\) s;` },
    answer: 2, tol: 0.01,
    explain: { fr: R`\(a=\dfrac{\Delta v}{\Delta t}=\dfrac{8-0}{4-0}=2\ \text{m/s}^2\) (pente de la droite).`,
               el: R`\(a=\dfrac{\Delta v}{\Delta t}=\dfrac{8-0}{4-0}=2\) m/s² (κλίση της ευθείας).` }
  };
  const F2 = {
    id: "f2", type: "numeric", topic: GT, diff: 2, unit: "m", figure: figVT,
    stem: { fr: R`Quelle distance le chariot parcourt-il entre \(t=0\) et \(t=10\ \text{s}\) ?`,
            el: R`Ποια απόσταση διανύει το βαγόνι από \(t=0\) έως \(t=10\) s;` },
    answer: 56, tol: 0.01,
    explain: { fr: R`Distance = aire sous la courbe : \(\tfrac12\cdot4\cdot8+4\cdot8+\tfrac12\cdot2\cdot8=16+32+8=56\ \text{m}\).`,
               el: R`Απόσταση = εμβαδό κάτω από την καμπύλη: \(\tfrac12\cdot4\cdot8+4\cdot8+\tfrac12\cdot2\cdot8=16+32+8=56\) m.` }
  };
  const F3 = {
    id: "f3", type: "compare", topic: GT, diff: 2, figure: figVT,
    stem: { fr: R`Le chariot a une masse de \(3\ \text{kg}\).<br><b>Quantité A :</b> intensité de la force résultante entre \(t=0\) et \(t=4\ \text{s}\).<br><b>Quantité B :</b> intensité de la force résultante entre \(t=4\ \text{s}\) et \(t=8\ \text{s}\).`,
            el: R`Το βαγόνι έχει μάζα 3 kg.<br><b>Ποσότητα Α:</b> μέτρο της συνισταμένης δύναμης από \(t=0\) έως \(t=4\) s.<br><b>Ποσότητα Β:</b> μέτρο της συνισταμένης δύναμης από \(t=4\) s έως \(t=8\) s.` },
    answer: 0,
    explain: { fr: R`Entre 0 et 4 s : \(a=2\ \text{m/s}^2\), donc \(F=ma=6\ \text{N}\). Entre 4 et 8 s : vitesse constante, \(a=0\), donc \(F=0\). A \(>\) B.`,
               el: R`Από 0 έως 4 s: \(a=2\) m/s², άρα \(F=ma=6\) N. Από 4 έως 8 s: σταθερή ταχύτητα, \(a=0\), άρα \(F=0\). Α \(>\) Β.` }
  };
  const F4 = {
    id: "f4", type: "numeric", topic: GT, diff: 2, unit: "N·s", figure: figFT,
    stem: { fr: R`Le graphique donne la force horizontale qui s'exerce sur un chariot pendant \(4\ \text{s}\). Quelle est l'impulsion de cette force ?`,
            el: R`Το γράφημα δίνει την οριζόντια δύναμη που ασκείται σε ένα βαγόνι για 4 s. Ποια είναι η ώθηση της δύναμης;` },
    answer: 18, tol: 0.01,
    explain: { fr: R`Impulsion = aire sous la courbe \(F(t)\) : rectangle \(6\cdot2=12\) + triangle \(\tfrac12\cdot2\cdot6=6\), soit \(18\ \text{N·s}\).`,
               el: R`Ώθηση = εμβαδό κάτω από την \(F(t)\): ορθογώνιο \(6\cdot2=12\) + τρίγωνο \(\tfrac12\cdot2\cdot6=6\), δηλαδή \(18\) N·s.` }
  };
  const F5 = {
    id: "f5", type: "numeric", topic: GT, diff: 3, unit: "m/s", figure: figFT,
    stem: { fr: R`Le chariot a une masse de \(3\ \text{kg}\) et part du repos. Quelle est sa vitesse à \(t=4\ \text{s}\) ?`,
            el: R`Το βαγόνι έχει μάζα 3 kg και ξεκινά από την ηρεμία. Ποια είναι η ταχύτητά του τη στιγμή \(t=4\) s;` },
    answer: 6, tol: 0.01,
    explain: { fr: R`\(I=\Delta p=m\,v_f-0\Rightarrow v_f=\dfrac{18}{3}=6\ \text{m/s}\).`,
               el: R`\(I=\Delta p=m\,v_τ-0\Rightarrow v_τ=\dfrac{18}{3}=6\) m/s.` }
  };
  const F6 = {
    id: "f6", type: "numeric", topic: TOP.incline, diff: 2, unit: "N",
    figure: l => FIG.incline({ angle: 30, mass: "5 kg", rope: { fr: "fil", el: "σχοινί" } }, l),
    stem: { fr: R`Un bloc de \(5\ \text{kg}\) est maintenu immobile sur un plan incliné de \(30^\circ\), sans frottement, par un fil parallèle au plan. Quelle est la tension du fil ? (\(g=10\ \text{m/s}^2\))`,
            el: R`Σώμα 5 kg συγκρατείται ακίνητο σε κεκλιμένο επίπεδο 30°, χωρίς τριβή, με σχοινί παράλληλο στο επίπεδο. Ποια είναι η τάση του σχοινιού;` },
    answer: 25, tol: 0.01,
    explain: { fr: R`Équilibre le long du plan : \(T=mg\sin30^\circ=5\cdot10\cdot0{,}5=25\ \text{N}\).`,
               el: R`Ισορροπία κατά μήκος του επιπέδου: \(T=mg\sin30^\circ=5\cdot10\cdot0{,}5=25\) N.` }
  };
  const F7 = {
    id: "f7", type: "numeric", topic: TOP.collision, diff: 3, unit: "m/s",
    figure: l => FIG.collision({
      before: [{ x: 130, w: 70, m: "3 kg", v: "5 m/s", dir: 1 }, { x: 390, w: 56, m: "2 kg", v: "5 m/s", dir: -1 }],
      after: [{ x: 260, w: 100, m: "3 kg + 2 kg", v: "v′ = ?", dir: 0 }] }, l),
    stem: { fr: R`Deux chariots se heurtent frontalement et restent accrochés. Le sens positif est vers la droite. Quelle est la vitesse \(v'\) des chariots après le choc ?`,
            el: R`Δύο βαγονάκια συγκρούονται μετωπικά και παραμένουν ενωμένα. Θετική φορά προς τα δεξιά. Ποια είναι η ταχύτητα \(v'\) μετά την κρούση;` },
    answer: 1, tol: 0.01,
    explain: { fr: R`\(3\cdot5+2\cdot(-5)=(3+2)\,v'\Rightarrow v'=\dfrac{5}{5}=1\ \text{m/s}\), vers la droite.`,
               el: R`\(3\cdot5+2\cdot(-5)=(3+2)\,v'\Rightarrow v'=\dfrac{5}{5}=1\) m/s, προς τα δεξιά.` }
  };
  { const s1 = exam.sections[0].questions, s2 = exam.sections[1].questions;
    s1.splice(3, 0, F1, F2, F3); s1.splice(9, 0, F6);
    s2.splice(2, 0, F4, F5); s2.splice(7, 0, F7);
    exam.sections[0].minutes = 22; exam.sections[1].minutes = 20; }

  window.EXAMS = window.EXAMS || [];
  window.EXAMS.push(exam);
})();
