import React from "react";
import "./spinner.scss";
import ReactLoading from 'react-loading';

const Spinner = () => {
//   return <div className="spinner"></div>;
    const type = "spinningBubbles";
    const color = "green";

    return (
        <div className="loader">
            <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
        </div>
    )
};

export default Spinner;