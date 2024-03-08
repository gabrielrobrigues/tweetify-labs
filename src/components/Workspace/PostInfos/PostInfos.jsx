// PostInfos.js
import React from "react";
import GeneralInput from "../../../components/Inputs/GeneralInput";
import MainSelect from "../../../components/Selects/MainSelect";
import ImageUploadInput from "../../Inputs/ImageUploadInput";

const PostInfos = ({
  postInfos,
  handleChangePostInfos,
  handleFontChange,
  handleTitleFontSizeChange,
  handleTextFontSizeChange,
  handleUsernameFontSizeChange,
  handleImageChange,
  fontNames,
  fontSizes_title,
  fontSizes_username,
  fontSizes_text,
}) => {
  return (
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
          <ImageUploadInput
            label="Foto de perfil do Usuário"
            name="user_photo"
            onChange={handleImageChange}
            imagePreviewUrl={postInfos.user_photo}
            displayPreview
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
              options={fontSizes_title.map((size) => ({
                value: size,
                label: `${size}px`,
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
              options={fontSizes_username.map((size) => ({
                value: size,
                label: `${size}px`,
              }))}
              value={postInfos.general_username_fontSize}
              onChange={handleUsernameFontSizeChange}
            />
          </div>
          <div className="w-full flex flex-col gap-y-1">
            <p>Tamanho da fonte: (Texto)</p>
            <MainSelect
              options={fontSizes_text.map((size) => ({
                value: size,
                label: `${size}px`,
              }))}
              value={postInfos.general_text_fontSize}
              onChange={handleTextFontSizeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInfos;
