import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Todo } from '@/components/Todo'

const Home = () => {
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col xs={3}>
                    <h4>Projects</h4>
                    <Todo
                        title={"Test Title"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
                        tags={["Tag 1", "Tag 2"]}
                        date={new Date()}
                    />
                </Col>
                <Col xs={3}>
                    <h4>To Dos</h4>
                    <Todo
                        title={"Test Title"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
                        tags={["Tag 1", "Tag 2"]}
                        date={new Date()}
                    />
                </Col>
                <Col xs={3}>
                    <h4>Notes</h4>
                    <Todo 
                        title={"Test Title"} 
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
                        tags={["Tag 1", "Tag 2"]}
                        date={new Date()}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home