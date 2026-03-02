export interface ProgramNotes {
  notes: string;
  listenFor: string;
  story: string;
}

export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  genre: string;
  chapter: string;
  side: "A" | "B" | "C" | "D";
  programNotes: ProgramNotes;
}

export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  side: "A" | "B" | "C" | "D";
}

export type Side = "A" | "B" | "C" | "D";

export const SIDE_LABELS: Record<Side, string> = {
  A: "Side A",
  B: "Side B",
  C: "Side C",
  D: "Side D",
};
