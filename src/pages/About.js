import React from "react";
import { Typography, Col, Row, Divider, Button, Segmented, Table } from 'antd';
import { Avatar } from 'antd';
import { useState } from "react";

const { Title, Text } = Typography;

export default function About() {
    const [selection, setSelection] = useState('Frontend')
    const columns = [
        {
            title: 'Technologies',
            dataIndex: 'tech',
            key: 'tech'
        },
        
    ];
    const frontData = [
        {
            key: '1',
            tech: 'HTML'
        },
        {
            key: '2',
            tech: 'CSS'
        },
        {
            key: '3',
            tech: 'JavaScript'
        },
        {
            key: '4',
            tech: 'React'
        },
        {
            key: '5',
            tech: 'Mongoose.js'
        },
        {
            key: '6',
            tech: 'MySQL2'
        },
    ];
    const backData = [
        {
            key: '1',
            tech: 'MySQL'
        },
        {
            key: '2',
            tech: 'MongoDB'
        },
        {
            key: '3',
            tech: 'Express.js'
        },
        {
            key: '4',
            tech: 'Node.js'
        },
        {
            key: '5',
            tech: 'Sequelize'
        },
        {
            key: '6',
            tech: 'GraphQL'
        },

    ]

    const getAge = () => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getDate();
        if (currentMonth === 11 && currentDay >= 8) {
            return currentYear - 1999;
        }
        return currentYear - 2000;
    }

    const change = (e) => {
        setSelection(e)
    }

    return (
        <div style={{minHeight: 'calc(100vh - 140px)'}}>
            <Row justify={'center'}>
                <Col span={20}><Title style={{textAlign: 'center'}} className="titleFont">Hi, I'm Joseph Simmerman! I design full stack web applications.</Title></Col>
            </Row>
            <Row justify={'center'}>   
                <Col style={{paddingRight: '10px'}}><Avatar size={80} src='https://i.imgur.com/EL1rdqm.jpg'/></Col>
            </Row>
            <Divider/>
            <Row justify={'space-between'}>
                <Col style={{padding: '5px', maxWidth: '600px'}}>
                    <Title type="secondary" className="titleFont" style={{fontWeight: '300'}} level={2}><em>Career info</em></Title>
                    <Text  className="titleFont" style={{fontWeight: '300', fontSize: '18px'}} >{getAge()}yo MERN stack software engineer based in Kentucky with the drive to learn and grow consistently. Completed 700+ hours of bootcamp curriculum to learn many technologies. Ready to grow as a developer and design efficient, sleek, and intuitive web applications! Currently looking for an entry level position to learn more about this career path. Please feel free to contact via the contact tab at the top of the page!</Text>
                </Col>
                <Col style={{ padding: '5px'}}>
                    <Title type="secondary" className="titleFont" style={{fontWeight: '300'}} level={2}><em>Current Skills</em></Title>
                    <Segmented style={{backgroundColor: '#fff7e6'}} block size='middle' options={['Frontend', 'Backend']} value={selection} onChange={change}/>
                    <Table bordered={false} pagination={false} columns={columns} dataSource={selection === 'Frontend'? frontData : backData}/>
                </Col>
                {/* to add: Forward thinking, self motivating, loyal */}
                <Col style={{ maxWidth: '600px'}}>
                    <Title type="secondary" className="titleFont" style={{fontWeight: '300'}} level={2}><em>Personal info</em></Title>
                    <Text className="titleFont" style={{fontWeight: '300', fontSize: '18px'}}>Currently working on some personal projects. They are not public yet but I will add to this site when they are!</Text>
                </Col>
            </Row>
        </div>
    )
}