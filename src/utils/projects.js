import ManagerProjects from "./ManagerProjects.js";

const container = document.getElementById("main")
const manager = new ManagerProjects(container);

manager.renderProjects();   
