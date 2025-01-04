const { createLogger, format, transports } = require("winston");

// Create the logger
const logger = createLogger({
    level: "info", // Set default log level
    format: format.combine(
        // Custom timestamp
        format.timestamp({
            format: () => {
                const date = new Date();
                const hours = String(date.getHours()).padStart(2, "0");
                const minutes = String(date.getMinutes()).padStart(2, "0");
                const seconds = String(date.getSeconds()).padStart(2, "0");
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            },
        }),
        // Custom log format
        format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new transports.Console(), // Log to the console
        new transports.File({ filename: "logs/app.log" }) // Log to a file
    ],
});

module.exports = logger;
