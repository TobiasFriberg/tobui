/// <reference types="react" />
declare type Props = {
    title: string;
    children: Object;
    expanded?: boolean;
    className?: string;
};
export declare const Expander: ({ title, children, expanded, className }: Props) => JSX.Element;
export {};
