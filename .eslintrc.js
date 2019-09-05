/**
 * @file Manages the root configuration settings for project wide eslint.
 * @copyright Copyright (c) 2017-present, ProReNata AB
 * @module eslint/root/configuration
 * @see {@link https://eslint.org} for further information.
 */

// const isProduction = process.env.NODE_ENV === 'production';

/**
 * Eslint rules that differ from airbnb base.
 *
 * @see {@link https://eslint.org/docs/rules/|rules}
 */
const eslintAgreed = {
  camelcase: ['error', {properties: 'never'}], // because Eketorp's property names are camel_case
  complexity: 'off',
  'max-lines-per-function': 'off',
  'max-params': 'off',
};

/**
 * Additional ESLint rules for ESLint's directive-comments.
 *
 * @see {@link https://github.com/mysticatea/eslint-plugin-eslint-comments|plugin}
 */
const eslintComments = {};

/**
 * Switch-case-specific linting rules for ESLint.
 *
 * @see {@link https://github.com/lukeapage/eslint-plugin-switch-case|plugin}
 */
const eslintSwitchCase = {};

/**
 * An ESlint rule plugin companion to babel-eslint.
 *
 * @see {@link https://github.com/babel/eslint-plugin-babel|plugin}
 */
const classProperty = {
  'babel/camelcase': ['error', {properties: 'never'}], // because Eketorp's property names are camel_case
};

/**
 * Lint the browser compatibility of your code.
 * Good to know during development so we make sure that we have all polyfill and transforms.
 *
 * @see {@link https://github.com/amilajack/eslint-plugin-compat|plugin}
 */
const compat = {};

/**
 * Helps you in tracking down problems when you are using css-modules.
 *
 * @see {@link https://github.com/atfzl/eslint-plugin-css-modules|plugin}
 */
const cssModules = {};

/**
 * ESLint plugin to prevent use of extended native objects.
 *
 * @see {@link https://github.com/dustinspecker/eslint-plugin-no-use-extend-native|plugin}
 */
const extendNative = {};

/**
 * ESLint plugin with rules that help validate proper imports.
 *
 * @see {@link https://github.com/benmosher/eslint-plugin-import|plugin}
 */
const importExport = {};

/**
 * ESLint plugin for Jest.
 *
 * @see {@link https://github.com/jest-community/eslint-plugin-jest|plugin}
 */
const jest = {};

/**
 * JSDoc specific linting rules for ESLint.
 *
 * @see {@link https://github.com/gajus/eslint-plugin-jsdoc|plugin}
 */
const jsdoc = {};

/**
 * ESLint rules for lodash.
 *
 * @see {@link https://github.com/wix/eslint-plugin-lodash|plugin}
 */
const lodash = {};

/**
 * ESLint rule for suggesting that object spread properties be used.
 *
 * @see {@link https://github.com/bryanrsmith/eslint-plugin-prefer-object-spread|plugin}
 */
const objectSpread = {};

/**
 * ESLint rule for prettier.
 *
 * @see {@link https://prettier.io/docs/en/eslint.html|plugin}
 */
const prettier = {};

const promise = {};

/**
 * An ESLint rule for enforcing consistent ES6 class member order.
 *
 * @see {@link https://github.com/bryanrsmith/eslint-plugin-sort-class-members|plugin}
 */
const sortClass = {};

/**
 * Official ESLint plugin for Vuejs.
 *
 * @see {@link https://github.com/vuejs/eslint-plugin-vue|plugin}
 */
