import { Left, Right, Wrapper } from "./sliderStyle";

const Slider = () => {
  return (
    <div className="container">
      <Wrapper>
        <Right>Slider</Right>
        <Left>Card</Left>
      </Wrapper>
    </div>
  );
};

export default Slider;
