import { photos, type PhotoName } from '../data/config';

const SMALL_WIDTH = 640;

export function Photo({ name, alt, sizes = '100vw', eager = false, className }: {
  name: PhotoName;
  alt: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}) {
  const { width, height } = photos[name];

  return (
    <img
      src={`/images/${name}-lg.webp`}
      srcSet={`/images/${name}-sm.webp ${SMALL_WIDTH}w, /images/${name}-lg.webp ${width}w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  );
}
