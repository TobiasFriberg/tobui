import { getContrast } from 'polished';

export const getVariantColor = (theme: any, variant: string) => {
  return theme.colors[variant];
};

export const getContrastColor = (
  theme: any,
  color: string,
  light: string = theme.colors.textColorLight,
  dark: string = theme.colors.textColorDark
) => {
  const contrastRatio = getContrast(color, dark);

  if (contrastRatio > 5) {
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
  phone: `(max-width: ${theme.app ? '100vw' : size.phone})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletOnly: `(min-width: ${size.phone}) AND (max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
});

export const measurements = {
  extraSmall: '4px',
  small: '8px',
  medium: '16px',
  large: '24px',
  extraLarge: '32px',
};
