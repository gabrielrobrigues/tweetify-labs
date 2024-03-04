import React, { useEffect, useState } from "react";
import { Toastify } from "../../components/Toastify/Toastify";
import MainHeader from "../../components/Header/MainHeader";
import MainSelect from "../../components/Selects/MainSelect";
import AddNewButton from "../../components/Buttons/AddNewButton";
import FooterSection from "../../components/Footer/FooterSection";
import { Link } from "react-router-dom";
import { HiMiniCheck } from "react-icons/hi2";
import UniqueModelInput from "../../components/Inputs/UniqueModelInput";

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
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(themeOptions[0]);
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
    setSelectedTheme(themeOptions.find((theme) => theme.alias === alias));
    console.log(themeOptions.find((theme) => theme.alias === alias));
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
            <section className="grid grid-cols-2 gap-x-10 w-full">
              <div className="flex flex-col gap-y-5">
                <h2>Seus Modelos</h2>
                <div className="w-full p-6 rounded-[3rem] bg-[#282828]">
                  {/* ModelList */}
                  <div className="flex flex-col gap-y-5">
                    {availableModels.map((model) => (
                      <button
                        onClick={handleChangeModelActive}
                        name={model.id}
                        key={model.id}
                        className="flex justify-between items-center w-full gap-x-4 p-4 rounded-[1.5rem] bg-[#212121]"
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
                <h2>Escolha um tema</h2>
                <div className="w-full p-6 rounded-[3rem] bg-[#282828]">
                  <div className="grid grid-cols-8 gap-5">
                    {themeOptions.length > 0 &&
                      themeOptions.map((theme) => (
                        <button
                          name={theme.alias}
                          key={theme.alias}
                          onClick={() => handleChangeThemeActive(theme.alias)}
                          className="w-12 h-12 rounded-full overflow-hidden"
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
            // worskpace aq
            <section className="flex flex-col w-full p-12 gap-y-10 bg-[#1E1E1E] rounded-[3rem]">
              oii
            </section>
          </section>
        </main>
      </main>
      <FooterSection />
    </main>
  );
}
