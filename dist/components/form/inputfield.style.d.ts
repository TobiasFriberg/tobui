import { ReactElement } from 'react';
declare type InputFieldProps = {
    iconPosition?: 'left' | 'right';
    icon?: ReactElement | null;
    invalid?: boolean;
    theme: any;
};
export declare const StyledInputField: import("styled-components").StyledComponent<"div", any, InputFieldProps, never>;
export declare const CheckBoxWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CheckBoxContent: import("styled-components").StyledComponent<"div", any, {
    active: boolean;
}, never>;
export {};
