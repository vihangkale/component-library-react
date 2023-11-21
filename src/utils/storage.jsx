export const getLocalStorage = (key) => {
  const getStorage = localStorage.getItem(key);
  return getStorage ? JSON.parse(getStorage) : null;
};
export const setLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
