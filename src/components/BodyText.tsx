import { CSSProperties, ReactNode } from 'react';

type Variant = 'dark-bg' | 'light-bg';

const COLORS: Record<Variant, string> = {
  'dark-bg': '#F8F6F1',
  'light-bg': '#1A1A1A',
};

interface Props {
  variant: Variant;
  className?: string;
  style?: Omit<CSSProperties, 'color'>;
  children: ReactNode;
  as?: 'p' | 'span' | 'div' | 'li';
}

export default function BodyText({
  variant,
  className,
  style,
  children,
  as: Tag = 'p',
}: Props) {
  return (
    <Tag className={className} style={{ ...style, color: COLORS[variant] }}>
      {children}
    </Tag>
  );
}
