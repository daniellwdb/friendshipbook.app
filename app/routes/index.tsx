import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  SimpleGrid,
  Stack,
  Text,
  useToken,
} from "@chakra-ui/react";

type FeatureProps = {
  keyword: string;
  title: string;
  description: string;
  reverse?: boolean;
  cta?: JSX.Element;
};

const features = [
  {
    keyword: "Online",
    title: "In your pocket",
    description:
      "As Stephen King once said: “Books are a uniquely portable magic”. With FriendshipBook, your book is available both online and offline and on all your devices, take your memories anywhere you go!",
  },
  {
    keyword: "Unique",
    title: "Endless possibilities",
    description:
      "FriendshipBook offers a lot of customization for pages, this allows you to capture memories in a unique way. What are you waiting for?",
  },
  {
    keyword: "Eco-friendly",
    title: "Save the trees!",
    description:
      "Unlike physical books, everything in FriendshipBook is online, meaning less harm is done to nature.",
  },
];

function Feature({
  keyword,
  title,
  description,
  cta,
  reverse = false,
}: FeatureProps) {
  return (
    <Stack
      direction={{
        base: "column",
        sm: "column",
        lg: reverse ? "row-reverse" : "row",
      }}
      align="center"
      justify="space-between"
      textAlign={{ base: "center", sm: "center", lg: "left" }}
      color="white"
      spacing={8}
    >
      <Box maxW="lg">
        <chakra.h4 fontFamily="heading" fontSize="xl" maxW="4xl">
          {keyword}
        </chakra.h4>
        <Heading as="h2" size="2xl" maxW="2xl" mt={4} mb={6}>
          {title}
        </Heading>
        <Text fontSize="lg" fontWeight="medium" color="elements.paragraph">
          {description}
        </Text>
        {cta}
      </Box>
      <Box w="800px" h="350px" maxW="2xl" bgColor="white" rounded="xl" />
    </Stack>
  );
}

