
import { css } from 'styled-components';

export const center = css `
  justify-content: center;
  align-items: center;
`;

export const inline = css `
  flex-direction: row;
  align-items: flex-end;
`;

export const between = css `
  justify-content: space-between;
  align-items: center;
`;

export const left = css `
  justify-content: flex-start;
  align-items: center;
`;

export const right = css`
  justify-content: flex-end;
  align-items: center;
`;

export const inlineLeftCenter = css `
  flex-direction: row;
  align-items: center;
`;

export const tabBarStyle = css `
  font-weight: bold;
  align-self: center;
  font-size:20px;
`;

export const posBottom50per = css `
  bottom: '50%';
`;
