import React, { useEffect, useState } from "react";
import { Toastify } from "../../components/Toastify/Toastify";
import MainHeader from "../../components/Header/MainHeader";
import MainSelect from "../../components/Selects/MainSelect";
import AddNewButton from "../../components/Buttons/AddNewButton";
import FooterSection from "../../components/Footer/FooterSection";
import { Link } from "react-router-dom";
import { HiMiniCheck } from "react-icons/hi2";
import UniqueModelInput from "../../components/Inputs/UniqueModelInput";
import GeneralInput from "../../components/Inputs/GeneralInput";

export default function WorkspacePage() {
  const themeOptions = [
    {
      name: "Azul Marinho",
      alias: "twitter-blue",
      mainColor: "#16202A",
      secondaryColor: "#0E141B",
      darkMode: true,
    },
    {
      name: "Escuro",
      alias: "dark",
      mainColor: "#212121",
      secondaryColor: "#141414",
      darkMode: true,
    },
    {
      name: "Claro",
      alias: "white",
      mainColor: "#E8F1F2",
      secondaryColor: "#B1D0D3",
      darkMode: false,
    },
  ];
  const fontNames = ["Arial", "Poppins", "Times New Roman", "Verdana"];
  const fontSizes_username = Array.from({ length: 6 }, (_, i) => i * 2 + 12);
  const fontSizes_text = Array.from({ length: 6 }, (_, i) => i * 2 + 18);
  const fontSizes_title = Array.from({ length: 6 }, (_, i) => i * 2 + 24);

  const [availableModels, setAvailableModels] = useState([]);
  const [postInfos, setPostInfos] = useState({
    user_name: "",
    user_username: "",
    user_photo: "",
    general_fontType: fontNames[0],
    general_title_fontSize: 32,
    general_text_fontSize: 26,
    general_username_fontSize: 20,
    general_theme: themeOptions[0],
  });

  useEffect(() => {
    setAvailableModels([
      {
        id: 1,
        name: "Sem nome (1)",
        select: false,
      },
      {
        id: 2,
        name: "Sem nome (2)",
        select: true,
      },
    ]);
  }, []);

  const handleChangeModelName = (e) => {
    const { name, value } = e.target;
    setAvailableModels((prevModels) =>
      prevModels.map((model) =>
        model.id === parseInt(name) ? { ...model, name: value } : model
      )
    );
  };

  const handleFontChange = (selectedOption) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_fontType: selectedOption.value,
    }));
  };

  const handleTitleFontSizeChange = (selectedOption) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_title_fontSize: selectedOption.value,
    }));
  };

  const handleTextFontSizeChange = (selectedOption) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_text_fontSize: selectedOption.value,
    }));
  };

  const handleUsernameFontSizeChange = (selectedOption) => {
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_username_fontSize: selectedOption.value,
    }));
  };

  const handleChangeModelActive = (e) => {
    const { name } = e.target;
    setAvailableModels((prevModels) =>
      prevModels.map((model) =>
        model.id === parseInt(name)
          ? { ...model, select: true }
          : { ...model, select: false }
      )
    );
  };

  const handleChangeThemeActive = (alias) => {
    console.log(themeOptions.find((theme) => theme.alias === alias));
    setPostInfos((prevInfos) => ({
      ...prevInfos,
      general_theme: themeOptions.find((theme) => theme.alias === alias),
    }));
  };

  const handleChangePostInfos = (e) => {
    const { name, value } = e.target;
    setPostInfos((prevInfos) => ({ ...prevInfos, [name]: value }));
  };

  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden bg-[#212121]">
      <MainHeader
        headerType="workspace"
        contentTopMargin={76}
        buttonMarginY={20}
        buttonWidth={250}
        buttonText="Criar novo modelo"
        buttonRedirect="startNowSection"
        h1Text="</Workspace/>"
        h2Text="Sem predefinições existentes."
      />
      <main className="flex justify-center items-center w-full">
        <main className="flex flex-col w-[1170px]">
          <section className="flex flex-col gap-y-16 py-16">
            {/* First Section */}
            <section className="grid grid-cols-2 gap-x-10 w-full">
              <div className="flex flex-col gap-y-5">
                {/* ModelList */}
                <h2>Seus Modelos</h2>
                <div className="w-full p-6 rounded-[3rem] bg-[#282828] hidden-1-shadow">
                  <div className="flex flex-col gap-y-5">
                    {availableModels.map((model) => (
                      <button
                        onClick={handleChangeModelActive}
                        name={model.id}
                        key={model.id}
                        className="flex justify-between items-center w-full gap-x-4 p-4 rounded-[1.5rem] bg-[#212121] hidden-1-shadow"
                      >
                        <UniqueModelInput
                          placeholder="Nome do modelo"
                          type="text"
                          name={model.id}
                          onChange={handleChangeModelName}
                          value={model.name}
                        />
                        <div className="flex justify-center items-center rounded-full min-w-7 min-h-7 bg-[#282828]">
                          <span
                            className={`flex items-center justify-center transition-all duration-300 min-w-7 min-h-7 rounded-full overflow-hidden ${
                              model.select ? "bg-[#16202A]" : "bg-[#282828]"
                            }`}
                          >
                            <HiMiniCheck
                              className={`transition-all text-lg ease-in-out duration-300 ${
                                !model.select && "opacity-0 translate-y-6"
                              }`}
                            />
                          </span>
                        </div>
                      </button>
                    ))}
                    <div className="flex justify-center items-center w-full">
                      <AddNewButton text="Criar novo modelo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-5">
                {/* ChooseTheme */}
                <h2>Escolha um tema</h2>
                <div className="w-full p-6 rounded-[3rem] bg-[#282828] hidden-1-shadow">
                  <div className="grid grid-cols-8 gap-5">
                    {themeOptions.length > 0 &&
                      themeOptions.map((theme) => (
                        <button
                          name={theme.alias}
                          key={theme.alias}
                          onClick={() => handleChangeThemeActive(theme.alias)}
                          className="w-12 h-12 rounded-full overflow-hidden hidden-1-shadow"
                          style={{ backgroundColor: theme.secondaryColor }}
                        >
                          <div
                            className="w-1/2 h-full"
                            style={{ backgroundColor: theme.mainColor }}
                          />
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Second Section */}
            <section className="flex flex-col w-full p-12 gap-y-10 bg-[#1E1E1E] rounded-[3rem] hidden-1-shadow">
              {/* Set Infos Form */}
              <div className="grid grid-cols-2 gap-x-10">
                <div className="flex flex-col gap-y-4">
                  <h2>Informações do Perfil</h2>
                  <div className="grid grid-cols-2 gap-x-5">
                    <GeneralInput
                      label="Nome do Usuário"
                      type="text"
                      name="user_name"
                      value={postInfos.user_name}
                      onChange={handleChangePostInfos}
                      placeholder="User Name"
                    />
                    <GeneralInput
                      label="Foto de perfil do Usuário"
                      type="text"
                      name="user_photo"
                      value={postInfos.user_photo}
                      onChange={handleChangePostInfos}
                      placeholder="User Name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-x-5">
                    <GeneralInput
                      label="Username"
                      type="text"
                      name="user_username"
                      value={postInfos.user_username}
                      onChange={handleChangePostInfos}
                      placeholder="@username_"
                    />
                    <div className="w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h2>Informações Gerais</h2>
                  <div className="grid grid-cols-2 gap-x-5">
                    <div className="w-full flex flex-col gap-y-1">
                      <p>Fonte:</p>
                      <MainSelect
                        options={fontNames.map((font) => ({
                          value: font,
                          label: font,
                        }))}
                        value={postInfos.general_fontType}
                        onChange={handleFontChange}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-1">
                      <p>Tamanho da fonte: (Título)</p>
                      <MainSelect
                        options={fontSizes_title.map((font) => ({
                          value: font,
                          label: font,
                        }))}
                        value={postInfos.general_title_fontSize}
                        onChange={handleTitleFontSizeChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-5">
                    <div className="w-full flex flex-col gap-y-1">
                      <p>Tamanho da fonte: (Username)</p>
                      <MainSelect
                        options={fontSizes_username.map((font) => ({
                          value: font,
                          label: font,
                        }))}
                        value={postInfos.general_username_fontSize}
                        onChange={handleUsernameFontSizeChange}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-1">
                      <p>Tamanho da fonte: (Texto)</p>
                      <MainSelect
                        options={fontSizes_text.map((font) => ({
                          value: font,
                          label: font,
                        }))}
                        value={postInfos.general_text_fontSize}
                        onChange={handleTextFontSizeChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-5"></div>
                </div>
              </div>

              <div className="w-full h-1/2 bg-[#303030]" />

              {/* List Pages */}
              <div className="flex flex-col gap-y-5"></div>
            </section>
          </section>
        </main>
      </main>
      <FooterSection />
    </main>
  );
}
