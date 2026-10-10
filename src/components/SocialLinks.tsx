import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Send } from 'lucide-react';
import { siteConfig } from '../data/config';
import { useLang } from '../i18n';

type Network = keyof typeof siteConfig.socials;

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-[18px] w-[18px]',
  'aria-hidden': true,
} as const;

const networks: { id: Network; label: string; icon: ReactNode }[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    icon: (
      <svg {...iconProps}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: <Send className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />,
  },
];

const circle = 'flex h-11 w-11 items-center justify-center rounded-full border transition-colors';

// A network whose link is still null in config shows dimmed and is not clickable.
export function SocialLinks({ className }: { className?: string }) {
  const { s } = useLang();

  return (
    <ul className={clsx('flex items-center gap-3', className)}>
      {networks.map(({ id, label, icon }) => {
        const url = siteConfig.socials[id];
        return (
          <li key={id}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className={clsx(circle, 'border-cream/25 text-cream hover:border-gold hover:bg-gold hover:text-ink')}
              >
                {icon}
              </a>
            ) : (
              <span
                role="img"
                aria-label={`${label} – ${s.social.soon}`}
                title={`${label} – ${s.social.soon}`}
                className={clsx(circle, 'cursor-default border-cream/10 text-cream/35')}
              >
                {icon}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
