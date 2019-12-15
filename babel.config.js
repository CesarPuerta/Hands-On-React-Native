module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          home: './app/modules/home',
          store: './app/store'
        }
      }
    ]
  ]
};
