import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
      <Container>
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <a
              href="/"
              class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32"></svg>
            </a>

            <ul class="nav col-md-4 justify-content-end">
              <li class="nav-item">
                <a
                  href="https://github.com/thivsiv28"
                  target="_blank"
                  class="nav-link px-2 text-muted"
                >
                  Github
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="www.linkedin.com/in/thiviya-s-7a9654241"
                  target="_blank"
                  class="nav-link px-2 text-muted"
                >
                  LinkedIn
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://stackoverflow.com/users/19436871/thiviyas28/"
                  target="_blank"
                  class="nav-link px-2 text-muted"
                >
                  Stack Overflow
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
