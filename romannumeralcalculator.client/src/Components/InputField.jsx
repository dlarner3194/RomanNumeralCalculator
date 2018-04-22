import React  from "react";

const InputField = (props) => {
    return (
        <div className="results">
            <input type="text" readOnly value={props.value}/>
        </div>
    )
}

// inputField.PropTypes = {
//     value: React.PropTypes.string.isRequired
// }

export default InputField;