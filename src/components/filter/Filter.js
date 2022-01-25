import {
  faFilter,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import reactDom from "react-dom";
import { ButtonComponent } from "../ui/buttonComponent/ButtonComponent";
import TextInput from "../ui/textInput/TextInput";
import classes from "./Filter.module.css";
import FilterModal from "./filterModal/FilterModal";

const Filter = ({ dataFunction }) => {
  const searchRef = useRef();
  const locationRef = useRef();
  const timeRef = useRef();
  const modalTimeRef = useRef();
  const modalLocationRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalSubmitHandler = () => {
    dataFunction({
      search: searchRef.current.value,
      location: modalLocationRef.current.value,
      time: modalTimeRef.current.checked,
    });
  };

  const submitHandler = () => {
    dataFunction({
      search: searchRef.current.value,
      location: locationRef.current.value,
      time: timeRef.current.checked,
    });
  };
  return (
    <div className={classes.container}>
      {reactDom.createPortal(
        <FilterModal
          ref={{
            modalLocationRef,
            modalTimeRef,
          }}
          isOpen={isOpen}
          closeModal={closeModal}
          submitModal={() => {
            modalSubmitHandler();
          }}
        />,
        document.getElementById("modal-root")
      )}
      <TextInput
        ref={searchRef}
        className={classes.primaryFilter}
        icon={faSearch}
        id={"search"}
        placeholder={"Filter by title, companies, expertise..."}
      >
        <label htmlFor={"search"}>
          <FontAwesomeIcon
            icon={faSearch}
            size="lg"
            className={classes.inputIcon}
          />
        </label>
      </TextInput>
      <TextInput
        ref={locationRef}
        className={classes.secondaryFilter}
        id={"location"}
        placeholder={"Filter by location..."}
      >
        <label htmlFor={"location"}>
          <div className={`${classes.horizontalLine} ${classes.left}`}></div>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="lg"
            className={classes.inputIcon}
          />
          <div className={`${classes.horizontalLine} ${classes.right}`}></div>
        </label>
      </TextInput>
      <div className={classes.fullTimeContainer}>
        <input id="time" type="checkbox" ref={timeRef} />
        <label htmlFor="time">
          Full Time <span className={classes.only}>Only</span>
        </label>
      </div>
      <button
        className={classes.filterToggle}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FontAwesomeIcon
          icon={faFilter}
          className={classes.filterIcon}
          size="lg"
        />
      </button>
      <ButtonComponent
        onClick={() => {
          submitHandler();
        }}
        isViolet={true}
      >
        <FontAwesomeIcon
          icon={faSearch}
          className={classes.btnIcon}
          size="lg"
        />
        <span className={classes.btnText}>Search</span>
      </ButtonComponent>
    </div>
  );
};
export default Filter;
