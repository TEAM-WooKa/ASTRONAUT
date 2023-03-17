import styled from 'styled-components';

const TextWrapper = styled.p`
  /* TODO : font core 만들기 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.colors.main2};
  position: relative;
  margin-left: 10px;

  &::before {
    content: '';
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    position: absolute;
    left: -8px;
    top: 7px;
    display: inline-block;
    background: ${({ theme }) => theme.colors.main2};
  }
`;

const GREEN_LUMY = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>루미</b>입니다
    </TextWrapper>
    <TextWrapper>루미는 별이 탄생하는 성간운입니다.</TextWrapper>
    <TextWrapper>
      이상과 현실 사이를 넘나들면 멋지게 조율하는 우주인님은 루미에서 오셨네요!
    </TextWrapper>
  </>
);
const PURPLE_LUMY = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>루미</b>입니다
    </TextWrapper>
    <TextWrapper>루미는 별이 탄생하는 성간운입니다.</TextWrapper>
    <TextWrapper>
      혼자만의 시간에서도 영감을 찾아내고, 풍부한 상상력으로 창의적인 아이디어를
      내는 우주인님은 루미에서 오셨어요!
    </TextWrapper>
  </>
);

const YELLOW_LUMY = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>루미</b>입니다
    </TextWrapper>
    <TextWrapper>루미는 별이 탄생하는 성간운입니다.</TextWrapper>
    <TextWrapper>
      현실적, 체계적이지만 낭만적인 모습도 있는 우주인님은 루미에서 오셨네요
    </TextWrapper>
  </>
);

const YELLOW_LANNY = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>래니</b>입니다
    </TextWrapper>
    <TextWrapper>
      래니는 우주 어딘가에 존재하는 지구를 닮은 행성입니다.
    </TextWrapper>
    <TextWrapper>
      현실적, 체계적이지만 낭만적인 모습도 있는 우주인님은 래니에서 오셨네요
    </TextWrapper>
  </>
);

const GREEN_LANNY = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>래니</b>입니다
    </TextWrapper>
    <TextWrapper>
      래니는 우주 어딘가에 존재하는 지구를 닮은 행성입니다.
    </TextWrapper>
    <TextWrapper>
      이상과 현실 사이를 넘나들며 멋지게 조율하는 우주인님은 래니에서 오셨네요!
    </TextWrapper>
  </>
);

const PURPLE_LANNY = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>래니</b>입니다
    </TextWrapper>
    <TextWrapper>
      래니는 우주 어딘가에 존재하는 지구를 닮은 행성입니다.
    </TextWrapper>
    <TextWrapper>
      열정적이고 주도적이며 풍부한 상상력으로 창의적인 아이디어를 내는
      우주인님은 래니에서 오셨네요!
    </TextWrapper>
  </>
);

const DA_CAT = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>다케</b>입니다
    </TextWrapper>
    <TextWrapper>
      다케는 과학자들도 발혀내지 못한 미확인 에너지로 구성되어있습니다.
    </TextWrapper>
    <TextWrapper>
      검정 고양이처럼 알쏭달쏭한 매력의 당신은 과학으로도 밝혀내지 못한 비밀을
      지니셨네요!
    </TextWrapper>
  </>
);

const CHEE_CAT = (
  <>
    <TextWrapper>
      우주인님의 고향은 <b>치케</b>입니다
    </TextWrapper>
    <TextWrapper>
      치케는 과학자들도 발혀내지 못한 미확인 에너지로 구성되어있습니다.
    </TextWrapper>
    <TextWrapper>
      치즈색 고양이처럼 알쏭달쏭한 매력의 우주인님은 과학으로도 밝혀내지 못한
      비밀을 지니셨네요!
    </TextWrapper>
  </>
);

export {
  CHEE_CAT,
  DA_CAT,
  GREEN_LANNY,
  GREEN_LUMY,
  PURPLE_LANNY,
  PURPLE_LUMY,
  YELLOW_LANNY,
  YELLOW_LUMY,
};
