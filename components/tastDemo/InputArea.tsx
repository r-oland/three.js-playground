// Components==============
import React, { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import { LayoutContext } from '../../Layout/Layout';
import { questions } from './questions';
// =========================

const Wrapper = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.s6};
  overflow: auto;
  max-width: 800px;

  form {
    display: grid;
    gap: ${({ theme }) => theme.spacing.s2};
    align-items: start;
    align-content: start;
  }

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.s4};
  }

  textarea {
    border: 1px solid ${({ theme }) => theme.color.gray};
    background: transparent;
    padding: ${({ theme }) => theme.spacing.s2};
    height: 100px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Buttons = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.s2};
  grid-template-columns: auto 1fr;
`;

const Shuffle = styled.button`
  border: solid 1px ${({ theme: { color } }) => color.black};
  padding: ${({ theme: { spacing } }) => `${spacing.s2} ${spacing.s4}`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  ${({ theme: { fontSize } }) => fontSize.l};
`;

const Submit = styled.button`
  border: solid 1px ${({ theme: { color } }) => color.gray};
  padding: ${({ theme: { spacing } }) => `${spacing.s2} ${spacing.s4}`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  ${({ theme: { fontSize } }) => fontSize.l};
  background-color: ${({ theme: { color } }) => color.black};
  color: ${({ theme }) => theme.color.white};
`;

export default function InputArea() {
  const i = Math.floor(Math.random() * questions.length);
  const [value, setValue] = useState('');
  const [toggleNewQuestion, setToggleNewQuestion] = useState(false);

  const { setShortCanvas } = useContext(LayoutContext);

  const question = useMemo(() => questions[i], [toggleNewQuestion]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShortCanvas(false);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h3>{question}</h3>
        <textarea
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Buttons>
          <Shuffle
            type="button"
            onClick={() => setToggleNewQuestion((prev) => !prev)}
          >
            Shuffle
          </Shuffle>
          <Submit type="submit">Deel je leermoment</Submit>
        </Buttons>
      </form>
    </Wrapper>
  );
}
