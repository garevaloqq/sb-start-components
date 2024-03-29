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
  allCaps?: boolean;
}

/**
 * Primary UI component for user label
 */
export const MyLabel = ({
  label = "Not label",
  size = "normal",
  allCaps = false,
  color = "#3d5a80",
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span className={`label ${size}`} style={{ color, backgroundColor }}>
      {!!allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};

export default MyLabel;
