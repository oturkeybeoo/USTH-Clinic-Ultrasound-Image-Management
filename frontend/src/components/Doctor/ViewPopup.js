import React, { Component } from "react";
import styled from "styled-components";
import SlideShow from "./SlideShow";
import deleteIcon from "./images/delete_record.png";
export class ViewPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <ViewDiv>
        <div
          className={
            this.props.viewPopup ? "view-popup-show" : "view-popup-hidden"
          }
        >
          <img
            src={deleteIcon}
            alt="Cancel"
            onClick={this.props.onCloseViewPopup}
          />
          <SlideShow />
        </div>
      </ViewDiv>
    );
  }
}

export default ViewPopup;

const ViewDiv = styled.div`
  .view-popup-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-color: rgba(122, 119, 119, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      position: fixed;
      top: 20%;
      right: 20%;
      width: 1.5rem;
    }
  }
  .view-popup-hidden {
    display: none;
  }
`;
