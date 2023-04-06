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
