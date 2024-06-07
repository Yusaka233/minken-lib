import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'MINKEN-LIB',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'MINKEN',
  },
  mode: 'site',
  base:'/MINKEN/',
  publicPath:'/MINKEN/',
  exportStatic: {},
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components'},
      
    ],
  },
  
});
