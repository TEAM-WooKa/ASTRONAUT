export const getStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);

    return data;
  }
  return null;
};

export const setStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
    return true;
  }
  return false;
};
