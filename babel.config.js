module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-worklets-core/plugin', // Use string format
    '@babel/plugin-proposal-optional-chaining', // Use string format
    ['@babel/plugin-proposal-decorators', { legacy: true }], // Array with options object
    'react-native-reanimated/plugin', // Correct string format
  ],
};
