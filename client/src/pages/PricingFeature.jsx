import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';
  import {Link} from 'react-router-dom'
  
  const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
  ];

  const PackageTier = ({
    title,
    options,
    typePlan,
    checked = false,
  }) => {
    const colorTextLight = checked ? 'white' : 'blue.600';
    const bgColorLight = checked ? 'blue.400' : 'gray.300';
  
    const colorTextDark = checked ? 'white' : 'blue.500';
    const bgColorDark = checked ? 'bluee.400' : 'gray.300';
  
    return (
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}>
        <Heading size={'md'}>{title}</Heading>
        <List spacing={3} textAlign="start">
          {options.map((desc, id) => (
            <ListItem key={desc.id}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {desc.desc}
            </ListItem>
          ))}
        </List>
        <Heading size={'xl'}>{typePlan}</Heading>
        <Stack>
        <Link to={"/pricing-plans"}>
          <Button
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
            Get Started
          </Button>
        </Link>
        </Stack>
      </Stack>
    );
  };
  const ThreeTierPricingHorizontal = () => {
    return (
      <Box py={6} px={5} min={'100vh'}>
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}>
            <Stack
              width={{
                base: '100%',
                md: '40%',
              }}
              textAlign={'center'}>
              <Heading size={'lg'}>
                The Right Plan for <Text color="blue.400">Your Business</Text>
              </Heading>
            </Stack>
            <Stack
              width={{
                base: '100%',
                md: '60%',
              }}>
              <Text textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                quod in iure vero. Facilis magnam, sed officiis commodi labore
                odit.
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <PackageTier title={'Hobby'} typePlan="$2.50 - 40 credits" options={options} />
          <Divider />
          <PackageTier
            title={'Growth'}
            checked={true}
            typePlan="$5 - 100 credits"
            options={options}
          />
          <Divider />
          <PackageTier title={'Scale'} typePlan="$7.5 - 150 credits" options={options} />
        </Stack>
      </Box>
    );
  };
  
  export default ThreeTierPricingHorizontal;