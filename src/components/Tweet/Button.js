import {Btn} from "./Tweet.styled"

export const Button = ({
    selected = false,
    type = "button",
    children,
    selectedText = "FOLLOWING",
    ...otherProps
  }) => {
    return (
      <Btn isSelected={selected} type={type} {...otherProps}>
        {selected ? selectedText : children}
      </Btn>
    );
  };