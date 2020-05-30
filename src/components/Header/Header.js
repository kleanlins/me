import "./Header.css";
import "../../App.scss";

import React, { useContext, useState } from "react";

import { SectionContext } from "../../contexts/SectionContext";

const Header = () => {
  const [sectionId, setSection] = useContext(SectionContext);

  const [hidden, toggleHidden] = useState(true);

  const handleChangeSection = (id) => {
    toggleHidden(!hidden);
    setSection(id);
  };

  const toggleButton = () => (
    <span className={`toggle ${!hidden ? "hidden" : ""}`}>?</span>
  );

  return (
    <>
      {toggleButton()}
      <div className={`header ${hidden ? "hidden" : ""}`}>
        <h1
          className={`cursor item ${sectionId === 0 ? "hidden" : ""}`}
          onClick={() => handleChangeSection(0)}
        >
          {" "}
          &lt;{" "}
        </h1>
        <h1 className="cursor item" onClick={() => handleChangeSection(1)}>
          WHO AM I
        </h1>
        <h1 className="cursor item" onClick={() => handleChangeSection(2)}>
          SKILLS
        </h1>
        <h1 className="cursor item" onClick={() => handleChangeSection(3)}>
          PROJECTS
        </h1>
        <h1 className="cursor item" onClick={() => handleChangeSection(4)}>
          CONTACT
        </h1>
      </div>
    </>
  );
};

export default Header;
