import { ExternalLink } from "lucide-react";

interface SpotifyEmbedProps {
  trackId: string | null;
}

export function SpotifyEmbed({ trackId }: SpotifyEmbedProps) {
  if (!trackId) return null;

  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg opacity-90 hover:opacity-100 transition-opacity"
      />
      <a
        href={`https://open.spotify.com/track/${trackId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-1.5 text-xs text-text-muted hover:text-accent transition-colors"
      >
        <ExternalLink className="w-3 h-3" />
        Open in Spotify
      </a>
    </div>
  );
}
