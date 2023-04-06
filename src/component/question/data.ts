export type QuestionCategory =
  | 'button-2'
  | 'color'
  | 'button-4'
  | 'sub'
  | 'long-4';
export interface QuestionType {
  id: number;
  type: QuestionCategory;
  question: string[];
  answer?: string[];
  character: 'lanny' | 'lumy' | 'cat';
  color: string;
}

type SubQuestionType = QuestionType;

export const COLOR_CHANGE_IMAGE = 'color_lumi';

export const subQuestion2: SubQuestionType[] = [
  {
    id: 2,
    type: 'button-4',
    question: ['다이어리에 어떤 내용을 기록하나요?'],
    answer: ['일상', '다짐', '행복한 기억', '중요한 약속'],
    character: 'lanny',
    color: 'yellow',
  },
  {
    id: 2,
    type: 'button-4',
    question: ['어떤 장르의 책을 가져가고 싶나요?'],
    answer: ['소설', '과학책', '미술책', '전공책'],
    character: 'lanny',
    color: 'purple',
  },
  {
    id: 2,
    type: 'button-4',
    question: ['그 꽃은 어떤 꽃인가요?'],
    answer: ['장미', '허브', '수국', '이름모를 꽃'],
    character: 'lanny',
    color: 'green',
  },
  {
    id: 2,
    type: 'button-4',
    question: ['카메라로 어떤 것을 찍고 싶으세요?'],
    answer: ['인물', '풍경', '정물', '음식'],
    character: 'lanny',
    color: 'yellow',
  },
];

export const subQuestion5: SubQuestionType[] = [
  {
    id: 5,
    type: 'long-4',
    question: ['그 지적 생명체는 어떤 모습일까요?'],
    answer: [
      '인간의 모습을 닮았나?!',
      '동물의 모습같아! ',
      '한번도 본 적 없는 외형이야!',
      '엄청 무섭게 생겼어!',
    ],
    character: 'cat',
    color: 'da',
  },
  {
    id: 5,
    type: 'button-4',
    question: ['그렇다면 좋아하는 영화 장르를 알려주세요!'],
    answer: ['SF영화', '로맨스', '액션', '코미디'],
    character: 'lanny',
    color: 'purple',
  },
];
// TODO : 제거
export const QUESTION_DATA: QuestionType[] = [
  {
    id: 1,
    type: 'button-4',
    question: [
      '고향별로 가는 우주선에 탑승하기 위해서는 ',
      '지구별의 물건 중 단 하나만 가져갈 수 있어요! ',
      '어떤 것을 가져가시겠어요?',
    ],
    answer: ['다이어리', '좋아하는 책', '꽃이 담긴 화분', '카메라'],
    character: 'lanny',
    color: 'green',
  },
  {
    id: 2,
    type: 'sub',
    question: [''],
    character: 'lanny',
    color: 'green',
  },
  {
    id: 3,
    type: 'color',
    question: [
      '우주선 밖으로 행성이 보이네요! ',
      '무슨 색인가요?',
      '(별을 슬라이드하여 색을 선택할 수 있습니다.)',
    ],
    character: 'lumy', // 필요없음
    color: 'yellow',
  },
  {
    id: 4,
    type: 'button-2',
    question: [
      '우주인님은 우주에 인간을 제외한 ',
      '지적 생명체가 있다고 생각하시나요?',
    ],
    character: 'lanny',
    color: 'yellow',
  },
  {
    id: 5,
    type: 'sub',
    question: [''],
    character: 'lanny',
    color: 'green',
  },
  {
    id: 6,
    type: 'button-4',
    question: ['우주인님이 제일 좋아하는 것을 알려주세요!'],
    answer: ['음악감상', '사진촬영', '운동하기', '게임하기'],
    character: 'lumy',
    color: 'green',
  },
  {
    id: 7,
    type: 'button-4',
    question: [
      '지구별에서 애완 동물을 기르시나요?',
      '혹은 길렀던/기르고 싶은 동물이 있나요?',
    ],
    answer: ['고양이', '강아지', '새', '없음'],
    character: 'cat',
    color: 'chee',
  },

  {
    id: 8,
    type: 'long-4',
    question: ['지구별에서 이루고 싶은 목표를 알려주세요! '],
    answer: [
      '지구별 정복하고야 말겠어!',
      '빌보드 차트 1위! 지구별 대스타! ',
      '지구별 방위대가 되어 지구를 지켜야지!',
      '지구별의 비밀 밝히기!',
    ],
    character: 'lumy',
    color: 'yellow',
  },
  {
    id: 9,
    type: 'button-4',
    question: ['당신이 가장 좋아하는 음악 장르는 무엇인가요?'],
    answer: ['K-POP', 'POP', '힙합', '락'],
    character: 'lumy',
    color: 'purple',
  },
  {
    id: 10,
    type: 'long-4',
    question: ['고향별에 도착하면 가장 먼저 무엇을 하고 싶으신가요?'],
    answer: [
      '궁금한것 투성이! 우선 주변을 둘러보자!',
      '고향별에서 새로운 친구를 사귈래!',
      '일단 방에서 쉬면서 생각하자!',
      '지구별에 남은 친구에게 편지쓰기',
    ],
    character: 'lumy',
    color: 'green',
  },
];
