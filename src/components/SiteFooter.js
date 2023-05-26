import { Typography, Col, Row } from 'antd';
const { Title, Text } = Typography;

export default function SiteFooter() {
    return (
        <Row>
            <Col span={24}>
                <Text type='secondary'>Copyright © {new Date().getFullYear()} Joseph Simmerman</Text>
            </Col>
        </Row>
    )
}