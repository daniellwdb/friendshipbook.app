import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  useToken,
} from "@chakra-ui/react";

export default function Index() {
  const [space5, space6, space10, space12, space14] = useToken(
    "space",
    [5, 6, 10, 12, 14]
  );

  return (
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
          <Center flexDirection="column" textAlign="center">
            <chakra.h4 fontSize="xl" maxW="4xl" color="elements.paragraph">
              Gaston Bachelard:
            </chakra.h4>
            <Heading as="h2" size="2xl" maxW="2xl" color="white" mt={4} mb={6}>
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
        </Container>
      </chakra.section>
    </chakra.main>
  );
}
