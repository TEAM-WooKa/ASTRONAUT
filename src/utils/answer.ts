// color 폴더가 필요할까?, type 폴더도 필요할지 고민중
export type CharacterColorType = 'blue' | 'purple' | 'yellow';
export type CharacterType = 'lumi';
export type CharacterReturnType = {
  name: string;
  image: string;
};

export const mappingColorValue = {
  '1': 'blue',
  '2': 'purple',
  '3': 'yellow',
  blue: '1',
  purple: '2',
  yellow: '3',
};

export const getColorImageUrl = (value: string) => {
  if (value === mappingColorValue['blue']) return '/characters/blue_lumy.png';
  if (value === mappingColorValue['purple'])
    return '/characters/purple_lumy.png';
  if (value === mappingColorValue['yellow'])
    return '/characters/yellow_lumy.png';
  return '/characters/lumi.png';
};

export const calcCharacter = ({
  color,
  char,
}: {
  color: CharacterColorType;
  char: CharacterType;
}) => {
  // TODO : 캐릭터 색상에 따라서 다른 이미지를 보여줘야함
  const data = {
    name: `${capitalize(color)}_${capitalize(char)}`,
    image: `/characters/${color}_${char}.png`,
  };
  return data;
};

function capitalize(str: string) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
