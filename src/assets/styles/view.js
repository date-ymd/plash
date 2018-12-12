import {
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

import styled from 'styled-components/native';
import * as csses from './css.js';


export const Container = styled.View `
  flex: 1;
  ${csses.center};
  background-color: #f8f8f8;
`;

export const ContainerWrap = styled.View `
  flex: 1;
  height:100%;
  background-color: #f8f8f8;
`;

export const ContainerRow = styled.View `
  flex-direction: row;
  ${csses.center};
`;

export const ContainerRowLeft = styled.View `
  flex-direction: row;
  ${csses.left};
`;

export const ContainerRowRight = styled.View`
  flex-direction: row;
  ${csses.right};
`;

export const ContainerRowBetween = styled.View `
  flex-direction: row;
  ${csses.between};
`;


export const ScrollView = styled.ScrollView `
  /* ${csses.center}; */
  flex: 1;
  width: 100%;
`;

export const ScrollViewH = styled.ScrollView `
  flex: 1;
  width: 100%;
  height: 100%;
`


export const ContentWrap = styled.View `
  width: 100%;
  padding: 0 4%;
`;

export const ContainerP = styled.View `
  padding-left: 5px;
  padding-right: 5px;
`

export const ContainerWhite = styled.View `
  background-color: white;
  ${csses.center};
`

export const ContentCenter = styled.View `
  width: 100%;
  ${csses.center};
`;

export const ContentRow = styled.View `
  width: 100%;
  flex-direction: row;
  ${csses.center};
`;

export const ContentRowBetween = styled.View `
  width: 100%;
  flex-direction: row;
  ${csses.between};
`;

export const HaderView = styled.View `
  ${csses.center}
  background-color: white;
`

export const FooterView = styled.View `
  ${csses.center};
  background-color: rgba(0,0,0,0.3);
  border-radius: 100;
`;

export const FooterTouch = styled.TouchableOpacity `
  background-color: rgba(0,0,0,0.3);
  border-radius: 50; 
  width: 50px;
  height: 50px;
  /* transform: rotate(45deg); */
`
export const FlexVertical = styled.View `
  /* flex: 1; */
`
