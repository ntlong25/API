import React from "react";
import Calendar from 'react-calendar';
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size="large" style={{width:'100%'}} >
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Activities' />
                <Menu.Item content="Im's going" />
                <Menu.Item content="Im's hosting" />
            </Menu>
            <Header />
            <Calendar />
        </>
    );
}