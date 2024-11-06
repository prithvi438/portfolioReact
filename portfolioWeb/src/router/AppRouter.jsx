import { createBrowserRouter } from "react-router-dom";

//importing pages
import { LandingPage } from "../Pages/LandingPage";
import PublicationPage from "../Pages/PublicationPage";
import ProjectPage from "../Pages/ProjectPage";
import NewsPage from "../Pages/NewsPage";
import TeachingPage from "../Pages/TeachingPage";
import HomePage from "../Pages/HomePage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      children: [
        {
          path: "/",
          element: <LandingPage/>,
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
      ]
    },
  ]);


  export default router;