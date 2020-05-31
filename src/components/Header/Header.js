import "./Header.scss";

import React, { useContext, useState } from "react";

import { MenuOutlined } from "@ant-design/icons";
import { SectionContext } from "../../contexts/SectionContext";

const Header = () => {
  const [sectionId, setSection] = useContext(SectionContext);

  const [hidden, toggleHidden] = useState(true);

  const handleChangeSection = (id) => {
    toggleHidden(!hidden);
    setSection(id);
  };

  const toggleButton = () => (
    <span
      onClick={() => toggleHidden(!hidden)}
      className={`toggle ${!hidden ? "hidden" : ""}`}
    >
      <MenuOutlined />
    </span>
  );

  const headerButtons = [
    { id: 1, label: "WHO" },
    { id: 2, label: "SKILLS" },
    { id: 3, label: "PROJECTS" },
    { id: 4, label: "CONTACT" },
  ];

  return (
    <div style={{ display: "relative" }}>
      {toggleButton()}
      <div className={`header ${hidden ? "hidden" : "hover"}`}>
        {headerButtons.map(({ id, label }) => (
          <h1 className="cursor item" onClick={() => handleChangeSection(id)}>
            {label}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Header;
