import React, { useState } from "react";
import styled from "styled-components";

import Sentence from "./components/Sentence";

const Header = styled.header`
  padding: 80px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e67e22;

  @media print {
    display: none;
  }
`;

const Label = styled.label`
  width: 50%;
  color: white;
  line-height: 2em;
  text-indent: 16px;
`;

const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
  border-radius: 20px;
  border: 0;
  font-size: 1.2em;
  border: 2px solid transparent;
  outline: none;

  &:focus {
    border-color: #34495e;
  }
`;

const Content = styled.section`
  padding: 32px;
`;

function App() {
  const [sentence, setSentence] = useState("today we went to the park");
  return (
    <>
      <Header>
        <Sentence value="letter formations" />
        <Label>
          Write something awesome
          <Input
            defaultValue={sentence}
            onChange={(e) => setSentence(e.currentTarget.value)}
          />
        </Label>
      </Header>
      <Content>
        <Sentence value={sentence} underline shadows />
      </Content>
    </>
  );
}

export default App;
