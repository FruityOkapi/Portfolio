import React from "react";
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Navbar from "./Navbar";
import Resume from "../pages/Resume";
import SiteFooter from "./SiteFooter";
import {useState} from "react";
import {Layout} from "antd";
import { render } from "@testing-library/react";

const {Header, Content, Footer} = Layout;

export default function CurrentPage() {
    const [currentPage, setCurrentPage] = useState('about');
    const renderPage = () => {
        if (currentPage === 'about'){
            return <About/>;
        }
        if (currentPage === 'projects') {
            return <Projects />;
        }
        if (currentPage === 'contact') {
            return <Contact />;
        }
        if (currentPage === 'resume') {
            return <Resume />;
        } 
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header style={{backgroundColor: '#ffa940'}}>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            </Header>
            <Content style={{backgroundColor: '#ffe7ba', padding:'20px 50px'}}>
                {renderPage()}
            </Content>
            <Footer style={{backgroundColor: '#ffd591'}}>
                <SiteFooter/>
            </Footer>
        </>
    )
}