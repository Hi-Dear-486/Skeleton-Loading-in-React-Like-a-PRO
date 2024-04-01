Important installation:
npm i axios
Skeleton from Shad Cn (Reuseable components) that you can copy and paste into your apps.
npx shadcn-ui@latest init
After that  get Skeleton component
npx shadcn-ui@latest add skeleton
Flowbite React is a free and open-source UI component library
npm create flowbite-react@latest -- --template nextjs
Add the paths to all of your template files in your tailwind.config.js file:
/** @type {import('tailwindcss').Config} */
export default {
  content: ["node_modules/flowbite-react/lib/esm/**/*.js",],
  plugins: [require("flowbite/plugin"),],
};

Thanks
