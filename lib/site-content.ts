export type Language = "el" | "en";

export type ServiceKey =
  | "individual"
  | "adolescent"
  | "parentCounseling"
  | "online";

export type Service = {
  key: ServiceKey;
  slug: string;
  title: string;
  summary: string;
  detailBody?: string[];
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
      "Ψυχολόγος και ψυχοθεραπεύτρια για online συστημική ψυχοθεραπεία στα ελληνικά σε σταθερό και εμπιστευτικό πλαίσιο.",
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
      text: "«Η σοφία είναι η νοημοσύνη του συστήματος στο σύνολό του.»",
      author: "— Gregory Bateson",
    },
    homeQuote: {
      text: "«Η πεποίθηση ότι η προσωπική άποψη κάποιου για την πραγματικότητα είναι η μόνη πραγματικότητα αποτελεί την πιο επικίνδυνη από όλες τις αυταπάτες.»",
      author: "— Paul Watzlawick",
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
      title: "Διαδικτυακές Συνεδρίες",
      text: "Διαδικτυακές συνεδρίες συστημικής ψυχοθεραπείας και συμβουλευτικής σε σταθερό, εμπιστευτικό και συνεργατικό πλαίσιο.",
      link: "Δείτε αναλυτικά",
      includes: "Τι περιλαμβάνει",
      back: "Επιστροφή στις θεραπείες",
    },
    steps: {
      title: "Πώς ξεκινά η διαδικασία",
      items: [
        "Σύντομη επικοινωνία για διαθεσιμότητα και πρώτο αίτημα.",
        "Πρώτη online συνεδρία αξιολόγησης και συμφωνία θεραπευτικού πλαισίου.",
        "Σταθερές online συνεδρίες με πρακτικές λεπτομέρειες που συζητούνται κατά την πρώτη επικοινωνία.",
      ],
    },
    faq: {
      title: "Συχνές ερωτήσεις",
      items: [
        {
          question: "Πόσο διαρκεί μια συνεδρία;",
          answer:
            "Η διάρκεια και οι πρακτικές λεπτομέρειες συζητούνται κατά την πρώτη επικοινωνία, ώστε να διαμορφωθεί ένα σαφές θεραπευτικό πλαίσιο.",
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
    footerKvk: "Αριθμός KvK: 42031371",
    footerPrivacy: "Πολιτική απορρήτου",
    footerCredit: "Designed by Youri Janssen",
    privacy: {
      title: "Πολιτική απορρήτου",
      paragraphs: [
        "Η Ζωή Πάντου επεξεργάζεται τα προσωπικά δεδομένα που παρέχετε όταν επικοινωνείτε άμεσα, αποκλειστικά για να απαντήσει στο αίτημά σας ή να οργανώσει ένα πιθανό ραντεβού.",
        "Τα στοιχεία επικοινωνίας σας χρησιμοποιούνται μόνο για αυτόν τον σκοπό και δεν κοινοποιούνται σε τρίτους, εκτός αν αυτό απαιτείται από τον νόμο ή είναι αναγκαίο για την παροχή της υπηρεσίας.",
        "Μπορείτε να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των προσωπικών σας δεδομένων στέλνοντας email στο zipalife@gmail.com.",
      ],
    },
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
      "Psychologist and psychotherapist for online systemic psychotherapy in Greek within a steady and confidential framework.",
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
      text: "“Wisdom is the intelligence of the system as a whole.”",
      author: "— Gregory Bateson",
    },
    homeQuote: {
      text: "“The belief that one's own view of reality is the only reality is the most dangerous of all delusions.”",
      author: "— Paul Watzlawick",
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
      text: "Online systemic psychotherapy and counseling sessions in a steady, confidential and collaborative framework.",
      link: "View details",
      includes: "What it includes",
      back: "Back to therapies",
    },
    steps: {
      title: "How the process starts",
      items: [
        "Brief contact about availability and your initial request.",
        "First online assessment session and agreement on the therapeutic framework.",
        "Steady online sessions with practical details discussed during the first contact.",
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "How long is a session?",
          answer:
            "The duration and practical details are discussed during the first contact, so a clear therapeutic framework can be formed.",
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
    footerKvk: "KvK number: 42031371",
    footerPrivacy: "Privacy policy",
    footerCredit: "Designed by Youri Janssen",
    privacy: {
      title: "Privacy policy",
      paragraphs: [
        "Zoi Pantou processes the personal data you provide when contacting her directly, solely to respond to your request or arrange a possible appointment.",
        "Your contact details are used only for this purpose and are not shared with third parties, except where required by law or necessary to provide the service.",
        "You may request access to, correction of, or deletion of your personal data by emailing zipalife@gmail.com.",
      ],
    },
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
        "Διαδικτυακές συνεδρίες συστημικής ψυχοθεραπείας στα ελληνικά με ψυχολόγο και ψυχοθεραπεύτρια, σε σταθερό πλαίσιο, με εμπιστευτικότητα και φροντίδα.",
      points: [
        "Σταθερό διαδικτυακό ραντεβού διάρκειας μίας ώρας",
        "Πρακτικές λεπτομέρειες που συζητούνται κατά την πρώτη επικοινωνία",
        "Συστημική ψυχοθεραπεία για σχέσεις, άγχος, όρια και αυτογνωσία",
        "Ασφαλής πλατφόρμα επικοινωνίας",
      ],
    },
    {
      key: "individual",
      slug: "atomiki-psychotherapeia",
      title: "Ατομική Ψυχοθεραπεία Ενηλίκων",
      summary:
        "Η απόφαση για έναρξη ψυχοθεραπείας στην ενήλικη ζωή λαμβάνεται συχνά σε περιόδους αλλαγών, συναισθηματικής πίεσης ή δυσκολιών στις σχέσεις. Σε εκείνες τις στιγμές συνήθως αναδύεται η ανάγκη για έναν χώρο αποδοχής και εσωτερικής φροντίδας.",
      detailBody: [
        "Η απόφαση για έναρξη ψυχοθεραπείας στην ενήλικη ζωή λαμβάνεται συχνά σε περιόδους αλλαγών, συναισθηματικής πίεσης ή δυσκολιών στις σχέσεις. Σε εκείνες τις στιγμές συνήθως αναδύεται η ανάγκη για έναν χώρο αποδοχής και εσωτερικής φροντίδας. Στο ασφαλές θεραπευτικό πλαίσιο της ψυχοθεραπείας, η ίδια η συζήτηση γίνεται ο τόπος της αλλαγής, προσφέροντας τη δυνατότητα επαναδιήγησης και επανανοηματοδότησης της προσωπικής ιστορίας του ατόμου.",
        "Μέσα από τη συστημική ψυχοθεραπεία, επιδιώκουμε να θέσουμε υπό αμφισβήτηση τις εσωτερικές κατασκευές, τους ρόλους και τα μοτίβα που συντηρούν το πρόβλημα. Διερευνούμε τον τρόπο με τον οποίο σχετίζεστε και επικοινωνείτε μέσα στα διάφορα συστήματα στα οποία ανήκετε (οικογενειακό, επαγγελματικό, κοινωνικό), καθώς και τον τρόπο με τον οποίο οι εσωτερικές σας αλλαγές επηρεάζουν το ευρύτερο πλαίσιο της ζωής σας.",
        "Στόχος είναι η αμφισβήτηση των περιοριστικών πεποιθήσεων, η διεύρυνση της οπτικής και η ενδυνάμωση της προσωπικής σας ανθεκτικότητας, ώστε να αναπτύξετε νέες στρατηγικές διαχείρισης και να κινείστε με μεγαλύτερη ευελιξία απέναντι στις απαιτήσεις της ζωής.",
      ],
      points: [],
    },
    {
      key: "adolescent",
      slug: "atomiki-psychotherapeia-efivon",
      title: "Ατομική Ψυχοθεραπεία Εφήβων",
      summary:
        "Η εφηβεία αποτελεί μια σημαντική περίοδο μετάβασης, κατά την οποία συντελούνται πολλές και διαφορετικές αλλαγές. Η μετάβαση αυτή συχνά φέρνει αναπροσαρμογές στους ρόλους και στις σχέσεις, ενώ πολλές προηγούμενες αντιλήψεις και νοηματοδοτήσεις επανεξετάζονται.",
      detailBody: [
        "Η εφηβεία αποτελεί μια σημαντική περίοδο μετάβασης, κατά την οποία συντελούνται πολλές και διαφορετικές αλλαγές. Η μετάβαση αυτή συχνά φέρνει αναπροσαρμογές στους ρόλους και στις σχέσεις, ενώ πολλές προηγούμενες αντιλήψεις και νοηματοδοτήσεις επανεξετάζονται.",
        "Στο ασφαλές θεραπευτικό πλαίσιο, δίνεται έμφαση στη δημιουργία μιας σχέσης εμπιστοσύνης, μέσα στην οποία ο έφηβος ή η έφηβη μπορεί να νιώσει ασφάλεια και ελευθερία να μοιραστεί σκέψεις, συναισθήματα, ανησυχίες και προβληματισμούς γύρω από ζητήματα που είναι σημαντικά για τον ίδιο ή την ίδια. Μέσα στις συνεδρίες, επιδιώκουμε την ενίσχυση της αυτοεκτίμησης και της συναισθηματικής ενδυνάμωσης, την επεξεργασία των συγκρούσεων και την αναγνώριση δυσλειτουργικών μοτίβων στις σχέσεις.",
        "Η θεραπευτική διαδικασία μπορεί να λειτουργήσει σαν ένας χώρος εξερεύνησης, όπου ο έφηβος ή η έφηβη έχει τη δυνατότητα να δει τον εαυτό του και τις σχέσεις του μέσα από μια διαφορετική οπτική και να αναζητήσει νέους τρόπους σύνδεσης και επικοινωνίας.",
      ],
      points: [],
    },
    {
      key: "parentCounseling",
      slug: "symvouleftiki-goneon",
      title: "Συμβουλευτική Γονέων",
      summary:
        "Η γονεϊκότητα αποτελεί μια δυναμική διαδικασία που φέρνει στο προσκήνιο ένα ευρύ φάσμα συναισθημάτων, από τη βαθιά χαρά και την αγάπη έως τον θυμό, την αγωνία και την αβεβαιότητα. Εξελίσσεται διαρκώς και συχνά συνοδεύεται από ερωτήματα και προκλήσεις, καθώς κάθε οικογένεια διαμορφώνει τη δική της μοναδική δυναμική.",
      detailBody: [
        "Η γονεϊκότητα αποτελεί μια δυναμική διαδικασία που φέρνει στο προσκήνιο ένα ευρύ φάσμα συναισθημάτων, από τη βαθιά χαρά και την αγάπη έως τον θυμό, την αγωνία και την αβεβαιότητα. Εξελίσσεται διαρκώς και συχνά συνοδεύεται από ερωτήματα και προκλήσεις, καθώς κάθε οικογένεια διαμορφώνει τη δική της μοναδική δυναμική. Η συμβουλευτική γονέων προσφέρει έναν χώρο όπου μπορείτε να σταθείτε σε αυτές τις δυσκολίες με περισσότερη κατανόηση και λιγότερη ενοχή.",
        "Μέσα από τη συστημική προσέγγιση, εξετάζουμε τη σχέση γονέα-παιδιού μέσα στο ευρύτερο οικογενειακό και κοινωνικό πλαίσιο. Διερευνούμε τον τρόπο με τον οποίο επικοινωνείτε, τις ανάγκες που εκφράζονται μέσα από τη συμπεριφορά, τα μοτίβα αλληλεπίδρασης που μπορεί να έχουν διαμορφωθεί και τον τρόπο με τον οποίο οι αλλαγές σε ένα μέλος της οικογένειας μπορούν να επηρεάσουν ολόκληρο το σύστημα.",
        "Στόχος είναι η ενίσχυση της σύνδεσης και της επικοινωνίας, η καλύτερη κατανόηση των αναγκών του παιδιού και του γονέα και η αναζήτηση πιο λειτουργικών τρόπων ανταπόκρισης στις καθημερινές προκλήσεις, αξιοποιώντας τα ήδη υπάρχοντα αποθέματα και τις δυνατότητες της οικογένειας.",
      ],
      points: [],
    },
  ],
  en: [
    {
      key: "online",
      slug: "online-synedries",
      title: "Online Sessions",
      hasDetailPage: false,
      summary:
        "Online systemic psychotherapy sessions in Greek with a psychologist and psychotherapist, a steady framework, confidentiality and care.",
      points: [
        "Stable one-hour online appointment",
        "Practical details discussed during the first contact",
        "Systemic psychotherapy for relationships, anxiety, boundaries and self-awareness",
        "Secure communication platform",
      ],
    },
    {
      key: "individual",
      slug: "atomiki-psychotherapeia",
      title: "Individual Psychotherapy for Adults",
      summary:
        "The decision to begin psychotherapy in adult life is often made during periods of change, emotional pressure or difficulties in relationships. In those moments, a need for a space of acceptance and inner care often emerges.",
      detailBody: [
        "The decision to begin psychotherapy in adult life is often made during periods of change, emotional pressure or difficulties in relationships. In those moments, a need for a space of acceptance and inner care often emerges. Within the safe therapeutic framework of psychotherapy, the conversation itself becomes the place of change, offering an opportunity to retell and reframe a person’s personal story.",
        "Through systemic psychotherapy, we aim to question the inner constructions, roles and patterns that maintain the problem. We explore how you relate and communicate within the different systems you belong to — family, work and social — and how your inner changes affect the wider context of your life.",
        "The aim is to question limiting beliefs, broaden perspective and strengthen your personal resilience, so that you can develop new coping strategies and move with greater flexibility in response to life’s demands.",
      ],
      points: [],
    },
    {
      key: "adolescent",
      slug: "atomiki-psychotherapeia-efivon",
      title: "Individual Psychotherapy for Adolescents",
      summary:
        "Adolescence is an important period of transition, during which many different changes take place. This transition often brings adjustments to roles and relationships, while earlier views and meanings are reconsidered.",
      detailBody: [
        "Adolescence is an important period of transition, during which many different changes take place. This transition often brings adjustments to roles and relationships, while earlier views and meanings are reconsidered.",
        "Within a safe therapeutic setting, the focus is on building a trusting relationship in which the adolescent can feel secure and free to share thoughts, feelings, concerns and questions about matters that are important to them. During sessions, we work to strengthen self-esteem and emotional resilience, process conflicts and recognise unhelpful relationship patterns.",
        "The therapeutic process can become a space for exploration, where the adolescent can view themselves and their relationships from a different perspective and seek new ways of connecting and communicating.",
      ],
      points: [],
    },
    {
      key: "parentCounseling",
      slug: "symvouleftiki-goneon",
      title: "Parent Counseling",
      summary:
        "Parenthood is a dynamic process that brings a wide range of emotions to the forefront, from deep joy and love to anger, anxiety and uncertainty. It evolves continuously and is often accompanied by questions and challenges, as every family shapes its own unique dynamics.",
      detailBody: [
        "Parenthood is a dynamic process that brings a wide range of emotions to the forefront, from deep joy and love to anger, anxiety and uncertainty. It evolves continuously and is often accompanied by questions and challenges, as every family shapes its own unique dynamics. Parent counseling offers a space in which you can approach these difficulties with greater understanding and less guilt.",
        "Through a systemic approach, we explore the parent-child relationship within the wider family and social context. We examine the way you communicate, the needs expressed through behavior, patterns of interaction that may have developed, and how changes in one family member can affect the whole system.",
        "The aim is to strengthen connection and communication, deepen understanding of both the child's and the parent's needs, and find more functional ways of responding to everyday challenges, drawing on the family's existing resources and strengths.",
      ],
      points: [],
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
