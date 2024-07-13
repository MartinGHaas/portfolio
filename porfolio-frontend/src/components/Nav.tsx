import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../assets/routes/router";
import { useEffect, useState } from "react";

const Nav = () => {

  const location = useLocation();
  const [pathname, setPathname] = useState<string>("");

useEffect(() => {
    const pageName = location.pathname === "/" ? "HOME" : location.pathname.substring(1).toUpperCase();

    let deleteNameTimeout: NodeJS.Timeout | null = null;
    let writeNewNameTimeout: NodeJS.Timeout | null = null;

    const deleteName = (currentName: string) => {
      if (currentName.length > 0) {
        setPathname(currentName.slice(0, -1));
        deleteNameTimeout = setTimeout(() => deleteName(currentName.slice(0, -1)), 100);
      } else {
        writeName(pageName, 0);
      }
    };

    const writeName = (name: string, index: number) => {
      if (index <= name.length) {
        setPathname(name.slice(0, index));
        writeNewNameTimeout = setTimeout(() => writeName(name, index + 1), 100);
      }
    };

    deleteName(pathname);

    return () => {
      if (deleteNameTimeout) clearTimeout(deleteNameTimeout);
      if (writeNewNameTimeout) clearTimeout(writeNewNameTimeout);
    };
  }, [location.pathname]);

  return (
    <div className="flex justify-between items-end flex-wrap">
      <div>
        <h1 className="text-4xl min-h-10 font-bold">
          {pathname}
        </h1>
        <p>Martin Haas' portfolio</p>
      </div>

      <div className="w-1/3 flex items-end flex-col md:flex-row md:justify-between md:gap-4 md:z-10">
        {routes[0].children?.filter(route => route.path != location.pathname).map(route => (
          <NavLink key={route.path} to={route.path!} className="text-base lg:text-xl xl:text-2xl font-semibold">
            <h2>
              {route.path === "/" ? "HOME" : route.path?.substring(1).toUpperCase()}
            </h2>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Nav;
