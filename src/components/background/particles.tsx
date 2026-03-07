import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);
  const [themeColor, setThemeColor] = useState("hsl(327, 58%, 4%)");

  useEffect(() => {
    const root = document.documentElement;

    // 1. Create a function to extract the color
    const updateThemeColor = () => {
      // Change "--foreground" to whatever variable you want the particles to use
      const rawColor = getComputedStyle(root)
        .getPropertyValue("--primary")
        .trim();
      if (rawColor) {
        setThemeColor(`hsl(${rawColor})`);
      }
    };

    // 2. Run it immediately on mount
    updateThemeColor();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateThemeColor();
        }
      });
    });

    observer.observe(root, { attributes: true });

    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => setInit(true));
    }

    return () => observer.disconnect();
  }, [init]);

  const W = 2;

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
        },
      },
      particles: {
        color: { value: themeColor },
        links: {
          color: themeColor,
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: W,
        },
        move: { enable: false, speed: 0.01 },
        number: { value: 250, density: { enable: true } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: W, max: 3 * W } },
      },
    }),
    [themeColor],
  );

  if (!init) return null;

  return (
    <Particles id="tsparticles" className="h-full w-full" options={options} />
  );
}
