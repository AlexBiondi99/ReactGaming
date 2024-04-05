import React, { useState } from "react";

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Italiano");
  const languages = ["Italiano", "Inglese", "Spagnolo", "Francese"];
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="dropdown-container">
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="dropdown"
      >
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
