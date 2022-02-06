import React from "react";
import reactDom from "react-dom";
import { Button } from "@material-ui/core";

const ButtonComp = (props) => {
    return (
        <Button variant={props.variant} color={props.color}>
            Hello World!!!
        </Button>
    )
}

export default ButtonComp;