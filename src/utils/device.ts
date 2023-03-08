export function Mobile() {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

export const checkKakao = () => {
  if (typeof window === 'undefined') return false;
  console.log('window.navigator.userAgent: ', window.navigator.userAgent);
  if (/KAKAOTALK/i.test(window.navigator.userAgent)) {
    // Open the link in a new window
    // alert('카카오톡에서는 다운로드가 지원되지 않습니다.');
    // window.open(router.asPath, '_blank');
    return true;
  } else {
    // Open the link in the current window
    // router.push(router.asPath);
    return false;
  }
};

export const checkSafari = () => {
  if (typeof window === 'undefined') return false;
  return /Safari/i.test(window.navigator.userAgent);
};

export const checkChrome = () => {
  if (typeof window === 'undefined') return false;
  return /Chrome/i.test(window.navigator.userAgent);
};
