import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import PhoneNumberInput from "./PhoneNumberInput";
import { COUNTRIES } from "../hooks/Countries";

export default function PhoneNumber({value,setValue}) {

  const countryOptions = COUNTRIES.map(({ name, iso }) => ({
    label: name,
    value: iso
  }));

  return (
    <>
      <Box mx="20px">
        <Text pb="8px">Value: {value}</Text>
        <FormControl mb="32px">
          <FormLabel>Phone Number</FormLabel>
          <PhoneNumberInput
            value={value}
            options={countryOptions}
            placeholder="Enter phone number"
            onChange={value => setValue(value)}
          />
        </FormControl>
      </Box>
    </>
  );
}
