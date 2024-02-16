import React, { useContext } from "react";
import { RouterContext } from "./Routes";

export default function Link({ to, children }) {
  const { pushState } = useContext(RouterContext);
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        pushState(to);
      }}
    >
      {children}
    </a>
  );
}
