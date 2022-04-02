import Row from 'react-bootstrap/Row';

export default function Section({children, customHeight, direct, bg}) {


    return(

        <Row className={`.justify-content-center justify-content-lg-between align-items-center gy-3 py-3 flex-lg-${direct}` }style={{minHeight: customHeight, background: bg || "none"}}>
            {children}
        </Row>
    )
}
