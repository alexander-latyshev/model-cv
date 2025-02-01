import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import langs from "../../data/lang.json";
import { ILangData } from "../../models/lang";
import "./languageDropdown.scss";
const langData: ILangData = langs;

const LanguageDropdown: React.FC = () => {
  const savedLanguage = localStorage.getItem("app-language") || "en";
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(savedLanguage);

  const handleLanguageChange = (e: { key: string }) => {
    const newLanguage = e.key;
    setSelectedLanguage(newLanguage);
    localStorage.setItem("app-language", newLanguage);
  };

  const items = Object.keys(langData.languages).map((key) => ({
    label: langData.languages[key].name,
    key: key,
  }));

  return (
    <div className="language-dropdown">
      <Dropdown
        menu={{ items, onClick: handleLanguageChange }}
        trigger={["click"]}
      >
        <div onClick={(e) => e.preventDefault()}>
          <Space>
            {langData.languages[selectedLanguage]?.name}
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
    </div>
  );
};

export default LanguageDropdown;
