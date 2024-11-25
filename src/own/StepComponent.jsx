import { Button, Group, Heading, VStack } from "@chakra-ui/react"
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "../components/ui/steps"

export const StepComponent = () => {
  return (

    <VStack>
    <Heading py={"10px"}>Step Component</Heading>
    <StepsRoot defaultValue={1} count={3} color={{base:"black", _dark:"black"}}>
      <StepsList bg={"purple.900"} p="10px" rounded={"md"}>
        <StepsItem index={0} title="Step 1" />
        <StepsItem index={1} title="Step 2" />
        <StepsItem index={2} title="Step 3" />
      </StepsList>

      <StepsContent index={0}>Step 1</StepsContent>
      <StepsContent index={1}>Step 2</StepsContent>
      <StepsContent index={2}>Step 3</StepsContent>
      <StepsCompletedContent>All steps are complete!</StepsCompletedContent>

      <Group >
        <StepsPrevTrigger asChild>
          <Button bg={"purple.900"} variant="outline"   size="sm">
            Prev
          </Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button bg={"purple.900"} variant="outline" size="sm">
            Next
          </Button>
        </StepsNextTrigger>
      </Group>
    </StepsRoot>
    </VStack>

  )
}


export default StepComponent