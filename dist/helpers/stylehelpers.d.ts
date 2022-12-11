export declare const getVariantColor: (theme: any, variant: string) => any;
export declare const getContrastColor: (theme: any, color: string, light?: string, dark?: string) => string;
export declare const device: (theme: any) => {
    phone: string;
    tablet: string;
    tabletOnly: string;
    desktop: string;
};
export declare const measurements: {
    extraSmall: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
};
