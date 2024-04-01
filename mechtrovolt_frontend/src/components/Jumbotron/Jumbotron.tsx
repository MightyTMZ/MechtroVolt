import { Container, Button } from 'react-bootstrap'
import "./Jumbotron.css"


const Jumbotron = () => {
  return (
    <div className="jumbotron text-center bg-light my-5">
        <Container>
          <h1>Welcome to MechtroVolt</h1>
          <p>
            MechtroVolt is a non-profit and certified charity. We light the spark in promising engineering projects!
          </p>
          <p>
            <Button variant="primary" href="#about">
              Learn more
            </Button>
          </p>
        </Container>
      </div>
  )
}

export default Jumbotron
