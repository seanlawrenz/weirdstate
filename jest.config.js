module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  transformIgnorePatterns: ['/node_modules'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
  },
  testPathIgnorePatterns: ['node_modules', '<rootDir>/src/test.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: ['<rootDir>/node_modules/jest-preset-angular/InlineHtmlStripStylesTransformer'],
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    'config.service.ts',
    'browser-notification.service.ts',
    '<rootDir>/src/app/store/actions',
    '<rootDir>/src/app/backlog/state/actions',
    '<rootDir>/src/app/card-details/state/actions',
    '<rootDir>/src/app/cardwall/state/actions',
    'backlog-settings.effects.ts',
  ],
};
