/**
 * Returns the correct base URL for media files.
 * 
 * On Manus (ayurfertility-amoxuqbk.manus.space): uses /manus-storage/ CDN
 * On Cloudflare (drkalyanayurveda.com): uses /videos/ and /images/ from public/
 * 
 * Set VITE_MEDIA_BASE in your deployment environment:
 * - Manus: leave unset or set to "" (will use /manus-storage/ paths directly)
 * - Cloudflare: leave unset (will use /videos/ paths directly)
 */
export const getVideoUrl = (videoName: string): string => {
  const base = import.meta.env.VITE_MEDIA_BASE;
  if (base === 'manus') {
    // Map clean names to Manus CDN hashed filenames
    const manusVideoMap: Record<string, string> = {
      'v2_arthritis': '/manus-storage/v2_arthritis_be930665.mp4',
      'v2_diabetes': '/manus-storage/v2_diabetes_e0b64047.mp4',
      'v2_anxiety': '/manus-storage/v2_anxiety_e9334d26.mp4',
      'v2_eczema': '/manus-storage/v2_eczema_11354f18.mp4',
      'v2_fertility': '/manus-storage/v2_fertility_2c2abea4.mp4',
      'v2_digestive': '/manus-storage/v2_digestive_3f49d354.mp4',
      'v2_rejuvenation': '/manus-storage/v2_rejuvenation_d2cf3aa7.mp4',
      'v2_respiratory': '/manus-storage/v2_respiratory_0cfaafa6.mp4',
    };
    return manusVideoMap[videoName] || `/videos/${videoName}.mp4`;
  }
  return `/videos/${videoName}.mp4`;
};

export const getThumbUrl = (thumbName: string): string => {
  const base = import.meta.env.VITE_MEDIA_BASE;
  if (base === 'manus') {
    const manusThumbMap: Record<string, string> = {
      'thumb_arthritis': '/manus-storage/thumb_arthritis_74647a5b.webp',
      'thumb_diabetes': '/manus-storage/thumb_diabetes_ec597aae.webp',
      'thumb_anxiety': '/manus-storage/thumb_anxiety_c2a3ab16.webp',
      'thumb_eczema': '/manus-storage/thumb_eczema_8b363bdc.webp',
      'thumb_fertility': '/manus-storage/thumb_fertility_a291da51.webp',
      'thumb_digestive': '/manus-storage/thumb_digestive_01c4dbfb.webp',
      'thumb_rejuvenation': '/manus-storage/thumb_rejuvenation_059735df.webp',
      'thumb_respiratory': '/manus-storage/thumb_respiratory_b34f082e.webp',
    };
    return manusThumbMap[thumbName] || `/images/thumbs/${thumbName}.webp`;
  }
  return `/images/thumbs/${thumbName}.webp`;
};

export const getHeroUrl = (): string => {
  const base = import.meta.env.VITE_MEDIA_BASE;
  if (base === 'manus') {
    return '/manus-storage/DrKalyan-heroimage_69f70ea4.webp';
  }
  return '/images/DrKalyan-heroimage.webp';
};
