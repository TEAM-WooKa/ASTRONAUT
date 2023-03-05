import CardBottom from '@/component/result/IDCard/card-bottom';
import CardMiddle from '@/component/result/IDCard/card-middle';
import CardTop from '@/component/result/IDCard/card-top';
import styled from 'styled-components';

interface IDCardProps {
  name: string;
  birth: string;
  liningIn: string;
  whatILike: string;
  goal: string;
}

export default function Front({
  name,
  birth,
  liningIn,
  whatILike,
  goal,
}: IDCardProps) {
  return (
    <InnerFace>
      <CardTop />
      <CardMiddle
        image="/Weverse_albums_OMG_C_HAERIN_2_1677318532 1.png"
        subImage="/images/romi.png"
      >
        <FrontTextWrapper>
          <div>
            <span>NAME :</span> <span>{name}</span>
          </div>
          <div>
            <span>BIRTH DATE :</span> <span>{birth}</span>
          </div>
          <div>
            <span>LINING IN :</span> <span>{liningIn}</span>
          </div>
          <div>
            <span>WAHT I LIKE :</span> <span>{whatILike}</span>
          </div>
          <div>
            <span>GOAL :</span> <span>{goal}</span>
          </div>
        </FrontTextWrapper>
      </CardMiddle>

      <CardBottom />
    </InnerFace>
  );
}

const InnerFace = styled.div`
  padding: 11px 18px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
`;

const FrontTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  color: ${(props) => props.theme.colors.main2};
  font-family: 'GongGothicMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  div {
    border-bottom: 0.1px solid #343232;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
