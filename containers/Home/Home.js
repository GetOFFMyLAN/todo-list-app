import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { Todo } from '@/components/Todo'
import { Sidebar } from '@/components/Sidebar'
import { createTodo } from '@/store/slices/todoSlice'
import styles from './Home.module.css'

const Home = () => {
    const todos = useSelector((state) => state.todolist.todos)
    const status = useSelector((state) => state.todolist.status)
    const dispatch = useDispatch()

    const todoTemplate = {
        id: todos.length,
        status: 'NEW',
        title: '',
        description: '',
        tags: [],
        dueDate: Date()
    }

    return (
        <Container fluid>
            <Row className='min-vh-100'>
                <Sidebar />
                <Col className='align-items-center px-4'>
                    <Row className='py-5'>
                        <Col className='d-flex justify-content-center'>
                            <InputGroup className='w-25'>
                                <InputGroup.Text id='searchAddon'>S</InputGroup.Text>
                                <Form.Control
                                    placeholder='Search'
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2 className='fw-bold'>Projects</h2>
                        </Col>
                    </Row>

                    <Row className='justify-content-between'>
                        <Col md={4}>
                            <div className='w-100 d-flex justify-content-between align-items-center'>
                                <h5 className='mb-0'>Todo</h5>
                                <button
                                    className={styles.newItemBtn}
                                    onClick={() => dispatch(createTodo(todoTemplate))}>
                                    +
                                </button>
                            </div>
                            {todos.map(todo => {
                                if (todo.status === 'TODO' || todo.status === 'NEW')
                                    return <Todo key={todo.id} item={todo} />
                            })
                            }
                        </Col>
                        <Col md={4}>
                            <div className='w-100 d-flex justify-content-between align-items-center'>
                                <h5 className='mb-0'>In-Progress</h5>
                            </div>
                            
                            {todos.map(todo => {
                                if (todo.status === 'IN-PROGRESS')
                                    return <Todo item={todo} />
                            })
                            }
                        </Col>
                        <Col md={4}>
                            <div className='w-100 d-flex justify-content-between align-items-center'>
                                <h5 className='mb-0'>Complete</h5>
                            </div>
                            {todos.map(todo => {
                                if (todo.status === 'COMPLETE')
                                    return <Todo item={todo} />
                            })
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Home