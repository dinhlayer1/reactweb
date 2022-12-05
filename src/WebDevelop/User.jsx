import React from "react";
import { useLocation, useParams } from "react-router-dom";

function User() {

    const {fname, lname} = useParams();
    const location = useLocation();

    return(
        <>
            <div className="user__page">
                <h1>USER PAGE</h1>
                <p>Welcom</p>
            </div>
        </>
    )
}

export default User;