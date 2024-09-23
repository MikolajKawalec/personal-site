import Header from './components/large_components/header';
// import SkillDongle from './components/smaller_components/skill_dongle';
import { ThemeProvider } from './components/theme-provider';

import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import { Separator } from './components/ui/separator';
import LargeHeading from './components/smaller_components/large_heading';

import { SkillLevel } from './lib/helpers';
import SkillWrapper from './components/smaller_components/skill_wrapper';
import MinorSkill from './components/smaller_components/minor_skill_badge';
import MinorSkillText from './components/smaller_components/minor_skill_text';

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
          className="min-h-screen flex flex-col items-center"
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
          <div className="grid grid-cols-5 w-full">
            <MinorSkillText>REST</MinorSkillText>
            <MinorSkillText>GraphQL</MinorSkillText>
            <MinorSkillText>SQL</MinorSkillText>
            <MinorSkillText>HTML</MinorSkillText>
            <MinorSkillText>CSS</MinorSkillText>
            <MinorSkillText>SCSS</MinorSkillText>
            <MinorSkillText>JS</MinorSkillText>
            <MinorSkillText>Node.js</MinorSkillText>
            <MinorSkillText>Express.js</MinorSkillText>
            <MinorSkillText>Git</MinorSkillText>
            <MinorSkillText>Linux</MinorSkillText>
            <MinorSkillText>Windows</MinorSkillText>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
