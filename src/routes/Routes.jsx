import React, { createContext, useEffect } from "react";

//? Types

export const RouterContext = createContext({
  path: "",
  pushState: (pathname) => {},
  replaceState: (pathname) => {},
});

export const Router = ({ initialPath, children }) => {
  const canIUseWindow = typeof window !== "undefined";
  const [path, setPath] = React.useState(
    canIUseWindow ? window.location.pathname : initialPath
  );

  const pushState = (pathname) => {
    window.history.pushState({}, "", path);
    setPath(path);
  };

  const replaceState = (pathname) => {
    window.history.replaceState({}, "", path);
    setPath(path);
  };

  useEffect(() => {
    //? handle back and forward buttons in window
    window.onpopstate = () => {
      setPath(window.location.pathname);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ path, pushState, replaceState }}>
      {children}
    </RouterContext.Provider>
  );
};
