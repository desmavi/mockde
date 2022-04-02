import Card from 'react-bootstrap/Card'


export default function CardCustom({img, title}){
    return (
        <Card style={{ width:"auto",borderRadius:20, border: "none", marginBottom: "2rem" }} className="card-responsive">
        <Card.Img variant="top" src={img} style={{borderTopLeftRadius:20, borderTopRightRadius:20}} />
        <Card.Body className="p-4">
            <Card.Title className="card-custom-title mb-3">{title}</Card.Title>
            <Card.Text className="card-custom-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit.
            </Card.Text>
            <Card.Link href="#" className="card-custom-link">Learn more</Card.Link>
        </Card.Body>
        </Card>
    )
}