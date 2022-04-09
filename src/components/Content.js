import Col from 'react-bootstrap/Col';

export default function Content({children, ...props}) {
    return(
        <Col sm={12} md={10} lg={5} {...props} style={{ margin: "0 auto" }}>
            {children}
        </Col>
    )
}