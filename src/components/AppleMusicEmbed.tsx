import { ExternalLink } from "lucide-react";

interface AppleMusicEmbedProps {
  trackId: string | null;
}

export function AppleMusicEmbed({ trackId }: AppleMusicEmbedProps) {
  if (!trackId) return null;

  return (
    <div>
      <iframe
        src={`https://embed.music.apple.com/us/song/${trackId}?theme=dark`}
        width="100%"
        height="52"
        frameBorder="0"
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        loading="lazy"
        className="rounded-lg opacity-90 hover:opacity-100 transition-opacity"
      />
      <a
        href={`https://music.apple.com/us/song/${trackId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-1.5 text-xs text-text-muted hover:text-accent transition-colors"
      >
        <ExternalLink className="w-3 h-3" />
        Open in Apple Music
      </a>
    </div>
  );
}
