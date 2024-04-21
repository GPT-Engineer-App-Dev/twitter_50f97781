import { Box, Flex, Input, Button, Text, VStack, HStack, Avatar, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <VStack width="15%" borderRight="1px" borderColor="gray.200" align="flex-start" spacing={4} p={4}>
        <IconButton icon={<FaTwitter />} fontSize="2xl" variant="ghost" aria-label="Twitter logo" />
        <VStack align="stretch" width="100%">
          <Button leftIcon={<FaHome />} justifyContent="flex-start">
            Home
          </Button>
          <Button leftIcon={<FaHashtag />} justifyContent="flex-start">
            Explore
          </Button>
          <Button leftIcon={<FaBell />} justifyContent="flex-start">
            Notifications
          </Button>
          <Button leftIcon={<FaEnvelope />} justifyContent="flex-start">
            Messages
          </Button>
          <Button leftIcon={<FaBookmark />} justifyContent="flex-start">
            Bookmarks
          </Button>
          <Button leftIcon={<FaListAlt />} justifyContent="flex-start">
            Lists
          </Button>
          <Button leftIcon={<FaUserAlt />} justifyContent="flex-start">
            Profile
          </Button>
          <Button leftIcon={<FaEllipsisH />} justifyContent="flex-start">
            More
          </Button>
        </VStack>
        <Button colorScheme="twitter" leftIcon={<FaFeatherAlt />} width="100%">
          Tweet
        </Button>
      </VStack>

      {/* Feed */}
      <VStack width="50%" borderRight="1px" borderColor="gray.200" spacing={4} p={4}>
        <HStack width="100%" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            Home
          </Text>
          <FaFeatherAlt />
        </HStack>
        <Box p={4} width="100%" borderWidth="1px" borderRadius="lg">
          <HStack spacing={4}>
            <Avatar src="https://placehold.co/600x400" />
            <Input placeholder="What's happening?" />
          </HStack>
        </Box>
        {/* Sample Tweet */}
        <Flex direction="column" p={4} width="100%" borderWidth="1px" borderRadius="lg">
          <HStack spacing={4}>
            <Avatar src="https://placehold.co/600x400" />
            <Text fontWeight="bold">John Doe</Text>
            <Text color="gray.500">@johndoe</Text>
          </HStack>
          <Text mt={2}>Just setting up my Twitter clone! #react #chakraui</Text>
        </Flex>
      </VStack>

      {/* Trends */}
      <VStack width="35%" p={4}>
        <Input placeholder="Search Twitter" />
        <Box mt={4} p={4} width="100%" borderWidth="1px" borderRadius="lg">
          <Text fontSize="lg" mb={2}>
            Trends for you
          </Text>
          <VStack align="stretch">
            <Text>#react</Text>
            <Text>#chakraui</Text>
            <Text>#webdev</Text>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;
