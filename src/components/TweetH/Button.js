import {Btn} from "./Tweet.styled"

export const Button = ({
    type = "button",
    children,
    ...otherProps
  }) => {
    return (
      <Btn type={type} {...otherProps}>
        {children}
      </Btn>
    );
  };