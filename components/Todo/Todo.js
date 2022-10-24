import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '@/store/slices/todoSlice'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DateString from '../DateString'
import Tag from '../Tag'
import styles from './Todo.module.css'

const Todo = ({item, ...props}) => {
    const [editing, setEditing] = (item.status && item.status === 'NEW') ? useState(true) : useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const id = item.id
    const [status, setStatus] = useState(item.status)
    const [title, setTitle] = useState(item.title)
    const [description, setDescription] = useState(item.description)
    const [tags, setTags] = useState(item.tags)
    const [dueDate, setDueDate] = useState(item.dueDate)

    const saveTodo = () => {
        if (status === 'NEW') setStatus('TODO')

        let todoUpdate = {
            id,
            status,
            title,
            description,
            tags,
            dueDate
        }

        dispatch(updateTodo(todoUpdate))
        setEditing(false)
    }

    if (editing) {
        return (
            <Card className={styles.todo}>
                <Card.Body>
                    <Card.Title>
                        <Form.Control
                            placeholder='Add a title'
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </Card.Title>
                    <Card.Text>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder='Describe your project'
                            value={description}
                            onChange={(event) => setDescription(event.target.value)} />
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={`d-flex justify-content-end pb-3 ${styles.footer}`}>
                    <Button variant="danger" onClick={() => saveTodo() }>Save</Button>
                </Card.Footer>
            </Card>
        );
    }
    
    return (
        <Card className={styles.todo}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.footer}>
                <Card.Text className='text-muted'>
                    <DateString date={dueDate} />
                </Card.Text>
            </Card.Footer>
        </Card>
    );
}

export default Todo