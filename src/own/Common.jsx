import { toaster } from "../components/ui/toaster";


export const toast = (type, position="", title, description, config={}) => {

  // console.log(type, position, content)
  return toaster.create({
          position: position,
          type: type,
          title: title,
          description: description,
          // duration: config?.duration || 5000,
          // isClosable: config?.isClosable || true,
          // variant: config?.variant || 'normal',
          // size: config?.size || 'md',

  });
}

