import { useEffect, useLayoutEffect, useState } from "react";
import {
  BiBook,
  BiBriefcase,
  BiHome,
  BiMessageSquareDetail,
  BiMoon,
  BiSun,
  BiUser,
} from "react-icons/bi";
import { BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs";
function Layout({ children }) {
  const [actvieNav, setActvieNav] = useState("#home");
  const [theme, setTheme] = useState(true);
  const scrollHeader = () => {
    const header = document.getElementById("header");
    if (window.scrollY >= 50) {
      header.classList.add("scroll-header");
    } else if (window.scrollY === 0) {
      header.classList.remove("scroll-header");
    }
  };
  window.addEventListener("scroll", scrollHeader);
  const themeHandler = (e) => {
    if (theme === true) {
      setTheme(false);
      document.body.classList.add("light-theme");
    } else {
      setTheme(true);
      window.document.body.classList.remove("light-theme");
    }
  };
  const navActiveHandle = (el) => {
    setTimeout(() => {
      setActvieNav(el);
    }, 1000);
  };

  //

  useLayoutEffect(() => {
    const allSections = document.querySelectorAll("section");
    const scrollActiveHandle = () => {
      let section = "";

      for (let i = 0; i < allSections.length; i++) {
        if (allSections[i]?.offsetTop < window.scrollY + 100) {
          section = "#" + allSections[i].id;
        }
      }
      setActvieNav(section);
    };
    window.addEventListener("scroll", scrollActiveHandle);
    return () => window.removeEventListener("scroll", scrollActiveHandle);
  }, []);
  return (
    <>
      <header className="header " id="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            Mehdi
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav_item">
                <a
                  href="#home"
                  className={`nav__link ${
                    actvieNav === "#home" ? "active-link" : ""
                  } `}
                  onClick={() => navActiveHandle("#home")}
                >
                  <BiHome />
                </a>
              </li>
              <li className="nav_item ">
                <a
                  href="#about"
                  className={`nav__link ${
                    actvieNav === "#about" ? "active-link" : ""
                  } `}
                  onClick={() => navActiveHandle("#about")}
                >
                  <BiUser />
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#skills"
                  className={`nav__link ${
                    actvieNav === "#skills" ? "active-link" : ""
                  } `}
                  onClick={() => navActiveHandle("#skills")}
                >
                  <BiBook />
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#work"
                  className={`nav__link ${
                    actvieNav === "#work" ? "active-link" : ""
                  } `}
                  onClick={() => navActiveHandle("#work")}
                >
                  <BiBriefcase />
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#contact"
                  className={`nav__link ${
                    actvieNav === "#contact" ? "active-link" : ""
                  } `}
                  onClick={() => navActiveHandle("#contact")}
                >
                  <BiMessageSquareDetail />
                </a>
              </li>
            </ul>
          </div>
          {/* THEME MODE BUTTON */}
          <button className="change-theme" onClick={themeHandler}>
            {theme ? (
              <BiMoon id="theme-button" />
            ) : (
              <BiSun className="change-theme" />
            )}
          </button>
        </nav>
      </header>

      {children}

      <footer class="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Mehdi</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonial" className="footer__link">
                Testimonial
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <a target="_blank" href="" className="footer__social-link">
              <BsLinkedin />
            </a>
            <a target="_blank" href="" className="footer__social-link">
              <BsTelegram />
            </a>
            <a target="_blank" href="" className="footer__social-link">
              <BsWhatsapp />
            </a>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Layout;
