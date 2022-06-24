import React from "react";
import './Submit.css';

interface SubmitProps {
    label: string;

}

const Submit = (props: SubmitProps) => {
    return <button>{props.label}</button>;
};

export default Submit;
