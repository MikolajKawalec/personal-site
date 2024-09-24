import ColorCheck from '../smaller_components/color_check';

const ThemeChecker = () => {
  return (
    <div className="flex flex-row justify-between gap-x-6 gap-y-6 items-center flex-wrap">
      <ColorCheck cssClass="background" />
      <ColorCheck cssClass="foreground" />
      <ColorCheck
        cssClass="primary"
        className="text-primary-foreground"
      />
      <ColorCheck
        cssClass="secondary"
        className="text-secondary-foreground"
      />
      <ColorCheck
        cssClass="accent"
        className="text-accent-foreground"
      />
      <ColorCheck
        cssClass="muted"
        className="text-muted-foreground"
      />
      <ColorCheck cssClass="border" />
      {/* I guess no more are even used */}
      {/* <ColorCheck cssClass="popover" /> */}
      {/* <ColorCheck cssClass="card" /> */}
    </div>
  );
};

export default ThemeChecker;
