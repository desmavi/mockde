import Col from 'react-bootstrap/Col';

export default function Content({children, pat, pab}) {
    return(
        <Col sm={12} md={10} lg={5} className={`pt-${pat}
        pb-${pab} mx-auto`}>
            {children}
        </Col>
    )
}