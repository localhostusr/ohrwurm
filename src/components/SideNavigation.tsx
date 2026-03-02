import type { Side } from "../data/types";

const sides: { key: Side; label: string }[] = [
  { key: "A", label: "Side A" },
  { key: "B", label: "Side B" },
  { key: "C", label: "Side C" },
  { key: "D", label: "Side D" },
];

interface SideNavigationProps {
  activeSide: Side;
  onSideChange: (side: Side) => void;
}

export function SideNavigation({
  activeSide,
  onSideChange,
}: SideNavigationProps) {
  return (
    <nav className="flex gap-1 p-1 bg-surface rounded-lg border border-border">
      {sides.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onSideChange(key)}
          className={`px-4 py-2 text-sm font-body tracking-wider transition-all rounded-md ${
            activeSide === key
              ? "bg-accent/15 text-accent border border-accent/30"
              : "text-text-muted hover:text-text-secondary border border-transparent"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
