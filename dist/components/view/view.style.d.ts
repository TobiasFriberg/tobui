type FlexProps = {
    $direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    $gap?: string;
    $breakpoint?: 'tablet' | 'phone';
    $verticalAlign?: string;
    $horizontalAlign?: string;
};
export declare const StyledSection: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledView: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Flex: import("styled-components").StyledComponent<"div", any, FlexProps, never>;
export {};
