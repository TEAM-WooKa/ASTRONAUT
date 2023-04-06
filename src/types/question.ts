export interface AnswerType {
  label: string;
  score: number;
  nextQuestionId?: string;
}

export type ButtonType = 'button-4' | 'button-2' | 'long-4';
export type CharacterType = 'lanny' | 'lumy' | 'cat';
export type CharacterColorType = 'green' | 'yellow' | 'purple' | 'chee' | 'da';

export type QuestionType =
  | 'two-choice'
  | 'four-choice'
  | 'four-sentence'
  | 'color';

interface BaseQuestionType {
  id: string;
  nextQuestionId: string;
  content: string[];

  character: CharacterType;
  color: CharacterColorType;
}

export interface TwoChoiceQuestionType extends BaseQuestionType {
  type: 'two-choice';
  answers: [AnswerType, AnswerType];
}

export interface FourChoiceQuestionType extends BaseQuestionType {
  type: 'four-choice' | 'four-sentence';
  answers: [AnswerType, AnswerType, AnswerType, AnswerType];
}

export interface ColorQuestionInfoType {
  id: string;
  nextQuestionId: string;
  type: 'color';
  content: string[];

  answers: AnswerType[];
}

export type QuestionInfoType =
  | TwoChoiceQuestionType
  | FourChoiceQuestionType
  | ColorQuestionInfoType;

export interface AnswerRequestType {
  answers: AnswerType[];
  onAnswerClick: (answer: AnswerType) => void;
}

export type AnswerListType =
  | [AnswerType, AnswerType, AnswerType, AnswerType]
  | [AnswerType, AnswerType]
  | AnswerType[];

export interface AnswerHistoryType extends AnswerType {
  id: string;
}
