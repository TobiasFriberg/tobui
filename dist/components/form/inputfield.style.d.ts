import { ReactElement } from 'react';
declare type InputFieldProps = {
    iconPosition?: 'left' | 'right';
    icon?: ReactElement | null;
    invalid?: boolean;
    theme: any;
};
export declare const StyledInputField: import("styled-components").StyledComponent<"div", any, InputFieldProps, never>;
export declare const InputLabel: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const ClearIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const InputIcon: import("styled-components").StyledComponent<"div", any, {
    position?: "left" | "right" | undefined;
}, never>;
export declare const InputWrapper: import("styled-components").StyledComponent<"div", any, InputFieldProps, never>;
export declare const CheckBoxWrapper: import("styled-components").StyledComponent<"div", any, {
    $location: 'left' | 'right';
}, never>;
export declare const SelectWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SelectIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CheckBoxContent: import("styled-components").StyledComponent<"div", any, {
    active: boolean;
}, never>;
export {};
