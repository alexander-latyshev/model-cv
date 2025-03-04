import React, { useCallback, useMemo } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import langs from "../../data/lang.json";
import useWindowDimensions from "../../utils/getWindowDimensions";
import { MOBILE_BREAKPOINT } from "../../consts";
import { useLanguage } from "../LanguageContext";
import "./languageDropdown.scss";

type LanguageKey = keyof typeof langs.languages;

const LanguageDropdown: React.FC = () => {
  const { width } = useWindowDimensions();
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange: MenuProps["onClick"] = useCallback(
    (e: any) => {
      const newLanguage = e.key as LanguageKey;
      setLanguage(newLanguage);
    },
    [setLanguage]
  );

  const items = useMemo<MenuProps["items"]>(
    () =>
      Object.entries(langs.languages).map(([key, value]) => ({
        label: value.name,
        key,
      })),
    []
  );

  return (
    <div className="language-dropdown">
      <Dropdown
        menu={{ items, onClick: handleLanguageChange }}
        trigger={["click"]}
      >
        <Space>
          {width < MOBILE_BREAKPOINT
            ? langs.languages[language as LanguageKey]?.code
            : langs.languages[language as LanguageKey]?.name}
          <DownOutlined />
        </Space>
      </Dropdown>
    </div>
  );
};

export default LanguageDropdown;
