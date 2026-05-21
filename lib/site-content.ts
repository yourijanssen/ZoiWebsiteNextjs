export type Language = "el" | "en";

export type ServiceKey = "individual" | "couples" | "family" | "online";

export type Service = {
  key: ServiceKey;
  slug: string;
  title: string;
  summary: string;
  points: string[];
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
      therapies: "Θεραπείες",
      faq: "Συχνές ερωτήσεις",
      articles: "Άρθρα",
      contact: "Επικοινωνία",
      greek: "Ελληνικά",
      english: "Αγγλικά",
      menu: "Μενού",
    },
    hero: {
      kicker: "Online ψυχοθεραπεία",
      title: "Ψυχολόγος και ψυχοθεραπεύτρια για online συστημική ψυχοθεραπεία",
      lead: "Η Ζωή Πάντου είναι ψυχολόγος και ψυχοθεραπεύτρια που προσφέρει online συνεδρίες συστημικής ψυχοθεραπείας στα ελληνικά. Κάθε συνεδρία διαρκεί μία ώρα, πραγματοποιείται σε σταθερό και εμπιστευτικό πλαίσιο και κοστίζει 40 ευρώ.",
      servicesCta: "Δείτε τις online συνεδρίες",
      contactCta: "Κλείστε online ραντεβού",
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
    approach: {
      title: "Συστημική ψυχοθεραπεία online",
      body: [
        "Η συστημική ψυχοθεραπεία online βασίζεται στην εμπιστοσύνη, στην αποδοχή και στη σταθερότητα. Σε κάθε συνεδρία δίνουμε χώρο στο βίωμα, οργανώνουμε το αίτημα και εξετάζουμε τον άνθρωπο μέσα στις σχέσεις, την οικογένεια και τα πλαίσια που επηρεάζουν την καθημερινότητά του.",
        "Η διαδικασία προσαρμόζεται στον ρυθμό του κάθε ανθρώπου. Στόχος είναι η ουσιαστική κατανόηση των δυσκολιών, η ενίσχυση της αυτογνωσίας και η δημιουργία νέων τρόπων σύνδεσης με τον εαυτό και τους άλλους μέσα από ένα ασφαλές online θεραπευτικό πλαίσιο.",
      ],
      points: [
        "Σταθερό πλαίσιο και σαφή θεραπευτικά όρια",
        "Συστημική κατανόηση σχέσεων, οικογένειας και προσωπικών δυσκολιών",
        "Τακτική αξιολόγηση προόδου",
      ],
    },
    quote: {
      text: "Η ψυχοθεραπεία είναι ένας ασφαλής τόπος όπου η φωνή μας ακούγεται χωρίς φόβο και η αλλαγή χτίζεται με συνέπεια.",
      author: "Ζωή Πάντου",
    },
    profile: {
      kicker: "Προφίλ",
      name: "Ζωή Πάντου",
      role: "Ψυχολόγος - Ψυχοθεραπεύτρια",
      bio: "Ως ψυχολόγος και ψυχοθεραπεύτρια με σύγχρονη κλινική εκπαίδευση και έμφαση στη συστημική ψυχοθεραπεία, προσφέρω online συνεδρίες στα ελληνικά για ανθρώπους που αναζητούν ένα σταθερό και ανθρώπινο πλαίσιο προσωπικής αλλαγής.",
      credentials: [
        "Άδεια άσκησης επαγγέλματος ψυχολόγου",
        "Εξειδίκευση στη συστημική ψυχοθεραπεία",
        "Συνεχής εποπτεία και επαγγελματική επιμόρφωση",
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
      title: "Επικοινωνία και ραντεβού",
      text: "Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας για το πρώτο online ραντεβού. Οι συνεδρίες κοστίζουν 40 ευρώ ανά ώρα.",
      phoneLabel: "Σταθερό:",
      mobileLabel: "Κινητό:",
      emailLabel: "Email:",
      phone: "+30 210 0000000",
      mobile: "+30 69 00000000",
      email: "zipalife@gmail.com",
      nameInput: "Ονοματεπώνυμο",
      emailInput: "Email",
      messageInput: "Μήνυμα",
      submit: "Αποστολή μηνύματος",
      sending: "Αποστολή...",
      success:
        "Το μήνυμά σας στάλθηκε επιτυχώς. Θα λάβετε επιβεβαίωση στο email σας.",
      error:
        "Δεν ήταν δυνατή η αποστολή του μηνύματος. Δοκιμάστε ξανά ή στείλτε μας email.",
    },
    frontPageContent:
      "Οι online συνεδρίες συστημικής ψυχοθεραπείας με ψυχολόγο και ψυχοθεραπεύτρια μπορούν να υποστηρίξουν θέματα άγχους, αυτογνωσίας, σχέσεων, ορίων και συναισθηματικής δυσκολίας. Η πρώτη επικοινωνία βοηθά να δούμε αν το πλαίσιο ταιριάζει στις ανάγκες σας.",
    footerCredit: "Made by Youri Janssen™",
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
      faq: "FAQ",
      articles: "Articles",
      contact: "Contact",
      greek: "Greek",
      english: "English",
      menu: "Menu",
    },
    hero: {
      kicker: "Online psychotherapy",
      title: "Psychologist and psychotherapist for online systemic psychotherapy",
      lead: "Zoi Pantou is a psychologist and psychotherapist offering online systemic psychotherapy sessions in Greek. Each session lasts one hour, takes place in a steady and confidential framework, and costs 40 euros.",
      servicesCta: "View online sessions",
      contactCta: "Book an online appointment",
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
    approach: {
      title: "Online systemic psychotherapy",
      body: [
        "Online systemic psychotherapy is based on trust, acceptance and stability. In each session we make room for lived experience, organize the request and look at the person within relationships, family patterns and the contexts that shape everyday life.",
        "The process adapts to each person’s pace. The aim is meaningful understanding of difficulties, stronger self-awareness and new ways of relating to yourself and others within a safe online therapeutic framework.",
      ],
      points: [
        "Stable framework and clear therapeutic boundaries",
        "Systemic understanding of relationships, family and personal difficulties",
        "Regular progress review",
      ],
    },
    quote: {
      text: "Psychotherapy is a safe place where our voice can be heard without fear and change is built with consistency.",
      author: "Zoi Pantou",
    },
    profile: {
      kicker: "Profile",
      name: "Zoi Pantou",
      role: "Psychologist - Psychotherapist",
      bio: "As a psychologist and psychotherapist with modern clinical training and emphasis on systemic psychotherapy, I offer online sessions in Greek for people looking for a steady and human framework for personal change.",
      credentials: [
        "Licensed psychologist",
        "Specialization in systemic psychotherapy",
        "Ongoing supervision and professional training",
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
      title: "Contact and appointments",
      text: "Fill in the form and we will contact you about the first online appointment. Sessions cost 40 euros per hour.",
      phoneLabel: "Landline:",
      mobileLabel: "Mobile:",
      emailLabel: "Email:",
      phone: "+30 210 0000000",
      mobile: "+30 69 00000000",
      email: "zipalife@gmail.com",
      nameInput: "Full name",
      emailInput: "Email",
      messageInput: "Message",
      submit: "Send message",
      sending: "Sending...",
      success:
        "Your message was sent successfully. You will receive a confirmation by email.",
      error:
        "The message could not be sent. Please try again or email us directly.",
    },
    frontPageContent:
      "Online systemic psychotherapy sessions with a psychologist and psychotherapist can support anxiety, self-awareness, relationships, boundaries and emotional difficulty. The first contact helps us see whether the framework fits your needs.",
    footerCredit: "Made by Youri Janssen™",
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
      title: "Online Συνεδρίες",
      summary:
        "Online συνεδρίες συστημικής ψυχοθεραπείας στα ελληνικά με ψυχολόγο και ψυχοθεραπεύτρια, διάρκειας μίας ώρας, με σταθερό πλαίσιο, εμπιστευτικότητα και κόστος 40 ευρώ.",
      points: [
        "Σταθερό online ραντεβού διάρκειας μίας ώρας",
        "Κόστος 40 ευρώ ανά συνεδρία",
        "Συστημική ψυχοθεραπεία για σχέσεις, άγχος, όρια και αυτογνωσία",
        "Ασφαλής πλατφόρμα επικοινωνίας",
      ],
    },
  ],
  en: [
    {
      key: "online",
      slug: "online-synedries",
      title: "Online Sessions",
      summary:
        "One-hour online systemic psychotherapy sessions in Greek with a psychologist and psychotherapist, a steady framework, confidentiality and a rate of 40 euros.",
      points: [
        "Stable one-hour online appointment",
        "40 euros per session",
        "Systemic psychotherapy for relationships, anxiety, boundaries and self-awareness",
        "Secure communication platform",
      ],
    },
  ],
} satisfies Record<Language, Service[]>;

// Finds a service by its public slug for dynamic Next.js routes.
export function getServiceBySlug(language: Language, slug: string) {
  return services[language].find((service) => service.slug === slug);
}
