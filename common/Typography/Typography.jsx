import { Text } from "./typographyStyle";

const Typography = ({
  children,
  size,
  weight,
  color,
  align,
  className,
  lineHeight,
}) => {
  return (
    <Text
      size={size}
      weight={weight}
      color={color}
      align={align}
      className={className}
      lineHeight={lineHeight}
    >
      {children}
    </Text>
  );
};

export default Typography;
