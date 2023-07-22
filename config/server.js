module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url:
    env("NODE_ENV") === "production"
      ? "https://joylftv7m17ps8x37052.cleaver.live"
      : "",
});
