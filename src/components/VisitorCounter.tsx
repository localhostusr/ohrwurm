import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ohrwurm.goatcounter.com/counter//index.html.json")
      .then((r) => r.json())
      .then((data) => {
        if (data.count) setCount(data.count);
      })
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded border border-border-subtle bg-surface/50">
      <span className="text-[10px] uppercase tracking-widest text-text-muted">Visitors</span>
      <span className="font-mono text-sm text-accent tabular-nums">{count}</span>
    </div>
  );
}
