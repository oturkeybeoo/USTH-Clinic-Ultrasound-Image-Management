import React, { Component } from "react";
import styled from "styled-components";
import leftArrow from "./images/left-arrow.png";
import rightArrow from "./images/right-arrow.png";
const backgroundImages = [
  "https://images.pexels.com/photos/9849841/pexels-photo-9849841.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://image.freepik.com/free-vector/flat-single-s-day-sale-background_23-2149122190.jpg",
  "https://image.freepik.com/free-vector/gradient-monochromatic-abstract-background_52683-74300.jpg",
];
export class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
    this.onPreviousImage = this.onPreviousImage.bind(this);
    this.onNextImage = this.onNextImage.bind(this);
  }
  onPreviousImage() {
    if (this.state.index === 0){
      this.setState({
        index: backgroundImages.length-1,
      });
    }else{
      this.setState({
        index: this.state.index - 1,
      });
    }

  }
  onNextImage() {
    if (this.state.index === backgroundImages.length-1){
      this.setState({
        index: 0
      });
    }else{
      this.setState({
        index: this.state.index + 1,
      });
    }
  }
  render() {
    return (
      <SlideDiv
        style={{
          "background-image": `url(${backgroundImages[this.state.index]})`,
          "background-size": "cover",
          "background-attachment": "fixed",
        }}
      >
        <img src={leftArrow} alt="previous" onClick={this.onPreviousImage} />
        <img src={rightArrow} alt="next" onClick={this.onNextImage} />
      </SlideDiv>
    );
  }
}

export default SlideShow;
const SlideDiv = styled.div`
  /* background-color: green; */
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 3rem;
  }
`;
