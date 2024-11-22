// import { CalendarIcon } from '@chakra-ui/icons'
import {  List, ListRoot, Icon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaCalendar, FaEdit, FaSign, FaAt } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Sidebar = () => {
  return (

    <>
   {/* <List.Root>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
    </List.Root> */}

    <ListRoot listStyle="none" color="white" fontSize={"1.2em"}gap="4">
       
        <ListItem>
            <Link to="/dashboard">
                <Icon mr={2} color={"white"}>
                    <FaCalendar />
                </Icon>
                Dashboard
            </Link>
        </ListItem>

        <ListItem>
            <Link to="/new-task">
                <Icon mr={2} color={"white"}>
                    <FaEdit />
                </Icon>
                New task
            </Link>
        </ListItem>

        <ListItem>
            <Link to="/profile">
                <Icon mr={2} color={"white"}>
                    <FaAt />
                </Icon>
                Dashboard
            </Link>
        </ListItem>

        
    </ListRoot>
    </>
  )
}

export default Sidebar