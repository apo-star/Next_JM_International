/** @format */

import React, { useState, useEffect } from "react";
import { Heading, background } from "@chakra-ui/react";
interface TextWithLineProps {
  text: string;
}

const TextWithLine: React.FC<TextWithLineProps> = ({ text }) => {
  return (
    <div>
      <Heading color={"#000000"} textAlign={"center"}>
        {text}
      </Heading>
      <div
        style={{
          width: `${text.length + 2}em`,
          borderWidth: `2.5px`,
          borderColor: "red",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px"
        }}
      />
      <div
        style={{
          width: `${text.length}em`,
          borderWidth: `2.5px`,
          borderColor: "red",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          marginLeft: "1em"
        }}
      />
    </div>
  );
};

export default TextWithLine;
