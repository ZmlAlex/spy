import styled from 'styled-components';

export const RoundedButton = styled.TouchableOpacity`
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.15);
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  width: 64px;
  height: 64px;
  background-color: red;
  background-color: ${({danger}) => (danger ? '#EA4A4A' : '#2BD900')};
`;
