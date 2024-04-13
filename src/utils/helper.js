export const url = process.env.REACT_APP_API_ENDPOINT || "";

//GET LOCAL STORAGE ITEM
export const getLocalStorageItem = (key) => localStorage.getItem(key);

//SET VALUE TO LOCAL STORAGE
export const setLocalStorageItem = (key, value) =>
  localStorage.setItem(key, value);

//REMOVE ITEM FROM LOCALSTORAGE
export const removeLocalStorageItem = (key) => localStorage.removeItem(key);

export const getDefaultState = (keyName) => {
  const storedValue = localStorage.getItem(keyName);
  if (storedValue !== null && storedValue !== undefined) {
    try {
      const value = JSON.parse(storedValue);
      return value;
    } catch (error) {
      return storedValue;
    }
  } else {
    console.error("Value is undefined or null in localStorage");
    return null;
  }
};