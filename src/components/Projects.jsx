import React from "react";
import ProjectItem from "./ProjectItem";
import createUser from "../assets/create-uzer.png";
import todolist from "../assets/todo-crud.png";
import weather from "../assets/weather-api.png";
import wordapi from "../assets/word-api.png";
import comfy from "../assets/comfy.png";
import users from "../assets/users.png";

function Projects() {
  return (
    <div id="projects" className="max-w-[1140px] m-auto md:pl-20 px-4 py-16">
      <h1 className="text-4xl font-bold text-start text-[#4c185c]">Projects</h1>
      <div className="border-l-4 border-[#4c185c] ">
        <p className="pt-4 text-xl text-[#16205b] pl-4">
          When I set out to become a web developer, I set myself many noble
          goals. During my studies, I worked a lot on myself and did many small
          projects. And I want to share some of them with you. These projects
          may not attract much attention, but I promise to share the results
          with you in the near future when I get involved in big and real
          projects with a big team!
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-12 pt-16">
        <ProjectItem
          img={comfy}
          title={"Responsive website with redux-toolkit"}
          desc={"React Js"}
          link={"https://ia-comfy-store-app.netlify.app/"}
        />
        <ProjectItem
          img={users}
          title={"User information (Crud app)"}
          desc={"React Js, Redux-toolkit"}
          link={"Netlify (https://papaya-crostata-b8e704.netlify.app)"}
        />
        <ProjectItem
          img={todolist}
          title={"ToDo List"}
          desc={"React Js"}
          link={"https://ia-todo-list.netlify.app/"}
        />
        <ProjectItem
          img={weather}
          title={"Weather App (API)"}
          desc={"JavaScript"}
          link={"https://ia-weather-info.netlify.app/"}
        />
        <ProjectItem
          img={createUser}
          title={"Create User App (CRUD)"}
          desc={"React Js"}
          link={"https://create-users-app.netlify.app/"}
        />
        <ProjectItem
          img={wordapi}
          title={"English Words"}
          desc={"JavaScript"}
          link={"https://ia-words-api.netlify.app/"}
        />
      </div>
    </div>
  );
}

export default Projects;
