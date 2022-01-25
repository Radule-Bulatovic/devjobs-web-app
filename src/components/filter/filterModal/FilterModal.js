import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import ThemeContext from "../../../context/theme-context";
import { ButtonComponent } from "../../ui/buttonComponent/ButtonComponent";
import TextInput from "../../ui/textInput/TextInput";
import classes from "./FilterModal.module.css";

const FilterModal = React.forwardRef(
  ({ isOpen, closeModal, submitModal }, { modalLocationRef, modalTimeRef }) => {
    const { isDark } = useContext(ThemeContext);

    if (!isOpen) return null;

    return (
      <>
        <div
          className={classes.darkOverlay}
          onClick={() => {
            closeModal();
          }}
        ></div>
        <div className={[classes.container, isDark && "dark"].join(" ")}>
          <TextInput
            ref={modalLocationRef}
            className={classes.locationInput}
            id={"location"}
            placeholder={"Filter by location..."}
          >
            <label htmlFor={"location"}>
              <div
                className={`${classes.horizontalLine} ${classes.left}`}
              ></div>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="lg"
                className={classes.inputIcon}
              />
              <div
                className={`${classes.horizontalLine} ${classes.right}`}
              ></div>
            </label>
          </TextInput>
          <div className={classes.innerContainer}>
            <div className={classes.fullTimeContainer}>
              <input id="full-time" type="checkbox" ref={modalTimeRef} />
              <label htmlFor="full-time">
                Full Time <span className={classes.only}>Only</span>
              </label>
            </div>
            <ButtonComponent
              onClick={() => {
                submitModal();
                closeModal();
              }}
              isViolet={true}
            >
              <span className={classes.btnText}>Search</span>
            </ButtonComponent>
          </div>
        </div>
      </>
    );
  }
);

export default FilterModal;
