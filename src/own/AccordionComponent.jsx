"use client"
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot, Container, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

const AccordionComponent = () => {
    const [value, setValue] = useState(["second-item"])

    const items = [
        { value: "first-item", title: "First Item", text: "Some value 1..." },
        { value: "second-item", title: "Second Item", text: "Some value 2..." },
        { value: "third-item", title: "Third Item", text: "Some value 3..." },
    ]
    return (
        <>
            <Container color={{base: "black", __dark:"white"}}>
                <Heading as={"h3"}>Accordion Components</Heading>
                <AccordionRoot value={value} onValueChange={(e) => setValue(e.value)}>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={item.value}>
                            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                            <AccordionItemContent>{item.text}</AccordionItemContent>
                        </AccordionItem>
                    ))}
                </AccordionRoot>
            </Container>
        </>
    )
}

export default AccordionComponent