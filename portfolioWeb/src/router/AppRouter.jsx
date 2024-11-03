import { createBrowserRouter } from "react-router-dom";

//importing pages
import { LandingPage } from "../Pages/LandingPage";
import AboutPage from "../Pages/AboutPage";
import PublicationPage from "../Pages/PublicationPage";
import ProjectPage from "../Pages/ProjectPage";
import NewsPage from "../Pages/NewsPage";
import TeachingPage from "../Pages/TeachingPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },
    {
      path: "/about",
      element: <AboutPage/>,
    },
    {
      path: "/publication",
      element: <PublicationPage/>,
    },
    {
      path: "/project",
      element: <ProjectPage/>,
    },
    {
      path: "/news",
      element: <NewsPage/>,
    },
    {
      path: "/teaching",
      element: <TeachingPage/>,
    },
  ]);


  export default router;