const winston = require('winston');

const defaultLogTimestampFormat = 'YYYY-MM-DD HH:mm:ss';

const logfile = `${process.cwd()}/logs/teamtask.log`;


const logLevel = 'warn'; 

const logFormat = winston.format.combine(
  winston.format.uncolorize(),
  winston.format.timestamp({ format: defaultLogTimestampFormat }),
  winston.format.printf((log) => `${log.timestamp} [${log.level[0].toUpperCase()}] ${log.message}`),
);


const customLogger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      level: logLevel,
      format: logFormat,
      filename: logfile,
    }),
    new winston.transports.Console({
      level: logLevel,
      format: logFormat,
    }),
  ],
});

module.exports = {
  customLogger,
};
