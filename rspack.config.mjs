import { defineConfig } from '@rspack/cli';

export default defineConfig({
  entry: {
    main: './src/main.js',
  },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'ecmascript',
              jsx: true,
            },
            target: 'es2020',
          },
        },
      },
    ],
  }
});