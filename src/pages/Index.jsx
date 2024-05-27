import { Box, Button, Container, Flex, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCode, FaStar, FaUserGraduate } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">CodeLearn</Heading>
        <HStack spacing={8}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Courses</Button>
          <Button variant="link" color="white">About</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        bg="gray.100"
        p={10}
        minH="60vh"
      >
        <VStack align="start" spacing={4} maxW="lg">
          <Heading as="h1" size="2xl">Learn to Code with CodeLearn</Heading>
          <Text fontSize="lg">Join our community and start your journey to becoming a coding expert. Learn at your own pace with our comprehensive courses.</Text>
          <Button colorScheme="blue" size="lg">Get Started</Button>
        </VStack>
        <Image src="/images/hero-image.png" alt="Hero Image" boxSize="400px" objectFit="cover" />
      </Flex>

      {/* Featured Courses */}
      <Box as="section" p={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>Featured Courses</Heading>
        <Flex wrap="wrap" justify="center" spacing={8}>
          <Box bg="white" boxShadow="md" borderRadius="md" p={6} m={4} maxW="sm">
            <FaCode size="3em" />
            <Heading as="h3" size="md" mt={4}>Introduction to JavaScript</Heading>
            <Text mt={2}>Learn the basics of JavaScript, the most popular programming language in web development.</Text>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" p={6} m={4} maxW="sm">
            <FaCode size="3em" />
            <Heading as="h3" size="md" mt={4}>Python for Beginners</Heading>
            <Text mt={2}>Start your programming journey with Python, a versatile and beginner-friendly language.</Text>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" p={6} m={4} maxW="sm">
            <FaCode size="3em" />
            <Heading as="h3" size="md" mt={4}>Web Development Bootcamp</Heading>
            <Text mt={2}>Become a full-stack web developer with our intensive bootcamp course.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Testimonials */}
      <Box as="section" bg="gray.100" p={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>What Our Students Say</Heading>
        <Flex wrap="wrap" justify="center" spacing={8}>
          <Box bg="white" boxShadow="md" borderRadius="md" p={6} m={4} maxW="sm">
            <FaUserGraduate size="3em" />
            <Text mt={4}>"CodeLearn has transformed my career. The courses are well-structured and easy to follow."</Text>
            <Text mt={2} fontWeight="bold">- Jane Doe</Text>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" p={6} m={4} maxW="sm">
            <FaUserGraduate size="3em" />
            <Text mt={4}>"I love the flexibility of learning at my own pace. The instructors are very knowledgeable."</Text>
            <Text mt={2} fontWeight="bold">- John Smith</Text>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" p={6} m={4} maxW="sm">
            <FaUserGraduate size="3em" />
            <Text mt={4}>"The community support is amazing. I never felt alone during my learning journey."</Text>
            <Text mt={2} fontWeight="bold">- Alice Johnson</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" p={4} textAlign="center">
        <Text>&copy; 2023 CodeLearn. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;