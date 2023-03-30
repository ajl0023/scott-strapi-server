const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename:
        env("NODE_ENV") === "production"
          ? path.join(
              __dirname,
              "..",
              "..",
              "..",

              "storage",
              env("DATABASE_FILENAME", "data.db")
            )
          : path.join(
              __dirname,
              "..",
              env("DATABASE_FILENAME", ".tmp/data.db")
            ),
    },
    useNullAsDefault: true,
  },
});
