
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': {
      YOUTUBE_API_KEY: JSON.stringify(process.env.REACT_APP_YOUTUBE_API_KEY)
    }
  }
});
