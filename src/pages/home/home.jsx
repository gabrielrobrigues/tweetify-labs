import React, { useEffect, useState } from "react";
import { Toastify } from "../../components/Toastify/Toastify";
import HeaderHome from "../../components/Header/HeaderHome";
import MainSelect from "../../components/Selects/MainSelect";

export default function HomePage() {
    const [selectedFont, setSelectedFont] = useState('Poppins');
    const [selectedTheme, setSelectedTheme] = useState('#16202A');
    const [isLightMode, setIsLightMode] = useState(false);
    const themeColors_example = [{ label: 'Azul Marinho', value: '#16202A' }, { label: 'Escuro', value: "#212121" }, { label: 'Claro', value: '#FFFFFF' }]

    const fontNames_example = ['Arial', 'Poppins', 'Times New Roman', 'Verdana'];
    const handleFontChange = (selectedOption) => {
        setSelectedFont(selectedOption.value);
    };
    const handleThemeChange = (selectedOption) => {
        setSelectedTheme(selectedOption.value);
        setIsLightMode(selectedOption.value === '#FFFFFF');
    }

    return (
        <main className="min-h-screen max-w-screen overflow-x-hidden bg-[#212121]">
            <HeaderHome marginY={20} buttonWidth={320} buttonText="Comece agora" buttonRedirect='startNowSection' h1Text='TWEETIFY LABS' h2Text='Economize tempo enquanto aumenta a
qualidade de seus posts!' />
            <main className="flex justify-center items-center w-full">
                <main className="flex flex-col w-[1170px]">
                    <section className="flex flex-col gap-y-16 py-16">
                        <section className="flex flex-col gap-y-10">
                            <h2 className="max-w-[600px]">Com poucos segundos, seu post estará pronto para ir aos ares!</h2>
                            <section className="flex justify-between w-full gap-x-3">
                                <div className="flex flex-col gap-y-4 w-[344px] h-[344px] rounded-[3rem] p-6 to-[#303030] from-[#16202A] bg-gradient-to-br">
                                    <h3>Adicione as informações do perfil e estilo de post</h3>
                                    <div className="flex gap-x-2 rounded-full" style={{ backgroundColor: selectedTheme }}>
                                        <img className="w-20 h-20 rounded-full p-2" src="/images/profiles/profile-gabriel-pic.jpg" alt="Profile Pic" />
                                        <div className="flex flex-col h-full justify-center">
                                            <h3 className={`${isLightMode && 'text-black'}`} style={{ fontFamily: selectedFont }}>Gabriel Torres</h3>
                                            <p className={`${isLightMode && 'text-black'}`} style={{ fontFamily: selectedFont }}>@gabriel_torresr</p>

                                        </div>
                                    </div>
                                    <div className="flex w-full gap-x-5">
                                        <div className="w-1/2">
                                            <p>Fonte:</p>
                                            <MainSelect
                                                options={fontNames_example.map(font => ({ value: font, label: font }))}
                                                value={selectedFont}
                                                onChange={handleFontChange}
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <p>Tema:</p>
                                            <MainSelect
                                                options={themeColors_example.map(theme => ({ value: theme.value, label: theme.label }))}
                                                value={selectedTheme}
                                                onChange={handleThemeChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-4 w-[344px] h-[344px] rounded-[3rem] p-6 to-[#303030] from-[#16202A] bg-gradient-to-tl">
                                    <h3>Insira páginas e seus conteúdos enquanto pré-visualiza o resultado</h3>
                                    <div className="rounded-[3rem] p-6 h-full" style={{ backgroundColor: selectedTheme }}>
                                        <h4 className={`${isLightMode && 'text-black'}`} style={{ fontFamily: selectedFont }}>Hello World! Programmed to work and not to feel!!! Not even sure that this is real...... Hello, world!</h4>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-4 w-[344px] h-[344px] rounded-[3rem] p-6 to-[#303030] from-[#16202A] bg-gradient-to-tr">
                                    <h3>Baixe o conteúdo e salve as pré-definições para as próximas sessões</h3>
                                    <div></div>
                                </div>
                            </section>
                        </section>
                    </section>
                </main>
            </main>
            <div className="bg-blue-800 w-48 h-96" />
        </main>
    );
}