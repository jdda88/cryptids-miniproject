import React from "react";

function About() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column gap-5 m-5"
      style={{ fontSize: "20px" }}
    >
      <h1>About</h1>
      <p className="w-50 text-center">
        Welcome to our cryptids website! We are Anna and JD, two coding
        enthusiasts combining our love for cryptozoology with our journey into
        programming. Join us as we explore the world's most intriguing cryptids
        through our new website!
      </p>{" "}

      <h2>Features</h2>

      <p id="about-text" className="w-50 text-center"> Welcome to The Cryptid Collection,
      your ultimate online resource for information about monsters, cryptids,
      and mythical creatures from around the globe! Whether you're a seasoned
      cryptozoologist or a curious newcomer, our interactive platform allows you
      to explore detailed profiles of various creatures, update their last known
      sightings, and contribute your knowledge about new monsters. Join our
      community of enthusiasts in documenting and discovering the mysteries of
      the unknown, all while diving into the fascinating world of legendary
      beings and elusive entities. Unleash your curiosity and help us build the
      most comprehensive database of mythical creatures on the web!</p>

      <h3>The team</h3>
      <p className="w-50 text-center">
        Our team consists of Anna and JD, two passionate web development
        learners. We're having fun building projects like The Cryptid
        Collection, combining our love for coding with our fascination for
        mythical creatures.
      </p>
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;

// sticky-top
// <nav className="navbar navbar-expand-lg sticky-top">
// <div className="container-fluid">
// <div className="navbar-header">
/* <button type="button" className="navbar-toggle" data-toggle="collapse">
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
        </button> */
//         <Link to="/" className="navbar-brand">
//         </Link>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//         <Link className="nav-link" aria-current="page" to="/">
//         Home
//         </Link>
//         <Link className="nav-link" to="/monsters">
//         Monsters
//         </Link>
//         <Link className="nav-link" to="/about">
//         About
//         </Link>
//       </div>
//       </div>
//       </div>
//     </div>
//   </nav>

// <div>
//   <Link className="nav-item dropdown">
//     <div
//       className="nav-link dropdown-toggle"
//       href="#"
//       role="button"
//       data-bs-toggle="dropdown"
//     >
//       Dropdown
//       <div className="dropdown-menu">
//         <Link>className="dropdown-item" to="/" Home </Link>
//         <Link>className="dropdown-item" to="/about" About </Link>
//         <Link>className="dropdown-item" to="/monsters" Monsters</Link>
//       </div>
//     </div>
//   </Link>
// </div>
