"use client";



// Define the types for the stored item
export type StoredItem = string | number | object | null | boolean;

// Store an item in local storage
export const setLocalStorageItem = (key: string, value: StoredItem): void => {
  if (typeof window !== 'undefined') {

    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Retrieve an item from local storage
export const getLocalStorageItem = <T extends StoredItem>(
  key: string
): T | null => {

  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item) as T;
      } catch (error) {
        console.error("Error parsing local storage item:", error);
        return null;
      }
    }
  }

  return null;
};


// Remove an item from local storage
export const removeLocalStorageItem = (key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};