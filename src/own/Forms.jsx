"use client"

import { Button, Fieldset, FieldsetContent, FieldsetErrorText, FieldsetHelperText, FieldsetLegend, FieldsetRoot, Input, NativeSelectField, NativeSelectRoot, Stack, Text,} from "@chakra-ui/react"
import {toaster, Toaster } from "../components/ui/toaster"

import {Field} from "../components/ui/field"
import { useEffect, useState } from "react"

import {toast} from "./Common"





const Forms = () => {
    const [formsDetails, setFormsDetails] = useState({
        name: "",
        nameValidation: false,
        email: "",
        emailValidation: false,
        language: "",
        languageValidation: false,
        invalid: false,
    })
 
    const handleInputChange = (e) => {
        setFormsDetails({...formsDetails, [e.target.name]: e.target.value })
        validateForm()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formsDetails, formsDetails.nameValidation, formsDetails.emailValidation, formsDetails.languageValidation)
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
      </FieldsetContent>

      <Button alignSelf="flex-start" onClick={handleSubmit}>
        Submit
      </Button>
    </FieldsetRoot>
  )
}

export default Forms
