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
      "Ψυχοθεραπεία στην Αθήνα και online, με έμφαση στην εμπιστοσύνη, τη σταθερότητα και την προσωπική φροντίδα.",
    nav: {
      mainLabel: "Κεντρικό μενού",
      footerLabel: "Μενού υποσέλιδου",
      languageLabel: "Αλλαγή γλώσσας",
      home: "Αρχική",
      about: "Σχετικά",
      therapies: "Θεραπείες",
      faq: "Συχνές ερωτήσεις",
      articles: "Άρθρα",
      location: "Πού θα μας βρείτε",
      contact: "Επικοινωνία",
      greek: "Ελληνικά",
      english: "Αγγλικά",
      menu: "Μενού",
    },
    hero: {
      kicker: "Ψυχοθεραπεία στην Αθήνα",
      title: "Θεραπευτικός χώρος με ζεστασιά, διακριτικότητα και φροντίδα",
      lead: "Είμαι 26 ετών, με καταγωγή από την Ελλάδα, και προσφέρω ψυχοθεραπεία στα ελληνικά σε ένα ήρεμο πλαίσιο εμπιστοσύνης, δια ζώσης και online.",
      servicesCta: "Δείτε θεραπείες",
      contactCta: "Κλείστε ραντεβού",
      imagePlaceholder:
        "Προσθέστε κεντρική φωτογραφία χώρου ή πορτρέτο από τη σελίδα Αρχικής (Featured Image).",
    },
    gallery: {
      one: "Φωτογραφία γραφείου 1",
      two: "Φωτογραφία γραφείου 2",
      approachImage: "Ζεστός, ήσυχος θεραπευτικός χώρος",
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
      title: "Θεραπείες",
      text: "Επιλέξτε την ενότητα που ανταποκρίνεται στο αίτημά σας και δείτε αναλυτικές πληροφορίες για κάθε πλαίσιο.",
      link: "Δείτε αναλυτικά",
      includes: "Τι περιλαμβάνει",
      back: "Επιστροφή στις θεραπείες",
    },
    steps: {
      title: "Πώς ξεκινά η διαδικασία",
      items: [
        "Σύντομη επικοινωνία για διαθεσιμότητα και πρώτο αίτημα.",
        "Πρώτη συνεδρία αξιολόγησης και συμφωνία θεραπευτικού πλαισίου.",
        "Σταθερές συνεδρίες με στόχους και επαναξιολόγηση.",
      ],
    },
    faq: {
      title: "Συχνές ερωτήσεις",
      items: [
        {
          question: "Πόσο διαρκεί μια συνεδρία;",
          answer:
            "Η διάρκεια είναι συνήθως 50 λεπτά. Η συχνότητα συμφωνείται μαζί με βάση τις ανάγκες σας.",
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
    location: {
      title: "Πού θα μας βρείτε",
      addressLabel: "Διεύθυνση:",
      hoursLabel: "Ώρες λειτουργίας:",
      accessLabel: "Πρόσβαση:",
      address: "Λεωφ. Κηφισίας 00, Αθήνα",
      hours: "Δευτέρα - Παρασκευή, 10:00 - 20:00",
      access:
        "Πρόσβαση με μετρό και λεωφορεία, κοντά σε κεντρικούς οδικούς άξονες.",
      appointment: "Κλείστε ραντεβού επικοινωνίας",
      mapTitle: "Χάρτης γραφείου",
      mapUrl: "https://www.google.com/maps?q=Athens%20Greece&output=embed",
    },
    contact: {
      title: "Επικοινωνία και ραντεβού",
      text: "Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας για το πρώτο ραντεβού γνωριμίας.",
      phoneLabel: "Σταθερό:",
      mobileLabel: "Κινητό:",
      emailLabel: "Email:",
      addressLabel: "Διεύθυνση:",
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
    footerCredit: "Made by Youri Janssen",
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
      "Psychotherapy in Athens and online, with emphasis on trust, consistency and personal care.",
    nav: {
      mainLabel: "Main menu",
      footerLabel: "Footer menu",
      languageLabel: "Change language",
      home: "Home",
      about: "About",
      therapies: "Therapies",
      faq: "FAQ",
      articles: "Articles",
      location: "Find us",
      contact: "Contact",
      greek: "Greek",
      english: "English",
      menu: "Menu",
    },
    hero: {
      kicker: "Psychotherapy in Athens",
      title: "A therapeutic space with warmth, discretion and care",
      lead: "I am 26 years old, originally from Greece, and I offer psychotherapy in Greek within a calm framework of trust, both in person and online.",
      servicesCta: "View therapies",
      contactCta: "Book an appointment",
      imagePlaceholder:
        "Add a central practice-room photo or portrait from the homepage featured image.",
    },
    gallery: {
      one: "Office photo 1",
      two: "Office photo 2",
      approachImage: "Warm, quiet therapeutic space",
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
      title: "Therapies",
      text: "Choose the area that fits your request and read detailed information about each framework.",
      link: "View details",
      includes: "What it includes",
      back: "Back to therapies",
    },
    steps: {
      title: "How the process starts",
      items: [
        "Brief contact about availability and your initial request.",
        "First assessment session and agreement on the therapeutic framework.",
        "Steady sessions with goals and reassessment.",
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "How long is a session?",
          answer:
            "Sessions usually last 50 minutes. Frequency is agreed together based on your needs.",
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
    location: {
      title: "Find us",
      addressLabel: "Address:",
      hoursLabel: "Opening hours:",
      accessLabel: "Access:",
      address: "Kifisias Avenue 00, Athens",
      hours: "Monday - Friday, 10:00 - 20:00",
      access:
        "Accessible by metro and buses, close to central road connections.",
      appointment: "Book a contact appointment",
      mapTitle: "Office map",
      mapUrl: "https://www.google.com/maps?q=Athens%20Greece&output=embed",
    },
    contact: {
      title: "Contact and appointments",
      text: "Fill in the form and we will contact you about the first introductory appointment.",
      phoneLabel: "Landline:",
      mobileLabel: "Mobile:",
      emailLabel: "Email:",
      addressLabel: "Address:",
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
    footerCredit: "Made by Youri Janssen",
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
      key: "individual",
      slug: "atomiki-psychotherapeia",
      title: "Ατομική Ψυχοθεραπεία",
      summary:
        "Εξατομικευμένη θεραπευτική εργασία για άγχος, αυτοεκτίμηση, συναισθηματική ρύθμιση και προσωπικούς στόχους.",
      points: [
        "Διαχείριση άγχους και κρίσεων πανικού",
        "Ενίσχυση αυτοεκτίμησης και ορίων",
        "Πρακτικά εργαλεία για την καθημερινότητα",
      ],
    },
    {
      key: "couples",
      slug: "symvouleutiki-zeugous",
      title: "Συμβουλευτική Ζεύγους",
      summary:
        "Δομημένη υποστήριξη για επικοινωνία, επανασύνδεση και διαχείριση επαναλαμβανόμενων συγκρούσεων.",
      points: [
        "Ασφαλής χώρος διαλόγου χωρίς κατηγορία",
        "Κατανόηση κύκλων σύγκρουσης",
        "Εργαλεία επικοινωνίας και συνεργασίας",
      ],
    },
    {
      key: "family",
      slug: "oikogeneiaki-psychotherapeia",
      title: "Οικογενειακή Ψυχοθεραπεία",
      summary:
        "Συστημική προσέγγιση για βελτίωση σχέσεων, ρόλων και ορίων μέσα στο οικογενειακό πλαίσιο.",
      points: [
        "Αποσαφήνιση ρόλων και προσδοκιών",
        "Ενίσχυση συνεργασίας γονέων και παιδιών",
        "Υποστήριξη σε μεταβατικές περιόδους",
      ],
    },
    {
      key: "online",
      slug: "online-synedries",
      title: "Online Συνεδρίες",
      summary:
        "Συνεδρίες εξ αποστάσεως με σταθερό πλαίσιο, εμπιστευτικότητα και ευελιξία για άτομα στην Ελλάδα ή στο εξωτερικό.",
      points: [
        "Σταθερό εβδομαδιαίο ραντεβού",
        "Ασφαλής πλατφόρμα επικοινωνίας",
        "Ίδια θεραπευτική ποιότητα με τη δια ζώσης συνεδρία",
      ],
    },
  ],
  en: [
    {
      key: "individual",
      slug: "atomiki-psychotherapeia",
      title: "Individual Psychotherapy",
      summary:
        "Personalized therapeutic work for anxiety, self-esteem, emotional regulation and personal goals.",
      points: [
        "Managing anxiety and panic attacks",
        "Strengthening self-esteem and boundaries",
        "Practical tools for everyday life",
      ],
    },
    {
      key: "couples",
      slug: "symvouleutiki-zeugous",
      title: "Couples Counseling",
      summary:
        "Structured support for communication, reconnection and managing recurring conflicts.",
      points: [
        "A safe space for dialogue without blame",
        "Understanding cycles of conflict",
        "Tools for communication and cooperation",
      ],
    },
    {
      key: "family",
      slug: "oikogeneiaki-psychotherapeia",
      title: "Family Therapy",
      summary:
        "A systemic approach to improving relationships, roles and boundaries within the family framework.",
      points: [
        "Clarifying roles and expectations",
        "Strengthening cooperation between parents and children",
        "Support during transitional periods",
      ],
    },
    {
      key: "online",
      slug: "online-synedries",
      title: "Online Sessions",
      summary:
        "Remote sessions with a stable framework, confidentiality and flexibility for people in Greece or abroad.",
      points: [
        "Stable weekly appointment",
        "Secure communication platform",
        "The same therapeutic quality as in-person sessions",
      ],
    },
  ],
} satisfies Record<Language, Service[]>;

// Finds a service by its public slug for dynamic Next.js routes.
export function getServiceBySlug(language: Language, slug: string) {
  return services[language].find((service) => service.slug === slug);
}
