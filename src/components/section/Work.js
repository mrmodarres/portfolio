import React, { useEffect, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { BiRightArrowAlt } from "react-icons/bi";
// CREATE WORK CARD AND TABS AND DEFAULT DATA
const Tabs = [
  {
    id: 1,
    label: "All",
    works: [
      {
        id: 1,
        title: "Web design",
        img: "",
        url: "www.google.com",
      },
      {
        id: 2,
        title: "Web design",
        img: "",
        url: "www.google.com",
      },
      {
        id: 3,
        title: "App movil",
        img: "",
        url: "www.google.com",
      },
      {
        id: 4,
        title: "Brand design",
        img: "",
        url: "www.google.com",
      },
    ],
  },
  {
    id: 2,
    label: "Web",
    works: [
      {
        id: 1,
        title: "Web design",
        img: "",
        url: "www.google.com",
      },
      {
        id: 2,
        title: "Web design",
        img: "",
        url: "www.google.com",
      },
    ],
  },
  {
    id: 3,
    label: "Brand",
    works: [
      {
        id: 1,
        title: "Brand design",
        img: "",
        url: "www.google.com",
      },
    ],
  },
  {
    id: 4,
    label: "Movil",
    works: [
      {
        id: 3,
        title: "App movil",
        img: "",
        url: "www.google.com",
      },
    ],
  },
];
function Work() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [tabShow, setTabShow] = useState();
  useEffect(() => {
    setTabShow(Tabs[0].works);
  }, []);

  const clickTab = ({ key, index }) => {
    setSelectedTab(key);
    setTabShow(Tabs[index].works);
  };
  return (
    <section className="work section" id="work">
      <span className="section_subtitle">My Portfolio</span>
      <h2 className="section_title">Recent Works</h2>
      <div className="work__filters">
        {Tabs.map((el, index) => (
          <button
            className={`work__item ${
              selectedTab === el.id ? "active__work" : ""
            }`}
            key={el.id}
            onClick={() => clickTab({ key: el.id, index })}
          >
            {el.label}
          </button>
        ))}
      </div>
      <div className="work__container container grid">
        <Bounce>
          {tabShow !== undefined &&
            tabShow.map((el, index) => (
              <div className="work__card" key={el.id}>
                <img src="" alt="TestWork1" className="work__img" />
                <h3 className="work__title">{el.title}</h3>
                <a href="#" className="work__button">
                  Demo <BiRightArrowAlt className="work__icon" />
                </a>
              </div>
            ))}
        </Bounce>
      </div>
    </section>
  );
}

export default Work;
