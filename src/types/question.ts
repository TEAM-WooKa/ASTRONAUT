export interface AnswerType {
  label: string;
  score: number;
  nextQuestionId?: string;
}

export type ButtonType = 'button-4' | 'button-2' | 'long-4';
export type CharacterType = 'lanny' | 'lumy' | 'cat';
export type CharacterColorType = 'green' | 'yellow' | 'purple' | 'chee' | 'da';

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

  answers: {
    color: 'green' | 'yellow' | 'purple';
    score: number;
  }[];
}

export type QuestionInfoType =
  | TwoChoiceQuestionType
  | FourChoiceQuestionType
  | ColorQuestionInfoType;
