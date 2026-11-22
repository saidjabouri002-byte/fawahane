/** Replace src with the approved MP4 URL or YouTube/Vimeo embed URL. */
export const partnershipVideo: {
  src: string | null;
  type: 'video' | 'embed';
  poster?: string;
  captions?: string;
} = { src: 'https://www.youtube.com/embed/VllN0yINA5A', type: 'embed' };
