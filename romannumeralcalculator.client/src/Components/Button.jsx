import React from "react";
//import RaisedButton from 'material-ui/RaisedButton';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.label}</button>
    );
}

// Button.propTypes = {
//     type: React.PropTypes.string.isRequired,
//     handleClick: React.PropTypes.func.isRequired,
//     label: React.PropTypes.string.isRequired
// }

export default Button;