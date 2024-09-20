import { FC } from 'react';

const height: number = 12;
const base: number = height / 2;
const cssDir: string =
  'absolute bg-accent flex flex-row justify-around gap-x-10 min-w-40' +
  ' h-' +
  height.toString();

interface SkillDongleProps {
  bIsLeft: boolean;
  imagePath: string;
  imageAlt: string;
  numberInLine: number;
  text: string;
}

const SkillDongle: FC<SkillDongleProps> = ({
  bIsLeft,
  numberInLine,
  imageAlt,
  imagePath,
  text,
}) => {
  const offset = base + height * numberInLine;
  const leftOrRight: string = bIsLeft ? ' left-' + base : ' right-' + base;
  const topOrBottom: string = bIsLeft ? ' top-' + offset : ' bottom-' + offset;
  const finalizedCSS: string = cssDir + leftOrRight + topOrBottom;
  return (
    <div className={finalizedCSS}>
      <img
        loading="lazy"
        src={imagePath}
        alt={imageAlt}
        className="w-8 h-8 rounded-full border-2"
      />
      {text}
    </div>
  );
};

export default SkillDongle;
