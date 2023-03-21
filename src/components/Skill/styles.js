import styled from 'styled-components';

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillFrame = styled.div`
  width: ${(props) => (props.width ? props.width : "53px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  background-color: ${(props) => (props.color ? props.color : "#120804")};
  clip-path: polygon(28% 0, 72% 0, 98% 35%, 90% 80%, 50% 100%, 10% 80%, 2% 35%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.beige};
`;

export const SkillPowerText = styled.div`
  font-family: 'S-CoreDream-3Light', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CoinPowerText = styled.div`
  background-color: ${(props) => (props.color ? props.color : "gray")};
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  font-size: 1rem;
  padding: 0 2px;
  margin-top: 4px;
`;

export const NameText = styled.div`
  margin: 6px 0;
  padding: 2px 8px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  box-shadow: -2px 3px black;
  font-family: 'S-CoreDream-3Light', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px black;
  word-spacing: -2px;
`;

export const IconsWrap = styled.div`
  display: flex;
  gap: 2px;
`;

export const Icon = styled.div`
  width: 20px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  > img {
    height: 18px;
  }
`;

export const CoinsWrap = styled(IconsWrap)`
  gap: 0;
`;

export const CoinIcon = styled(Icon)`
  width: 14px;
  > img {
    height: 12px;
  }
`;
