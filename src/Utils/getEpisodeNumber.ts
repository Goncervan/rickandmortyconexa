export const getEpisodeNumber = (url: string): string | null => {
  const match = url.match(/\/(\d+)$/);
  return match ? parseInt(match[1]).toString() : null;
};
