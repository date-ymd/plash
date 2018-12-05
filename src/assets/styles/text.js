import styled from 'styled-components/native';
import { Platform } from 'react-native';

const top = Platform.select({
  ios: -8,
  android: -11
});
const left = Platform.select({
  ios:10,
  android: 11
})

export const HeadText = styled.Text `
  font-size: 20px;
`

export const FooterText = styled.Text `
  font-size: 50px;
  color: white;
  position: absolute;
  top: ${top};
  left: ${left};
`
