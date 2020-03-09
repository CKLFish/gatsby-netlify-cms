import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

import classnames from "clsx";
import { createUseStyles, useTheme } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles(({ theme }) => ({
  navbar: {
    "& .navbar-menu": {
      boxShadow: "none !important"
    }
  }
}));

const Navbar = props => {
  const theme = useTheme();
  const styles = useStyles({ theme });

  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");

  useEffect(() => {
    setNavBarActiveClass(active ? "is-active" : "");
  }, [active]);

  const toggleHamburger = () => {
    setActive(!active);
  };

  return (
    <nav
      // className="navbar is-transparent"
      className={clsx("is-transparent", "navbar", styles.navbar)}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={logo}
              alt={"Kladi"}
              style={{ width: "88px" }}
            />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={clsx(styles["navbar-menu"], "navbar-menu", navBarActiveClass)}
        >
          <div className="navbar-start has-text-centered">
            {/* <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link> */}
            {/* <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link> */}
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// const Navbar = class extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: false,
//       navBarActiveClass: '',
//     }
//   }

//   toggleHamburger = () => {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//               navBarActiveClass: 'is-active',
//             })
//           : this.setState({
//               navBarActiveClass: '',
//             })
//       }
//     )
//   }

//   render() {

//     return (
//       <nav
//         // className="navbar is-transparent"
//         className={clsx("is-transparent", styles.navbar)}
//         role="navigation"
//         aria-label="main-navigation"
//       >
//         <div className="container">
//           <div className="navbar-brand">
//             <Link to="/" className="navbar-item" title="Logo">
//               <img src={logo} alt={document.title || "Kladi"} style={{ width: '88px' }} />
//             </Link>
//             {/* Hamburger menu */}
//             <div
//               className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//               data-target="navMenu"
//               onClick={() => this.toggleHamburger()}
//             >
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div
//             id="navMenu"
//             className={`navbar-menu ${this.state.navBarActiveClass}`}
//           >
//             <div className="navbar-start has-text-centered">
//               {/* <Link className="navbar-item" to="/about">
//                 About
//               </Link>
//               <Link className="navbar-item" to="/products">
//                 Products
//               </Link>
//               <Link className="navbar-item" to="/blog">
//                 Blog
//               </Link> */}
//               {/* <Link className="navbar-item" to="/contact">
//                 Contact
//               </Link>
//               <Link className="navbar-item" to="/contact/examples">
//                 Form Examples
//               </Link> */}
//             </div>
//             <div className="navbar-end has-text-centered">
//               <a
//                 className="navbar-item"
//                 href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="icon">
//                   <img src={github} alt="Github" />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }

// Navbar.displayName = "Navbar";

// const styledNavbar = withStyles(styles)(Navbar);

// export default withTheme()(styledNavbar);
