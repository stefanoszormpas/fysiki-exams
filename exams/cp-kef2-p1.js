/* Check point — Κεφάλαιο 2 Δυναμική, §1: Νόμοι του Νεύτωνα και κεκλιμένο επίπεδο · g = 10 m/s² */
(function () {
  const R = String.raw;
  const TOP = {
    laws: { fr: "Lois de Newton", el: "Νόμοι του Νεύτωνα" },
    incl: { fr: "Plan incliné", el: "Κεκλιμένο επίπεδο" }
  };
  const fig37 = l => FIG.incline({ angle: 37, mass: "5 kg", note: { fr: "avec frottement", el: "με τριβή" } }, l);
  const SC = { fr: R`On donne \(\sin37^\circ=0{,}6\) et \(\cos37^\circ=0{,}8\).`, el: R`Δίνονται \(\sin37^\circ=0{,}6\) και \(\cos37^\circ=0{,}8\).` };

  window.EXAMS = window.EXAMS || [];
  window.EXAMS.push({
    id: "cp-kef2-p1", chapter: 2, group: "Check points — Luxembourg (τέλος μαθήματος)", gravity: 10,
    title: { fr: "Check point — Lois de Newton et plan incliné", el: "Check point — Νόμοι του Νεύτωνα και κεκλιμένο επίπεδο" },
    subtitle: { fr: "Physique 2CB/2CC — Chapitre 2, §1", el: "Κεφάλαιο 2, §1" },
    sections: [{
      name: { fr: "Check point — fin de séance", el: "Check point — τέλος μαθήματος" },
      minutes: 15,
      questions: [
        {
          id: "c1", type: "single", topic: TOP.laws, diff: 1,
          stem: {
            fr: R`Un patineur glisse en ligne droite sur la glace à vitesse constante (frottements négligeables). Que peut-on affirmer ?`,
            el: R`Ένας παγοδρόμος γλιστρά σε ευθεία γραμμή πάνω στον πάγο με σταθερή ταχύτητα (οι τριβές αμελητέες). Τι μπορούμε να πούμε;`
          },
          options: [
            { fr: "La force résultante sur lui est nulle.", el: "Η συνισταμένη των δυνάμεων πάνω του είναι μηδέν." },
            { fr: "Une force dirigée vers l'avant s'exerce sur lui et entretient son mouvement.", el: "Ασκείται σε αυτόν δύναμη προς τα εμπρός που διατηρεί την κίνησή του." },
            { fr: "Son poids est nul.", el: "Το βάρος του είναι μηδέν." },
            { fr: "Il n'est soumis à aucune force.", el: "Δεν του ασκείται καμία δύναμη." }
          ],
          answer: 0,
          explain: {
            fr: R`1<sup>re</sup> loi : vitesse constante \(\Leftrightarrow\) \(\vec F_{res}=\vec 0\). Le poids \(\vec w\) et la réaction \(\vec R\) de la glace existent, mais se compensent. Aucune force n'est nécessaire pour entretenir un MRU.`,
            el: R`1ος νόμος: σταθερή ταχύτητα \(\Leftrightarrow\) \(\vec F_{ολ}=\vec 0\). Το βάρος \(\vec w\) και η αντίδραση \(\vec R\) του πάγου υπάρχουν, αλλά αλληλοεξουδετερώνονται. Δεν χρειάζεται δύναμη για να διατηρηθεί μια ΕΟΚ.`
          }
        },
        {
          id: "c2", type: "multi", topic: TOP.laws, diff: 2,
          stem: {
            fr: R`Dans lesquels de ces référentiels les lois de Newton ne sont-elles <b>pas</b> valables ? (plusieurs réponses)`,
            el: R`Σε ποια από τα παρακάτω πλαίσια αναφοράς <b>δεν</b> ισχύουν οι νόμοι του Νεύτωνα; (περισσότερες απαντήσεις)`
          },
          options: [
            { fr: "Un train qui freine", el: "Ένα τρένο που φρενάρει" },
            { fr: "Un train en mouvement rectiligne uniforme", el: "Ένα τρένο σε ευθύγραμμη ομαλή κίνηση" },
            { fr: "Le référentiel terrestre", el: "Το γήινο πλαίσιο αναφοράς" },
            { fr: "Une voiture qui prend un virage", el: "Ένα αυτοκίνητο που στρίβει" },
            { fr: "Le référentiel héliocentrique", el: "Το ηλιοκεντρικό πλαίσιο αναφοράς" }
          ],
          answer: [0, 3],
          explain: {
            fr: R`Les lois de Newton sont valables dans un référentiel galiléen (non accéléré). Un train qui freine et une voiture dans un virage sont accélérés : ce ne sont pas des référentiels galiléens.`,
            el: R`Οι νόμοι του Νεύτωνα ισχύουν σε γαλιλαίο (μη επιταχυνόμενο) πλαίσιο. Ένα τρένο που φρενάρει και ένα αυτοκίνητο σε στροφή επιταχύνονται, άρα δεν είναι γαλιλαία πλαίσια.`
          }
        },
        {
          id: "c3", type: "numeric", topic: TOP.laws, diff: 2, unit: "m/s",
          stem: {
            fr: R`Un chariot de \(3\ \text{kg}\), initialement au repos sur un sol sans frottement, subit une force horizontale constante de \(12\ \text{N}\). Quelle est sa vitesse après \(5\ \text{s}\) ?`,
            el: R`Ένα καρότσι 3 kg, αρχικά ακίνητο σε οριζόντιο δάπεδο χωρίς τριβές, δέχεται σταθερή οριζόντια δύναμη 12 N. Ποια είναι η ταχύτητά του μετά από 5 s;`
          },
          answer: 20, tol: 0.01,
          explain: {
            fr: R`\(a=F/m=12/3=4\ \text{m/s}^2\), puis \(v=at=4\cdot5=20\ \text{m/s}\).`,
            el: R`\(a=F/m=12/3=4\) m/s², άρα \(v=at=4\cdot5=20\) m/s.`
          }
        },
        {
          id: "c4", type: "compare", topic: TOP.laws, diff: 2,
          stem: {
            fr: R`Une mouche heurte le pare-brise d'un autobus.<br><b>Quantité A :</b> la norme de la force exercée par l'autobus sur la mouche.<br><b>Quantité B :</b> la norme de la force exercée par la mouche sur l'autobus.`,
            el: R`Μια μύγα χτυπά στο παρμπρίζ ενός λεωφορείου.<br><b>Ποσότητα Α:</b> το μέτρο της δύναμης που ασκεί το λεωφορείο στη μύγα.<br><b>Ποσότητα Β:</b> το μέτρο της δύναμης που ασκεί η μύγα στο λεωφορείο.`
          },
          answer: 2,
          explain: {
            fr: R`3<sup>e</sup> loi : \(\vec F_{A/B}=-\vec F_{B/A}\). Les deux forces ont la même norme. La mouche « souffre » davantage parce que la même force produit sur elle une accélération énorme (\(a=F/m\), avec \(m\) très petite).`,
            el: R`3ος νόμος: \(\vec F_{A/B}=-\vec F_{B/A}\). Οι δύο δυνάμεις έχουν ίδιο μέτρο. Η μύγα «υποφέρει» περισσότερο γιατί η ίδια δύναμη της δίνει τεράστια επιτάχυνση (\(a=F/m\), με πολύ μικρή \(m\)).`
          }
        },
        {
          id: "c5", type: "single", topic: TOP.laws, diff: 2,
          stem: {
            fr: R`Un livre repose sur une table. Le poids \(\vec w\) du livre est la force exercée par la Terre sur le livre. Quelle force forme avec \(\vec w\) le couple action–réaction ?`,
            el: R`Ένα βιβλίο ηρεμεί πάνω σε τραπέζι. Το βάρος \(\vec w\) του βιβλίου είναι η δύναμη που ασκεί η Γη στο βιβλίο. Ποια δύναμη αποτελεί μαζί με το \(\vec w\) ζεύγος δράσης–αντίδρασης;`
          },
          options: [
            { fr: "La force de la table sur le livre", el: "Η δύναμη του τραπεζιού στο βιβλίο" },
            { fr: "La force du livre sur la table", el: "Η δύναμη του βιβλίου στο τραπέζι" },
            { fr: "La force du livre sur la Terre", el: "Η δύναμη του βιβλίου στη Γη" },
            { fr: "La force de la table sur la Terre", el: "Η δύναμη του τραπεζιού στη Γη" }
          ],
          answer: 2,
          explain: {
            fr: R`La réaction à « Terre sur livre » est « livre sur Terre ». La force de la table sur le livre compense \(\vec w\) (1<sup>re</sup> loi), mais ce n'est pas sa réaction : ces deux forces s'exercent sur le même corps.`,
            el: R`Η αντίδραση της «Γη στο βιβλίο» είναι η «βιβλίο στη Γη». Η δύναμη του τραπεζιού στο βιβλίο εξουδετερώνει το \(\vec w\) (1ος νόμος), αλλά δεν είναι αντίδρασή του: οι δύο δυνάμεις ασκούνται στο ίδιο σώμα.`
          }
        },
        {
          id: "c6", type: "single", topic: TOP.incl, diff: 2,
          stem: {
            fr: R`Un bloc glisse sans frottement le long d'un plan incliné. On remplace le bloc par un autre de masse <b>double</b>. L'accélération du bloc :`,
            el: R`Ένα σώμα γλιστρά χωρίς τριβή σε κεκλιμένο επίπεδο. Το αντικαθιστούμε με άλλο <b>διπλάσιας</b> μάζας. Η επιτάχυνση του σώματος:`
          },
          options: [
            { fr: "reste la même", el: "παραμένει ίδια" },
            { fr: "est doublée", el: "διπλασιάζεται" },
            { fr: "est divisée par deux", el: "υποδιπλασιάζεται" },
            { fr: "est multipliée par quatre", el: "τετραπλασιάζεται" }
          ],
          answer: 0,
          explain: {
            fr: R`\(mg\sin\alpha=ma\Rightarrow a=g\sin\alpha\) : la masse se simplifie.`,
            el: R`\(mg\sin\alpha=ma\Rightarrow a=g\sin\alpha\): η μάζα απλοποιείται.`
          }
        },
        {
          id: "c7", type: "numeric", topic: TOP.incl, diff: 2, unit: "m/s²", figure: fig37,
          stem: {
            fr: R`Un bloc de \(5\ \text{kg}\) est abandonné sans vitesse sur un plan incliné de \(37^\circ\). Le frottement est constant : \(F_f=10\ \text{N}\). Quelle est son accélération ? ` + SC.fr,
            el: R`Ένα σώμα 5 kg αφήνεται χωρίς αρχική ταχύτητα σε κεκλιμένο επίπεδο γωνίας 37°. Η τριβή είναι σταθερή: \(F_f=10\) N. Ποια είναι η επιτάχυνσή του; ` + SC.el
          },
          answer: 4, tol: 0.01,
          explain: {
            fr: R`Selon \(Ox\) (le long du plan) : \(w\sin\alpha-F_f=ma\). \(a=g\sin\alpha-\dfrac{F_f}{m}=10\cdot0{,}6-\dfrac{10}{5}=6-2=4\ \text{m/s}^2\).`,
            el: R`Στον \(Ox\) (κατά μήκος του επιπέδου): \(w\sin\alpha-F_f=ma\). \(a=g\sin\alpha-\dfrac{F_f}{m}=10\cdot0{,}6-\dfrac{10}{5}=6-2=4\) m/s².`
          }
        },
        {
          id: "c8", type: "numeric", topic: TOP.incl, diff: 2, unit: "N", figure: fig37,
          stem: {
            fr: R`Pour le même bloc (\(5\ \text{kg}\), plan incliné de \(37^\circ\)), quelle est la norme de la réaction normale \(R\) du plan ?`,
            el: R`Για το ίδιο σώμα (5 kg, κεκλιμένο επίπεδο 37°), ποιο είναι το μέτρο της κάθετης αντίδρασης \(R\) του επιπέδου;`
          },
          answer: 40, tol: 0.01,
          explain: {
            fr: R`Selon \(Oy\) (perpendiculaire au plan) il n'y a pas d'accélération : \(R-w\cos\alpha=0\). \(R=mg\cos\alpha=5\cdot10\cdot0{,}8=40\ \text{N}\).`,
            el: R`Στον \(Oy\) (κάθετα στο επίπεδο) δεν υπάρχει επιτάχυνση: \(R-w\cos\alpha=0\). \(R=mg\cos\alpha=5\cdot10\cdot0{,}8=40\) N.`
          }
        },
        {
          id: "c9", type: "numeric", topic: TOP.incl, diff: 2, unit: "m/s", figure: fig37,
          stem: {
            fr: R`Quelle est la vitesse du bloc \(3\ \text{s}\) après son lâcher (même situation, \(F_f=10\ \text{N}\)) ?`,
            el: R`Ποια είναι η ταχύτητα του σώματος 3 s μετά την εκκίνησή του (ίδια περίπτωση, \(F_f=10\) N);`
          },
          answer: 12, tol: 0.01,
          explain: {
            fr: R`MRUV à partir du repos avec \(a=4\ \text{m/s}^2\) : \(v=at=4\cdot3=12\ \text{m/s}\).`,
            el: R`ΕΟΜΚ από ηρεμία με \(a=4\) m/s²: \(v=at=4\cdot3=12\) m/s.`
          }
        },
        {
          id: "c10", type: "numeric", topic: TOP.incl, diff: 3, unit: "N", figure: fig37,
          stem: {
            fr: R`Quelle devrait être la valeur de la force de frottement \(F_f\) pour que le même bloc descende le plan à <b>vitesse constante</b> ?`,
            el: R`Ποια θα έπρεπε να είναι η τιμή της τριβής \(F_f\) ώστε το ίδιο σώμα να κατεβαίνει το επίπεδο με <b>σταθερή ταχύτητα</b>;`
          },
          answer: 30, tol: 0.01,
          explain: {
            fr: R`Vitesse constante \(\Rightarrow\) \(a=0\) (1<sup>re</sup> loi) : \(F_f=w\sin\alpha=mg\sin\alpha=5\cdot10\cdot0{,}6=30\ \text{N}\).`,
            el: R`Σταθερή ταχύτητα \(\Rightarrow\) \(a=0\) (1ος νόμος): \(F_f=w\sin\alpha=mg\sin\alpha=5\cdot10\cdot0{,}6=30\) N.`
          }
        },
        {
          id: "c11", type: "compare", topic: TOP.incl, diff: 2,
          stem: {
            fr: R`Un bloc de masse \(m\) repose sur un plan incliné de \(37^\circ\) (frottement suffisant pour qu'il reste immobile).<br><b>Quantité A :</b> la norme de la réaction normale \(R\) du plan.<br><b>Quantité B :</b> la norme du poids \(w=mg\) du bloc.`,
            el: R`Ένα σώμα μάζας \(m\) ηρεμεί σε κεκλιμένο επίπεδο 37° (η τριβή αρκεί ώστε να μένει ακίνητο).<br><b>Ποσότητα Α:</b> το μέτρο της κάθετης αντίδρασης \(R\) του επιπέδου.<br><b>Ποσότητα Β:</b> το μέτρο του βάρους \(w=mg\) του σώματος.`
          },
          answer: 1,
          explain: {
            fr: R`\(R=mg\cos37^\circ=0{,}8\,mg<mg\). Sur un plan incliné, la réaction normale est toujours plus petite que le poids : seule la composante \(w\cos\alpha\) est compensée par \(R\).`,
            el: R`\(R=mg\cos37^\circ=0{,}8\,mg<mg\). Σε κεκλιμένο επίπεδο η κάθετη αντίδραση είναι πάντα μικρότερη από το βάρος: μόνο η συνιστώσα \(w\cos\alpha\) εξισορροπείται από την \(R\).`
          }
        },
        {
          id: "c12", type: "numeric", topic: TOP.incl, diff: 3, unit: "m",
          stem: {
            fr: R`Sur un plan incliné de \(30^\circ\) sans frottement, un bloc part du repos. Quelle distance parcourt-il pendant les \(4\ \text{s}\) qui suivent ? (\(\sin30^\circ=0{,}5\))`,
            el: R`Σε κεκλιμένο επίπεδο 30° χωρίς τριβές ένα σώμα ξεκινά από ηρεμία. Ποια απόσταση διανύει στα επόμενα 4 s; (\(\sin30^\circ=0{,}5\))`
          },
          answer: 40, tol: 0.01,
          explain: {
            fr: R`\(a=g\sin30^\circ=5\ \text{m/s}^2\). \(d=\tfrac12at^2=\tfrac12\cdot5\cdot16=40\ \text{m}\).`,
            el: R`\(a=g\sin30^\circ=5\) m/s². \(d=\tfrac12at^2=\tfrac12\cdot5\cdot16=40\) m.`
          }
        }
      ]
    }],
    formulas: []
  });
})();
