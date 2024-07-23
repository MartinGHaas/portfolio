import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      // {
      //   path: "/projects",
      //   element: <Projects />
      // }
    ]
  }
];

export const router = createBrowserRouter(routes);
