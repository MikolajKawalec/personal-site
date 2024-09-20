import Header from './components/large_components/header';
// import SkillDongle from './components/smaller_components/skill_dongle';
import { ThemeProvider } from './components/theme-provider';

import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import { Separator } from './components/ui/separator';

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
            <h2 className="text-9xl font-extrabold text-primary">Kawalec</h2>
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
            <a href="#skills">
              <ArrowDown size={64} />
            </a>
          </div>
        </div>
        {/* separator does not seem to work */}
        <Separator />
        <div
          id="skills"
          className="min-h-screen bg-red-500 relative"
        ></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
