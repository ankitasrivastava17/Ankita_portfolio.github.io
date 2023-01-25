const Projects = [
  {
    name: "Oppo.com",
    about:
      "Guangdong Oppo Mobile Telecommunications Corp., Ltd, doing business as OPPO,[a] is a Chinese consumer electronics manufacturer headquartered in Dongguan, Guangdong. Its major product lines include smartphones, smart devices, audio devices, power banks, and other electronic products.",
    img: "https://www.freepnglogos.com/uploads/oppo-logo-png/oppo-logo-png-image-download--5.png",
    gitrepo: "https://github.com/mistrivishal/OPPO-India-Clone",
    tech_stack: "HTML | CSS | JavaScript | ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://oppoindiaclone.netlify.app",
    project_type: "Individual Project",
    category: ["all", "frontend"],
  },
  {
    name: "Overstock.com",
    about:
      "Overstock.com, Inc. is an American internet retailer selling primarily furniture headquartered in Midvale, Utah, near Salt Lake City. Businessman Patrick M. Byrne founded Overstock.com in 1999.",
    img: "https://archive.is/4R6Na/9616a0872d26d3cd0335c6339d0b5a1b1cf2a6ea.png",
    gitrepo: "https://github.com/prashant1307/overstock_clone",
    tech_stack: "HTML | CSS | JavaScript | ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://radiant-fairy-66db6d.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "frontend"],
  },
  {
    name: "Online Banking System",
    about:
      "I created Online Banking System using the concepts of Core Java. I created it using two login systems , one for admin and second for the customer with different permissions and features for each of them"
      ,
    img: "https://www.indiaeve.com/images/events/Event99252712Img.jpg",
    gitrepo: "https://github.com/ankitasrivastava17/Online_Bank",
    tech_stack: "Core Java ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://drive.google.com/file/d/1gjBu01gOF6ajQcJadg8-vp50AmVQKQAi/view?usp=sharing",
    project_type: "Individual Project",
    category: ["all", "backend"],
  },
  {
    name: "Covid-19 Vaccination System",
    about:
      "Guangdong Oppo Mobile Telecommunications Corp., Ltd, doing business as OPPO,[a] is a Chinese consumer electronics manufacturer headquartered in Dongguan, Guangdong. Its major product lines include smartphones, smart devices, audio devices, power banks, and other electronic products.",
    img: "https://user-images.githubusercontent.com/105916680/208608266-bd0fb9e9-d502-4d4e-9361-c19c0924d2e8.jpg",
    gitrepo: "https://github.com/DheerajPandey1/shiny-screw-8051",
    tech_stack: "Core Java | Hibernate | SpringBoot | ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://drive.google.com/file/d/18wlTvwp7jdeobvk02c0yfSru6_wAem4R/view?usp=share_link",
    project_type: "Group Project",
    category: ["all", "backend"],
  },
 
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");

let backend_projects = document.querySelector(".backend_projects");
// let other_projects = document.querySelector(".other_projects");
let frontend_projects = document.querySelector(".frontend_projects");
all_projects.classList.add("active_tech_project");

all_projects.addEventListener("click", () => {
  filterProjects("all");
  all_projects.classList.add("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});
backend_projects.addEventListener("click", () => {
  filterProjects("backend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.add("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});

frontend_projects.addEventListener("click", () => {
  filterProjects("frontend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.add("active_tech_project");
});

function filterProjects(basis) {
  let filtered = Projects.filter((el) => {
    return el.category.includes(basis);
  });
  displayProjectData(filtered);
}

function displayProjectData(Projects) {
  projects__container.innerHTML = null;
  Projects.reverse().forEach((pro) => {
    let main = document.createElement("div");
    main.setAttribute("class", "portfolio-item padd-15");
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>

      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack} 
      </div>

      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
     
      
    </div>
  </div>
    `;
    projects__container.append(main);
  });
}

displayProjectData(Projects);
