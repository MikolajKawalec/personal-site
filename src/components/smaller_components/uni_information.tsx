import { cn } from '@/lib/utils';
import { FC } from 'react';

interface UniInformationProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  studies: string;
  years: string;
}

const UniInformation: FC<UniInformationProps> = ({
  name,
  studies,
  years,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('w-full flex flex-col gap-y-6', className)}
      {...props}
    >
      <h3 className="text-xl xl:text-5xl">{name}</h3>
      <h4 className="text-lg xl:text-3xl text-primary">{studies}</h4>
      <h4 className="text-base xl:text-xl text-muted">{years}</h4>
    </div>
  );
};

export default UniInformation;
