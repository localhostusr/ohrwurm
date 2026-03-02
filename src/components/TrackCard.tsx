import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import type { Track } from "../data/types";
import { StreamingLinks } from "./StreamingLinks";

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { programNotes } = track;

  return (
    <div
      className={`group border-b border-border-subtle transition-colors ${
        isOpen ? "bg-surface" : "hover:bg-surface/50"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 md:gap-6 py-4 px-4 md:px-6 text-left cursor-pointer"
      >
        <span className="font-mono text-sm text-text-muted w-8 shrink-0 text-right">
          {String(track.id).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="font-body text-base text-text-primary truncate">
            {track.title}
          </h4>
          <p className="font-body text-sm text-text-muted truncate">
            {track.artist}
            <span className="hidden md:inline">
              {" "}
              &middot; {track.album}
            </span>
          </p>
        </div>
        <span className="hidden sm:flex items-center gap-1 text-xs text-text-muted shrink-0">
          <Clock className="w-3 h-3" />
          {track.duration}
        </span>
        <span className="text-xs text-text-muted bg-surface px-2 py-0.5 rounded shrink-0 hidden md:block">
          {track.genre}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-text-muted transition-transform shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-4 md:px-6 pb-6 ml-12 md:ml-14">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] text-accent mb-2 font-body">
                Program Notes
              </h5>
              <p className="text-sm text-text-secondary leading-relaxed font-body">
                {programNotes.notes}
              </p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] text-accent mb-2 font-body">
                Listen For
              </h5>
              <p className="text-sm text-text-secondary leading-relaxed font-body">
                {programNotes.listenFor}
              </p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] text-accent mb-2 font-body">
                The Story
              </h5>
              <p className="text-sm text-text-secondary leading-relaxed font-body">
                {programNotes.story}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between">
            <StreamingLinks artist={track.artist} title={track.title} />
            <span className="text-xs text-text-muted md:hidden">
              {track.duration} &middot; {track.genre}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
