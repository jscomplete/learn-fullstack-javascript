# To create an development environment for Node and React Js...!

    #npm - Node Package Manager use to install the javascript software package to out system also can
    make use of dependencies...

Step 1: Enter a command "npm init" to initialize the node package to install also need to refet details
        Package name, Version, Description, index.js (initial file to run also can change name), Author 
        name and type yes to fill it up.. as short You can use "npm init -y" for default installation to
        apply default information.

Step 2: Installing Main Dependencies
        Now we need to install the expresss package by the command "npm i express". Which holds the packages 
        to build the web application projects further can be implemented.

Step 3: Now install webpack by "npm i webpack webpack-cli" to install the web core modules.

Here are the 5 packages that you need to make Babel do its magic:
            npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react

Step 4: Installing Development Dependencies
       Nodemon is an command line tool which make use of restart the application that we are 
       developed for our application to avoid time wastage and move on to efficiency...!
       Command - "npm i -D nodemon"

Step 5: Here is an intresting tool which is ESLint which is an static code tool to make analyse of project 
        help us to fix the problem on the prject..
         
        Which can be installed by the command 
        "npm i -D eslint @babel/eslint-parser eslint-plugin-react eslint-plugin-react-hooks"

        Now to configure the installation need to add .eslintrc.js file on the root of the project will
        deliver the project under the dependencies and configure to our preferred style. further add the below 
        code on the file..! 
         
         module.exports = {
    parser: "@babel/eslint-parser",
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      ecmaFeatures: {
        impliedStrict: true,
        jsx: true,
      },
      sourceType: "module",
    },
    plugins: ["react", "react-hooks"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
  
      // You can do more rule customizations here...
    },
  };
   
   Adding plugin and configure our project further...
   Then, the most popular testing library that’s usually used with React is Jest. You’ll also need babel-jest 
   and a test renderer like react-test-renderer:
      command - "npm i -D jest babel-jest react-test-renderer"

Step 6: Now Need to create Structure to develop the projct which is Creating an initial directory structure 
        Which can have be explained below 

reactful/
  dist/
    main.js
  src/
    index.js
    components/
      app.js
    server/
      server.js

Step 7: configure the WebPack and Babel for the project. 
        For this babel.config.js and webpack.config.js are the file need to create in root of our project 

# babel.config.js
module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ],
};

#webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

    These are code which make configure the file as needed...!

Step 8: Creating npm scripts for development
        You need to run your web server and you need to run Webpack to bundle the 
        frontend application for browsers. You can use npm scripts to manage these.

        Move to package.json file and make changes on the file script function 
        script{
            "test" : "jest"
        }
        
        Now deliver two more script need to add 
        "dev:server": "nodemon --exec babel-node src/server/server.js --ignore dist/"
        "dev:bundler": "webpack -w --mode=development"

Step 9: Now it is our final delivery which is Testing everything with a sample application.

        # An application which is used to track the count of button clicked by the user...!

        You can refer these changes in the file locations are below...
              src/components/app.js
              src/index.js
              src/server/server.js

    yeah😍...! lets move on to final cake cutting part... 
                    npm run dev:server
                    npm run dev:bundler
                to run local server and our application...😉
