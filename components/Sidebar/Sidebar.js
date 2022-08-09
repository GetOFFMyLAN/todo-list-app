import Link from 'next/link'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <Col xs={12} md={2} 
            className={`px-sm-2 px-0 sticky-top bg-xiketic align-items-center align-items-sm-start ${styles.wrapper}`}
        >
            <Nav defaultActiveKey="/home" className="flex-md-column">
                <Nav.Link href="/home">Dashboard</Nav.Link>
                <Nav.Link eventKey="link-1">Stats</Nav.Link>
                <Nav.Link eventKey="link-2">Notes</Nav.Link>
            </Nav>
        </Col>
    );
}

export default Sidebar