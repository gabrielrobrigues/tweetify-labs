import React, { useEffect, useState } from "react";
import { Toastify } from "../../components/Toastify/Toastify";
import MainHeader from "../../components/Header/MainHeader";
import MainSelect from "../../components/Selects/MainSelect";
import WhiteButton from "../../components/Buttons/WhiteButton";
import FooterSection from "../../components/Footer/FooterSection";
import { Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi2";

export default function WorkspacePage() {
  const [availableModels, setAvailableModels] = useState([]);

  useEffect(() => {
    setAvailableModels([
      {
        id: 1,
        name: "Sem nome (1)",
        select: false
      },
      {
        id: 2,
        name: "Sem nome (2)",
        select: true
      },
    ])
  }, [])

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
                      <button key={model.id} className="flex justify-between w-full p-4 rounded-[1.5rem] bg-[#212121]">
                        <h3>{model.name}</h3>
                        <div className="min-w-[20px]">
                          <HiCheck className="text-[2rem]" />
                        </div>
                      </button>
                    ))}
                  </div>
                  {/* Create New Model */}
                  <WhiteButton text="Criar novo modelo" width={200} height={40} />
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
