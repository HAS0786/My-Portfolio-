// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);

revealSections();

// TYPING ANIMATION

const roles = [
  "Excel Specialist",
  "Power BI Learner",
  "SQL Enthusiast",
  "Python Developer",
  "Flutter Developer",
  "Aspiring Data Analyst",
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);
  } else {
    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    setTimeout(typeEffect, 300);
  }
}

typeEffect();

// COUNTER

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText.replace("+", "");

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);

      setTimeout(updateCounter, 35);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});

// MODAL

const projects = {
  lms: {
    title: "AI-Based LMS",

    description:
      "Final Year Project developed using Flutter, Firebase and AI-powered Retrieval-Augmented Generation (RAG).",

    github: "https://github.com/HAS0786/fyp_notes_house",

    tech: ["Flutter", "Firebase", "Firestore", "RAG", "Authentication"],

    images: [
      "images/Project1(FYP)/Splash Screen.jpeg",
      "images/Project1(FYP)/Std Login Page.jpeg",
      "images/Project1(FYP)/Teacher side.jpeg",
      "images/Project1(FYP)/Role Selection.jpeg",
      "images/Project1(FYP)/University selection.jpeg",
      "images/Project1(FYP)/add uni.jpeg",
      "images/Project1(FYP)/upload notes.jpeg",
      "images/Project1(FYP)/analysis.jpeg",
      "images/Project1(FYP)/admin side analysis.jpeg",
    ],
  },

 
  excel_python_bootcamp: {
    title: "Excel and Python Bootcamp Project",

    description:
      "This project is a comprehensive data analysis and visualization project that combines the power of Excel and Python to analyze an Amazon dataset. The project involves cleaning, transforming, and visualizing the data to uncover insights into sales performance, customer behavior, and product trends. Using Excel's advanced features such as Pivot Tables, Charts, and Slicers, along with Python libraries like Pandas, NumPy, and Matplotlib, the project provides a holistic view of the dataset. The interactive dashboards created in both Excel and Python allow users to explore the data dynamically, making it easier to identify patterns and make informed decisions. This project demonstrates my ability to leverage multiple tools for effective data analysis and visualization.",

    github: "https://github.com/HAS0786/Excel_to_Python_Bootcamp",

    tech: ["Excel","Pivot Tables","Slicer", "Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis", "Data Visualization"],

    images: [
      "images/bootcamp_Excel_to_Python/Maindashboard.png",

      "images/bootcamp_Excel_to_Python/main_excel_dashboard.png",

      "images/bootcamp_Excel_to_Python/Excel Dashboard_showing Charts.png",

      "images/bootcamp_Excel_to_Python/Excel dashboard_with Storytelling.png",
      "images/bootcamp_Excel_to_Python/loading Dataset_python.png",
      "images/bootcamp_Excel_to_Python/KPI python.png",
      "images/bootcamp_Excel_to_Python/data set info.png",
      "images/bootcamp_Excel_to_Python/dataset overivew.png",
      "images/bootcamp_Excel_to_Python/customer.. _python.png",
      "images/bootcamp_Excel_to_Python/Monthly trends_python.png",
      "images/bootcamp_Excel_to_Python/pie_chart_category_python.png",
      "images/bootcamp_Excel_to_Python/top_10_sales_python.png",
      "images/bootcamp_Excel_to_Python/dataset.png",
      "images/bootcamp_Excel_to_Python/Amazon_Kaggle_dataset.png",

    ],
  },
  excel1: {
    title: "Sales Performance & Target Achievement Dashboard in Excel",

    description:
      "Developed an interactive Sales Performance Dashboard in Excel to monitor and analyze sales executives across multiple cities. The dashboard provides insights into top and bottom performers based on total sales and target achievement percentages, helping identify high-performing employees and areas requiring improvement. Using Pivot Tables, Pivot Charts, Slicers, and dynamic reporting techniques, the dashboard enables users to filter data by city and instantly explore sales trends and performance metrics. This project strengthened my skills in Excel dashboard design, data analysis, data visualization, and business reporting.",

    github: "https://github.com/HAS0786/Sales-Performance-Target-Achievement-Dashboard-in-Excel",

    tech: ["Excel", "Pivot Tables", "Slicers", "Data Visualization", "Dashboard Design"],

    images: [
      "images/Excel Projects/dashboard.png",

      "images/Excel Projects/analysis1.png",

      "images/Excel Projects/analysis.png",

    ],
  },
  powerbi1: {
    title: "E-Commerce Sales Dashboard Power-BI",

    description:
      "Developed an interactive E-Commerce Sales and Customer Intelligence Dashboard in Power BI to analyze business performance and support data-driven decision-making. The project involved transforming raw transactional data, creating business KPIs with DAX, and designing interactive visualizations to track sales, profitability, customer trends, and regional performance. By exploring product categories, revenue patterns, profit margins, and discount impacts, the dashboard provides valuable insights that help businesses identify growth opportunities and improve overall performance. This project strengthened my skills in data analytics, KPI development, dashboard design, business intelligence, and data storytelling.",

    github: "https://github.com/HAS0786/E-Commerce-Sales-Dashboard-Power-BI",

    tech: ["Power BI", "Data Modeling", "DAX", "Visualization"],

    images: [
      "images/Power BI Projects/Project 1 ScreenShots/Dashboard2.png",

      "images/Power BI Projects/Project 1 ScreenShots/Analysis1.png",

      "images/Power BI Projects/Project 1 ScreenShots/Analysis2.png",

      "images/Power BI Projects/Project 1 ScreenShots/Analysis3.png",
    ],
  },
  powerbi2: {
    title: "HR-Analytics-Employee-Attrition-Dashboard",

    description:
      "Developed an HR Analytics and Employee Attrition Dashboard in Power BI to help identify the key factors behind employee turnover and support data-driven HR decisions. The project involved cleaning and transforming HR data, creating custom DAX measures, and building interactive dashboards to analyze attrition across different employee groups. Through insights on overtime, salary levels, work-life balance, age groups, and departments, the dashboard highlights areas where organizations can improve employee retention. This project strengthened my skills in data preparation, business analysis, KPI development, dashboard design, and data storytelling while demonstrating how analytics can be used to solve real business problems.",

    github: "https://github.com/HAS0786/HR-Analytics-Employee-Attrition-Dashboard",

    tech: ["Power BI", "Data Modeling", "DAX", "Visualization"],

    images: [
      "images/Power BI Projects/Project2 screenshots/Dashboard2.png",

      "images/Power BI Projects/Project2 screenshots/Analysis3.png",

      "images/Power BI Projects/Project2 screenshots/Analysis1.png",

      "images/Power BI Projects/Project2 screenshots/Analysis2.png",
      "images/Power BI Projects/Project2 screenshots/Analysis4.png",
      "images/Power BI Projects/Project2 screenshots/Data.png",
    ],
  },
  python1: {
    title: "E-Commerce Data Analysis with Python",

    description:
      "IThis project focuses on using Python, NumPy, and Pandas to analyze e-commerce data and uncover meaningful insights through exploratory data analysis (EDA). The dataset was cleaned and preprocessed to ensure data quality before analyzing patterns, relationships, and trends within the data. Key tasks included handling missing values, detecting outliers, and exploring correlations to better understand customer and sales behavior. Through this project, I strengthened my practical data analysis skills and gained hands-on experience in preparing and exploring real-world datasets using Python.",

    github: "https://github.com/HAS0786/DataScience_Pandas_Project",

    tech: ["Python", "NumPy", "Pandas", "Matplotlib"],

    images: [
      "images/python projects/project 1/rfm_segments.png",
      "images/python projects/project 1/top_countries_revenue.png",
      "images/python projects/project 1/top_products_revenue.png",
      "images/python projects/project 1/dataset_summary.png",
      "images/python projects/project 1/table_top_countries.png",
      "images/python projects/project 1/table_top_products.png",

   
    ],
  },
  python_Scikit1: {
    title: "Predicting Student Stress Levels with SVM and Decision Tree Models",

    description:
      "Developed a machine learning project to predict student stress levels using Support Vector Machine (SVM) and Decision Tree algorithms. The project involved data preprocessing, feature scaling, model training, and performance evaluation on survey-based student data. Multiple evaluation techniques, including confusion matrices, classification reports, learning curves, and F1-scores, were used to assess model performance beyond simple accuracy metrics. A comparative analysis showed that the SVM model achieved the best overall performance, demonstrating its effectiveness in classifying stress levels into Low, Medium, and High categories. This project strengthened my understanding of supervised machine learning, model evaluation, feature scaling, cross-validation, and classification techniques using Scikit-learn.",

    github: "https://github.com/HAS0786/DataScience_SVM_DecisionTree_Scikit_Project",

    tech: ["Python", "NumPy", "Pandas", "Seaborn", "Scikit-learn", "SVM", "Decision Tree", "Classification Report", "Learning Curves"],

    images: [
      "images/python projects/project 2/SVM.png",

      "images/python projects/project 2/Decision Tree.png",

      "images/python projects/project 2/Report.png",

      "images/python projects/project 2/Learning Curve SVM.png",
    ],
  },
};

