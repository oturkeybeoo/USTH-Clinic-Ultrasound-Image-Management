import React, { Component } from "react";
import styled from "styled-components";
import medcareicon from "./images/medcareicon.png";
import avatar from "./images/avatar.png";
import dashboardicon from "./images/Doctor_Dashboard.png";
import patienticon from "./images/Doctor_Patient.png";
import patientdropdownicon from "./images/Doctor_Patient_Dropdown.png";
import logout from "./images/Doctor_Logout.png";
import { Link } from "react-router-dom";
import { get_all_patients } from "../../api/patien_api";

export class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
    };
    this.handleDropdown = this.handleDropdown.bind(this);
  }
  handleDropdown(e) {
    this.setState({
      dropdown: !this.state.dropdown,
    });
  }
  render() {
    return (
      <LeftNavbar>
        <div className="logo-care">
          <img src={medcareicon} alt="logo" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <h2> Dr. Tran Giang Son</h2>
        </div>
        <div className="list-nav-tab">
          <div className="dashboard-tab">
            <img src={dashboardicon} alt="dashboard icon" onClick={get_all_patients}/>
            <h2>Dashboard</h2>
          </div>
          <div className="patient-tab">
            <img src={patienticon} alt="patient icon" />
            <h2>Patient</h2>
            <div className="dropdown" onClick={this.handleDropdown}>
              <img src={patientdropdownicon} alt="patient icon" />
            </div>
          </div>
          <Link
            to="/"
            className={
              this.state.dropdown
                ? "patient-item-tab-show"
                : "patient-item-tab-hidden"
            }
          >
            <h2>View all patients</h2>
          </Link>
          <Link
            to="/management/create_patient"
            className={
              this.state.dropdown
                ? "patient-item-tab-show"
                : "patient-item-tab-hidden"
            }
          >
            {" "}
            <h2>Create new case</h2>
          </Link>
        </div>
        {/* <div className="logout">
          <img src={logout} alt="logout" />
          <h2>Logout</h2>
        </div> */}
      </LeftNavbar>
    );
  }
}

export default SideBar;
const LeftNavbar = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  background-color: white;
  .logo-care {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #666;
    img {
      width: 9rem;
    }
  }
  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    img {
      margin-top: 0.8rem;
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
    }
    h2 {
      margin: 0.6rem;
      font-weight: 700;
      font-style: normal;
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
  .list-nav-tab {
    .dashboard-tab {
      background-color: #f5f6f6;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      img {
        margin-left: 1rem;
        height: 1.5rem;
        margin-right: 1rem;
      }
    }
    .patient-tab {
      background-color: #f5f6f6;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      img {
        margin-left: 1rem;
        height: 1.5rem;
        margin-right: 1rem;
      }
      .dropdown {
        margin-left: 4.5rem;
        height: 3.6rem;
        width: 3.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 1rem;
        }
      }
    }
    .patient-item-tab-hidden {
      display: none;
    }
    .patient-item-tab-show {
      background-color: #f5f6f6;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      text-decoration: none;
      color: black;
      h2 {
        margin-left: 1rem;
      }
    }
  }
  .list-nav-tab > div:hover,
  .patient-item-tab-show:hover {
    background-color: rgba(128, 136, 255, 0.2);
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    font-size: 0.8rem;
    line-height: 1rem;
    img {
      height: 1.5rem;
      margin-right: 1rem;
    }
  }
  .logout:hover {
    background-color: rgba(128, 136, 150, 0.2);
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
`;
