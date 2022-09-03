import React from "react";
import { Link } from "react-router-dom";
import Login from "../Pages/login & register/Login";
import Register from "../Pages/login & register/Register";

function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Microtechnologies
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* {props.user && (
                <div style={{ display: "flex" }}> */}
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/user"
                    >
                      Create User
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/view_user"
                    >
                      View User
                    </Link>
                  </li>
                {/* </div>
              )} */}

              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-primary mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Login
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-primary mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* MODAL  */}

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Login
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* <Login user={props.user} setUser={props.setUser} /> */}
              <Login />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL 2 */}
      <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Register
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* <Register user={props.user} setUser={props.setUser} /> */}
              <Register  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
