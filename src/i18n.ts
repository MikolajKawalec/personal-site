import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "Hi I'm",
        roles: {
          gameDeveloper: "Game Developer",
          frontendDeveloper: "Frontend Developer",
          backendDeveloper: "Backend Developer",
          student: "Student",
        },
      },
      nav: {
        skills: "skills",
        education: "education",
        experience: "experience",
        contact: "contact",
      },
      sections: {
        skills: "Skills",
        education: "Education",
        experience: "Experience",
        contact: "Contact",
      },
      theme: {
        toggle: "Toggle theme",
        light: "Light",
        dark: "Dark",
        system: "System",
      },
      education: {
        pjatk: {
          studies: "Computer Science",
        },
        sgh: {
          studies: "Economics",
        },
        uoft: {
          studies: "Mathematics and Computer Science",
        },
      },
      experience: {
        samsung: {
          role: "ETS Intern",
        },
      },
      skills: {
        levels: {
          beginner: "Beginner",
          semiAdvanced: "Semi-Advanced",
          advanced: "Advanced",
        },
        primary: {
          cpp: "C++",
          unrealEngine: "Unreal Engine",
          typeScript: "TypeScript",
          react: "React",
          nextJs: "Next.js",
          java: "Java",
          python: "Python",
          restApi: "REST API",
        },
        minor: {
          c: "C",
          css: "CSS",
          tailwindCss: "Tailwind CSS",
          sql: "SQL",
          html: "HTML",
          databases: "Databases",
          oracleSql: "Oracle SQL",
          postgresSql: "PostgreSQL",
          fastApi: "FastAPI",
          unity: "Unity",
          flutter: "Flutter",
          dart: "Dart",
          linux: "Linux",
          uiUx: "UI/UX",
          design: "Design",
          algorithms: "Algorithms",
          testing: "Testing",
          msOffice: "MS Office",
          math: "Math",
          physics: "Physics",
          econ: "Economics",
        },
      },
      footer: {
        copyright: "Mikolaj Kawalec {{year}}",
      },
    },
  },
  pl: {
    translation: {
      hero: {
        greeting: "Cześć,",
        roles: {
          gameDeveloper: "Game developer",
          frontendDeveloper: "Frontend developer",
          backendDeveloper: "Backend developer",
          student: "Student",
        },
      },
      nav: {
        skills: "umiejętności",
        education: "wykształcenie",
        experience: "doświadczenie",
        contact: "kontakt",
      },
      sections: {
        skills: "Umiejętności",
        education: "Wykształcenie",
        experience: "Doświadczenie",
        contact: "Kontakt",
      },
      theme: {
        toggle: "Przełącz motyw",
        light: "Jasny",
        dark: "Ciemny",
        system: "Systemowy",
      },
      education: {
        pjatk: {
          studies: "Informatyka",
        },
        sgh: {
          studies: "Ekonomia",
        },
        uoft: {
          studies: "Matematyka i informatyka",
        },
      },
      experience: {
        samsung: {
          role: "Stażysta ETS",
        },
      },
      skills: {
        levels: {
          beginner: "Początkujący",
          semiAdvanced: "Średnio zaawansowany",
          advanced: "Zaawansowany",
        },
        primary: {
          cpp: "C++",
          unrealEngine: "Unreal Engine",
          typeScript: "TypeScript",
          react: "React",
          nextJs: "Next.js",
          java: "Java",
          python: "Python",
          restApi: "REST API",
        },
        minor: {
          c: "C",
          css: "CSS",
          tailwindCss: "Tailwind CSS",
          sql: "SQL",
          html: "HTML",
          databases: "Bazy danych",
          oracleSql: "Oracle SQL",
          postgresSql: "PostgreSQL",
          fastApi: "FastAPI",
          unity: "Unity",
          flutter: "Flutter",
          dart: "Dart",
          linux: "Linux",
          uiUx: "UI/UX",
          design: "Projektowanie",
          algorithms: "Algorytmy",
          testing: "Testowanie",
          msOffice: "MS Office",
          math: "Matematyka",
          physics: "Fizyka",
          econ: "Ekonomia",
        },
      },
      footer: {
        copyright: "Mikolaj Kawalec {{year}}",
      },
    },
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pl"],
    nonExplicitSupportedLngs: true,
    debug: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