export default function Index() {
  const [space5, space6, space10, space12, space14] = useToken(
    "space",
    [5, 6, 10, 12, 14]
  );

  return (
    <>
      <chakra.header bgColor="elements.background" color="white">
        <Container
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          maxW="container.xl"
          py={8}
        >
          <Heading as="h4" size="md">
            FriendshipBook
          </Heading>
          <HStack as="nav" spacing={6}>
            <Button variant="link" color="white">
              How it works
            </Button>
            <Button variant="link" color="white">
              Sign in
            </Button>
            <Button variant="primaryCta">Sign up</Button>
          </HStack>
        </Container>
      </chakra.header>
      <chakra.main bgColor="elements.background">
        <chakra.section py={{ base: 5, sm: 12, lg: 24 }}>
          <Container color="white" maxW="container.xl">
            <Flex
              align="center"
              justify="space-between"
              direction={{ base: "column", sm: "column", lg: "row" }}
            >
              <Stack
                spacing={6}
                align={{ base: "center", sm: "center", lg: "flex-start" }}
                textAlign={{ base: "center", sm: "center", lg: "left" }}
              >
                <chakra.h1
                  fontFamily="heading"
                  fontSize={{ base: space10, sm: space12, lg: space14 }}
                  lineHeight={1.2}
                >
                  A creative way <br />
                  to save memories
                </chakra.h1>
                <chakra.h3
                  fontSize={{ base: space5, lg: space6 }}
                  fontWeight="medium"
                  color="elements.paragraph"
                  maxW="xl"
                >
                  FriendshipBook allows you to create, save and share memories
                  with friends and family.
                </chakra.h3>
                <Flex>
                  <Button variant="primaryCta" size="xl" mt={6}>
                    Create a book
                  </Button>
                </Flex>
              </Stack>
              <Image
                src="/images/drawing.png"
                alt="FriendshipBook hero image"
                w="full"
                h="auto"
                maxW={{ base: "sm", sm: "md", lg: "xl" }}
                mb={{ md: "-24", lg: "-44" }}
                pt={{ base: space12, lg: 0 }}
              />
            </Flex>
          </Container>
        </chakra.section>
        <chakra.section
          bgColor="elements.paragraph"
          color="elements.background"
          pt={{ base: 26, sm: 32, lg: 44 }}
        >
          <Container maxW="container.xl" centerContent textAlign="center">
            <Heading as="h2" size="2xl" maxW="lg">
              Don't judge a book by it's cover
            </Heading>
            <chakra.h3
              fontSize={{ base: space5, lg: space6 }}
              fontWeight="medium"
              maxW="4xl"
              mt={6}
            >
              Create a book and invite friends and family to create pages.
              Pictures, doodles, fun texts and stickers make each book unique.
            </chakra.h3>
          </Container>
        </chakra.section>
        <chakra.section minH="sm" bgColor="elements.paragraph" />
        <chakra.section>
          <Container maxW="container.xl" textAlign="center">
            <Box
              mt="-80"
              pos="relative"
              h="2xl"
              maxW="full"
              bgColor="white"
              rounded="xl"
            />
          </Container>
        </chakra.section>
        <chakra.section
          bgColor="elements.background"
          py={{ base: 5, sm: 12, lg: 24 }}
        >
          <Container maxW="container.xl">
            <Center
              flexDirection="column"
              textAlign="center"
              mb={{ base: 5, sm: 12, lg: 24 }}
            >
              <chakra.h4 fontSize="xl" maxW="4xl" color="elements.paragraph">
                Gaston Bachelard:
              </chakra.h4>
              <Heading
                as="h2"
                size="2xl"
                maxW="2xl"
                color="white"
                mt={4}
                mb={6}
              >
                The blank page gives us the right to dream
              </Heading>
              <chakra.h3
                fontSize={{ base: space5, lg: space6 }}
                fontWeight="medium"
                color="elements.paragraph"
                maxW="4xl"
              >
                Your family and friends are what makes your book special. What
                starts off as blank pages, will end up with memories.
              </chakra.h3>
            </Center>
            <Stack spacing={{ base: 5, sm: 12, lg: 24 }}>
              {features.map((feature, idx) => (
                <Feature
                  key={feature.title}
                  {...(idx === 1 && {
                    cta: (
                      <Button variant="primaryCta" mt={6}>
                        Explore
                      </Button>
                    ),
                    reverse: true,
                  })}
                  {...feature}
                />
              ))}
            </Stack>
          </Container>
        </chakra.section>
        <chakra.section
          bgColor="elements.paragraph"
          color="elements.background"
          py={{ base: 5, sm: 12, lg: 24 }}
        >
          <Container maxW="container.xl">
            <Box textAlign={{ base: "center", sm: "center", lg: "left" }}>
              <Heading as="h2" size="2xl">
                Stay up to date
              </Heading>
              <chakra.h3
                fontSize={{ base: space5, lg: space6 }}
                fontWeight="medium"
                my={6}
              >
                Receive emails when new features are available in
                FriendshipBook.
                <br />I promise I won’t spam you.
              </chakra.h3>
            </Box>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
              <InputGroup flexDirection="column" fontWeight="bold">
                <Text fontSize="lg" mb={2}>
                  First name
                </Text>
                <Input
                  size="xl"
                  border={0}
                  bgColor="elements.background"
                  color="white"
                  placeholder="Your name"
                  sx={{
                    _placeholder: {
                      fontWeight: "bold",
                      color: "white",
                      opacity: 1,
                    },
                  }}
                />
              </InputGroup>
              <InputGroup flexDirection="column">
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Email Address
                </Text>
                <Input
                  size="xl"
                  border={0}
                  bgColor="elements.background"
                  color="white"
                  placeholder="you@example.com"
                  sx={{
                    _placeholder: {
                      fontWeight: "bold",
                      color: "white",
                      opacity: 1,
                    },
                  }}
                />
              </InputGroup>
              <Button size="xl" variant="primaryCta" alignSelf="flex-end">
                Subscribe
              </Button>
            </SimpleGrid>
          </Container>
        </chakra.section>
      </chakra.main>
      <chakra.footer
        bgColor="elements.background"
        color="white"
        py={{ base: 5, sm: 12, lg: 24 }}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between">
            <Flex direction="column">
              <Heading as="h4" size="md">
                FriendshipBook
              </Heading>
              <Text
                fontSize="lg"
                fontWeight="medium"
                color="elements.paragraph"
                mt={4}
              >
                FriendshipBook was made with 💙 by a single developer.
              </Text>
              <chakra.small
                fontFamily="body"
                color="elements.paragraph"
                mt="auto"
              >
                &copy; Copyright 2022, Daniell Wijdenbosch
              </chakra.small>
            </Flex>
            <Stack spacing={4}>
              <Heading as="h4" size="md">
                Links
              </Heading>
              <Text fontSize="lg" fontWeight="bold" color="elements.paragraph">
                About
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="elements.paragraph">
                GitHub
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="elements.paragraph">
                Personal
              </Text>
            </Stack>
          </Flex>
        </Container>
      </chakra.footer>
    </>
  );
}
