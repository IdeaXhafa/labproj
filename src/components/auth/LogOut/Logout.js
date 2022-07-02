import React from "react";
import {useHistory} from 'react-router-dom';

export function Logout() {

    const logout = () => {
        localStorage.clear();
        //history.pushState('/signup');
    };

    const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    };
    <div>
        <p>{getCurrentUser}</p>
    </div>
}