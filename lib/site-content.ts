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
    brand: "Ζωή Παντού",
    brandMark: "ΖΠ",
    metaTitle: "Ζωή Παντού",
    metaDescription:
      "Online ψυχοθεραπεία στα ελληνικά με σταθερό πλαίσιο, εμπιστοσύνη και κόστος 40 ευρώ ανά ώρα.",
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
      title: "Θεραπευτικός χώρος με ζεστασιά, διακριτικότητα και φροντίδα",
      lead: "Προσφέρω online ψυχοθεραπεία στα ελληνικά σε ένα ήρεμο πλαίσιο εμπιστοσύνης. Προς το παρόν οι συνεδρίες πραγματοποιούνται μόνο online και κοστίζουν 40 ευρώ ανά ώρα.",
      servicesCta: "Δείτε θεραπείες",
      contactCta: "Κλείστε ραντεβού",
      imagePlaceholder:
        "Προσθέστε κεντρική φωτογραφία χώρου ή πορτρέτο από τη σελίδα Αρχικής (Featured Image).",
    },
    gallery: {
      one: "Ήρεμο online θεραπευτικό πλαίσιο",
      two: "Συνεδρίες από τον δικό σας ασφαλή χώρο",
      approachImage: "Ζεστός, ήσυχος online θεραπευτικός χώρος",
      profileImage: "Φωτογραφία προφίλ θεραπεύτριας/θεραπευτή",
    },
    approach: {
      title: "Η προσέγγιση",
      body: [
        "Η θεραπευτική σχέση βασίζεται στην εμπιστοσύνη, στην αποδοχή και στη σταθερότητα. Σε κάθε συνεδρία δίνουμε χώρο στο βίωμα, οργανώνουμε το αίτημα και συνδέουμε τη θεωρία με πρακτικά βήματα καθημερινής αλλαγής.",
        "Η διαδικασία προσαρμόζεται στον ρυθμό του κάθε ανθρώπου. Στόχος είναι η ουσιαστική κατανόηση των δυσκολιών, η ενίσχυση της αυτογνωσίας και η δημιουργία νέων τρόπων σύνδεσης με τον εαυτό και τους άλλους.",
      ],
      points: [
        "Σταθερό πλαίσιο και σαφή θεραπευτικά όρια",
        "Εξατομικευμένο πλάνο θεραπείας",
        "Τακτική αξιολόγηση προόδου",
      ],
    },
    quote: {
      text: "Η ψυχοθεραπεία είναι ένας ασφαλής τόπος όπου η φωνή μας ακούγεται χωρίς φόβο και η αλλαγή χτίζεται με συνέπεια.",
      author: "Ζωή Παντού",
    },
    profile: {
      kicker: "Προφίλ",
      name: "Ζωή Παντού",
      role: "Ψυχολόγος - Ψυχοθεραπεύτρια",
      bio: "Με σύγχρονη κλινική εκπαίδευση και έμφαση στη θεραπευτική σχέση, προσφέρω ένα σταθερό και ανθρώπινο πλαίσιο για ουσιαστική προσωπική αλλαγή.",
      credentials: [
        "Άδεια άσκησης επαγγέλματος ψυχολόγου",
        "Μεταπτυχιακή εξειδίκευση στην ψυχοθεραπεία",
        "Συνεχής εποπτεία και επαγγελματική επιμόρφωση",
      ],
    },
    servicesHeading: {
      title: "Online συνεδρίες",
      text: "Προς το παρόν είναι διαθέσιμες μόνο online συνεδρίες ψυχοθεραπείας με κόστος 40 ευρώ ανά ώρα.",
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
      "Η αυτοφροντίδα δεν χρειάζεται να είναι σύνθετη. Μικρές και σταθερές κινήσεις μέσα στην εβδομάδα μπορούν να ενισχύσουν την ψυχική ανθεκτικότητα.",
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
    metaTitle: "Zoi Pantou",
    metaDescription:
      "Online psychotherapy in Greek with a steady framework, trust and a rate of 40 euros per hour.",
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
      title: "A therapeutic space with warmth, discretion and care",
      lead: "I offer online psychotherapy in Greek within a calm framework of trust. For now, sessions are available online only and cost 40 euros per hour.",
      servicesCta: "View therapies",
      contactCta: "Book an appointment",
      imagePlaceholder:
        "Add a central practice-room photo or portrait from the homepage featured image.",
    },
    gallery: {
      one: "Calm online therapeutic framework",
      two: "Sessions from your own safe space",
      approachImage: "Warm, quiet online therapeutic space",
      profileImage: "Therapist profile photo",
    },
    approach: {
      title: "The approach",
      body: [
        "The therapeutic relationship is based on trust, acceptance and stability. In each session we make room for lived experience, organize the request and connect theory with practical steps for everyday change.",
        "The process adapts to each person’s pace. The aim is meaningful understanding of difficulties, stronger self-awareness and new ways of relating to yourself and others.",
      ],
      points: [
        "Stable framework and clear therapeutic boundaries",
        "Personalized therapy plan",
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
      bio: "With modern clinical training and emphasis on the therapeutic relationship, I offer a stable and human framework for meaningful personal change.",
      credentials: [
        "Licensed psychologist",
        "Postgraduate specialization in psychotherapy",
        "Ongoing supervision and professional training",
      ],
    },
    servicesHeading: {
      title: "Online sessions",
      text: "For now, only online psychotherapy sessions are available at 40 euros per hour.",
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
      "Self-care does not need to be complicated. Small and steady actions during the week can strengthen psychological resilience.",
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
        "Online ψυχοθεραπευτικές συνεδρίες διάρκειας μίας ώρας, με σταθερό πλαίσιο, εμπιστευτικότητα και κόστος 40 ευρώ.",
      points: [
        "Σταθερό online ραντεβού διάρκειας μίας ώρας",
        "Κόστος 40 ευρώ ανά συνεδρία",
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
        "One-hour online psychotherapy sessions with a steady framework, confidentiality and a rate of 40 euros.",
      points: [
        "Stable one-hour online appointment",
        "40 euros per session",
        "Secure communication platform",
      ],
    },
  ],
} satisfies Record<Language, Service[]>;

// Finds a service by its public slug for dynamic Next.js routes.
export function getServiceBySlug(language: Language, slug: string) {
  return services[language].find((service) => service.slug === slug);
}
