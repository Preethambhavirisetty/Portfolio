# Install React and create react app
npx create-react-app portfolio2
# Install tailwind css and framer-motion
npm install tailwindcss framer-motion
# add these lines to index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 0;
}
# To use fa fa- classes for icons
npm install @fortawesome/fontawesome-free
# if we use scrollYprogress with refs, it returns the position of the ref by using scrollYprogress.get()