const modal = document.getElementById("projectModal");

const openBtns = document.querySelectorAll(".open-modal");

const closeBtn = document.querySelector(".close-modal");

openBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];

    document.getElementById("modal-title").innerText = project.title;

    document.getElementById("modal-description").innerText =
      project.description;

    document.getElementById("modal-github").href = project.github;

    const techContainer = document.getElementById("modal-tech");

    techContainer.innerHTML = "";

    project.tech.forEach((item) => {
      techContainer.innerHTML += `<span>${item}</span>`;
    });

    const gallery = document.getElementById("modal-gallery");

    gallery.innerHTML = "";

    project.images.forEach((img) => {
      gallery.innerHTML += `
      <img src="${img}">
      `;
    });

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



// DARK LIGHT TOGGLE

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// PARTICLES

particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
    },

    color: {
      value: "#38bdf8",
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: 0.3,
    },

    size: {
      value: 3,
    },

    move: {
      enable: true,
      speed: 1,
    },
  },
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const viewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.querySelector(".close-viewer");

if (viewer && viewerImage && closeViewer) {

  document.addEventListener("click", (e) => {

    if (e.target.matches(".modal-gallery img")) {

      viewer.style.display = "flex";

      viewerImage.src = e.target.src;

    }

  });

  closeViewer.addEventListener("click", () => {

    viewer.style.display = "none";

  });

  viewer.addEventListener("click", (e) => {

    if (e.target === viewer) {

      viewer.style.display = "none";

    }

  });

}
document.addEventListener("click", (e) => {

  if (e.target.matches(".modal-gallery img")) {

    viewer.style.display = "flex";

    viewerImage.src = e.target.src;

  }

});

closeViewer.addEventListener("click",()=>{

  viewer.style.display = "none";

});

viewer.addEventListener("click",(e)=>{

  if(e.target === viewer){

    viewer.style.display = "none";

  }

});


// EMAILJS CONTACT FORM

emailjs.init("CGj7BdzPagyZwhMpr");

const contactForm =
document.getElementById("contact-form");

const statusMessage =
document.getElementById("form-status");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  statusMessage.innerHTML =
  "Sending message...";

  emailjs.sendForm(

    "service_bpotm8p",

    "template_rqrklxa",

    this

  )

  .then(() => {

    statusMessage.innerHTML =
    "✅ Message sent successfully!";

    statusMessage.style.color =
    "#22c55e";

    contactForm.reset();

  })

  .catch((error) => {

    console.error(error);

    statusMessage.innerHTML =
    "❌ Failed to send message.";

    statusMessage.style.color =
    "#ef4444";

  });

});