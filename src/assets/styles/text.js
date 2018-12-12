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

export const RegistBtnTxt = styled.Text `
  text-align: center;
  font-size: 20px;
  padding-top: 13px;
  color: hotpink;
`
