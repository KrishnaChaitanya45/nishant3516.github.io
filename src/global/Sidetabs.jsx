import React, { useContext, useEffect, useState } from "react";
import Link from "../routes/Link";
import { RouterContext } from "../routes/Routes";

function Sidetabs() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    setCurrentPage(window.location.pathname.split("/")[1]);
  }, []);
  const menuData = [
    "CSE Department",
    "HOD Message",
    "BOS Members",
    "Course Structures & Syllabus",
    "Faculty",
    "Collaborations",
    "Events",
    "Infrastructure",
    "Publications",
    "Achievements",
    "Class Incharges",
    "Laboratories",
    "Downloads",
  ];
  const { pushState } = useContext(RouterContext);
  console.log(pushState);
  const menuItem = (menuName, index) => {
    const isHovered = hoverIndex === index;
    const style = {
      border: "1px solid gray",
      margin: "12px",
      padding: "5px 15px",
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: isHovered ? "orange" : "transparent",
      color: isHovered ? "white" : "black",
      cursor: "pointer",
    };

    return (
      <div
        style={style}
        onClick={(e) => {
          window.location.replace(
            `http://localhost:3000/${menuName
              .toLowerCase()
              .replace(/\s/g, "-")}`
          );
          // pushState(`/${menuName.toLowerCase().replace(/\s/g, "-")}`);
        }}
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <a style={{ fontSize: "14px", textDecoration: "none", color: "black" }}>
          {menuName}
        </a>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "5%",
          paddingLeft: "6%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <button
            style={{
              border: "none",
              background: "transparent",
              borderRadius: "8px 0px 0px 8px",
              cursor: "pointer",
            }}
          >
            Home
          </button>
          /
          <button
            onClick={() => {
              window.location.replace(`http://localhost:3000/`);
            }}
            style={{
              border: "none",
              background: "transparent",
              borderRadius: "8px 0px 0px 8px",
              cursor: "pointer",
            }}
          >
            CSE
          </button>
          /
          {currentPage.length > 0 && (
            <button
              style={{
                border: "none",
                background: "transparent",
                borderRadius: "8px 0px 0px 8px",
                cursor: "pointer",
                color: "#ec691f",
              }}
            >
              {currentPage[0].toUpperCase() + currentPage.slice(1)}
            </button>
          )}
        </div>

        {menuData.map((item, index) => {
          return menuItem(item, index);
        })}
      </div>
    </>
  );
}

export default Sidetabs;
