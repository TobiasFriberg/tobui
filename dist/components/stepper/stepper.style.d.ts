/// <reference types="react" />
export declare const StepperIndicator: import("styled-components").StyledComponent<"div", any, {
    $active?: boolean | undefined;
}, never>;
export declare const NavigationButton: import("styled-components").StyledComponent<({ children, onClick, className, loading, icon, disabled, iconOnly, testId, ...props }: {
    children?: import("react").ReactNode;
    onClick: () => void | Promise<any>;
    variant?: "primary" | "secondary" | "alternative" | "danger" | "gradient" | undefined;
    className?: string | undefined;
    appearance?: "button" | "text" | "border" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    loading?: boolean | undefined;
    iconOnly?: boolean | undefined;
    icon?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null | undefined;
    disabled?: boolean | undefined;
    testId?: string | undefined;
}) => JSX.Element, any, {}, never>;
export declare const StepperStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StepperContent: import("styled-components").StyledComponent<"div", any, {
    $fillContent?: boolean | undefined;
}, never>;
