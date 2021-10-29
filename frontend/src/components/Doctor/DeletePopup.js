import React, { Component } from "react";
import styled from "styled-components";
import deleteIcon from "./images/delete_record.png";
export class DeletePopup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <PopupDiv>
        <div
          className={
            this.props.deletePopup ? "delete-popup-show" : "delete-popup-hidden"
          }
        >
          <div className="pop-up">
            <div className="pop-up-header">
              <h2>Are you sure?</h2>
              <img src={deleteIcon} alt="Cancel" onClick={this.props.onCloseDeletePopup} />
            </div>
            <div className="delete-popup-section">
              <div className="delete-popup-btn" onClick={this.props.onDeleteRecord}>
                <img src={deleteIcon} alt="Delete" />
                <h2>Delete</h2>
              </div>
            </div>
          </div>
        </div>
      </PopupDiv>
    );
  }
}

export default DeletePopup;
const PopupDiv = styled.div`
  .delete-popup-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(122, 119, 119, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    .pop-up {
      background-color: white;
      border-radius: 10px;
      width: 25%;
      height: 20%;
      .pop-up-header {
        border-bottom: solid black 1px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          background-color: black;
          height: 1.2rem;
        }
        img:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
      .delete-popup-section {
        display: flex;
        justify-content: center;
        .delete-popup-btn {
          background-color: red;
          margin-top: 1rem;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 0.2rem;
          padding: 0 0.4rem;
          border-radius: 10%;
          font-size: 0.7rem;
          img {
            color: white;
            height: 1.5rem;
            margin-right: 0.3rem;
          }
          h2 {
            color: white;
          }
        }
        div:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }
  }
  .delete-popup-hidden {
    display: none;
  }
`;
