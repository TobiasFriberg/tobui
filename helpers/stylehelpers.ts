import { darken, getLuminance, lighten } from 'polished';

export const getVariantColor = (theme: any, variant: string) => {
  return theme.colors[variant];
};

export const contrastColorQuick = (p: any) =>
  getContrastColor(
    p.theme,
    p.theme.colors.backgroundColor,
    lighten(0.12, p.theme.colors.backgroundColor),
    darken(0.01, p.theme.colors.backgroundColor)
  );

export const contrastColorQuickBorder = (p: any) =>
  getContrastColor(
    p.theme,
    p.theme.colors.backgroundColor,
    lighten(0.12, p.theme.colors.backgroundColor),
    darken(0.08, p.theme.colors.backgroundColor)
  );

export const getContrastColor = (
  theme: any,
  color: string,
  light: string = theme.colors.textColorLight,
  dark: string = theme.colors.textColorDark
) => {
  const lumen = getLuminance(color);

  if (lumen > 0.35) {
    return dark;
  }

  return light;
};

const size = {
  phone: '640px',
  tablet: '950px',
  desktop: '1024px',
};

export const device = (theme: any) => ({
  phone: `(max-width: ${theme.app ? '9999999999px' : size.phone})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletOnly: `(min-width: ${size.phone}) AND (max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
});

export const measurements = {
  extraSmall: '0.2rem',
  small: '0.5rem',
  medium: '0.75rem',
  large: '1.5rem',
  extraLarge: '2rem',
  extraExtraLarge: '3rem',
};
