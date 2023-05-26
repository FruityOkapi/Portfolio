import { FacebookOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import {Avatar, Typography, Row, Col, Modal} from 'antd'
import EmailModal from '../components/EmailModal';
import { useState } from 'react';

const {Text, Title} = Typography;

{/* <TwitterOutlined />
<FacebookOutlined />
<LinkedinOutlined /> */}
export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
      };

    return (
        <div style={{minHeight: 'calc(100vh - 140px)', display: 'flex', justifyContent: 'center'}}>
            <Col>
                <Row><Title className='titleFont' style={{fontWeight: '300'}}><em>Feel free to contact me</em></Title></Row>
                <Row><Title className='titleFont' type='secondary' style={{fontWeight: '300', textAlign: 'center', width: '100%'}}><em>Via social media</em></Title></Row>
                <Row>
                    <a href='https://twitter.com/FruityOkapi'><Avatar style={{backgroundColor: '#1DA1F2', marginRight: '40px'}} icon={<TwitterOutlined/>} size={{xxl: 100}}/></a>
                    <a href='https://www.facebook.com/FruityOkapi'><Avatar style={{backgroundColor: '#3b5998', marginRight: '40px'}} icon={<FacebookOutlined/>} size={{xxl: 100}}/></a>
                    <a href='https://www.linkedin.com/in/joseph-simmerman-1ab619269/'><Avatar style={{backgroundColor: '#0072b1'}} icon={<LinkedinOutlined />} size={{xxl: 100}}/></a>
                </Row>
                <Row><Title className='titleFont' type='secondary' style={{fontWeight: '300', textAlign: 'center', width: '100%'}}><em>Via email</em></Title></Row>
                <Row justify={'center'}>
                    <Avatar onClick={showModal} style={{backgroundColor: '#2f54eb'}} icon={<MailOutlined/>} size={{xxl: 100}}/>
                </Row>
            </Col>
            <Modal
            open={isModalOpen}
            title={'Email Me!'}
            onCancel={closeModal}
            footer={[]}
            >
                <EmailModal/>
            </Modal>
        </div>
    )
}