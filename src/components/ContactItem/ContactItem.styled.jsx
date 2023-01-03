import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
`;

export const ContactInfo = styled.p`
  min-width: 300px;
  padding: 0;
  margin: 0;

  font-size: 18px;
  line-height: 1.17;
`;

export const NameBox = styled.span`
  font-weight: 600;
`;

export const Button = styled.button`
  display: flex;  
  text-align: center;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  height: 40px;
  font-weight: 700;
  font-size: 12px;
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
