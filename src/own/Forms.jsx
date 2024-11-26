"use client"

import { Button, CheckboxGroup, Fieldset, FieldsetContent, FieldsetHelperText, FieldsetLegend, FieldsetRoot, Flex, Input, NativeSelectField, NativeSelectRoot, Stack, Text} from "@chakra-ui/react"
import {toaster, Toaster } from "../components/ui/toaster"

import {Field} from "../components/ui/field"
import { useEffect, useRef, useState } from "react"

import {toast} from "./Common"
import { HiUpload } from "react-icons/hi"

import {FileUploadList,  FileUploadRoot,
  FileUploadTrigger,} from "../components/ui/file-upload"

import {CheckboxCard} from "../components/ui/checkbox-card"



const Forms = () => {

  const foodCategories = [
    { value: "veg", title: "Veg", description: "Vegetarian" },
    { value: "non-veg", title: "Non-Veg", description: "Non Vegetarian" },
    { value: "vegan", title: "Vegan", description: "Vegan" },
  ]


    const [formsDetails, setFormsDetails] = useState({
        name: "",
        nameValidation: false,
        email: "",
        emailValidation: false,
        language: "",
        languageValidation: false,
        invalid: false,
        upload: "",
    })

    const [files, setFiles] = useState([])
    const [foodCategoriesData, setFoodCategoriesData] = useState([])
    const inputRef = useRef()
 
    const handleInputChange = (e) => {

        setFormsDetails({...formsDetails, [e.target.name]: e.target.value })
        validateForm()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(files, foodCategoriesData, formsDetails, formsDetails.nameValidation, formsDetails.emailValidation, formsDetails.languageValidation)
        if(formsDetails.name === "" || formsDetails.email === "" || formsDetails.language === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formsDetails.email) == false) {
            toast("error","top-right", "test", "validation failed ")
            return false
        }
        toast("success","top-right", "test", "successful operation")
 
    
    }


    

  return (
    <FieldsetRoot size="lg" maxW="md">
        {/* <Toaster /> */}
      <Stack>
        <FieldsetLegend>Contact details</FieldsetLegend>
        <FieldsetHelperText>
          Please provide your contact details below.
        </FieldsetHelperText>
      </Stack>

      <FieldsetContent>
        <Field label="Name" invalid={formsDetails.name.trim()!== "" ? false : true}>
          <Input name="name" onChange={handleInputChange}/>
          {
            formsDetails.name.trim()== ""? (
              <Text as="p" color={"red.600"}>Name is required</Text> 
            ) : null
          }
          {/* <Text as="p" color={"red.600"}>Name is required</Text> */}
        </Field>

        <Field label="Email address" invalid={formsDetails.email.trim()!== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formsDetails.email) ? false : true}>
          <Input name="email" type="email" onChange={handleInputChange}/>
          {
            formsDetails.email.trim()== "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formsDetails.email) == false? (
              <Text as="p" color={"red.600"}>Proper Email is required</Text> 
            ) : null
          }
        </Field>

        <Field label="Language" 
                invalid={formsDetails.language.trim()!== "" ? false : true}

        >
          <NativeSelectRoot>
            <NativeSelectField
                placeholder="Select Language"
                onChange={handleInputChange}
                name="language"
            >
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
            </NativeSelectField>
           
          </NativeSelectRoot>
          {
            formsDetails.language.trim()== ""? (
              <Text as="p" color={"red.600"}>Selection is required</Text> 
            ) : null
          }
        </Field>

        <CheckboxGroup onChange={(e)=> setFoodCategoriesData([...foodCategoriesData, e.target.value])}>
          <Text textStyle="sm" fontWeight="medium">
            Select your food preference
          </Text>
          <Flex gap="2">
            {foodCategories.map((item) => (
              <CheckboxCard
                label={item.title}
                description={item.description}
                key={item.value}
                value={item.value}
              />
            ))}
          </Flex>
        </CheckboxGroup>


        <Field label="upload required files" required>
          <FileUploadRoot maxFiles={2} name="upload" id="upload"  onChange={(e) => setFiles([...files, e.target.files[0]])}  accept={["image/png"]}>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" bg={{base:"purple.400", _dark: "purple.800"}} color={"white"}>
              <HiUpload name="upload" id="upload" /> Upload file
            </Button>
          </FileUploadTrigger>
          <FileUploadList name="upload" />
        </FileUploadRoot>

        </Field>



      </FieldsetContent>

      <Button bg={{base:"purple.400", _dark: "purple.800"}} color={"white"} alignSelf="flex-start" onClick={handleSubmit}>
        Submit
      </Button>
    </FieldsetRoot>
  )
}

export default Forms
