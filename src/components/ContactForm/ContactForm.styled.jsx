import styled from '@emotion/styled';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Span = styled.span`
  font-size: 18px;
  line-height: 1.17;
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 1.17;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: #2196f3;
  }
`;

export const Button = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 4px;
  background-color: #2196f3;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;
