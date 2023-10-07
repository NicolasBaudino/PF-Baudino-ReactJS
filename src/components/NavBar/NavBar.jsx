import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import CartWidget from "./CartWidget/CartWidget"


function NavBar() {
  const {cantidadTotal} = useCartContext()

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <Link to='/'>
                  <img src="/public/FotoNavBar.png" alt="logo" width={140}/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to='/' className="nav-link" aria-current="page">
                              Inicio
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/category/perifericos' className="nav-link" aria-current="page">
                              Perifericos
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/category/monitores' className="nav-link" aria-current="page">
                              Monitores
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/category/sillas' className="nav-link" aria-current="page">
                              Sillas
                          </Link>
                      </li>
                  </ul>
              </div>
              <div className="d-flex justify-content-end">
                  <ul className="navbar-nav">
                      <li>
                          {cantidadTotal()}
                      </li>
                      <li className="nav-item">
                          <Link to='/cart' className="nav-link" aria-current="page">
                              <CartWidget />
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    )
  }
  
  export default NavBar