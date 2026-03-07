import Header from "./components/large_components/header";
// import SkillDongle from './components/smaller_components/skill_dongle';
import { ThemeProvider } from "./components/theme-provider";

import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import { Separator } from "./components/ui/separator";
import LargeHeading from "./components/smaller_components/large_heading";

import { PRIMARY_SKILLS } from "./lib/helpers";
import SkillWrapper from "./components/smaller_components/skill_wrapper";
import UniInformation from "./components/smaller_components/uni_information";
import Contact from "./components/smaller_components/contact";
import Footer from "./components/large_components/footer";
import MinorSkillWrapper from "./components/large_components/minor_skill_wrapper";
import { useTranslation } from "react-i18next";
import ParticlesComponent from "./components/background/particles";
// import ThemeChecker from './components/large_components/theme_checker';

function App() {
  const { t } = useTranslation();
  const educationEntries = [
    {
      name: "Polsko-Japońska Akademia Technik Komputerowych",
      studies: t("education.pjatk.studies"),
      years: "2023-2026",
    },
    {
      name: "Szkoła Glówna Handlowa",
      studies: t("education.sgh.studies"),
      years: "2023-2026",
    },
    {
      name: "University of Toronto",
      studies: t("education.uoft.studies"),
      years: "2021-2022",
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background relative mx-auto flex min-h-screen w-fit flex-col gap-y-4 overflow-visible xl:max-w-4xl">
        {/* LEFT PATTERN: Persistent on site side */}
        <div className="pointer-events-none absolute top-0 -left-[300px] hidden h-full w-[300px] opacity-10 xl:block">
          {/* Ensure the SVG inside takes up full width/height */}
          {/* <div className="sticky top-10 h-96 w-full"> */}
          {/* <AbstractLeftPattern /> */}
          {/* </div> */}
        </div>

        {/* RIGHT PATTERN: Interactive Particles */}
        {/* FIX: Added a specific width (w-[500px]) and ensured it spans the height */}
        <div className="bg-destructive pointer-events-none absolute top-0 -right-12 hidden h-full opacity-30 xl:block">
          {/* trelemorele */}
          <div className="sticky top-20 h-[800px] w-full">
            <ParticlesComponent />
          </div>
        </div>
        <Header />
        <div className="px-2 xl:px-0">
          <div className="flex min-h-[100svh] min-h-[calc(100vh-4rem)] flex-col">
            <div className="items flex flex-1 flex-col justify-center gap-y-12 text-center">
              <h2 className="text-7xl font-extrabold xl:text-9xl">
                {t("hero.greeting")}
              </h2>
              <h2 className="text-7xl font-extrabold xl:text-9xl">Mikołaj</h2>
              <h2 className="text-accent text-7xl font-extrabold transition-all duration-500 ease-in-out hover:scale-110 xl:text-9xl">
                Kawalec
              </h2>
            </div>
            <div className="flex flex-[0.25] flex-col items-center justify-center text-center text-3xl font-semibold xl:text-6xl">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  1000,
                  t("hero.roles.gameDeveloper"),
                  1000,
                  t("hero.roles.frontendDeveloper"),
                  1000,
                  t("hero.roles.backendDeveloper"),
                  1000,
                  t("hero.roles.student"),
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex flex-[0.25] flex-col items-center justify-center">
              <a
                href="#skills"
                className="group transition-all duration-300 ease-in-out hover:scale-125"
              >
                <ArrowDown size={96} className="group-hover:stroke-primary" />
              </a>
            </div>
          </div>
          {/* separator does not seem to work */}
          <Separator />
          <div
            id="skills"
            className="flex flex-col items-center justify-between py-2"
          >
            <LargeHeading>{t("sections.skills")}</LargeHeading>
            <div className="w-full py-10">
              {PRIMARY_SKILLS.map(({ skill, level }) => (
                <SkillWrapper
                  key={skill}
                  skill={t(`skills.primary.${skill}`)}
                  level={level}
                />
              ))}
            </div>
            <MinorSkillWrapper />
          </div>
          <Separator />
          <div
            id="education"
            className="flex flex-col items-center justify-between gap-y-6 py-2 lg:gap-y-12"
          >
            <LargeHeading>{t("sections.education")}</LargeHeading>
            {educationEntries.map(({ name, studies, years }) => (
              <UniInformation
                key={name}
                name={name}
                studies={studies}
                years={years}
              />
            ))}
          </div>
          <Separator />
          <div id="experience" className="flex flex-col items-center py-2">
            <LargeHeading>{t("sections.experience")}</LargeHeading>
            <UniInformation
              name="Samsung Reasearch and Development"
              studies={t("experience.samsung.role")}
              years="2023"
              className="mt-10"
            />
          </div>
          <Separator />
          <div id="contact" className="flex flex-col items-center py-2">
            <LargeHeading>{t("sections.contact")}</LargeHeading>
            <div className="flex min-h-32 w-full flex-col items-center justify-between gap-y-4 xl:flex-row">
              <Contact Icon={Phone} text="+48-727-555-580" />
              <Contact Icon={Mail} text="mikolaj.kawalec@gmail.com" />
              <Contact
                Icon={Github}
                text="MikolajKawalec"
                linkTo="https://github.com/MikolajKawalec"
              />
            </div>
          </div>
          <Separator />
          <b>major fix 3</b>
          <ParticlesComponent />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
