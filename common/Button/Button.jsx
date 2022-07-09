const { ButtonStyle } = require("./buttonStyle");

const Button = ({
  children,
  width,
  border,
  bgColor,
  size,
  icon,
  className,
  count,
  color,
  weight,
}) => {
  return (
    <ButtonStyle
      width={width}
      border={border}
      bgColor={bgColor}
      size={size}
      className={className}
      color={color}
      weight={weight}
    >
      <div className="mx-1">{icon}</div>
      {children}
      <div className="mx-1">{count}</div>
    </ButtonStyle>
  );
};

export default Button;
