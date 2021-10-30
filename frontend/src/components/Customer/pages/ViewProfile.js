import React from "react"

import PatientProfile from "../../Doctor/PatientProfile"

export default class ViewProfile extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <PatientProfile />
    }
}