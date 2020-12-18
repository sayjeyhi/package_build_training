import { logger } from "../helpers/index";

/**
 * Will say hello
 * @param {string} name
 */
export const useSayHello = (name) => {
  logger(`Hello, ${name}`);
};
