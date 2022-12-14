import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BasicExample() {
  return (
    <Container>
      <h1>My projects</h1>
      <Row>
        <Col xs={6} md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="shophub.png" />
            <Card.Body>
              <Card.Title>ShopHub</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a href="https://frightful-coffin-45274.herokuapp.com/">
                <Button
                  variant="primary"
                  href="https://frightful-coffin-45274.herokuapp.com/"
                  target="_blank"
                >
                  Deployed Application
                </Button>
              </a>
              <a href="https://github.com/thivsiv28/Shophub">
                <Button
                  variant="primary"
                  href="https://github.com/thivsiv28/Shophub"
                  target="_blank"
                >
                  Github Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="moviedatabase.png" />
            <Card.Body>
              <Card.Title>Your Movie Database</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a href="https://hmhtom.github.io/Your-Movie-Databse/">
                <Button
                  variant="primary"
                  href="https://hmhtom.github.io/Your-Movie-Databse/"
                  target="_blank"
                >
                  Deployed Application
                </Button>
              </a>
              <a href="https://github.com/hmhtom/Your-Movie-Databse">
                <Button
                  variant="primary"
                  href="https://github.com/hmhtom/Your-Movie-Databse"
                  target="_blank"
                >
                  Github Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="mainpage.png" />
            <Card.Body>
              <Card.Title>The Goodness Gift</Card.Title>
              <Card.Text>
                Project 3- MERN Stack Single Page Application
              </Card.Text>
              <a href="https://salty-lowlands-79836.herokuapp.com/">
                <Button
                  variant="primary"
                  href="https://salty-lowlands-79836.herokuapp.com/"
                  target="_blank"
                >
                  Deployed Application
                </Button>
              </a>
              <a href="https://github.com/thivsiv28/The-goodness-gift">
                <Button
                  variant="primary"
                  href="https://github.com/thivsiv28/The-goodness-gift"
                  target="_blank"
                >
                  Github Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="weatherdashboard.png" />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a href="https://thivsiv28.github.io/module6serversideapisweatherdashboard/">
                <Button
                  variant="primary"
                  href="https://thivsiv28.github.io/module6serversideapisweatherdashboard/"
                  target="_blank"
                >
                  Deployed Application
                </Button>
              </a>
              <a href="https://github.com/thivsiv28/module6serversideapisweatherdashboard">
                <Button
                  variant="primary"
                  href="https://github.com/thivsiv28/module6serversideapisweatherdashboard"
                  target="_blank"
                >
                  Github Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="codingquiz.png" />
            <Card.Body>
              <Card.Title>Coding Quiz</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a href="https://thivsiv28.github.io/module4webapischallengecodequiz/">
                <Button
                  variant="primary"
                  href="https://thivsiv28.github.io/module4webapischallengecodequiz/"
                  target="_blank"
                >
                  Deployed Application
                </Button>
              </a>
              <a href="https://github.com/thivsiv28/module4webapischallengecodequiz">
                <Button
                  variant="primary"
                  href="https://github.com/thivsiv28/module4webapischallengecodequiz"
                  target="_blank"
                >
                  Github Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="worktimetable.png" />
            <Card.Body>
              <Card.Title>Work Day Scheduler</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a href="https://thivsiv28.github.io/thirdpartyapisworkdayscheduler/">
                <Button
                  variant="primary"
                  href="https://thivsiv28.github.io/thirdpartyapisworkdayscheduler/"
                  target="_blank"
                >
                  Deployed Application
                </Button>
              </a>
              <a href="https://github.com/thivsiv28/thirdpartyapisworkdayscheduler">
                <Button
                  variant="primary"
                  href="https://github.com/thivsiv28/thirdpartyapisworkdayscheduler"
                  target="_blank"
                >
                  Github Repository
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample;
