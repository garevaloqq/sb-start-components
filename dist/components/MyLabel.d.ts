/// <reference types="react" />
import "./MyLabel.css";
export interface Props {
    /**
     * Label contents
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * What background color to use
     */
    color?: string;
    /**
     * Capitalize text?
     */
    backgroundColor?: string;
    /**
     * Capitalize text?
     */
    allCaps: boolean;
}
/**
 * Primary UI component for user label
 */
export declare const MyLabel: ({ label, size, allCaps, color, backgroundColor, }: Props) => JSX.Element;
