import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env': {},
    'process.platform': '"browser"',
    'process.arch': '"browser"',
    'process.cwd': '() => "/"'
  }
})
