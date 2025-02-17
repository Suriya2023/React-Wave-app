import React from 'react'

function Navbar() {
  return (
    <header className="header-1" id="dwd">
    <div id="navbarr" className="tw-w-screen">
      <nav className="navbar navbar-expand-lg tw-fixed  tw-w-12/12 tw-z-40  " id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img
              src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/branding/wave-logo.svg"
              alt=""/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-font-bold ">
              <li className="nav-item tw-text-blue-700">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 tw-bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  
  </header>  )
}

export default Navbar
