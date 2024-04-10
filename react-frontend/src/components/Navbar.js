import React from 'react'

function Navbar() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
 function logout(){
  localStorage.removeItem('currentUser')
  window.location.href='/login'
 }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">My room booking system</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5">
            {user ? (<>
<div className="btn-group">
  <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <h5>{user.name}</h5>
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">Bookings</a>
    <a className="dropdown-item" href="#" onClick={logout}>LogOut</a>
  </div>
</div></>) : (<>
              <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </>)}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
