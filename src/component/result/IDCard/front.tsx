import CardBottom from '@/component/result/IDCard/card-bottom';
import CardMiddle from '@/component/result/IDCard/card-middle';
import CardTop from '@/component/result/IDCard/card-top';
import { getStorage } from '@/utils/storage';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const getImagedata = () => {
  const data = getStorage('user');
  if (data === null) return null;

  const { image } = JSON.parse(data);
  if (image) {
    return image;
  }
  return null;
};

export default function Front({}) {
  const router = useRouter();
  const image = getImagedata();
  const { name, birth, whatILike, goal } = router.query;

  return (
    <InnerFace>
      <CardTop />
      <CardMiddle
        // TODO : 이미지 없을경우 기본 이미지로
        image={image ?? '/Weverse_albums_OMG_C_HAERIN_2_1677318532 1.png'}
        subImage="/romi.png"
      >
        <FrontTextWrapper>
          <div>
            <span>NAME :</span> <span>{name ?? '데이터가 없습니다'}</span>
          </div>
          <div>
            <span>BIRTH DATE :</span>
            <span>{birth ?? '데이터가 없습니다'}</span>
          </div>
          <div>
            <span>LINING IN :</span> <span>{'지구별'}</span>
          </div>
          <div>
            <span>WAHT I LIKE :</span>
            <span>{whatILike ?? '데이터가 없습니다'}</span>
          </div>
          <div>
            <span>GOAL :</span> <span>{goal ?? '데이터가 없습니다'}</span>
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
