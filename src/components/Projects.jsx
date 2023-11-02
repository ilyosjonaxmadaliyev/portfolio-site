import React from "react";
import ProjectItem from "./ProjectItem";
import createUser from "../assets/create-uzer.png";
import todolist from "../assets/todo-crud.png";
import weather from "../assets/weather-api.png";
import wordapi from "../assets/word-api.png";
import comfy from "../assets/comfy.png";
import users from "../assets/users.png";
import biointech from "../assets/biointech.png";
import medol from "../assets/medol.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const [t] = useTranslation("global");

  return (
    <div id="projects" className="max-w-[1140px] m-auto md:pl-20 px-4 py-16">
      <h1 className="text-4xl font-bold text-start text-[#4c185c]">
        {t("project")}
      </h1>
      <div className="border-l-4 border-[#4c185c] ">
        <p className="pt-4 text-xl text-[#16205b] pl-4">{t("project_desc")}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-12 pt-16">
        <ProjectItem
          img={biointech}
          title={t("biointech")}
          desc={"React Js"}
          link={"https://biointech.netlify.app/"}
        />
        <ProjectItem
          img={medol}
          title={t("medol")}
          desc={"React Js"}
          link={"https://chimerical-salamander-2ec80b.netlify.app"}
        />
        <ProjectItem
          img={comfy}
          title={t("more_info1")}
          desc={"React Js"}
          link={"https://ia-comfy-store-app.netlify.app/"}
        />
        <ProjectItem
          img={users}
          title={t("more_info2")}
          desc={"React Js, Redux-toolkit"}
          link={"https://papaya-crostata-b8e704.netlify.app"}
        />
        <ProjectItem
          img={todolist}
          title={t("more_info3")}
          desc={"React Js"}
          link={"https://ia-todo-list.netlify.app/"}
        />
        <ProjectItem
          img={weather}
          title={t("more_info4")}
          desc={"JavaScript"}
          link={"https://ia-weather-info.netlify.app/"}
        />
        <ProjectItem
          img={createUser}
          title={t("more_info5")}
          desc={"React Js"}
          link={"https://create-users-app.netlify.app/"}
        />
        <ProjectItem
          img={wordapi}
          title={t("more_info6")}
          desc={"JavaScript"}
          link={"https://ia-words-api.netlify.app/"}
        />
      </div>
    </div>
  );
}

export default Projects;
