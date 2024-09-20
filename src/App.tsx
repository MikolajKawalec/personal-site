import Header from './components/large_components/header';
import SkillDongle from './components/smaller_components/skill_dongle';
import { ThemeProvider } from './components/theme-provider';
import cppLogo from './assets/cpp_logo.png';

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <div className="bg-background flex flex-col min-h-screen max-w-4xl mx-auto gap-y-4">
        <div className="min-h-screen bg-yellow-500 relative">
          <Header />
          {/* ideas for the thins on the right of it */}
          {/* left container div */}
          <div className="absolute inset-y-0 left-0 w-60 bg-red-700 flex flex-col justify-around gap-y-12">
            <div className="bg-accent flex flex-row-reverse justify-between h-20 py-2 px-1 align-middle rounded-r-2xl w-40">
              <img
                loading="lazy"
                src={cppLogo}
                alt={'c++'}
                className="w-8 h-8 rounded-full border-2"
              />
              <b>C++</b>
              <div></div>
            </div>
          </div>
          {/* gradient overlay div */}

          {/* <SkillDongle
            bIsLeft={false}
            numberInLine={0}
            imagePath={cppLogo}
            imageAlt="c++"
            text="C++"
          />
          <SkillDongle
            bIsLeft={false}
            numberInLine={1}
            imagePath={cppLogo}
            imageAlt="c++"
            text="C++"
          /> */}

          <div className="absolute right-1 bottom-8 min-w-32 min-h-6 -rotate-12 bg-slate-600 rounded-l-3xl p-2">
            unreal engine
          </div>
          <div className="absolute right-1 bottom-20 min-w-32 min-h-6 -rotate-12 bg-slate-600 rounded-l-3xl p-2">
            C++
          </div>

          {/* how to make them hide on the right */}
          <div className="absolute min-h-screen w-4 bg-teal-700 right-0 z-10"></div>
        </div>

        <div className="min-h-screen bg-red-500 relative"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
