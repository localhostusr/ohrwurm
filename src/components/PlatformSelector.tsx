import type { StreamingPlatform } from "../hooks/usePlatform";

interface PlatformSelectorProps {
  platform: StreamingPlatform;
  onPlatformChange: (p: StreamingPlatform) => void;
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function AppleMusicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.28a10.08 10.08 0 00-1.793-.174C17.2.044 16.49.03 15.78.018 14.468-.005 13.155 0 11.842 0c-1.312 0-2.626-.006-3.94.018C7.192.03 6.482.044 5.772.106a10.08 10.08 0 00-1.793.174A5.022 5.022 0 002.11.891C.99 1.624.247 2.624-.07 3.934A9.23 9.23 0 00-.31 6.124c-.062.71-.076 1.42-.088 2.13C-.41 9.567-.404 10.88-.404 12.193s-.005 2.626.018 3.94c.012.71.026 1.42.088 2.13a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 001.87.611 10.08 10.08 0 001.793.174c.71.062 1.42.076 2.13.088 1.313.012 2.626.006 3.94.006s2.626.006 3.94-.018c.71-.012 1.42-.026 2.13-.088a10.08 10.08 0 001.793-.174 5.022 5.022 0 001.87-.611c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 00.24-2.19c.062-.71.076-1.42.088-2.13.012-1.313.006-2.626.006-3.94s.006-2.626-.018-3.94c-.012-.71-.026-1.42-.088-2.13zM16.95 17.374c0 .503-.155.912-.466 1.226a1.57 1.57 0 01-1.14.477c-.407 0-.757-.136-1.052-.407-.294-.272-.44-.618-.44-1.04V10.63l-6.15 1.96v5.78c0 .49-.152.893-.458 1.207a1.57 1.57 0 01-1.14.477 1.53 1.53 0 01-1.054-.407c-.294-.272-.442-.618-.442-1.04 0-.448.125-.838.378-1.17.252-.332.595-.542 1.027-.63l.218-.056c.2-.05.36-.138.478-.263.117-.125.176-.31.176-.556V8.63c0-.305.073-.567.218-.787.146-.22.356-.375.63-.466l6.87-2.19c.268-.087.498-.082.69.013.192.095.287.29.287.583v9.073c0 .49-.152.893-.458 1.207-.306.315-.684.472-1.14.477a1.53 1.53 0 01-1.054-.407c-.294-.272-.442-.618-.442-1.04 0-.448.126-.838.378-1.17.253-.332.596-.542 1.028-.63l.218-.056c.2-.05.36-.138.478-.263.117-.125.176-.31.176-.556v-.29l-.006.044z" />
    </svg>
  );
}

export function PlatformSelector({
  platform,
  onPlatformChange,
}: PlatformSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-text-muted mr-1">Listen on</span>
      <button
        onClick={() => onPlatformChange("apple-music")}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all cursor-pointer ${
          platform === "apple-music"
            ? "bg-[#FA243C]/15 text-[#FA243C] border border-[#FA243C]/30"
            : "text-text-muted hover:text-text-secondary border border-transparent"
        }`}
      >
        <AppleMusicIcon />
        Apple Music
      </button>
      <button
        onClick={() => onPlatformChange("spotify")}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all cursor-pointer ${
          platform === "spotify"
            ? "bg-[#1DB954]/15 text-[#1DB954] border border-[#1DB954]/30"
            : "text-text-muted hover:text-text-secondary border border-transparent"
        }`}
      >
        <SpotifyIcon />
        Spotify
      </button>
    </div>
  );
}
