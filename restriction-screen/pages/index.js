import React from "react";
import Login from "../src/container/login";
import RestrictionScreen from "../src/components/restriction-screen";
import styles from "./../src/components/restriction-screen/styles/Index.module.css";

const login = () => {
    return (
        <>
            <div className={styles.restrictionScreen}>
                <RestrictionScreen />
            </div>
            <div className={styles.mainScreen}>
                {" "}
                <Login />
            </div>
        </>
    );
};

export default login;
