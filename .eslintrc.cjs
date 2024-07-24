module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    '@typescript-eslint/no-unused-vars': 'warn', // 使われていない変数を警告
    '@typescript-eslint/array-type': 'error', // 配列の型指定をArrayから[]にする, 例: Array<string> -> string[]
    '@typescript-eslint/ban-tslint-comment': 'warn', // tslint:disable-lineを使った場合に警告
    '@typescript-eslint/class-literal-property-style': 'error', // クラスのプロパティの定義方法を統一する
    '@typescript-eslint/consistent-generic-constructors': 'error', // ジェネリックコンストラクタの統一
    '@typescript-eslint/consistent-indexed-object-style': 'error', // 辞書型の定義方法を統一する, 例: { [key: string]: string } -> Record<string, string>
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['StrictPascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
    ],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }], // コンポーネントの定義は名前付き関数宣言で行う
    'react/destructuring-assignment': 'error', // propsの分割代入を強制する
    'react/jsx-fragments': ['error', 'syntax'], // JSXでフラグメントを使う場合は<></>を使う
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // JSXの中に不要な{}を使わない
    // 'react/jsx-curly-newline': ['error', { multiline: 'require', singleline: 'forbid' }], // JSXの中の{}を使う際、複数行の場合にのみ、改行を入れる //TODO-Nyan: prettierと競合するので無効化している
    'react/jsx-max-depth': ['error', { max: 4 }], // JSXのネストの深さを制限する
    'react/jsx-sort-props': [
      'error',
      { callbacksLast: true, shorthandFirst: true, ignoreCase: true, reservedFirst: true },
    ], // JSXのpropsをソートする
    'react/self-closing-comp': 'error', // childrenがない場合は自己終了タグを使う
    'react/jsx-pascal-case': 'error', // コンポーネント名はパスカルケースにする

    // importのルール
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
    'import/no-default-export': 'error', // default exportを禁止する
  },
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: null,
          },
        ],
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
