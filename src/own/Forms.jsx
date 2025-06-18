"use client"

import { Button, CheckboxGroup, EditableInput, EditablePreview, EditableRoot, EditableRootProvider, Fieldset, FieldsetContent, FieldsetHelperText, FieldsetLegend, FieldsetRoot, Flex, HStack, Input, NativeSelectField, NativeSelectRoot, Stack, Text} from "@chakra-ui/react"
import {toaster, Toaster } from "../components/ui/toaster"

import {Field} from "../components/ui/field"
import { useEffect, useRef, useState } from "react"

import {toast} from "./Common"
import { HiUpload } from "react-icons/hi"

import {FileUploadList,  FileUploadRoot,
  FileUploadTrigger,} from "../components/ui/file-upload"

import {CheckboxCard} from "../components/ui/checkbox-card"
import {PinInput} from "../components/ui/pin-input"
import {Slider} from "../components/ui/slider"


import {RadioCardRoot, RadioCardLabel, RadioCardItem} from "../components/ui/radio-card"





const Forms = () => {

  const foodCategories = [
    { value: "veg", title: "Veg", description: "Vegetarian" },
    { value: "non-veg", title: "Non-Veg", description: "Non Vegetarian" },
    { value: "vegan", title: "Vegan", description: "Vegan" },
  ]

  const genderCategories = [
    { value: "male", title: "Male", description: "Backbone of world" },
    { value: "female", title: "Female", description: "Support role for world" },
    { value: "others", title: "Others", description: "You already know" },
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
        edit:"",
        gender: "male",
        age:"",
    })

    const [files, setFiles] = useState([])
    const [foodCategoriesData, setFoodCategoriesData] = useState([])
    const [masterPassword, setMasterPassword] = useState('')
    const [ageData, setAgeData] = useState(0)

    const [editData, setEditData] = useState('')

    const inputRef = useRef()
 
    const handleInputChange = (e) => {
        console.log("test",e.targe.name, e.target.value)
        setFormsDetails({...formsDetails, [e.target.name]: e.target.value })
        // validateForm()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(files,ageData, masterPassword, foodCategoriesData, formsDetails, formsDetails.nameValidation, formsDetails.emailValidation, formsDetails.languageValidation)
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

          <EditableRoot
            value={formsDetails.edit}
            name="edit"
            onChange={handleInputChange}
            placeholder="Click to edit custom data"
            bg= {{base: 'purple.400', _dark:'purple.800'}}
            color={{base: 'black', _dark:'white'}}
            _hover={{
              bg: { base: 'purple.400', _dark:'purple.800'},
              color: { base: 'black', _dark:'white'}
            }}
            rounded={"sm"}
          >
            <EditablePreview />
            <EditableInput onChange={(e)=> setEditData(e.target.value)} value={editData}/>
          </EditableRoot>
            {
              formsDetails.edit.trim()== ""? (
                <Text as="p" color={"red.600"}>edit is required</Text> 
              ) : null
            }
        <Field>

        </Field>

        <Field label="Email address" invalid={formsDetails.email.trim()!== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formsDetails.email) ? false : true}>
          <Input name="email" type="email" onChange={handleInputChange}/>
          {
            formsDetails.email.trim()== "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formsDetails.email) == false? (
              <Text as="p" color={"red.600"}>Proper Email is required</Text> 
            ) : null
          }
        </Field>


          <Field required>
          <RadioCardRoot variant={"outline"} colorPalette={"purple"} defaultValue={formsDetails.gender} name="gender" onChange={(e)=> setFormsDetails({...formsDetails, gender: e.target.value })}>
            <RadioCardLabel>Select Gender</RadioCardLabel>
            <HStack align="stretch">
              {genderCategories.map((item) => (
                <RadioCardItem
                
                  label={item.title}
                  description={item.description}
                  key={item.value}
                  value={item.value}
                />
              ))}
            </HStack>
    </RadioCardRoot>

          </Field>


         
          <Field
              label={`Select Age: ${ageData}`}
              // invalid={!!errors.value?.length}
              // errorText={errors.value?.[0]?.message}
            >
              <Slider
                variant="outline"
                colorPalette="purple"
                width="full"
                onValueChange={(e)=> { setAgeData(e.value[0])}}
              />
            </Field>
          

        <Field label="master password" required>
          <PinInput name="password" id="password" onChange={(e)=> setMasterPassword(masterPassword+e.target.value)} invalid={masterPassword.trim()!== "" && masterPassword.length == 4 ? false : true}/>
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