const vue = {
  'vue/camelcase': ['error', {properties: 'never'}],
  'vue/v-bind-style': ['error', 'shorthand'],
  'vue/no-spaces-around-equal-signs-in-attribute': 'error',
  'vue/singleline-html-element-content-newline': [
    'error',
    {
      ignoreWhenNoAttributes: true,
    },
  ],
  'vue/order-in-components': 'error',
  'vue/multiline-html-element-content-newline': 'error',
  'vue/html-closing-bracket-newline': ['error', {multiline: 'always'}],
  'vue/html-closing-bracket-spacing': 'error',
  'vue/prop-name-casing': 'error',
  'vue/script-indent': 'off', // off because of false positives currently
  'vue/html-self-closing': [
    'error',
    {
      html: {
        component: 'never',
        normal: 'never',
        void: 'never',
      },
      math: 'never',
      svg: 'never',
    },
  ],
  'vue/array-bracket-spacing': 'error',
  'vue/block-spacing': 'error',
  'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  'vue/arrow-spacing': ['error', {after: true, before: true}],
  'vue/brace-style': [
    'off',
    '1tbs',
    {
      allowSingleLine: true,
    },
  ],
  'vue/eqeqeq': [
    'error',
    'always',
    {
      null: 'ignore',
    },
  ],
  'vue/no-restricted-syntax': [
    'error',
    {
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      selector: 'ForInStatement',
    },
    {
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      selector: 'ForOfStatement',
    },
    {
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      selector: 'LabeledStatement',
    },
    {
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      selector: 'WithStatement',
    },
  ],
  'vue/space-unary-ops': [
    'off',
    {
      nonwords: false,
      overrides: {},
      words: true,
    },
  ],
  'vue/comma-dangle': [
    'off',
    {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      imports: 'always-multiline',
      objects: 'always-multiline',
    },
  ],
  'vue/key-spacing': [
    'off',
    {
      afterColon: true,
      beforeColon: false,
    },
  ],
  'vue/object-curly-spacing': ['off', 'always'],
  'vue/space-infix-ops': 'off',
  'vue/no-boolean-default': 'off',
  'vue/v-on-function-call': 'off',
  // 'vue/match-component-file-name': [
  //   'error',
  //   {
  //     extensions: ['vue', 'js', 'jsx'],
  //     shouldMatchCase: true,
  //   },
  // ],
  'vue/match-component-file-name': 'off',
  'vue/require-direct-export': 'off',
};

/** Configuration. */
module.exports = {
  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-environments|env}
   */
  env: {},

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#extending-configuration-files|extends}
   */
  extends: ['@xotic750/eslint-config-recommended', 'plugin:vue/recommended'],

  /**
   * You can define global variables here.
   *
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-globals|globals}
   */
  globals: {},

  /**
   * Sometimes a more fine-controlled configuration is necessary, for example if the configuration
   * for files within the same directory has to be different.
   *
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns|overrides}
   */
  overrides: [
    {
      files: ['DevTools/**/*.js', '__tests__/**/*.vue'],
      rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
        'no-console': 'off',
        'no-debugger': 'off',
        'lodash/prefer-is-nil': 'off',
        'lodash/prefer-noop': 'off',
        'func-names': 'off',
        'no-new-func': 'off',
        'promise/avoid-new': 'off',
        'no-restricted-globals': 'off',
      },
    },
    {
      files: ['store.js', 'utils.js'],
      rules: {
        'no-param-reassign': [
          'warn',
          {
            ignorePropertyModificationsFor: ['state'],
          },
        ],
      },
    },
  ],

  /**
   * @see {@link https://github.com/mysticatea/vue-eslint-parser|parser}
   */
  parser: 'vue-eslint-parser',

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options|parserOptions}
   */
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2019,
    parser: 'babel-eslint', // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
    sourceType: 'module',
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-plugins|plugins}
   */
  plugins: [
    'babel',
    'compat',
    'css-modules',
    'eslint-comments',
    'html',
    'jest',
    'jsdoc',
    'json',
    'lodash',
    'no-use-extend-native',
    'prefer-object-spread',
    'prettier',
    'promise',
    'sort-class-members',
    'switch-case',
    'vue',
  ],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy|root}
   */
  root: false,

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-rules|rules
   */
  rules: {
    ...objectSpread,
    ...eslintSwitchCase,
    ...importExport,
    ...promise,
    ...classProperty,
    ...eslintAgreed,
    ...compat,
    ...extendNative,
    ...eslintComments,
    ...vue,
    ...lodash,
    ...prettier,
    ...cssModules,
    ...jsdoc,
    ...jest,
    ...sortClass,
  },

  /**
   * Webpack-literate module resolution plugin for eslint-plugin-import.
   *
   * @see {@link https://www.npmjs.com/package/eslint-import-resolver-webpack|plugin}
   */
  settings: {},
};
