import React from "react";

export const LogoComponent = ({ logoBackground, className, logo }) => {
  return (
    <div className={className} style={{ backgroundColor: logoBackground }}>
      <img
        alt="logo picture"
        src={require(`../../../assets/logos/${logo.split("/").pop()}`)}
      />
    </div>
  );
};
