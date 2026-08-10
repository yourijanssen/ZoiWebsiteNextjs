export type Language = "el" | "en";

export type ServiceKey = "individual" | "parentCounseling" | "online";

export type Service = {
  key: ServiceKey;
  slug: string;
  title: string;
  summary: string;
  points: string[];
  hasDetailPage?: boolean;
};

const supportedLanguages: Language[] = ["el", "en"];

export const defaultLanguage: Language = "el";

export const languages = supportedLanguages;

// Normalizes query-string language values to the languages supported by the site.
export function resolveLanguage(value: string | string[] | undefined): Language {
  const requested = Array.isArray(value) ? value[0] : value;

  return supportedLanguages.includes(requested as Language)
    ? (requested as Language)
    : defaultLanguage;
}

export const content = {
  el: {
    htmlLang: "el",
    brand: "Ζωή Πάντου",
    brandMark: "ΖΠ",
    metaTitle:
      "Ζωή Πάντου | ψυχολόγος και ψυχοθεραπεύτρια online",
    metaDescription:
      "Ψυχολόγος και ψυχοθεραπεύτρια για online συστημική ψυχοθεραπεία στα ελληνικά. Συνεδρίες μίας ώρας με κόστος 40 ευρώ.",
    nav: {
      mainLabel: "Κεντρικό μενού",
      footerLabel: "Μενού υποσέλιδου",
      languageLabel: "Αλλαγή γλώσσας",
      home: "Αρχική",
      about: "Σχετικά",
      therapies: "Υπηρεσίες",
      faq: "Συστημική Προσέγγιση",
      articles: "Άρθρα",
      contact: "Επικοινωνία",
      greek: "Ελληνικά",
      english: "Αγγλικά",
      menu: "Μενού",
    },
    hero: {
      kicker: "ΣΥΣΤΗΜΙΚΗ ΨΥΧΟΘΕΡΑΠΕΙΑ & ΣΥΜΒΟΥΛΕΥΤΙΚΗ",
      title: "«Η βάση όλων των ανθρώπινων σχέσεων είναι η επικοινωνία· όμως η επικοινωνία δεν είναι απλώς η ικανότητα να μιλάς ή να κατανοείς λέξεις, αλλά η ικανότητα να συνδέεσαι συναισθηματικά με τον άλλον.»",
      attribution: "—Virginia Satir",
      lead: "Στον ασφαλή χώρο της ψυχοθεραπείας, στόχος μας είναι να χτίσουμε μαζί αυτή την ουσιαστική σύνδεση. Μέσα από τη συστημική ματιά, αναγνωρίζουμε τα μοτίβα που σας δυσκολεύουν και διερευνούμε νέες οπτικές και νοηματοδοτήσεις, δημιουργώντας χώρο για πιο αυθεντικές συνδέσεις στη ζωή σας.",
      servicesCta: "Ας επικοινωνήσουμε",
      contactCta: "Ας γνωριστούμε",
      imagePlaceholder:
        "Online συστημική ψυχοθεραπεία στα ελληνικά με ψυχολόγο και ψυχοθεραπεύτρια.",
    },
    gallery: {
      one: "Ήρεμο online θεραπευτικό πλαίσιο",
      two: "Συνεδρίες από τον δικό σας ασφαλή χώρο",
      approachImage: "Ζεστός, ήσυχος χώρος για online συστημική ψυχοθεραπεία",
      profileImage:
        "Ζωή Πάντου, ψυχολόγος και ψυχοθεραπεύτρια για online συστημική ψυχοθεραπεία",
    },
    highlights: {
      previous: "Προηγούμενο στοιχείο",
      next: "Επόμενο στοιχείο",
      items: [
        {
          eyebrow: "01",
          title: "Ήρεμο θεραπευτικό πλαίσιο",
          text: "Το θεραπευτικό πλαίσιο δεν αποτελεί μια στατική συνθήκη, αλλά μια δυναμική και συνεργατική διαδικασία που διαμορφώνεται αμφίδρομα μέσα από τη θεραπευτική σχέση. Δημιουργούμε έναν χώρο ασφάλειας, συνέπειας και σεβασμού, όπου μπορείτε να εκφράζεστε ελεύθερα με τον δικό σας ρυθμό.",
        },
        {
          eyebrow: "02",
          title: "Συστημική ματιά",
          text: "Η δυσκολία ή το σύμπτωμα εξετάζεται πάντα σε συνάρτηση με το περιβάλλον, τις σχέσεις και τους ρόλους στους οποίους το άτομο αλληλεπιδρά. Η συστημική προσέγγιση επιτρέπει τη βαθύτερη κατανόηση αυτών των δυναμικών, αναδεικνύοντας νέες οπτικές και ισορροπίες.",
        },
        {
          eyebrow: "03",
          title: "Σύνδεση από τον χώρο σας",
          text: "Η θεραπευτική σχέση αναπτύσσεται με ασφάλεια και συνέπεια, επιτρέποντάς σας να συμμετέχετε στις συνεδρίες από το οικείο σας περιβάλλον. Οι διαδικτυακές συνεδρίες πραγματοποιούνται μέσω πλατφορμών (Google Meet, Viber, MS Teams), εξασφαλίζοντας εύκολη πρόσβαση και ιδιωτικότητα.",
        },
      ],
    },
    approach: {
      title: "Ζωή Πάντου, Ψυχολόγος ΑΠΘ, MSc, ΜΑ",
      body: [
        "Η Ζωή Πάντου είναι ψυχολόγος με βασικές προπτυχιακές σπουδές στο τμήμα Ψυχολογίας του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ) και κατέχει άδεια ασκήσεως επαγγέλματος ψυχολόγου (Αριθ. Πρωτ. ΔΔΥΚΜ/Μ.Ε.Θ. 537827/17822). Είναι κάτοχος του μεταπτυχιακού διπλώματος «Μουσική και Κοινωνία με ειδίκευση στη Μουσικοθεραπεία» από το Πανεπιστήμιο Μακεδονίας (ΠΑΜΑΚ) και του μεταπτυχιακού διπλώματος «Εφαρμοσμένη Γνωστική Ψυχολογία» από το Πανεπιστήμιο της Ουτρέχτης. Βρίσκεται επιπλέον στο τελευταίο έτος της τετραετούς εκπαίδευσης στη Συστημική Ψυχοθεραπεία και Συμβουλευτική στο Κέντρο Συστημικής Μελέτης και Θεραπείας (πιστοποιημένη από την E.F.T.A. – European Family Therapy Association και την Εθνική Εταιρεία Ψυχοθεραπείας Ελλάδος – Ε.Ε.Ψ.Ε., εκπρόσωπο της European Association for Psychotherapy – EAP).",
        "Έχει εργαστεί με παιδιά, εφήβους και ενήλικες σε αναγνωρισμένα κέντρα ειδικών θεραπειών και δομές αποκατάστασης στη Θεσσαλονίκη (Speechbox, ΕΛΕΠΑΠ Θεσσαλονίκης), διαθέτοντας κλινική εμπειρία στην ατομική ψυχοθεραπεία, την πρώιμη παρέμβαση και τη συμβουλευτική γονέων. Παράλληλα, έχει σχεδιάσει και υλοποιήσει υπό εποπτεία μουσικοθεραπευτικές ομαδικές και ατομικές συνεδρίες για την υποστήριξη ευπαθών ομάδων και ατόμων τρίτης ηλικίας (Οίκος Ευγηρίας «Άγιος Νικόλαος»). Αναφορικά με την ερευνητική της δραστηριότητα, στο πλαίσιο των μεταπτυχιακών της σπουδών στο Πανεπιστήμιο της Ουτρέχτης εξειδικεύτηκε στην αυτόνομη διεξαγωγή ηλεκτροεγκεφαλογραφημάτων (EEG/ERPs) για τη μελέτη γνωστικών μηχανισμών, ενώ στο Πανεπιστήμιο Μακεδονίας ερεύνησε την επίδραση της μουσικοθεραπείας στη διαχείριση των ψυχολογικών και συμπεριφορικών συμπτωμάτων σε ασθενείς με άνοια.",
        "Με τη βαθιά πεποίθηση ότι η πραγματικότητά μας συνδιαμορφώνεται μέσα από τις σχέσεις και τα πλαίσια στα οποία ανήκουμε, προσεγγίζει κάθε άνθρωπο όχι αποκομμένο, αλλά ως αναπόσπαστο μέλος του δικού του μοναδικού συστήματος. Μέσα από τη δυναμική ψυχοθεραπευτική διαδικασία, στοχεύει στην καλλιέργεια και άνθιση νέων οπτικών και νοηματοδοτήσεων, προσφέροντας έναν ασφαλή χώρο για την προσωπική ενδυνάμωση και την εξέλιξη των ατόμων.",
      ],
      points: [
        "Άδεια ασκήσεως επαγγέλματος ψυχολόγου",
        "MSc στη Μουσική και Κοινωνία με ειδίκευση στη Μουσικοθεραπεία",
        "ΜΑ στην Εφαρμοσμένη Γνωστική Ψυχολογία",
        "Εκπαίδευση στη Συστημική Ψυχοθεραπεία και Συμβουλευτική",
      ],
    },
    quote: {
      text: "«Η πεποίθηση ότι η προσωπική άποψη κάποιου για την πραγματικότητα είναι η μόνη πραγματικότητα αποτελεί την πιο επικίνδυνη από όλες τις αυταπάτες.»",
      author: "—Paul Watzlawick",
    },
    profile: {
      kicker: "Προφίλ",
      name: "Ζωή Πάντου",
      role: "Ψυχολόγος ΑΠΘ, MSc, ΜΑ",
      bio: "Ψυχολόγος με άδεια ασκήσεως επαγγέλματος, μεταπτυχιακές σπουδές στη μουσικοθεραπεία και την εφαρμοσμένη γνωστική ψυχολογία, και εκπαίδευση στη συστημική ψυχοθεραπεία και συμβουλευτική.",
      credentials: [
        "Άδεια άσκησης επαγγέλματος ψυχολόγου",
        "MSc Μουσική και Κοινωνία με ειδίκευση στη Μουσικοθεραπεία",
        "ΜΑ Εφαρμοσμένη Γνωστική Ψυχολογία",
        "Εκπαίδευση στη Συστημική Ψυχοθεραπεία και Συμβουλευτική",
      ],
    },
    servicesHeading: {
      title: "Online συνεδρίες",
      text: "Προς το παρόν είναι διαθέσιμες μόνο online συνεδρίες συστημικής ψυχοθεραπείας με ψυχολόγο / ψυχοθεραπεύτρια, διάρκειας μίας ώρας και κόστους 40 ευρώ.",
      link: "Δείτε αναλυτικά",
      includes: "Τι περιλαμβάνει",
      back: "Επιστροφή στις θεραπείες",
    },
    steps: {
      title: "Πώς ξεκινά η διαδικασία",
      items: [
        "Σύντομη επικοινωνία για διαθεσιμότητα και πρώτο αίτημα.",
        "Πρώτη online συνεδρία αξιολόγησης και συμφωνία θεραπευτικού πλαισίου.",
        "Σταθερές online συνεδρίες διάρκειας μίας ώρας με κόστος 40 ευρώ.",
      ],
    },
    faq: {
      title: "Συχνές ερωτήσεις",
      items: [
        {
          question: "Πόσο διαρκεί μια συνεδρία;",
          answer:
            "Η διάρκεια είναι μία ώρα και το κόστος είναι 40 ευρώ ανά συνεδρία.",
        },
        {
          question: "Οι συνεδρίες γίνονται μόνο online;",
          answer:
            "Ναι. Προς το παρόν όλες οι συνεδρίες πραγματοποιούνται online, χωρίς φυσική διεύθυνση ή δια ζώσης ραντεβού.",
        },
        {
          question: "Τι σημαίνει συστημική ψυχοθεραπεία;",
          answer:
            "Η συστημική ψυχοθεραπεία βλέπει τον άνθρωπο μέσα στα σημαντικά πλαίσια της ζωής του, όπως οι σχέσεις, η οικογένεια, η εργασία και οι επαναλαμβανόμενοι τρόποι επικοινωνίας.",
        },
        {
          question: "Ποια είναι η διαφορά ανάμεσα σε ψυχολόγο, ψυχοθεραπευτή και ψυχοθεραπεύτρια;",
          answer:
            "Ο ψυχολόγος έχει σπουδές ψυχολογίας, ενώ ο ψυχοθεραπευτής ή η ψυχοθεραπεύτρια έχει επιπλέον εκπαίδευση στην ψυχοθεραπευτική διαδικασία. Η Ζωή Πάντου παρουσιάζεται εδώ ως ψυχολόγος και ψυχοθεραπεύτρια.",
        },
        {
          question: "Πόσες συνεδρίες χρειάζονται;",
          answer:
            "Δεν υπάρχει ίδιο χρονοδιάγραμμα για όλους. Ο ρυθμός προσαρμόζεται στους στόχους και στην εξέλιξή σας.",
        },
        {
          question: "Οι συνεδρίες είναι εμπιστευτικές;",
          answer:
            "Ναι. Η εμπιστευτικότητα αποτελεί θεμελιώδη αρχή της θεραπευτικής διαδικασίας.",
        },
      ],
    },
    contact: {
      title: "Επικοινωνία και Ραντεβού",
      text: [
        "Το πρώτο βήμα για τη φροντίδα της ψυχικής σας υγείας ξεκινά με μια απλή επικοινωνία.",
        "Θα χαρώ να επικοινωνήσουμε μέσω τηλεφωνικής κλήσης, μηνύματος ή email, προκειμένου να προγραμματίσουμε ένα διαδικτυακό ραντεβού ή να συζητήσουμε οποιαδήποτε απορία έχετε για τη διαδικασία των συνεδριών.",
      ],
      detailsTitle: "Στοιχεία Επικοινωνίας",
      hoursTitle: "Ωράριο Λειτουργίας",
      phoneLabel: "Σταθερό:",
      mobileLabel: "Κινητό:",
      phoneViberLabel: "Τηλέφωνο / Viber:",
      emailLabel: "Email:",
      weekdays: "Δευτέρα - Παρασκευή",
      appointmentOnly: "Κατόπιν ραντεβού",
      phone: "+30 210 0000000",
      mobile: "+30 69 00000000",
      email: "zipalife@gmail.com",
      nameInput: "Ονοματεπώνυμο",
      emailInput: "Email",
      messageInput: "Μήνυμα",
      privacyNotice:
        "Τα στοιχεία που στέλνετε χρησιμοποιούνται μόνο για να απαντήσουμε στο μήνυμά σας και να οργανώσουμε πιθανό ραντεβού. Δεν χρησιμοποιούνται για διαφημιστικούς σκοπούς και δεν κοινοποιούνται σε τρίτους, εκτός αν απαιτείται για την παροχή της υπηρεσίας ή από τον νόμο.",
      privacyConsent:
        "Κατανοώ και συμφωνώ με την επεξεργασία των στοιχείων μου για την απάντηση στο αίτημά μου.",
      privacyError:
        "Παρακαλώ αποδεχθείτε την πολιτική απορρήτου πριν στείλετε το μήνυμα.",
      submit: "Αποστολή μηνύματος",
      sending: "Αποστολή...",
      success:
        "Το μήνυμά σας στάλθηκε επιτυχώς. Θα λάβετε επιβεβαίωση στο email σας.",
      error:
        "Δεν ήταν δυνατή η αποστολή του μηνύματος. Δοκιμάστε ξανά ή στείλτε μας email.",
    },
    footerCopyright:
      "© 2026 Ζωή Πάντου. Όλα τα δικαιώματα κατοχυρωμένα.",
    footerCredit: "Designed by Youri Janssen",
    notFound: {
      title: "Η σελίδα δεν βρέθηκε",
      text: "Η σελίδα που αναζητάτε δεν υπάρχει.",
      back: "Επιστροφή στην αρχική",
    },
  },
  en: {
    htmlLang: "en",
    brand: "Zoi Pantou",
    brandMark: "ZP",
    metaTitle: "Zoi Pantou | psychologist and psychotherapist online",
    metaDescription:
      "Psychologist and psychotherapist for online systemic psychotherapy in Greek. Confidential one-hour sessions for 40 euros per session.",
    nav: {
      mainLabel: "Main menu",
      footerLabel: "Footer menu",
      languageLabel: "Change language",
      home: "Home",
      about: "About",
      therapies: "Therapies",
      faq: "Systemic Approach",
      articles: "Articles",
      contact: "Contact",
      greek: "Greek",
      english: "English",
      menu: "Menu",
    },
    hero: {
      kicker: "Systemic psychotherapy & counseling",
      title: "“The foundation of all human relationships is communication; however, communication is not simply the ability to speak or understand words, but the ability to connect emotionally with another person.”",
      attribution: "—Virginia Satir",
      lead: "Within the safe space of psychotherapy, our goal is to build this meaningful connection together. Through a systemic perspective, we recognize the patterns that create difficulty and explore new viewpoints and meanings, creating space for more authentic connections in your life.",
      servicesCta: "Let's connect",
      contactCta: "Let's get acquainted",
      imagePlaceholder:
        "Online systemic psychotherapy in Greek with a psychologist and psychotherapist.",
    },
    gallery: {
      one: "Calm online therapeutic framework",
      two: "Sessions from your own safe space",
      approachImage: "Warm, quiet space for online systemic psychotherapy",
      profileImage:
        "Zoi Pantou, psychologist and psychotherapist for online systemic psychotherapy in Greek",
    },
    highlights: {
      previous: "Previous item",
      next: "Next item",
      items: [
        {
          eyebrow: "01",
          title: "A calm therapeutic frame",
          text: "The therapeutic frame is not a static condition, but a dynamic and collaborative process shaped mutually through the therapeutic relationship. We create a space of safety, consistency and respect, where you can express yourself freely at your own pace.",
        },
        {
          eyebrow: "02",
          title: "A systemic perspective",
          text: "The difficulty or symptom is always explored in relation to the environment, relationships and roles in which the person interacts. The systemic approach allows a deeper understanding of these dynamics, bringing forward new perspectives and balances.",
        },
        {
          eyebrow: "03",
          title: "Sessions from your own space",
          text: "The therapeutic relationship develops with safety and consistency, allowing you to attend sessions from your familiar environment. Online sessions take place through platforms (Google Meet, Viber, MS Teams), ensuring easy access and privacy.",
        },
      ],
    },
    approach: {
      title: "Zoi Pantou, Psychologist AUTH, MSc, MA",
      body: [
        "Zoi Pantou is a psychologist with undergraduate studies in the Department of Psychology at Aristotle University of Thessaloniki (AUTH) and holds a license to practice as a psychologist (Protocol No. ΔΔΥΚΜ/Μ.Ε.Θ. 537827/17822). She holds the postgraduate degree “Music and Society with specialization in Music Therapy” from the University of Macedonia (UoM) and the postgraduate degree “Applied Cognitive Psychology” from Utrecht University. She is also in the final year of her four-year training in Systemic Psychotherapy and Counseling at the Center for Systemic Study and Therapy (certified by E.F.T.A. – European Family Therapy Association and the National Society of Psychotherapy of Greece – N.S.P.G., representative of the European Association for Psychotherapy – EAP).",
        "She has worked with children, adolescents and adults in recognized special therapy centers and rehabilitation settings in Thessaloniki (Speechbox, ELEPAP Thessaloniki), with clinical experience in individual psychotherapy, early intervention and parent counseling. At the same time, under supervision, she has designed and implemented group and individual music therapy sessions for the support of vulnerable groups and older adults (Saint Nicholas Nursing Home). Regarding her research activity, during her postgraduate studies at Utrecht University she specialized in the independent conduction of electroencephalography recordings (EEG/ERPs) for the study of cognitive mechanisms, while at the University of Macedonia she researched the effect of music therapy on the management of psychological and behavioral symptoms in patients with dementia.",
        "With the deep belief that our reality is co-shaped through the relationships and contexts to which we belong, she approaches each person not as isolated, but as an integral member of their own unique system. Through the dynamic psychotherapeutic process, she aims to cultivate and allow new perspectives and meanings to flourish, offering a safe space for personal empowerment and individual development.",
      ],
      points: [
        "Licensed psychologist",
        "MSc in Music and Society with specialization in Music Therapy",
        "MA in Applied Cognitive Psychology",
        "Training in Systemic Psychotherapy and Counseling",
      ],
    },
    quote: {
      text: "“The belief that one's own view of reality is the only reality is the most dangerous of all delusions.”",
      author: "—Paul Watzlawick",
    },
    profile: {
      kicker: "Profile",
      name: "Zoi Pantou",
      role: "Psychologist AUTH, MSc, MA",
      bio: "Licensed psychologist with postgraduate studies in music therapy and applied cognitive psychology, and training in systemic psychotherapy and counseling.",
      credentials: [
        "Licensed psychologist",
        "MSc Music and Society with specialization in Music Therapy",
        "MA Applied Cognitive Psychology",
        "Training in Systemic Psychotherapy and Counseling",
      ],
    },
    servicesHeading: {
      title: "Online sessions",
      text: "For now, only online systemic psychotherapy sessions with a psychologist / psychotherapist are available. Each session lasts one hour and costs 40 euros.",
      link: "View details",
      includes: "What it includes",
      back: "Back to therapies",
    },
    steps: {
      title: "How the process starts",
      items: [
        "Brief contact about availability and your initial request.",
        "First online assessment session and agreement on the therapeutic framework.",
        "Steady one-hour online sessions at 40 euros per session.",
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "How long is a session?",
          answer:
            "Sessions last one hour and cost 40 euros per session.",
        },
        {
          question: "Are sessions online only?",
          answer:
            "Yes. For now, all sessions take place online, with no physical practice address or in-person appointments.",
        },
        {
          question: "What is systemic psychotherapy?",
          answer:
            "Systemic psychotherapy looks at the person within important life contexts, such as relationships, family, work and repeated communication patterns.",
        },
        {
          question: "What is the difference between a psychologist and a psychotherapist?",
          answer:
            "A psychologist has academic training in psychology, while a psychotherapist has additional training in the therapeutic process. Zoi Pantou is presented here as a psychologist and psychotherapist.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "There is no one-size-fits-all timeline. The pace is adjusted to your goals and progress.",
        },
        {
          question: "Are sessions confidential?",
          answer:
            "Yes. Confidentiality is a fundamental principle of the therapeutic process.",
        },
      ],
    },
    contact: {
      title: "Contact and Appointments",
      text: [
        "The first step in caring for your mental health begins with simple contact.",
        "I will be glad to connect by phone call, message or email, so we can schedule an online appointment or discuss any questions you may have about the session process.",
      ],
      detailsTitle: "Contact Details",
      hoursTitle: "Opening Hours",
      phoneLabel: "Landline:",
      mobileLabel: "Mobile:",
      phoneViberLabel: "Telephone / Viber:",
      emailLabel: "Email:",
      weekdays: "Monday - Friday",
      appointmentOnly: "By appointment",
      phone: "+30 210 0000000",
      mobile: "+30 69 00000000",
      email: "zipalife@gmail.com",
      nameInput: "Full name",
      emailInput: "Email",
      messageInput: "Message",
      privacyNotice:
        "The details you send are used only to respond to your message and arrange a possible appointment. They are not used for marketing and are not shared with third parties, except where needed to provide the service or required by law.",
      privacyConsent:
        "I understand and agree that my details may be processed to respond to my request.",
      privacyError:
        "Please accept the privacy policy before sending your message.",
      submit: "Send message",
      sending: "Sending...",
      success:
        "Your message was sent successfully. You will receive a confirmation by email.",
      error:
        "The message could not be sent. Please try again or email us directly.",
    },
    footerCopyright: "© 2026 Zoi Pantou. All rights reserved.",
    footerCredit: "Designed by Youri Janssen",
    notFound: {
      title: "Page not found",
      text: "The page you are looking for does not exist.",
      back: "Back to home",
    },
  },
} satisfies Record<Language, Record<string, unknown>>;

