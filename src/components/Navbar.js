import { AuditOutlined, BorderBottomOutlined, MailOutlined, MehOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

    const items = [
        {
            label: 'About Me',
            key: 'about',
            icon: <MehOutlined />,
        },
        {
            label: 'Projects',
            key: 'projects',
            icon: <BorderBottomOutlined />,
        },
        {
            label: 'Contact Me',
            key: 'contact',
            icon: <MailOutlined />,
        },
        {
            label: 'Resume',
            key: 'resume',
            icon: <AuditOutlined />,
        },
    ]

export default function Navbar({currentPage, handlePageChange}) {
    const [current, setCurrent] = useState(currentPage);
    const onClick = (e) => {
        setCurrent(e.key);
        handlePageChange(e.key);
    };
    return <Menu style={{backgroundColor: '#ffa940'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}