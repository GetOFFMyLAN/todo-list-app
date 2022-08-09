import styles from './Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Todo } from '@/components/Todo'
import { Sidebar } from '@/components/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { createTodo } from '@/store/slices/todoSlice'

const Home = () => {
    const todos = useSelector((state) => state.todolist.todos)
    const status = useSelector((state) => state.todolist.status)
    const dispatch = useDispatch()

    const todoTemplate = {
        status: 'NEW',
        title: 'Add a title',
        description: 'Describe your project',
        tags: [],
        createDate: new Date()
    }

    return (
        <Container fluid>
            <Row className='min-vh-100'>
                <Sidebar />
                <Col xs className='px-4'>
                    <Row>
                        <Col>
                            <h3 className='fw-bold'>Projects</h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-between'>
                        <Col md={4}>
                            <div className='w-100 d-flex justify-content-between align-items-center'>
                                <h5 className='mb-0'>New</h5>
                                <button
                                    className={styles.newItemBtn}
                                    onClick={() => dispatch(createTodo(todoTemplate))}>
                                    +
                                </button>
                            </div>
                            {todos.map(todo => {
                                if (todo.status === 'NEW') {
                                    return <Todo
                                            title={todo.title} 
                                            description={todo.description} 
                                            tags={todo.tags}
                                            date={todo.createDate}
                                        />
                                }
                            })
                            }
                        </Col>
                        <Col md={4}>
                            <div className='w-100 d-flex justify-content-between align-items-center'>
                                <h5 className='mb-0'>In-Progress</h5>
                            </div>
                            
                            {todos.map(todo => {
                                if (todo.status === 'IN-PROGRESS') {
                                    return <Todo
                                            title={todo.title} 
                                            description={todo.description} 
                                            tags={todo.tags}
                                            date={todo.createDate}
                                        />
                                }
                            })
                            }
                        </Col>
                        <Col md={4}>
                            <div className='w-100 d-flex justify-content-between align-items-center'>
                                <h5 className='mb-0'>Complete</h5>
                            </div>
                            {todos.map(todo => {
                                if (todo.status === 'COMPLETE') {
                                    return <Todo
                                            title={todo.title} 
                                            description={todo.description} 
                                            tags={todo.tags}
                                            date={todo.createDate}
                                        />
                                }
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