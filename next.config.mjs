/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
process.env.I18NEXT_DEFAULT_CONFIG_PATH = "./next-i18next.config.mjs";
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

import i18nConfig from "./next-i18next.config.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: i18nConfig.i18n,
};

export default config;
