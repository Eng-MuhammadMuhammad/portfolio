import React, { useState } from "react";
import styles from "./Projects.module.css";
import "../Styles/Styles.module.css";

// Import images with updated names
import ShopCarts from "../../imgs/ShopCarts.png";
import ArtCooperation from "../../imgs/ArtCooperation.png";
import DesignAgency from "../../imgs/DesignAgency.png";
import MediaCompany from "../../imgs/MediaCompany.png";
import DevelopingCompany from "../../imgs/DevelopingCompany.png";
import SalesCompanyUI from "../../imgs/SalesCompanyUI.png";
import ClothesShopUI from "../../imgs/ClothesShopUI.png";
import BookStoreCardUI from "../../imgs/BookStoreCardUI.png";
import PortfolioDesignUI from "../../imgs/PortfolioDesignUI.png";
import OnlineCoursesApp from "../../imgs/OnlineCoursesApp.png";
import DesignerPortfolio from "../../imgs/DesignerPortfolio.png";
import DribbleDesignersSpace from "../../imgs/DribbleDesignersSpace.png";
import TodoApp from "../../imgs/TodoApp.png";
import LightStore from "../../imgs/LightStore.png";
import ProfileDashboard from "../../imgs/ProfileDashboard.png";
import StolenBikesInvestigation from "../../imgs/StolenBikesInvestigation.png";

const projects = [
  {
    id: 1,
    label: "Stolen Bikes Investigation | SBI",
    image: StolenBikesInvestigation,
    link: "https://stolen-bikes-investigasion-sbi.vercel.app/",
  },
  {
    id: 2,
    label: "Clothes Store | Men $ Women",
    image: ShopCarts,
    link: "https://mystoreshopcart.vercel.app/",
  },
  {
    id: 3,
    label: "Dashboard | Profile",
    image: ProfileDashboard,
    link: "https://dashboardpresonal.vercel.app/",
  },
  {
    id: 4,
    label: "Todo Application",
    image: TodoApp,
    link: "https://to-do-apptasks.vercel.app/",
  },
  {
    id: 5,
    label: "Modern Shopping | Light Store",
    image: LightStore,
    link: "https://light-store-modern.vercel.app/",
  },
  {
    id: 6,
    label: "Art Coperation",
    image: ArtCooperation,
    link: "https://coperation-art.vercel.app/",
  },
  {
    id: 7,
    label: "Design Agency",
    image: DesignAgency,
    link: "https://new-design-agency.vercel.app/",
  },
  {
    id: 8,
    label: "Media Company",
    image: MediaCompany,
    link: "https://media-company-world.vercel.app/",
  },
  {
    id: 9,
    label: "Developing Company",
    image: DevelopingCompany,
    link: "https://developer-area-com.vercel.app/",
  },
  {
    id: 10,
    label: "Sales Company / UI-UX",
    image: SalesCompanyUI,
    link: "https://www.figma.com/proto/dbRfOWUgS0aivxUxRBiRCe/design?node-id=15%3A324&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=15%3A324",
  },
  {
    id: 11,
    label: "Clothes Shop / UI-UX",
    image: ClothesShopUI,
    link: "https://www.figma.com/proto/zzzSomNyeqCJrCooboAgy4/SHOP-REMOTE?node-id=2%3A2&starting-point-node-id=2%3A2",
  },
  {
    id: 12,
    label: "Book Store Card / UI-UX",
    image: BookStoreCardUI,
    link: "https://www.figma.com/proto/b6pwNopLZRXauTUy9M5B6Q/VIDEO-2-TEST?node-id=10%3A24",
  },
  {
    id: 13,
    label: "Portfolio Design / UI-UX",
    image: PortfolioDesignUI,
    link: "https://www.figma.com/proto/IYPjr2NYksyaVpWIZQyDoH/VIDEO-1-TEST?node-id=0%3A5",
  },
  {
    id: 14,
    label: "Online Courses Application / UI-UX",
    image: OnlineCoursesApp,
    link: "https://www.figma.com/file/hajvYDGBNZ9z7kkUjyWHaV/OnlineCourseApplication?type=design&node-id=0%3A1&mode=design&t=2S1SaiNXYxayfAkB-1",
  },
  {
    id: 15,
    label: "Designer Portfolio / UI-UX",
    image: DesignerPortfolio,
    link: "https://www.figma.com/file/UH0aetbAhU8RM1rSbEVInx/DesignerPortfolio?type=design&node-id=0%3A1&mode=design&t=bAuyK4duEDUAi0Dl-1",
  },
  {
    id: 16,
    label: "Dribble - Designers Space / UI-UX",
    image: DribbleDesignersSpace,
    link: "https://www.figma.com/proto/2vcjhFuxBujlgvxyO1asWG/Dribbble?page-id=0%3A1&node-id=2-8&starting-point-node-id=2%3A8&mode=design&t=2gucn1UQejG2no7F-1",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Decide the projects to show: only 6 if showAll is false, all if true
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>MY PROJECTS</h2>
      <div className={styles.projectsContainer}>
        {displayedProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <div className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.label}
                className={styles.projectImage}
              />
              <div className={styles.projectLabel}>{project.label}</div>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.viewAllButtonContainer}>
        <button
          onClick={() => setShowAll((prevState) => !prevState)}
          className={styles.viewAllButton}
        >
          {showAll ? "Show Less" : "View All Projects Here"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
