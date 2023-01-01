import {
  BiBook,
  BiBriefcase,
  BiHome,
  BiMessageSquareDetail,
  BiMoon,
  BiUser,
} from "react-icons/bi";
function Layout({ children }) {
  return (
    <>
      <header class="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Mehdi
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav_item">
                <a href="#home" className="nav__link active-link">
                  <BiHome />
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav__link">
                  <BiUser />
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav__link">
                  <BiBook />
                </a>
              </li>
              <li className="nav_item">
                <a href="#work" className="nav__link">
                  <BiBriefcase />
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav__link">
                  <BiMessageSquareDetail />
                </a>
              </li>
            </ul>
          </div>
          {/* THEME MODE BUTTON */}
          <BiMoon className="change-theme" id="theme-button" />
        </nav>
      </header>

      {children}

      <footer class="footer"></footer>
    </>
  );
}

export default Layout;