import styled from '@emotion/styled';

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ matches }) =>
    matches.isMobile
      ? '50px 19px 50px 19px'
      : matches.isTablet
        ? '40px 50px 76px 50px'
        : matches.isDesktop && '40px 110px 74px 110px'};
  @media (max-width: 772px) {
    align-items: center;
  }
`;

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
        : matches.isDesktop && '160px'};
  width: ${({ matches }) =>
    matches.isMobile
      ? '320px'
      : matches.isTablet
        ? '768px'
        : matches.isDesktop && '1280px'};
  height: ${({ matches }) =>
    matches.isMobile
      ? '286px'
      : matches.isTablet
        ? '527px'
        : matches.isDesktop && '527px'};
`;

export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ReportComponent = styled.div`
  display: block;
  border: 1px solid rgb(15, 15, 15);
  border-radius: 5px;
`;

export const ReportCostsOrIncomeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border: 1px solid rgb(15, 15, 15);
  border-radius: 5px;
`;

export const ReportGraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(15, 15, 15);
  border-radius: 5px;
`;

export const BgImg = styled.img`
  position: absolute;
  right: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
        ? '88px'
        : matches.isDesktop && '0'};
  bottom: 0;
  height: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
        ? '103px'
        : matches.isDesktop && '232px'};
  width: ${({ matches }) =>
    matches.isMobile
      ? '0'
      : matches.isTablet
        ? '183px'
        : matches.isDesktop && '1270px'};
  z-index: -1;
`;