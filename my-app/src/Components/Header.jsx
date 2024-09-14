import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid" style={{"background":"skyblue"}}>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="navbar-brand">
              <Link class="nav-link nav-item" to="/home">Home</Link>

            </li>
            <li class="navbar-brand">
              <Link class="nav-link " to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
};
