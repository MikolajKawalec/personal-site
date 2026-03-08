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
        interests: "Interests",
        trackRacer: "Track Racer",
        plantSensor: "Plant Sensor",
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
          embeddedSystems: "Embedded",
          espidf: "ESP-IDF",
          esp32: "ESP32",
          arduino: "Arduino",
        },
      },
      footer: {
        copyright: "Mikolaj Kawalec {{year}}",
      },
      interests: {
        description:
          "I enjoy cycling and following American football, especially the Seattle Seahawks—the dark mode color scheme of this site is inspired by the team’s colors. In gaming, I’m particularly drawn to RPGs, city builders, and racing games. And, for reasons I can’t fully explain, I also think seals are incredibly cute.",
      },
      trackRacer: {
        description: [
          "In my free time, I’m developing Track Racer, a multiplayer racing game that has become a valuable learning project for understanding real-world game development challenges.",
          "Working on this project has given me hands-on experience with client–server architecture, multiplayer networking, and state replication. It has helped me understand what logic belongs on the server versus the client, and how synchronization affects gameplay.",
          "The image above shows a demo level for a game mode where players compete to push objects off a table. Beyond programming, the project has also shown me how many different systems—gameplay logic, networking, UI, assets, and polish—come together to create a complete game. Because of that, it remains an ongoing work in progress.",
        ],
      },
      plantSensor: {
        description: [
          "Recently, I started exploring electronics with the goal of building my own smart home devices.",
          "This plant sensor measures soil moisture and temperature and publishes the data via MQTT, allowing it to be discovered and monitored in Home Assistant. The device is built around an ESP32 and programmed using the ESP-IDF framework.",
          "The project introduced me to embedded development, hardware integration, and IoT communication patterns, and it represents my first step toward creating custom smart home hardware.",
        ],
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
        interests: "Zainteresowania",
        trackRacer: "Track Racer",
        plantSensor: "Plant Sensor",
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
          embeddedSystems: "Embedded",
          espidf: "ESP-IDF",
          esp32: "ESP32",
          arduino: "Arduino",
        },
      },
      footer: {
        copyright: "Mikolaj Kawalec {{year}}",
      },
      interests: {
        description:
          "Lubię jazdę na rowerze i oglądanie futbolu amerykańskiego, szczególnie drużyny Seattle Seahawks — kolorystyka trybu ciemnego na tej stronie jest inspirowana barwami zespołu. W grach najbardziej lubię RPG, city buildery oraz wyścigi. I z powodów, których sam do końca nie potrafię wyjaśnić, uważam też, że foki są niesamowicie urocze.",
      },
      trackRacer: {
        description: [
          "W wolnym czasie tworzę Track Racer — wieloosobową grę wyścigową, która stała się dla mnie wartościowym projektem do nauki rzeczywistych wyzwań związanych z tworzeniem gier.",
          "Praca nad tym projektem dała mi praktyczne doświadczenie z architekturą klient–serwer, sieciowością w grach multiplayer oraz replikacją stanu. Pomogła mi zrozumieć, jaka logika powinna znajdować się po stronie serwera, a jaka po stronie klienta, oraz jak synchronizacja wpływa na rozgrywkę.",
          "Obraz powyżej przedstawia poziom demonstracyjny trybu gry, w którym gracze rywalizują, zrzucając obiekty ze stołu. Poza samym programowaniem projekt pokazał mi także, jak wiele różnych systemów — logika rozgrywki, sieciowość, interfejs użytkownika, assety i dopracowanie — składa się na gotową grę. Z tego powodu projekt wciąż pozostaje w trakcie rozwoju.",
        ],
      },
      plantSensor: {
        description: [
          "Niedawno zacząłem interesować się elektroniką z myślą o tworzeniu własnych urządzeń do inteligentnego domu.",
          "Ten czujnik roślin mierzy wilgotność gleby oraz temperaturę i publikuje dane przez MQTT, dzięki czemu może być wykrywany i monitorowany w Home Assistant. Urządzenie jest oparte na ESP32 i zaprogramowane z użyciem frameworka ESP-IDF.",
          "Projekt wprowadził mnie w świat programowania systemów wbudowanych, integracji sprzętu oraz komunikacji w systemach IoT i jest moim pierwszym krokiem w stronę tworzenia własnego sprzętu smart home.",
        ],
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
