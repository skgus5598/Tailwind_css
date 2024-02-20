# Tailwind CSS manual
1. visit website ->  https://tailwindcss.com/
2. Install 'tailwindcss' via npm, 
    -> npm install -D tailwindcss
   and create your 'tailwind.config.js'file
    -> npx tailwindcss init
3. Add the paths to all of your template files in your 'tailwind.config.js'file
  <tailwind.config.js>
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }

4. Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
   ex>> <src/index.css >
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

.
.

5. Run the CLI tool to scan your template files for classes and build your CSS.
    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
