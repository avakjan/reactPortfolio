
import * as React from 'react'
import Layout from '../components/layout'



const IndexPage = () => {
  return (
    <>
  <div className="fullpage " id="greeting-section">
    <div className="header-container fade-in-scroll">
      <h1 className="large-header-hey">Hey, I'm</h1>
      <h1 className="large-header-name">German Avakjan</h1>
    </div>
  </div>
  <div className="fullpage" id="introduction-section">
    <div className="intro-content fade-in-scroll">
      <img
        src="german-avakjan.jpg"
        alt="German Avakjan"
        className="profile-picture"
      />
      <div className="intro-text ">
        <p>
          I'm studying computer science at TalTech University. My journey in
          tech started out of curiosity about how software can change things,
          and now, I'm all about creating meaningful solutions. I enjoy
          problem-solving and always look for new learning opportunities. These
          days, I'm really into software development, with a goal to contribute
          to projects that make a positive impact. Thanks for stopping by!
        </p>
      </div>
    </div>
  </div>
  <div className="fullpage" id="portfolio-section">
    <h1 className="portfolio-header fade-in-scroll">Portfolio</h1>
    <div className="portfolio-entry">
      <div className="web-development-section fade-in-scroll">
        <h3 className="portfolio-web">Web development</h3>
        <img
          id="myImgLink-securevault"
          src="secure-vault.jpg"
          alt="Secure Vault Project git"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="graphic-design-section">
        <h3 className="portfolio-graphic fade-in-scroll">Graphic Design</h3>
        <div className="moncelour-section fade-in-scroll">
          <a href="https://www.instagram.com/moncelour/" target="_blank">
            <img
              id="myImgLink-moncelour"
              src="moncelour.png"
              alt="moncelouR instagram profile"
            />
          </a>
          <div className="moncelour-section-text">
            <p className="moncelour-header">moncelouR</p>
            <p className="moncelour-text">
              My journey in learning Adobe Photoshop possibilities and
              discovering the world of graphic design. Work pieces can be found
              by clicking on the logo.
            </p>
          </div>
        </div>
        <div className="architecture-section fade-in-scroll">
          <div className="architecture-section-text">
            <p className="architecture-header">Architectural rendering</p>
            <p className="architecture-text">
              Here you can find some of my archviz work. These were done in help
              of couple architecture students in EKA for their semester
              projects.
            </p>
          </div>
          <img
            id="myImgLink-architecture"
            className="architecture-pic"
            src="illukas1 copy.png"
            alt="Architectural rendering"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  </div>
  <div id="myModal-securevault" className="modal-securevault">
    <div className="modal-content-securevault">
      <span className="close">×</span>
      <div className="carousel-container">
        <div className="carousel-item">
          <img src="securevault-home.png" alt="Secure Vault Home" />
          <img src="securevault-list.png" alt="Secure Vault List" />
        </div>
        <div className="carousel-item">
          <img
            src="securevault-passwordstrength.jpg"
            alt="Secure Vault Password Strength"
          />
          <img src="securevault-generator.jpg" alt="Secure Vault Generator" />
        </div>
      </div>
      <a className="prev">❮</a>
      <a className="next">❯</a>
      <div className="modal-securevault-text">
        <p className="modal-securevault-text-upper">
          SecureVault is a tool for keeping all your online login details safe
          and sound in a digital locker that only you can open with a generated
          master key. Our browser extension notices the site you're on, and if
          you've saved your login for that site on SecureVault, it can log you
          in automatically. No need to type in your password or try to remember
          it. Plus, you can organize your login info into different folders, so
          everything is easy to find.
        </p>
        <p className="modal-securevault-text-lower">
          In this project I led the creation of the registration and login
          system, made the browser extension and helped with the design of the
          website.
        </p>
      </div>
    </div>
  </div>
  <div id="myModal-architecture" className="modal-architecture">
    <div className="modal-content-architecture">
      <span className="close">×</span>
      <img src="illukas2 copy.png" />
      <img src="illukas_fuajee-1.png" />
      <img src="kollaz copy-1.png" />
      <img src="illukas3 copy.png" />
      <img src="kollaž_kpv_2 copy-1.png" />
      <img src="illukas1 copy.png" />
    </div>
  </div>
  <div className="fullpage" id="social-section">
    <h1 className="social-section fade-in-scroll">Social</h1>
    <div className="social-section-entry fade-in-scroll">
      <div className="social-item">
        <h3 className="social-section-linkedin">LinkedIn</h3>
        <a href="https://www.linkedin.com/in/germanavakjan/" target="_blank">
          <img
            src="linkedin-logo.png"
            alt="LinkedIn"
            className="social-section-link"
            style={{ borderRadius: 15 }}
            width="86px"
          />
        </a>
      </div>
      <div className="social-item">
        <h3 className="social-section-github">GitHub</h3>
        <a href="https://github.com/avakjan" target="_blank">
          <img
            src="github-logo.png"
            alt="GitHub"
            className="social-section-link"
            width="86px"
          />
        </a>
      </div>
      <div className="social-item">
        <h3 className="social-section-email">Email</h3>
        <p
          className="social-section-email-address"
          onclick="copyEmailToClipboard()"
        >
          german@avakjan.ee
        </p>
        <div id="emailCopyNotification" className="email-copy-notification">
          Email copied!
        </div>
      </div>
    </div>
  </div>
</>

  )
}


export const Head = () => <title>Home Page</title>


export default IndexPage