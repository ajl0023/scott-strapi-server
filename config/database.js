const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("NODE_ENV") === "development"
          ? env("DATABASE_FILENAME", ".tmp/data.db")
          : "/home/cleavr/0jkx6xkxdj7fwnnc7052.cleaver.live/storage/.tmp/data.db"
      ),
    },
    useNullAsDefault: true,
  },
});
