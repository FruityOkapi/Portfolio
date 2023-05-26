import { BorderOutlined } from '@ant-design/icons';
import {Form, Input, Typography, Button} from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react'

const {Text} = Typography;

export default function EmailModal() {
    const [emailData, setEmailData] = useState({subject: '', body: ''})

    const onChange = (e) => {
        const {name, value} = e.target
        setEmailData({...emailData, [name]: value});
    };
    
    const URL = `mailto:josephbsimmerman@gmail.com?subject=${emailData.subject}&body=${emailData.body}"`;

    const onClick = () => {
        const tag = document.createElement('a')
        tag.href=URL
        tag.click()
        tag.remove()
    }

    return (
        <>
            <Form title='Email Me'>
                <Form.Item
                    label='Subject'
                    rules={{required: true, message: 'Please put a subject for the email!'}}>
                    <Input placeholder='Subject' name='subject' value={emailData.subject} onChange={onChange}/>
                </Form.Item>
                <Form.Item
                    label='Body'
                    rules={{required: true, message: 'Please put a body for the email!'}}>
                    <TextArea name='body' placeholder='Important email content' rows={5} value={emailData.body} onChange={onChange}/>
                </Form.Item>
                <Form.Item>
                    <Button onClick={onClick} style={{backgroundColor: '#ff9c6e'}}>Create Email</Button>
                </Form.Item>
            </Form>
        </>
    )
}