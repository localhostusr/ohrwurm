interface AppleMusicEmbedProps {
  trackId: string | null;
}

export function AppleMusicEmbed({ trackId }: AppleMusicEmbedProps) {
  if (!trackId) return null;

  return (
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
  );
}
