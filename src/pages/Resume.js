import {Typography, Button, Col, Row} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'

const {Text} = Typography;

export default function Resume() {

    const onClick = () => {
        const tag = document.createElement('a')
        tag.href='http://localhost:3000/Resume.pdf'
        tag.setAttribute('download', 'Resume.pdf')
        tag.click()
        tag.remove()
    }

    const btnStyle = {}

    return (
        <div style={{minHeight: 'calc(100vh - 140px)', display: 'flex', justifyContent: 'center'}}>
            <Button onClick={onClick} icon={<DownloadOutlined />} style={{backgroundColor: '#ffc069', minWidth: '40%', marginTop: '200px', minHeight: '100px', fontSize: '30px'}}>Download Resume</Button>
        </div>
    )
}