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
    type: 'button-2',
    question: [
      '우주에 인간 외에 ',
      '다른 지적 생명체가 존재한다고 생각하시나요?',
    ],
  },
  {
    id: 4,
    type: 'button-4',
    question: [
      '애완 동물을 기르시나요? ',
      '혹은 길렀던/기르고 싶은 동물이 있나요? ',
    ],
    answer: ['고양이', '강아지', '새', '없음'],
  },
  {
    id: 3,
    type: 'color',
    question: [
      '좋아하는 색상을 알려주세요! ',
      '(별을 슬라이드하여 색을 선택할 수 있습니다.)',
    ],
  },

  {
    id: 5,
    type: 'button-2',
    question: [
      '우주에 인간 외에 ',
      '다른 지적 생명체가 존재한다고 생각하시나요?',
    ],
  },
  {
    id: 6,
    type: 'color',
    question: [
      '좋아하는 색상을 알려주세요! ',
      '(별을 슬라이드하여 색을 선택할 수 있습니다.)',
    ],
  },
  {
    id: 7,
    type: 'button-4',
    question: [
      '애완 동물을 기르시나요? ',
      '혹은 길렀던/기르고 싶은 동물이 있나요? ',
    ],
    answer: ['고양이', '강아지', '새', '없음'],
  },
  {
    id: 8,
    type: 'button-2',
    question: [
      '우주에 인간 외에 ',
      '다른 지적 생명체가 존재한다고 생각하시나요?',
    ],
  },
  {
    id: 9,
    type: 'color',
    question: [
      '좋아하는 색상을 알려주세요!',
      '(별을 슬라이드하여 색을 선택할 수 있습니다.)',
    ],
  },
  {
    id: 10,
    type: 'button-2',
    question: [
      '우주에 인간 외에 ',
      '다른 지적 생명체가 존재한다고 생각하시나요?',
    ],
  },
];
