/**
 * @file Manages the root configuration settings for project wide eslint.
 * @copyright Copyright (c) 2017-present, ProReNata AB
 * @module eslint/root/configuration
 * @see {@link https://eslint.org} for further information.
 */

/**
 * Eslint rules that differ from airbnb base.
 * @see {@link https://eslint.org/docs/rules/|rules}
 */
const eslintAgreed = {
  camelcase: ['error', {properties: 'never'}], // because Eketorps property names are camel_case
  curly: ['error', 'all'],
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: ['block', 'block-like', 'cjs-export', 'class', 'export', 'import'],
      next: '*',
    },
    {blankLine: 'any', prev: 'import', next: 'import'},
    {blankLine: 'any', prev: 'export', next: 'export'},
    {blankLine: 'always', prev: 'import', next: 'export'},
    {blankLine: 'always', prev: 'export', next: 'import'},
    {blankLine: 'always', prev: '*', next: 'return'},
    {blankLine: 'always', prev: '*', next: 'if'},
  ],
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
};

/**
 * Additional ESLint rules for ESLint's directive-comments.
 * @see {@link https://github.com/mysticatea/eslint-plugin-eslint-comments|plugin}
 */
const eslintComments = {
  'eslint-comments/disable-enable-pair': 'error',
  'eslint-comments/no-aggregating-enable': 'error',
  'eslint-comments/no-duplicate-disable': 'error',
  'eslint-comments/no-unlimited-disable': 'error',
  'eslint-comments/no-unused-disable': 'error',
  'eslint-comments/no-unused-enable': 'error',
  'eslint-comments/no-restricted-disable': 'error',
  'eslint-comments/no-use': 'warn',
};

/**
 * Switch-case-specific linting rules for ESLint.
 * @see {@link https://github.com/lukeapage/eslint-plugin-switch-case|plugin}
 */
const eslintSwitchCase = {
  'switch-case/no-case-curly': 'error',
  'switch-case/newline-between-switch-case': ['error', 'always', {fallthrough: 'never'}],
};

/**
 * An ESlint rule plugin companion to babel-eslint.
 * @see {@link https://github.com/babel/eslint-plugin-babel|plugin}
 */
const classProperty = {
  'babel/camelcase': ['error', {properties: 'never'}], // because Eketorps property names are camel_case
  'babel/new-cap': 'error',
  'babel/no-invalid-this': 'error',
  'babel/object-curly-spacing': 'error',
  'babel/quotes': ['error', 'single', {avoidEscape: true}],
  'babel/semi': 'error',
  'babel/no-unused-expressions': 'error',
  'babel/valid-typeof': 'error',
};

/**
 * Lint the browser compatibility of your code.
 * Good to know during development so we make sure that we have all polyfill and transforms.
 * @see {@link https://github.com/amilajack/eslint-plugin-compat|plugin}
 */
const compat = {
  'compat/compat': 'warn',
};

/**
 * Helps you in tracking down problems when you are using css-modules.
 * @see {@link https://github.com/atfzl/eslint-plugin-css-modules|plugin}
 */
const cssModules = {
  'css-modules/no-undef-class': 'warn',
  'css-modules/no-unused-class': 'off',
};

/**
 * ESLint plugin to prevent use of extended native objects.
 * @see {@link https://github.com/dustinspecker/eslint-plugin-no-use-extend-native|plugin}
 */
const extendNative = {
  'no-use-extend-native/no-use-extend-native': 'error',
};

/**
 * ESLint plugin with rules that help validate proper imports.
 * @see {@link https://github.com/benmosher/eslint-plugin-import|plugin}
 */
const importExport = {
  'import/dynamic-import-chunkname': 'error',
  'import/exports-last': 'off',
  'import/group-exports': 'off',
  'import/no-cycle': 'error',
  'import/no-default-export': 'off',
  'import/no-relative-parent-imports': 'off', // off because of false positives currently
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  'import/no-unresolved': 'error',
  'import/no-extraneous-dependencies': 'error',
};

/**
 * ESLint plugin for Jest.
 * @see {@link https://github.com/jest-community/eslint-plugin-jest|plugin}
 */
const jest = {
  'jest/no-alias-methods': 'error',
  'jest/no-test-prefixes': 'error',
  'jest/consistent-test-it': 'error',
  'jest/lowercase-name': 'error',
  'jest/no-disabled-tests': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-hooks': 'error',
  'jest/no-identical-title': 'error',
  'jest/no-jasmine-globals': 'off', // off because of false positives currently
  'jest/no-jest-import': 'error',
  'jest/no-large-snapshots': 'error',
  'jest/no-truthy-falsy': 'error',
  'jest/expect-expect': 'error',
  'jest/no-test-return-statement': 'error',
  'jest/prefer-expect-assertions': 'error',
  'jest/prefer-inline-snapshots': 'off',
  'jest/prefer-strict-equal': 'error',
  'jest/prefer-to-be-null': 'error',
  'jest/prefer-to-be-undefined': 'error',
  'jest/prefer-to-contain': 'error',
  'jest/prefer-to-have-length': 'error',
  'jest/require-tothrow-message': 'error',
  'jest/valid-describe': 'error',
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-expect': 'error',
  'jest/no-test-callback': 'error',
  'jest/prefer-spy-on': 'off',
};

