import React from "react";
import { Switch, Route, BrowserRouter, useRouteMatch } from "react-router-dom";
import SideBar from "./SideBar";
import CreatePatient from "./CreatePatient";
import PatientList from "./PatientList";
import PatientProfile from "./PatientProfile";

import "./css/Dashboard.css"

export default function Dashboard(){
    let { path, url } = useRouteMatch();
    return (
        <BrowserRouter>
            <div className="dashboard">
                <SideBar />
                <Switch>
                    <Route path={`${path}/create_new`} component={CreatePatient} />
                    <Route exact path={path} component={PatientList} />
                    <Route path={`${path}/view_patient`} component={PatientProfile} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}