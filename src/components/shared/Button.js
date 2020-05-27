import styled from 'styled-components';

export const StyledButton = styled.TouchableOpacity`
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.15);
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  width: 215px;
  height: 48px;
  background-color: ${({color}) => (color ? 'blue' : '#EA4A4A')};
`;
