import styled from '@emotion/styled';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  background-color: var(--bg-color);

  border-bottom-left-radius: ${({ matches }) =>
    matches.isMobile
      ? '100px'
      : matches.isTablet
      ? '100px'
      : matches.isDesctop && '160px'};
  width: ${({ matches }) =>
    matches.isMobile
      ? '320px'
      : matches.isTablet
      ? '768px'
      : matches.isDesctop && '1280px'};
  height: ${({ matches, changeBackground }) =>
    matches.isMobile
      ? changeBackground === 'all'
        ? '300px'
        : '440px'
      : matches.isTablet
      ? '527px'
      : matches.isDesctop && '527px'};
`;
export const TransactionWrrap = styled.div`
  width: ${({ matches }) =>
    matches.isTablet ? '665px' : matches.isDesctop && '1060px'};
`;
