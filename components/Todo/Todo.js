import Card from 'react-bootstrap/Card'
import DateString from '../DateString';

const Todo = ({title, description, tags, date}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Text>
                    <DateString date={date} />
                </Card.Text>
            </Card.Footer>
        </Card>
    );
}

export default Todo