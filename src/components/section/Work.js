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
        title: "Hulu clone",
        img: "/media/image/Hulu.jpg",
        url: "https://z-hulu.netlify.app/",
      },
      {
        id: 2,
        title: "Disney + clone",
        img: "/media/image/Disney-plus.jpg",
        url: "http://disney-plus-2022.netlify.app/",
      },
      {
        id: 3,
        title: "Kavino Panel",
        img: "/media/image/Kavino-en.jpg",
        url: "",
      },
    ],
  },
  {
    id: 2,
    label: "Online Tv",
    works: [
      {
        id: 1,
        title: "Hulu clone",
        img: "/media/image/Hulu.jpg",
        url: "https://z-hulu.netlify.app/",
      },
      {
        id: 2,
        title: "Disney + clone",
        img: "/media/image/Disney-plus.jpg",
        url: "http://disney-plus-2022.netlify.app/",
      },
    ],
  },
  {
    id: 3,
    label: "Admin-Panel",
    works: [
      {
        id: 1,
        title: "Kavino Panel",
        imag: "/media/image/Kavino-en.jpg",
        url: "",
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
                <img src={el.img} alt={el.title} className="work__img" />
                <h3 className="work__title">{el.title}</h3>
                {el.url !== "" && (
                  <a
                    href={el.url}
                    className="work__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo <BiRightArrowAlt className="work__icon" />
                  </a>
                )}
              </div>
            ))}
        </Bounce>
      </div>
    </section>
  );
}

export default Work;
