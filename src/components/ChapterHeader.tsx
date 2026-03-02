import type { Chapter } from "../data/types";

interface ChapterHeaderProps {
  chapter: Chapter;
}

export function ChapterHeader({ chapter }: ChapterHeaderProps) {
  return (
    <div className="py-8 border-b border-border-subtle">
      <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-2">
        {chapter.title}
      </h3>
      <p className="font-display text-base md:text-lg text-text-muted italic">
        "{chapter.subtitle}"
      </p>
    </div>
  );
}
