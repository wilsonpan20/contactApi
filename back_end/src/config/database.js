module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "secret",
  database: "contact-api",
  define: {
    timestamp: true,
    underscored: true,
    undescoredAll: true,
  },
};
