import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
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
