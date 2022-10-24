import Link from 'next/link'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <Col xs={12} md={2} 
            className={`d-flex align-items-md-center align-items-start px-sm-2 px-0 sticky-top ${styles.wrapper}`}
        >
            <Nav defaultActiveKey="/" className={`flex-md-column w-100 ${styles.sidebarNav}`}>
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link eventKey="projects" href="/projects">Projects</Nav.Link>
                <Nav.Link eventKey="stats" href="/stats">Stats</Nav.Link>
            </Nav>
        </Col>
    );
}

export default Sidebar