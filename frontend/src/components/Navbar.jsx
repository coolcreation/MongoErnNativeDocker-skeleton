import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand p-0 m-0" href="https://https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">
                      {/* <img src={'./vite.svg'} className="logo" alt="Vite logo" /> */}
                      <img src="https://images.icon-icons.com/2845/PNG/512/bootstrap_logo_icon_181374.png" alt="" width="67"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-3 mb-lg-0 ms-auto gap-1 gap-lg-4">
                    <li class="nav-item">
                      <a class="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                <form class="d-flex position-relative" role="search">
                    <input class="form-control rounded-pill fw-bold" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-dark position-absolute end-0 p-0 pe-1 rounded-0 rounded-end-5" type="submit">
                      <img src={'search.svg'} alt="" width="36"/>
                    </button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}
