import { GOAL_MAPPING, I_CHARACTER_QUESTION } from '@/constants/question';
import type { CharacterColorType, CharacterType } from '@/types/character';
import type { AnswerHistoryType } from '@/types/question';

type PropensityType = 'E' | 'I';

const getScore = (answers: AnswerHistoryType[]): number => {
  const score = answers.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0);

  return score;
};

const getCharacterColor = (
  score: number,
  propensity: PropensityType,
): CharacterColorType => {
  if (score >= 13 && score <= 16) {
    return 'yellow';
  } else if (score >= 17 && score <= 23) {
    return 'green';
  } else if (score >= 24 && score <= 33) {
    return 'purple';
  }

  return propensity === 'E' ? 'chee' : 'da';
};

const getCharacter = (
  score: number,
  propensity: PropensityType,
): CharacterType => {
  if (score < 13 || score > 33) {
    return 'cat';
  }

  return propensity == 'I' ? 'lumy' : 'lanny';
};

const getPropensity = (targetAnswer: AnswerHistoryType): PropensityType => {
  if (I_CHARACTER_QUESTION.includes(targetAnswer.label)) {
    // 루니형(내향형 행성으로)
    return 'I';
  }
  // 래니형(외향형 행성으로)
  return 'E';
};

const getResult = (answers: AnswerHistoryType[]) => {
  const score = getScore(answers);

  const propensity = getPropensity(answers[answers.length - 1]);

  const characterColor = getCharacterColor(score, propensity);
  const character = getCharacter(score, propensity);
  const goal =
    GOAL_MAPPING[answers.filter((answer) => answer.id === '8')[0].label];
  const whatILike = answers.filter((answer) => answer.id === '6')[0].label;

  return { color: characterColor, char: character, whatILike, goal };
};

export default getResult;
