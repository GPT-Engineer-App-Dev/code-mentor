import { Box, Container, VStack, Text, Heading, Button, Flex, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import { FaCode, FaUserGraduate, FaStar } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">CodeLearn</Heading>
        <Button colorScheme="teal" variant="outline">Sign In</Button>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="blue.600" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Learn to Code, Anytime, Anywhere</Heading>
        <Text fontSize="xl" mb={6}>Join millions of learners from around the world mastering new skills.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      {/* Featured Courses */}
      <Box as="section" py={20} textAlign="center">
        <Heading as="h3" size="xl" mb={10}>Featured Courses</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <FaCode size="3em" color="teal" />
            <Heading as="h4" size="md" mt={4}>Web Development</Heading>
            <Text mt={2}>Learn HTML, CSS, and JavaScript to build modern web applications.</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <FaUserGraduate size="3em" color="teal" />
            <Heading as="h4" size="md" mt={4}>Data Science</Heading>
            <Text mt={2}>Master data analysis, visualization, and machine learning with Python.</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <FaStar size="3em" color="teal" />
            <Heading as="h4" size="md" mt={4}>Machine Learning</Heading>
            <Text mt={2}>Dive into the world of AI and build intelligent systems.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Testimonials */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h3" size="xl" mb={10}>What Our Students Say</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={6}>
            <Text fontSize="lg" fontStyle="italic">"This platform has transformed my career. The courses are well-structured and easy to follow."</Text>
            <Text mt={4} fontWeight="bold">- Jane Doe</Text>
          </Box>
          <Box p={6}>
            <Text fontSize="lg" fontStyle="italic">"I love the hands-on approach. The projects helped me build a strong portfolio."</Text>
            <Text mt={4} fontWeight="bold">- John Smith</Text>
          </Box>
          <Box p={6}>
            <Text fontSize="lg" fontStyle="italic">"The community and support from instructors are amazing. Highly recommend!"</Text>
            <Text mt={4} fontWeight="bold">- Sarah Lee</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.700" color="white" py={10} textAlign="center">
        <Text>&copy; 2023 CodeLearn. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;