import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: left;
  gap: 10px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 80px;
  padding: 8px;
  border: 1px solid #000000;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #4b9fed;
    color: #ffffff;
    border: none;
    transform: scale(1.1);
  }
`;
