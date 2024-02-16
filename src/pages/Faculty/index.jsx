import React, { useEffect, useState } from "react";
import Sidetabs from "../../global/Sidetabs";
import styles from "../../global/styles/Faculty.module.css";
import FacultyCard from "./components/FacultyCard";
const Faculty = () => {
  const [data, setData] = useState(null);
  const fetchFaculties = async () => {
    const response = await fetch("http://localhost:5000/api/faculty-data");

    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchFaculties();
  }, []);
  return (
    <div className={styles.container}>
      <div
        style={{
          width: "20%",
          marginLeft: "5%",
        }}
      >
        <Sidetabs />
      </div>
      <div className={styles.sideContainer}>
        <h1>Faculties</h1>
        {data &&
          data.map((item, index) => {
            function getRandomColor() {
              let color = "hsl(" + Math.random() * 360 + ", 100%, 90%)";
              return color;
            }
            console.log(item);
            return (
              <FacultyCard
                key={index}
                image={item.image}
                color={getRandomColor()}
                facultyName={item.name}
                qualifications={item.degrees}
                position={item.position}
                experience={item.experience}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Faculty;
