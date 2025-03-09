
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
    loader: "jsx", // Ensures JSX works inside .js files
  },
};


