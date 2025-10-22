module.exports = {
  default: '--require "features/step_definitions/module*.steps.js" --require features/support/*.js --retry 2 --retryTagFilter @retry'
};
