/**
 * Local storage store name, this is prefixed to all async store keys.
 * @var string
 */
export const STORE_NAME = "@MY_THERAPIST_BIOS";

/**
 * List of available async store keys
 */

export const STORE_KEYS = {
  IS_AUTHENTICATED: STORE_NAME + "@IS_AUTHENTICATED",
  ROLE: STORE_NAME + "@ROLE",
  USER: STORE_NAME + "@USER",
  TOKEN: STORE_NAME + "@TOKEN",
  THEME: STORE_NAME + "@THEME",
};