export const services = {
  el: [
    {
      key: "online",
      slug: "online-synedries",
      title: "Διαδικτυακές Συνεδρίες",
      hasDetailPage: false,
      summary:
        "Διαδικτυακές συνεδρίες συστημικής ψυχοθεραπείας στα ελληνικά με ψυχολόγο και ψυχοθεραπεύτρια, διάρκειας μίας ώρας, με σταθερό πλαίσιο, εμπιστευτικότητα και κόστος 40 ευρώ.",
      points: [
        "Σταθερό διαδικτυακό ραντεβού διάρκειας μίας ώρας",
        "Κόστος 40 ευρώ ανά συνεδρία",
        "Συστημική ψυχοθεραπεία για σχέσεις, άγχος, όρια και αυτογνωσία",
        "Ασφαλής πλατφόρμα επικοινωνίας",
      ],
    },
    {
      key: "individual",
      slug: "atomiki-psychotherapeia",
      title: "Ατομική Ψυχοθεραπεία",
      summary:
        "Ατομική συστημική ψυχοθεραπεία για ενήλικες που επιθυμούν να επεξεργαστούν προσωπικές δυσκολίες, σχέσεις, άγχος, όρια και ζητήματα αυτογνωσίας.",
      points: [
        "Προσωπικό θεραπευτικό πλαίσιο με σταθερότητα και εμπιστευτικότητα",
        "Διερεύνηση συναισθημάτων, σχέσεων και επαναλαμβανόμενων μοτίβων",
        "Υποστήριξη σε θέματα άγχους, ορίων, αυτογνωσίας και αλλαγών ζωής",
        "Συστημική ματιά στον άνθρωπο και στα πλαίσια στα οποία ανήκει",
      ],
    },
    {
      key: "parentCounseling",
      slug: "symvouleftiki-goneon",
      title: "Συμβουλευτική Γονέων",
      summary:
        "Συμβουλευτική γονέων για την κατανόηση των αναγκών του παιδιού, την ενίσχυση της επικοινωνίας και τη διαμόρφωση πιο λειτουργικών οικογενειακών σχέσεων.",
      points: [
        "Υποστήριξη γονέων σε δυσκολίες επικοινωνίας και οριοθέτησης",
        "Κατανόηση της συμπεριφοράς του παιδιού μέσα στο οικογενειακό πλαίσιο",
        "Ενίσχυση της γονεϊκής στάσης με συνέπεια και φροντίδα",
        "Συστημική προσέγγιση στις σχέσεις και στις ανάγκες της οικογένειας",
      ],
    },
  ],
  en: [
    {
      key: "online",
      slug: "online-synedries",
      title: "Online Sessions",
      hasDetailPage: false,
      summary:
        "One-hour online systemic psychotherapy sessions in Greek with a psychologist and psychotherapist, a steady framework, confidentiality and a rate of 40 euros.",
      points: [
        "Stable one-hour online appointment",
        "40 euros per session",
        "Systemic psychotherapy for relationships, anxiety, boundaries and self-awareness",
        "Secure communication platform",
      ],
    },
    {
      key: "individual",
      slug: "atomiki-psychotherapeia",
      title: "Individual Psychotherapy",
      summary:
        "Individual systemic psychotherapy for adults who want to explore personal difficulties, relationships, anxiety, boundaries and self-awareness.",
      points: [
        "A personal therapeutic framework with stability and confidentiality",
        "Exploration of emotions, relationships and recurring patterns",
        "Support with anxiety, boundaries, self-awareness and life transitions",
        "A systemic perspective on the person and the contexts they belong to",
      ],
    },
    {
      key: "parentCounseling",
      slug: "symvouleftiki-goneon",
      title: "Parent Counseling",
      summary:
        "Parent counseling for understanding a child's needs, strengthening communication and shaping more functional family relationships.",
      points: [
        "Support for parents around communication and boundaries",
        "Understanding a child's behavior within the family context",
        "Strengthening the parental stance with consistency and care",
        "A systemic approach to relationships and family needs",
      ],
    },
  ],
} satisfies Record<Language, Service[]>;

// Returns only services that have a public detail page.
export function getDetailServices(language: Language) {
  return services[language].filter((service) => service.hasDetailPage !== false);
}

// Finds a service by its public slug for dynamic Next.js routes.
export function getServiceBySlug(language: Language, slug: string) {
  return getDetailServices(language).find((service) => service.slug === slug);
}
