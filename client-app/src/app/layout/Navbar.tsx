import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navbar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' header end>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '20px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Activities"/>
                <Menu.Item>
                    <Button as={NavLink} to='/createactivity' positive content="Create activity"/>
                </Menu.Item>
            </Container>
        </Menu>
    );
}