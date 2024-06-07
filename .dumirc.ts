import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'minken-lib',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'MINKEN',
  },
  
  base:'/minken-lib/',
  publicPath:'/minken-lib/',
  exportStatic: {},
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components'},
      
    ],
  },
  
});
