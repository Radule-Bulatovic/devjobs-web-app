import React from "react";

export const LogoComponent = ({ logoBackground, className, logo }) => {
  return (
    <div className={className} style={{ backgroundColor: logoBackground }}>
      <img src={require(`../../../assets/logos/${logo.split("/").pop()}`)} />
    </div>
  );
};
