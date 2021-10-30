import React from "react";
import { Switch, Route, BrowserRouter, useRouteMatch } from "react-router-dom";
import SideBar from "./SideBar";
import CreatePatient from "./CreatePatient";
import PatientList from "./PatientList";
import PatientProfile from "./PatientProfile";
import EditPatient from "./EditPatient"
import "./css/Dashboard.css"

export default function Dashboard(){
    let { path, url } = useRouteMatch();
    return (
        <BrowserRouter>
            <div className="dashboard">
                <SideBar />
                <Switch>
                    <Route path={`${path}/create_patient`} component={CreatePatient} />
                    <Route path={`${path}/edit_patient`} component={EditPatient} />
                    <Route exact path={path} component={PatientList} />
                    <Route path={`${path}/view_patient`} component={PatientProfile} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}