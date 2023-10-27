import { useState } from "react";
import { article } from "../../constant/article";

const Article = () => {
  const [language, setLanguage] = useState("id");

  const onChangeLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <div>
      <h1 className="mt-4">{article.title[language]}</h1>
      <p>{article.description[language]}</p>
      <button
        className="btn mt-3 text-white"
        onClick={onChangeLanguage}
        style={{ background: language === "id" ? "#7712f7" : "#4287f5" }}
      >
        Ubah Bahasa
      </button>
    </div>
  );
};

export default Article;
