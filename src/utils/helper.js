import { toast } from "react-toastify";


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

export const notifySuccess = (() => {
  let hasToastBeenShown = false;
  return (message) => {
    if (!hasToastBeenShown) {
      hasToastBeenShown = true;

      const toastId = toast.success(message, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,

        onClose: () => {
          hasToastBeenShown = false; // Reset the flag when the toast is closed.
        },
      });
      return toastId;
    }
  };
})();