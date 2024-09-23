import Header from './components/large_components/header';
// import SkillDongle from './components/smaller_components/skill_dongle';
import { ThemeProvider } from './components/theme-provider';

import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Mail, Phone } from 'lucide-react';
import { Separator } from './components/ui/separator';
import LargeHeading from './components/smaller_components/large_heading';

import { SkillLevel } from './lib/helpers';
import SkillWrapper from './components/smaller_components/skill_wrapper';
import MinorSkillText from './components/smaller_components/minor_skill_text';
import UniInformation from './components/smaller_components/uni_information';
import Contact from './components/smaller_components/contact';
import Footer from './components/large_components/footer';

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <div className="bg-background flex flex-col min-h-screen max-w-4xl mx-auto gap-y-4">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 flex flex-col justify-center items text-center gap-y-12">
            <h2 className="text-9xl font-extrabold">Hi I'm</h2>
            <h2 className="text-9xl font-extrabold">Mikołaj</h2>
            <h2 className="text-9xl font-extrabold text-primary hover:scale-110 hover:text-accent transition-all duration-500 ease-in-out">
              Kawalec
            </h2>
          </div>
          <div className="flex-[0.25] flex flex-col justify-center items-center text-center font-semibold text-6xl">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1000,
                'Game Developer',
                1000,
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000,
                'Student',
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex-[0.25] flex flex-col justify-center items-center">
            <a
              href="#skills"
              className="
            hover:scale-125 transition-all duration-300 ease-in-out group"
            >
              <ArrowDown
                size={96}
                className="group-hover:stroke-primary"
              />
            </a>
          </div>
        </div>
        {/* separator does not seem to work */}
        <Separator />
        <div
          id="skills"
          className="min-h-screen flex flex-col items-center justify-between py-2"
        >
          <LargeHeading>Skills</LargeHeading>
          <div className="w-full py-10">
            <SkillWrapper
              skill="C++"
              level={SkillLevel['Semi-Advanced']}
            />
            <SkillWrapper
              skill="Unreal Engine"
              level={SkillLevel['Semi-Advanced']}
            />
            <SkillWrapper
              skill="Typescript"
              level={SkillLevel['Semi-Advanced']}
            />
            <SkillWrapper
              skill="React"
              level={SkillLevel['Semi-Advanced']}
            />
            <SkillWrapper
              skill="Next.js"
              level={SkillLevel['Semi-Advanced']}
            />
            <SkillWrapper
              skill="Java"
              level={SkillLevel['Semi-Advanced']}
            />
            <SkillWrapper
              skill="Python"
              level={SkillLevel['Semi-Advanced']}
            />
            <SkillWrapper
              skill="API"
              level={SkillLevel.Beginner}
            />
          </div>
          <div className="grid grid-cols-7 w-full">
            <MinorSkillText>C</MinorSkillText>
            <MinorSkillText>CSS</MinorSkillText>
            <MinorSkillText>Tailwind CSS</MinorSkillText>
            <MinorSkillText>SQL</MinorSkillText>
            <MinorSkillText>HTML</MinorSkillText>
            <MinorSkillText>Databases</MinorSkillText>
            <MinorSkillText>Oracle SQL</MinorSkillText>
            <MinorSkillText>PostgresSQL</MinorSkillText>
            <MinorSkillText>Fast API</MinorSkillText>
            <MinorSkillText>Unity</MinorSkillText>
            <MinorSkillText>FLutter</MinorSkillText>
            <MinorSkillText>Dart</MinorSkillText>
            <MinorSkillText>Linux</MinorSkillText>
            <MinorSkillText>UI/UX</MinorSkillText>
            <MinorSkillText>Design</MinorSkillText>
            <MinorSkillText>Algorithms</MinorSkillText>
            <MinorSkillText>Testing</MinorSkillText>
            <MinorSkillText>MS Office</MinorSkillText>
            <MinorSkillText>Math</MinorSkillText>
            <MinorSkillText>Physics</MinorSkillText>
            <MinorSkillText>Econ</MinorSkillText>
          </div>
        </div>
        <Separator />
        <div
          id="education"
          className="min-h-screen flex flex-col items-center justify-between py-2"
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
        <div
          id="experience"
          className="flex flex-col items-center py-2"
        >
          <LargeHeading>Experience</LargeHeading>
          <UniInformation
            name="Samsung Reasearch and Development"
            studies="ETS intern"
            years="2023"
            className="mt-10"
          />
        </div>
        <Separator />
        <div
          id="contact"
          className="flex flex-col items-center py-2"
        >
          <LargeHeading>Contact</LargeHeading>
          <div className="flex flex-row w-full justify-between items-center min-h-32">
            <Contact
              Icon={Phone}
              text="+48-727-555-580"
            />
            <Contact
              Icon={Mail}
              text="mikolaj.kawalec@gmail.com"
            />
            <Contact
              Icon={Github}
              text="MikolajKawalec"
              linkTo="https://github.com/MikolajKawalec"
            />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
