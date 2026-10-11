import type { ReactNode } from 'react';

// The display font draws a very ornate "&" that is hard to read, especially in italics,
// so headings swap in the plain upright one from the body font.
export function withPlainAmpersand(text: string): ReactNode {
  return text.split('&').flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <span key={i} className="font-sans font-normal not-italic">
            &amp;
          </span>,
          part,
        ]
  );
}
