import { extendTheme } from '@chakra-ui/react';

/**
 * Theme Configuration
 */
const customTheme = extendTheme({
  components: {
    Radio: {
      baseStyle: {
        control: {
          borderRadius: 'xl',
          borderWidth: '1px',
          borderStyle: 'solid',
          height: '14px',
          width: '14px',
          borderColor: 'gray.300',
          background: 'white',

          _checked: {
            background: 'white',
            borderColor: 'gray.400',
            _hover: {
              bg: 'white',
              borderColor: 'gray.400',
            },
            _before: {
              borderRadius: 'xl',
              background: 'gray.400',
              height: '70%',
              width: '69%',
            },
          },
          _dark: {
            borderColor: 'gray.200',
            background: 'gray.200',

            _hover: {
              bg: 'gray.400',
              borderColor: 'gray.400',
            },
          },
          _hover: {
            bg: 'transparent',
            borderColor: 'gray.500',
          },
        },
        label: {
          fontSize: '14px !important',
          color: 'gray.500',
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'md',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray.300',
          background: 'white',
          color: 'gray.400',
          fontSize: '14px',


          _dark: {
            borderColor: 'gray.200',
            background: 'gray.200',
          },
          _focus: {
            borderColor: 'gray.500',
            color: 'gray.400',
            outline: 'none',
            boxShadow: 'none'
          },
          _placeholder: {
            color: 'gray.300',
            fontSize: '14px'
          }
        },
        addon: {
          fontSize: '12px',
          color: 'gray.500',
        },
        element: {
          color: 'gray.200',
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: 'sm',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray.300',
          background: 'white',
          height: '14px',
          width: '14px',

          _checked: {
            background: 'white',
            color: 'gray.500',
            borderColor: 'gray.400',
            _hover: {
              bg: 'white',
              borderColor: 'gray.500',
            },
            _before: {
              borderRadius: 'xl',
              background: 'gray.500',
              marginTop: '0.5px',
              height: '70%',
              width: '70%',
            },
          },
          _dark: {
            borderColor: 'gray.200',
            background: 'gray.200',

            _hover: {
              bg: 'gray.400',
              borderColor: 'gray.400',
            },
          },
          _hover: {
            bg: 'white',
            borderColor: 'gray.400',
          },
        },
        label: {
          fontSize: '14px !important',
          color: 'gray.500',
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          borderRadius: 'md',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray.300',
          background: 'white',
          color: 'gray.400',
          fontSize: '14px',

          _dark: {
            borderColor: 'gray.200',
            background: 'gray.200',
          },
          _focus: {
            borderColor: 'gray.500',
            color: 'gray.400',
            outline: 'none',
            boxShadow: 'none',
          },
          _placeholder: {
            color: 'gray.300',
            fontSize: '14px'
          }
        },
        icon: {
          fontSize: '12px',
          color: 'gray.400',
        },
      },
    },
    Textarea: {
      baseStyle: {
        field: {
          borderRadius: 'md',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray.300',
          background: 'white',
          color: 'gray.400',
          fontSize: '14px',

          _dark: {
            borderColor: 'gray.200',
            background: 'gray.200',
          },
          _focus: {
            borderColor: 'gray.500',
            outline: 'none',
            color: 'gray.400',
            boxShadow: 'none'
          },
          _placeholder: {
            color: 'gray.300',
            fontSize: '14px'
          }
        },
        addon: {
          fontSize: '12px',
          color: 'gray.500',
        },
        element: {
          color: 'gray.200',
        },
      },
    },
    NumberInput: {
      baseStyle: {
        field: {
          borderRadius: 'md',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray.300',
          background: 'white',
          color: 'gray.400',
          fontSize: '14px',

          _dark: {
            borderColor: 'gray.200',
            background: 'gray.200',
          },
          _focus: {
            borderColor: 'gray.500',
            color: 'gray.400',
            outline: 'none',
            boxShadow: 'none',
          },
          _placeholder: {
            color: 'gray.300',
            fontSize: '14px'
          }
        },
      },
    }
  },
});

export default customTheme;
