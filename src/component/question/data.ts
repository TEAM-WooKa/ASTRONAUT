export interface QuestionType {
  id: number;
  type: 'button-2' | 'color' | 'button-4';
  question: string[];
  answer?: string[];
}
export const QUESTION_DATA: QuestionType[] = [
  {
    id: 1,
    type: 'button-2',
    question: [
      '우주에 인간 외에 ',
      '다른 지적 생명체가 존재한다고 생각하시나요?',
    ],
  },
  {
    id: 2,
    type: 'color',
    question: [
      '좋아하는 색상을 알려주세요! ',
      '(별을 슬라이드하여 색을 선택할 수 있습니다.)',
    ],
  },
  {
    id: 3,
    type: 'button-4',
    question: ['당신이 제일 좋아하는 것을 알려주세요!'],
    answer: ['음악감상', '사진촬영', '운동하기', '게임하기'],
  },
  {
    id: 4,
    type: 'button-4',
    question: [
      '애완 동물을 기르시나요? ',
      '혹은 길렀던/기르고 싶은 동물이 있나요?',
    ],
    answer: ['고양이', '강아지', '새', '없음'],
  },

  {
    id: 5,
    type: 'button-4',
    question: ['지구별에서 이루고 싶은 목표를 알려주세요! '],
    answer: ['지구별 정복', '지구별 대스타', '우주 노벨 과학상', '없음'],
  },
  {
    id: 6,
    type: 'button-4',
    question: [
      '언젠가 지구별을 떠나 우주로 향하는 우주선에 탑승하게 된다면 어떤 생각을 할까요?',
    ],
    answer: ['지구야 잘있어!', '드디어!', '아직이야ㅠㅠ', '없음'],
  },
  {
    id: 7,
    type: 'button-2',
    question: [
      '우주에 인간 외에 ',
      '다른 지적 생명체가 존재한다고 생각하시나요?',
    ],
  },
  {
    id: 8,
    type: 'button-4',
    question: ['당신이 가장 좋아하는 음악 장르는 무엇인가요?'],
    answer: ['K-POP', 'POP', '힙합', '락'],
  },
  {
    id: 9,
    type: 'button-4',
    question: ['2년간의 우주 여행에 ', '들고 갈것 하나를 골라주세요! '],
    answer: ['소설책', '음반', '카메라', '없음'],
  },
  {
    id: 10,
    type: 'button-4',
    question: ['집단에서 선호하는 포지션은 무엇인가요?'],
    answer: ['리더', '보조자', '일반 회원', '유령 회원'],
  },
];
