
const dotenv = require('dotenv');

process.chdir(__dirname);

dotenv.config();

let sails;
let rc;

try {
  sails = require('sails');
  rc = require('sails/accessible/rc');
} catch (error) {
  console.error("Encountered an error when attempting to require('sails'):");
  console.error(error.stack);
  console.error('--');
  console.error('To run an app using `node app.js`, you need to have Sails installed');
  console.error("locally (`./node_modules/sails`).  To do that, just make sure you're");
  console.error('in the same directory as your app and run `npm install`.');
  console.error();
  console.error('If Sails is installed globally (i.e. `npm install -g sails`) you can');
  console.error('also run this app with `sails lift`.  Running with `sails lift` will');
  console.error('not run this file (`app.js`), but it will do exactly the same thing.');
  console.error("(It even uses your app directory's local Sails install, if possible.)");

  process.exit(1);
}

sails.lift(rc('sails'));
