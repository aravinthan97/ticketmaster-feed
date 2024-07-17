const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  runner: 'groups',
   ...nxPreset
  };
