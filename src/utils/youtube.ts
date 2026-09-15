export function getYouTubeId(value: string): string | null {
  const input = String(value).trim();
  if (/^[\w-]{11}$/.test(input)) return input;

  try {
    const url = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`);
    const hostname = url.hostname.replace(/^www\./, '');
    const candidate = hostname === 'youtu.be'
      ? url.pathname.split('/').filter(Boolean)[0]
      : hostname === 'youtube.com' || hostname.endsWith('.youtube.com')
        ? url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]{11})/)?.[1]
        : null;
    return candidate && /^[\w-]{11}$/.test(candidate) ? candidate : null;
  } catch {
    return null;
  }
}
