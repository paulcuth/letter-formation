import React from "react";
import Letter, { FORMS } from "./Letter";
import styled from "styled-components";

const LETTER_SIZE_MAP = {
  i: "narrow",
  m: "wide",
  w: "wide",
  ".": "narrow",
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Word = styled.span`
  white-space: nowrap;
  margin-bottom: 16px;
`;

const Underline = styled.div`
  position: absolute;
  border-bottom: 2px solid rgb(150, 150, 240);
  margin: 0 -16px;
  top: ${(props) => props.line * 132 + 92}px;
  width: calc(100% + 32px);
`;

const LetterWrapper = styled.span`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  height: ${(props) => (props.shadows ? 396 : 132)}px;
  margin: 8px 0;

  & > :not(${Underline}) {
    opacity: ${(props) => (props.muted ? 0.33 : 1)};
  }
`;

const renderLetter = (letter, index, options) => {
  const { underline, shadows } = options;
  const form = FORMS[letter.toLowerCase()];
  if (form == null) {
    return null;
  }

  const size = LETTER_SIZE_MAP[letter];
  const muted = letter === " ";

  return (
    <LetterWrapper key={`${letter}:${index}`} muted={muted} shadows={shadows}>
      <Letter marks={form} size={size} />
      {underline && <Underline line={0} />}
      {shadows && (
        <>
          <Letter marks={[]} size={size} />
          {underline && <Underline line={1} />}
          {underline && <Underline line={2} />}
        </>
      )}
    </LetterWrapper>
  );
};

const renderWord = (word, options) => {
  const letters = word.split("");
  return (
    <Word>
      {letters.map((letter, index) => renderLetter(letter, index, options))}
    </Word>
  );
};

export default function Sentence(props) {
  const { value, underline, shadows } = props;
  const options = { underline, shadows };
  const words = value.split(/\b/g);
  return <Wrapper>{words.map((word) => renderWord(word, options))}</Wrapper>;
}
