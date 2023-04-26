import { Btn } from "./Button.styled"

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <Btn
      isSelected={selected}
      type={type}
      {...otherProps}
    >
      {children}
    </Btn>
  );
};
