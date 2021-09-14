class ManagerProjects {
    constructor(html){
        this.container = html;
        this.projects = this.fetchJSON();
    }

    fetchJSON(){
        const response = new XMLHttpRequest();
        response.open("GET", './utils/projects.JSON', false);
        response.send(null);
        const data = JSON.parse(response.responseText);
        return data;
    }

    renderProjects(){
        console.log(this.projects);
        for(let i = 0; i < this.projects.projects.length; i++){
            const project = document.createElement("a");
            project.className = "project_container"
            project.href = `${this.projects.projects[i].link}`;
            project.innerHTML = `
            <img src="${this.projects.projects[i].img}" alt="caratule" class="project-img">
            <div class="project_info">
                <h2 class="project_info-name">${this.projects.projects[i].name}</h2>
                <h3 class="project_info-status">Status: ${this.projects.projects[i].status}</h3>
                <p class="project_info-description">Description: ${this.projects.projects[i].description}</p>
            </div>` ;
            this.container.appendChild(project); 
        }
    }
}

export default ManagerProjects; 