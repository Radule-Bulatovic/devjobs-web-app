import React from "react";
import classes from "./TextInput.module.css";

const TextInput = React.forwardRef(
  ({ children, id, placeholder, className }, ref) => {
    return (
      <div className={`${classes.inputContainer} ${className}`}>
        {children}
        <input
          ref={ref}
          className={classes.inputField}
          type="text"
          placeholder={placeholder}
          id={id}
        />
      </div>
    );
  }
);

export default TextInput;
