import React from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../redux/action";
import { Box, Heading, Select } from "@chakra-ui/react"; 

export const Select_sort = () => {
  const dispatch = useDispatch();

  function handleSort(event) {
    const order = event.target.value;
    dispatch(getProduct(order));
  }

  return (
    <Box 
      width="250px" 
      padding="4" 
      boxShadow="md" 
      borderRadius="md" 
      bg="gray.50" 
      margin="20px"
    >
      <Heading as="h2" size="md" marginBottom="4">
        Sort by price
      </Heading>
      <Select placeholder="Select option" onChange={handleSort} >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </Box>
  );
};

