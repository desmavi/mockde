import Row from 'react-bootstrap/Row';

export default function Section({children, customHeight, direct, ...props}) {


    return(

        <Row className={`.justify-content-center justify-content-lg-between align-items-center py-3 flex-lg-${direct} mb-3 mb-lg-0`} style={{minHeight: customHeight}} {...props}>
            {children}
        </Row>
    )
}
