import { FlexCenter } from '@/component/common/Flex';
import styled from 'styled-components';

export default function RomiBox() {
  return (
    <RomiWrapper>
      <RomiMainImageWrapper>
        <img src="/images/romi.png" width="90" height="68" alt="romi" />
      </RomiMainImageWrapper>
      <Tag>Yellow_Lumy</Tag>
    </RomiWrapper>
  );
}

const RomiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const RomiMainImageWrapper = styled(FlexCenter)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.sub2};
`;

const Tag = styled.div`
  align-self: center;
  font-family: 'GongGothicMedium';
  font-weight: 700;
  font-size: 10px;
  width: fit-content;
  padding: 0 5px;
  /* 주색 2번 */
  color: ${(props) => props.theme.colors.main2};
  line-height: 20px;

  /* 보조 컬러 2 */
  background: ${(props) => props.theme.colors.sub2};
  border-radius: 10px;
`;
