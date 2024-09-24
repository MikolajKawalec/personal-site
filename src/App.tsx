import Header from "./components/large_components/header";
// import SkillDongle from './components/smaller_components/skill_dongle';
import { ThemeProvider } from "./components/theme-provider";

import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import { Separator } from "./components/ui/separator";
import LargeHeading from "./components/smaller_components/large_heading";

import { SkillLevel } from "./lib/helpers";
import SkillWrapper from "./components/smaller_components/skill_wrapper";
import UniInformation from "./components/smaller_components/uni_information";
import Contact from "./components/smaller_components/contact";
import Footer from "./components/large_components/footer";
import MinorSkillWrapper from "./components/large_components/minor_skill_wrapper";
// import ThemeChecker from './components/large_components/theme_checker';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="mx-auto flex min-h-[calc(100vh)] w-fit flex-col gap-y-4 bg-background xl:max-w-4xl">
        <Header />
        <div className="px-2 xl:px-0">
          <div className="flex min-h-[100svh] min-h-[calc(100vh-4rem)] flex-col">
            <div className="items flex flex-1 flex-col justify-center gap-y-12 text-center">
              <h2 className="text-7xl font-extrabold xl:text-9xl">Hi I'm</h2>
              <h2 className="text-7xl font-extrabold xl:text-9xl">Mikołaj</h2>
              <h2 className="text-7xl font-extrabold text-accent transition-all duration-500 ease-in-out hover:scale-110 xl:text-9xl">
                Kawalec
              </h2>
            </div>
            <div className="flex flex-[0.25] flex-col items-center justify-center text-center text-3xl font-semibold xl:text-6xl">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  1000,
                  "Game Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Student",
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
            className="flex min-h-[100svh] min-h-[calc(100vh-4rem)] flex-col items-center justify-between py-2"
          >
            <LargeHeading>Skills</LargeHeading>
            <div className="w-full py-10">
              <SkillWrapper skill="C++" level={SkillLevel["Semi-Advanced"]} />
              <SkillWrapper
                skill="Unreal Engine"
                level={SkillLevel["Semi-Advanced"]}
              />
              <SkillWrapper
                skill="Typescript"
                level={SkillLevel["Semi-Advanced"]}
              />
              <SkillWrapper skill="React" level={SkillLevel["Semi-Advanced"]} />
              <SkillWrapper
                skill="Next.js"
                level={SkillLevel["Semi-Advanced"]}
              />
              <SkillWrapper skill="Java" level={SkillLevel["Semi-Advanced"]} />
              <SkillWrapper
                skill="Python"
                level={SkillLevel["Semi-Advanced"]}
              />
              <SkillWrapper skill="REST API" level={SkillLevel.Beginner} />
            </div>
            <MinorSkillWrapper />
          </div>
          <Separator />
          <div
            id="education"
            className="flex min-h-[100svh] min-h-[calc(100vh-4rem)] flex-col items-center justify-between py-2"
          >
            <LargeHeading>Education</LargeHeading>
            <UniInformation
              name="Polsko-Japońska Akademia Technik Komputerowych"
              studies="Computer Science"
              years="2023-2026"
            />
            <UniInformation
              name="Szkoła Glówna Handlowa"
              studies="Ekonomia"
              years="2023-2024"
            />
            <UniInformation
              name="University of Toronto"
              studies="Mathematics and Computer Science"
              years="2021-2022"
            />
          </div>
          <Separator />
          <div id="experience" className="flex flex-col items-center py-2">
            <LargeHeading>Experience</LargeHeading>
            <UniInformation
              name="Samsung Reasearch and Development"
              studies="ETS intern"
              years="2023"
              className="mt-10"
            />
          </div>
          <Separator />
          <div id="contact" className="flex flex-col items-center py-2">
            <LargeHeading>Contact</LargeHeading>
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
          {/* <ThemeChecker /> */}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
