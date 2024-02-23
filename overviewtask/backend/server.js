const app = require("./app");

// connectDatabase();

const server = app.listen(3002, () => {
  console.log(`Server is running on port: ${3002}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
