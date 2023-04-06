import type { ColorQuestionInfoType, QuestionInfoType } from '@/types/question';

export const ColorQuestionInfo: ColorQuestionInfoType = {
  id: '3',
  type: 'color',
  nextQuestionId: '4',
  content: [
    '우주선 밖으로 행성이 보이네요! ',
    '무슨 색인가요?',
    '(별을 슬라이드하여 색을 선택할 수 있습니다.)',
  ],
  answers: [
    {
      label: 'purple',
      score: 4,
    },
    {
      label: 'green',
      score: 2,
    },
    {
      label: 'yellow',
      score: 1,
    },
  ],
};

export const QUESTION_INFO_LIST: Record<string, QuestionInfoType> = {
  1: {
    id: '1',
    nextQuestionId: '2',
    type: 'four-choice',
    content: [
      '고향별로 가는 우주선에 탑승하기 위해서는 ',
      '지구별의 물건 중 단 하나만 가져갈 수 있어요! ',
      '어떤 것을 가져가시겠어요?',
    ],
    answers: [
      {
        label: '다이어리',
        score: 1,
        nextQuestionId: '2-1',
      },
      {
        label: '좋아하는 책',
        score: 2,
        nextQuestionId: '2-2',
      },
      {
        label: '꽃이 담긴 화분',
        score: 3,
        nextQuestionId: '2-3',
      },
      {
        label: '카메라',
        score: 4,
        nextQuestionId: '2-4',
      },
    ],
    character: 'lanny',
    color: 'green',
  },
  '2-1': {
    id: '2-1',
    nextQuestionId: '3',
    type: 'four-choice',
    content: ['다이어리에 어떤 내용을 기록하나요?'],
    answers: [
      {
        label: '일상',
        score: 1,
      },
      {
        label: '다짐',
        score: 2,
      },
      {
        label: '행복한 기억',
        score: 3,
      },
      {
        label: '중요한 약속',
        score: 4,
      },
    ],
    character: 'lanny',
    color: 'yellow',
  },
  '2-2': {
    id: '2-2',
    type: 'four-choice',
    nextQuestionId: '3',
    content: ['어떤 장르의 책을 가져가고 싶나요?'],
    answers: [
      {
        label: '소설',
        score: 1,
      },
      {
        label: '과학책',
        score: 2,
      },
      {
        label: '미술책',
        score: 3,
      },
      {
        label: '전공책',
        score: 4,
      },
    ],
    character: 'lanny',
    color: 'purple',
  },
  '2-3': {
    id: '2-3',
    type: 'four-choice',
    nextQuestionId: '3',
    content: ['그 꽃은 어떤 꽃인가요?'],
    answers: [
      {
        label: '장미',
        score: 1,
      },
      {
        label: '허브',
        score: 2,
      },
      {
        label: '수국',
        score: 3,
      },
      {
        label: '이름모를 꽃',
        score: 4,
      },
    ],
    character: 'lanny',
    color: 'green',
  },
  '2-4': {
    id: '2-4',
    type: 'four-choice',
    nextQuestionId: '3',
    content: ['카메라로 어떤 것을 찍고 싶으세요?'],
    answers: [
      {
        label: '인물',
        score: 1,
      },
      {
        label: '풍경',
        score: 2,
      },
      {
        label: '정물',
        score: 3,
      },
      {
        label: '음식',
        score: 4,
      },
    ],
    character: 'lanny',
    color: 'yellow',
  },
  3: ColorQuestionInfo,
  4: {
    id: '4',
    nextQuestionId: '5',
    type: 'two-choice',
    content: [
      '우주인님은 우주에 인간을 제외한 ',
      '지적 생명체가 있다고 생각하시나요?',
    ],
    answers: [
      {
        label: 'YES',
        score: 1,
        nextQuestionId: '5-1',
      },
      {
        label: 'NO',
        score: 4,
        nextQuestionId: '5-2',
      },
    ],
    character: 'lanny',
    color: 'yellow',
  },
  '5-1': {
    id: '5-1',
    nextQuestionId: '6',
    type: 'four-sentence',
    content: ['그 지적 생명체는 어떤 모습일까요?'],
    answers: [
      {
        label: '인간의 모습을 닮았나?!',
        score: 1,
      },
      {
        label: '동물의 모습같아! ',
        score: 2,
      },
      {
        label: '한번도 본 적 없는 외형이야!',
        score: 3,
      },
      {
        label: '엄청 무섭게 생겼어!',
        score: 4,
      },
    ],
    character: 'cat',
    color: 'da',
  },
  '5-2': {
    id: '5-2',
    nextQuestionId: '6',
    type: 'four-choice',
    content: ['그렇다면 좋아하는 영화 장르를 알려주세요!'],
    answers: [
      {
        label: 'SF영화',

        score: 1,
      },
      {
        label: '로맨스',
        score: 2,
      },
      {
        label: '액션',
        score: 3,
      },
      {
        label: '코미디',
        score: 4,
      },
    ],
    character: 'lanny',
    color: 'purple',
  },

  6: {
    id: '6',
    nextQuestionId: '7',
    type: 'four-choice',
    content: ['우주인님이 제일 좋아하는 것을 알려주세요!'],
    answers: [
      {
        label: '음악감상',
        score: 1,
      },
      {
        label: '사진촬영',
        score: 2,
      },
      {
        label: '운동하기',
        score: 3,
      },
      {
        label: '게임하기',
        score: 4,
      },
    ],
    character: 'lumy',
    color: 'green',
  },
  7: {
    id: '7',
    type: 'four-choice',
    nextQuestionId: '8',

    content: [
      '지구별에서 애완 동물을 기르시나요?',
      '혹은 길렀던/기르고 싶은 동물이 있나요?',
    ],
    answers: [
      {
        label: '고양이',
        score: 1,
      },
      {
        label: '강아지',
        score: 2,
      },
      {
        label: '새',
        score: 3,
      },
      {
        label: '없음',
        score: 4,
      },
    ],
    character: 'cat',
    color: 'chee',
  },

  8: {
    id: '8',
    nextQuestionId: '9',
    type: 'four-sentence',
    content: ['지구별에서 이루고 싶은 목표를 알려주세요! '],
    answers: [
      {
        label: '지구별 정복하고야 말겠어!',
        score: 1,
      },
      {
        label: '빌보드 차트 1위! 지구별 대스타! ',
        score: 2,
      },
      {
        label: '지구별 방위대가 되어 지구를 지켜야지!',
        score: 3,
      },
      {
        label: '지구별의 비밀 밝히기!',
        score: 4,
      },
    ],
    character: 'lumy',
    color: 'yellow',
  },
  9: {
    id: '9',
    type: 'four-choice',
    nextQuestionId: '10',

    content: ['당신이 가장 좋아하는 음악 장르는 무엇인가요?'],
    answers: [
      {
        label: 'K-POP',
        score: 1,
      },
      {
        label: 'POP',
        score: 2,
      },
      {
        label: '힙합',
        score: 3,
      },
      {
        label: '락',
        score: 4,
      },
    ],
    character: 'lumy',
    color: 'purple',
  },
  10: {
    id: '10',
    type: 'four-sentence',
    nextQuestionId: 'end',
    content: ['고향별에 도착하면 가장 먼저 무엇을 하고 싶으신가요?'],
    answers: [
      {
        label: '궁금한것 투성이! 우선 주변을 둘러보자!',
        score: 1,
      },
      {
        label: '고향별에서 새로운 친구를 사귈래!',
        score: 2,
      },

      {
        label: '일단 방에서 쉬면서 생각하자!',
        score: 3,
      },
      {
        label: '지구별에 남은 친구에게 편지쓰기',
        score: 4,
      },
    ],
    character: 'lumy',
    color: 'green',
  },
};
