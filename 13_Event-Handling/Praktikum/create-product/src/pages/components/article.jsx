import { useState } from "react";

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

const article = {
  title: {
    id: "Buat Akun",

    en: "Create Account",
  },

  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",

    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

export default Article;
