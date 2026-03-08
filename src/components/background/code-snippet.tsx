export default function CodeSnippet({ className }: { className?: string }) {
  return (
    <div
      // select-none prevents the user from accidentally highlighting this background text
      // blur-[2px] or blur-sm gives it that depth-of-field look
      className={`font-mono text-xs leading-loose blur-[2px] select-none ${className}`}
      aria-hidden="true"
      style={{
        // This fades the text out seamlessly at the bottom so there's no harsh edge
        maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 30%, transparent 100%)",
      }}
    >
      <div className="text-primary/40">
        import {"{"} useState, useEffect {"}"} from 'react';
      </div>
      <div className="text-primary/40">
        import {"{"} motion {"}"} from 'framer-motion';
      </div>
      <br />
      <div className="text-primary/70">
        export default <span className="text-primary/50">function</span>{" "}
        <span className="text-primary font-bold">MikolajProfile</span>() {"{"}
      </div>

      {/* Level 1 Indent */}
      <div className="text-primary/60 pl-4">
        const [skills, setSkills] = useState([]);
      </div>
      <div className="text-primary/60 pl-4">
        const [isCoding, setIsCoding] = useState(true);
      </div>
      <br />

      <div className="text-primary/70 pl-4">useEffect(() =&gt; {"{"}</div>

      {/* Level 2 Indent */}
      <div className="text-primary/50 pl-8">
        async function fetchExperience() {"{"}
      </div>

      {/* Level 3 Indent */}
      <div className="text-primary/60 pl-12">
        const data = await getFrontendStack();
      </div>
      <div className="text-primary/60 pl-12">setSkills(data);</div>

      <div className="text-primary/50 pl-8">{"}"}</div>
      <div className="text-primary/50 pl-8">fetchExperience();</div>

      <div className="text-primary/70 pl-4">{"}"}, []);</div>
      <br />

      <div className="text-primary/70 pl-4">return (</div>
      <div className="text-primary/50 pl-8">
        &lt;<span className="text-primary/80">motion.div</span>
      </div>
      <div className="text-primary/40 pl-12">
        initial={"{"} opacity: 0 {"}"}
      </div>
      <div className="text-primary/40 pl-12">
        animate={"{"} opacity: 1 {"}"}
      </div>
      <div className="text-primary/50 pl-8">&gt;</div>
      <div className="text-primary/60 pl-12">
        &lt;<span className="text-primary/80">Header</span> /&gt;
      </div>
      <div className="text-primary/60 pl-12">
        &lt;<span className="text-primary/80">main</span> className="flex-1"&gt;
      </div>
      <div className="text-primary/40 pl-16">
        {"{"}/* Building awesome UIs */{"}"}
      </div>
      <div className="text-primary/60 pl-12">
        &lt;/<span className="text-primary/80">main</span>&gt;
      </div>
      <div className="text-primary/50 pl-8">
        &lt;/<span className="text-primary/80">motion.div</span>&gt;
      </div>
      <div className="text-primary/70 pl-4">);</div>

      <div className="text-primary/70">{"}"}</div>
    </div>
  );
}
