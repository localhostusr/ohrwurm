export function getStreamingLinks(artist: string, title: string) {
  const query = encodeURIComponent(`${artist} ${title}`);
  return {
    spotify: `https://open.spotify.com/search/${query}`,
    appleMusic: `https://music.apple.com/us/search?term=${query}`,
    youtubeMusic: `https://music.youtube.com/search?q=${query}`,
  };
}
