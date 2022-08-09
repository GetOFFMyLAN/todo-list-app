import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import DateString from '../DateString'
import Tag from '../Tag'
import styles from './Todo.module.css'

const Todo = ({title, description, tags, date}) => {
    const [editing, setEditing] = useState(false)
    
    return (
        <Card className={styles.todo}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/*<Card.Text>
                    {tags.map((t) => {
                        return <Tag variant={t.Color}>t.Title</Tag>
                    })
                    }
                </Card.Text>*/}
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.footer}>
                <Card.Text className='text-muted'>
                    <DateString date={date} />
                </Card.Text>
            </Card.Footer>
        </Card>
    );
}

export default Todo