import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ height?: number }>`
  width: 100%;
  max-width: 500px;
  height: ${(props) => props.height}px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.color.lightBlue};
  overflow: hidden;
  touch-action: none;
`;

export const CustomForm = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const ExplanationText = styled.p`
  height: 50px;
  margin: 30px 0 0 0;
  color: #ffffff;
  font-size: 17px;
  line-height: 50px;
  letter-spacing: -0.02em;
  text-align: center;

  > strong {
    color: #c4e4f2;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  & + & {
    margin-left: 15px;
  }
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  position: sticky;
  bottom: 40px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 40px;
  padding: 25px 0;
  border-radius: 88px;
  background-color: ${({ theme }) => theme.color.orange};
  box-shadow: 0 3px 0 ${({ theme }) => theme.color.darkOrange};
  color: #ffffff;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.02em;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #c8c8c8;
      color: #989898;
      box-shadow: 0px 3px 0px #9d9d9d;
    `}
`;
