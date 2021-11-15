import { Flex } from "@chakra-ui/layout";
import React from "react";
import Calendar from "../components/calendarGrid";
import LeftPane from "../components/leftPane";

const IndexPage = () => (
  <>
    <Flex pt="75px">
      <LeftPane/>
      <Calendar/>
    </Flex>
  </>
)

export default IndexPage;
