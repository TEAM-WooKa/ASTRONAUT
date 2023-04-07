import type { CharacterColorType, CharacterType } from '@/types/character';

export const getCharacterImageSize = (
  character: string,
): {
  width: number;
  height: number;
} => {
  switch (character) {
    case 'lumy':
      return {
        width: 258,
        height: 191,
      };
    case 'lanny':
      return {
        width: 269,
        height: 191,
      };
    case 'cat': //TODO :크기 맞는지 확인
      return {
        width: 167,
        height: 191,
      };
    default:
      return {
        width: 258,
        height: 191,
      };
  }
};

export const mappingColorValue = {
  '1': 'blue',
  '2': 'purple',
  '3': 'yellow',
  blue: '1',
  purple: '2',
  yellow: '3',
};

export const getColorLumiUrl = (value: string) => {
  if (value === mappingColorValue['blue']) return '/character/green_lumy.webp';
  if (value === mappingColorValue['purple'])
    return '/character/purple_lumy.webp';
  if (value === mappingColorValue['yellow'])
    return '/character/yellow_lumy.webp';
  return '/character/yellow_lumy.webp';
};

function capitalize(str: string) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getCharacterImageUrl = ({
  color,
  char,
}: {
  color: CharacterColorType;
  char: CharacterType;
}) => {
  const data = {
    name: `${capitalize(color)}_${capitalize(char)}`,
    image: `/character/${color}_${char}.webp`,
  };
  return data;
};
