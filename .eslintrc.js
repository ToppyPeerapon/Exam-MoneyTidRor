module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: '@react-native-community',
  rules: {
    semi: ['error', 'never'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'react/prop-types': 0,
  },
}
