import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'MINKEN',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components'},
      
    ],
  },
  
});
