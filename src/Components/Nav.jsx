


import logo from '../image/logo.png'

const Nav = () => {
  return (
    <div className="navbar navbar-expand-lg">
     
            <a className="navbar-brand" href="index.html"><img className="logo" src={logo}></img></a>

            <ul className="navbar-nav ms-auto"></ul>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#mystory">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Instuctors</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education">Schedules</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">contact us</a>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Nav
