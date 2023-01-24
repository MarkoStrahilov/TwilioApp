import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

import AvatarWithRipple from '../shared/AvatarRippleEffect'
import Logo from './Logo';

const Links = [
  {id: 1, name: "Pricing Plans", href: "/pricing-plans"},
  {id: 2, name: "Api Documentation", href: "/docs"},
  {id: 3, name: "Contact", href: "/contact"},
]
const NavLink = ({ id,name,href, effect}) => (

  <Link
    key={id}
    px={2}
    py={1}
    rounded={'md'}
   _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }} 
    to={href}>
    {name}
  </Link>
);


export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate("")

  const logOut = async() => {
      try {
        // await axios.post("/log-out")
       // navigate("/")
       toast.success("you have been logged out")
      } catch (error) {
        toast.error("something went wrong, please try again later")
      }
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <div key={link.id}>
                  <NavLink name={link.name} href={link.href} />
                </div>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                {/* <AvatarWithRipple  /> */}
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('red.200', 'red.700'),
                }} 
                onClick={logOut}
                >Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink id={link.id} name={link.name} href={link.href} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}