/**
 * JSDoc specific linting rules for ESLint.
 * @see {@link https://github.com/gajus/eslint-plugin-jsdoc|plugin}
 */
const jsdoc = {
  'jsdoc/require-param': 'warn',
  'jsdoc/require-hyphen-before-param-description': 'warn',
  'jsdoc/check-types': 'warn',
  'jsdoc/newline-after-description': 'warn',
  'jsdoc/require-description-complete-sentence': 'warn',
  'jsdoc/require-example': 'off',
  'jsdoc/check-tag-names': 'warn',
  'jsdoc/check-param-names': 'warn',
  'jsdoc/require-description': 'off',
  'jsdoc/require-param-description': 'warn',
  'jsdoc/require-param-type': 'warn',
  'jsdoc/require-returns-description': 'warn',
  'jsdoc/require-returns-type': 'warn',
  'jsdoc/no-undefined-types': 'warn',
  'jsdoc/require-param-name': 'warn',
  'jsdoc/valid-types': 'warn',
};

/**
 * ESLint rules for lodash.
 * @see {@link https://github.com/wix/eslint-plugin-lodash|plugin}
 */
const lodash = {
  'lodash/prefer-get': 'off',
  'lodash/prefer-lodash-typecheck': 'off',
  'lodash/prefer-includes': 'off',
  'lodash/prefer-is-nil': 'warn',
  'lodash/prefer-lodash-chain': 'off',
  'lodash/prefer-lodash-method': 'off',
  'lodash/prefer-constant': 'off',
  'lodash/prefer-matches': 'off',
  'lodash/prefer-noop': 'error',
  'lodash/prefer-over-quantifier': 'off',
  'lodash/prefer-some': 'off',
  'lodash/prefer-startswith': 'off',
  'lodash/prefer-times': 'off',
};

/**
 * ESLint rule for suggesting that object spread properties be used.
 * @see {@link https://github.com/bryanrsmith/eslint-plugin-prefer-object-spread|plugin}
 */
const objectSpread = {
  'prefer-object-spread/prefer-object-spread': 'error',
};

/**
 * ESLint rule for prettier.
 * @see {@link https://prettier.io/docs/en/eslint.html|plugin}
 */
const prettier = {
  'prettier/prettier': 'error',
};

const promise = {
  'promise/prefer-await-to-callbacks': 'off',
  'promise/prefer-await-to-then': 'off',
};

/**
 * An ESLint rule for enforcing consistent ES6 class member order.
 * @see {@link https://github.com/bryanrsmith/eslint-plugin-sort-class-members|plugin}
 */
const sortClass = {
  'sort-class-members/sort-class-members': [
    'error',
    {
      accessorPairPositioning: 'getThenSet',
      order: [
        '[static-properties]',
        '[static-methods]',
        '[properties]',
        '[conventional-private-properties]',
        'constructor',
        '[methods]',
        '[conventional-private-methods]',
      ],
    },
  ],
};

/**
 * Official ESLint plugin for Vue.js
 * @see {@link https://github.com/vuejs/eslint-plugin-vue|plugin}
 */
const vue = {
  'vue/v-bind-style': ['error', 'shorthand'],
  'vue/component-name-in-template-casing': ['error', 'kebab-case'],
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
  'vue/require-prop-type-constructor': 'off', // New rule currently buggy in 5.0.0.beta.3
};

/** configuration */
module.exports = {
  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-environments|env}
   */
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#extending-configuration-files|extends}
   */
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:lodash/recommended',
    'plugin:css-modules/recommended',
    'plugin:vue/recommended',
    'plugin:switch-case/recommended',
  ],

  /**
   * You can define global variables here.
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-globals|globals}
   */
  globals: {
    logger: false,
  },

  /**
   * Sometimes a more fine-controlled configuration is necessary, for example if the configuration
   * for files within the same directory has to be different.
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns|overrides}
   */
  overrides: [
    {
      files: ['DevTools/**/*.js', '__tests__/**/*.{js,vue}', 'postcss.config.js', 'webpack.*.js'],
      rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
        'no-console': 'off',
      },
    },
    {
      files: ['DevTools/**/*.js', '__tests__/**/*.{js,vue}', 'webpack.*.js'],
      rules: {
        'func-names': 'off',
        'no-new-func': 'off',
        'promise/avoid-new': 'off',
      },
    },
    {
      files: ['DevTools/**/*.js', 'webpack.*.js'],
      rules: {
        'no-restricted-globals': 'off',
        strict: 'off',
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
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options|parserOptions}
   */
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2018,
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
    ...jsdoc,
    ...prettier,
    ...eslintAgreed,
    ...eslintSwitchCase,
    ...importExport,
    ...promise,
    ...classProperty,
    ...sortClass,
    ...compat,
    ...extendNative,
    ...eslintComments,
    ...vue,
    ...lodash,
    ...cssModules,
    ...jest,
  },

  /**
   * Webpack-literate module resolution plugin for eslint-plugin-import.
   * @see {@link https://www.npmjs.com/package/eslint-import-resolver-webpack|plugin}
   */
  settings: {
    'html/html-extensions': [
      '.erb',
      '.handlebars',
      '.hbs',
      '.htm',
      '.html',
      '.mustache',
      '.nunjucks',
      '.php',
      '.tag',
      '.twig',
      '.we',
    ],
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
    polyfills: [],
  },
};
