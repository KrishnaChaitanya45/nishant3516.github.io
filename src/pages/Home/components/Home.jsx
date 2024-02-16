import React from "react";
import cseLeft from "../../../assets/images/cse-left-main.png";
import cseRight from "../../../assets/images/cse-right-main.png";
import styles from "../../../global/styles/Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeMainDiv}>
      <h1 className={styles.homeHeading}>
        About Computer Science and Engineering :
      </h1>
      <div className={styles.imgDiv}>
        <img
          className={styles.imgStyle}
          src={
            "https://static.wixstatic.com/media/0c0246_8a9e99ebe7ee4c458782203abcc47694~mv2.jpg/v1/fill/w_543,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0c0246_8a9e99ebe7ee4c458782203abcc47694~mv2.jpg"
          }
          alt="CSE LEFT"
        />
        <img
          className={styles.imgStyle}
          src={
            "https://static.wixstatic.com/media/0c0246_7f184faf1ab149d98a3afd56fe33c0aa~mv2.jpg/v1/fill/w_541,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cse%202.jpg"
          }
          alt="CSE Right"
        />
      </div>
      <br />
      <br />
      <div>
        <p>
          The Department of Computer Science and Engineering has eminent faculty
          with a blend from Academics and industry with varied specializations
          to impart their skill on latest technologies for B.Tech students. The
          department offers a Doctoral program (Ph.D) in Computer Science and
          Engineering and working on emerging areas. Center of Excellence Labs
          have been functioning on cutting edge technologies such as Artificial
          Intelligence & Machine Learning, IoT, Cyber Security, Cloud & Fog
          Computing and Software Engineering. Department faculty has been
          executing several funded research projects. Had MoUs with reputed MNCs
          such as IBM, Microsoft, CISCO etc to be in tune with industry
          developments and requirements."
        </p>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Why Choose MRUH CSE:</p>
        <ul>
          <li>Qualified & Experienced Faculty</li>
          <li>Industry ready course content</li>
          <li>Well planned academic curriculum</li>
          <li>Course delivery through real world applications</li>
          <li>Career Prospects.</li>
        </ul>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Vision:</p>
        <p>
          Department of CSE aims to make a stance of International repute
          through continuous research, innovation and industry led curriculum.
        </p>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Mission:</p>
        <p>
          To Impart Quality Education with social consciousness and make them
          Globally Competent.
        </p>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Innovative Pedagogies:</p>
        <ul>
          <li>On-demand video lecture streaming</li>
          <li>Cloud based tools for online teaching.</li>
          <li>Discussion forums for doubts clarification</li>
          <li>Course projects towards realizable prototypes.</li>
        </ul>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Skill Development:</p>
        <ul>
          <li>
            Coding skills: Programming skills in C, C++, Java, Python, Cognos,
            Informatica, AS/400 etc.
          </li>
          <li>Hardware skills: Ardunio, Raspberry Pi Boards.</li>
          <li>Soft skills: Hobby clubs</li>
        </ul>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Internships & Placements:</p>
        <ul>
          <li>Internships in industries</li>
          <li>Entrepreneurship cell</li>
        </ul>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Admissions:</p>
        <p>
          B.Tech CSE is a comprehensive course in Computer Applications and
          System. It deals with designing and developing Software Applications
          with integration of different algorithms. Through this course, the
          students will be able to understand, learn and use different
          Programming Languages, Data Base, Deep Learning, Neural Networks,
          Artificial Intelligence and Machine learning etc. The course delivery
          methods include lectures, lab work, industrial training, assignments,
          workshops etc. Students are also encouraged to take up a research
          project.
        </p>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Curriculum:</p>
        <p>
          In the department, the following areas of research are highlighted
          under research groups internally, Data Visualization, Data Base
          Management Systems, Artificial Intelligence, Deep Learning, Natural
          Language Processing, Perception and Computer Vision, Cognitive
          Computing, Automata and Compiler Design, Data Structures, Object
          Oriented Programming, Enterprise Programming.
        </p>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>UG Research Opportunities:</p>
        <p>
          Students are involved in Research Projects in various domains where
          the faculty are working on cutting edge technology.
        </p>
      </div>
      <br />

      <div>
        <p className={styles.indHeading}>Online Learning:</p>
        <p>
          Department is partner with IBM in completing the online courses on IBM
          platform.. Through IBM course, the students will be able to
          understand, learn and use different programming languages, take
          specialization courses etc Many more certifications are planned.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
