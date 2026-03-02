import { useState } from "react";
import type { Side } from "../data/types";
import { playlist } from "../data/playlist";
import { chapters } from "../data/chapters";
import { SideNavigation } from "./SideNavigation";
import { ChapterHeader } from "./ChapterHeader";
import { TrackCard } from "./TrackCard";

export function PlaylistBrowser() {
  const [activeSide, setActiveSide] = useState<Side>("A");

  const sideTracks = playlist.filter((t) => t.side === activeSide);
  const sideChapters = chapters.filter((c) => c.side === activeSide);

  const tracksByChapter = sideChapters.map((chapter) => ({
    chapter,
    tracks: sideTracks.filter((t) => t.chapter === chapter.id),
  }));

  const sideTrackCount = sideTracks.length;
  const sideDuration = sideTracks.reduce((acc, t) => {
    const [m, s] = t.duration.split(":").map(Number);
    return acc + m * 60 + s;
  }, 0);
  const durationMin = Math.floor(sideDuration / 60);

  return (
    <section id="playlist" className="max-w-4xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
          The Playlist
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-3">
          52 Tracks. Five Sides.
        </h2>
        <p className="text-text-muted text-base max-w-lg mx-auto">
          Each track selected for a reason. Each chapter teaches something
          different about sound. Tap any track to read the program notes.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <SideNavigation activeSide={activeSide} onSideChange={setActiveSide} />
        <p className="text-xs text-text-muted">
          {sideTrackCount} tracks &middot; {durationMin} min
        </p>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        {tracksByChapter.map(({ chapter, tracks }) => (
          <div key={chapter.id}>
            <ChapterHeader chapter={chapter} />
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
