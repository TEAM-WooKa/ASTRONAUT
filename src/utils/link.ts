// 클립보드에 복사하기
export const clip = () => {
  navigator.clipboard.writeText(window.location.href);
};
