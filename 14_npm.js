// npm calls reusable code a package. it a folder that contains a JS code. other names include: module and dependencies. All 3 are used interchangeably when talking about shareable JS code.

// sudo npm install -g <packageName> {for mac}
// npm init (step by step installation, pressing "enter" to go to the next step)
// npm init -y (everything is set to default)

// nodemon is a package that helps us watch our files and restart our app for us so that we don't have to keep typing "node filename" to run our app

// to install a dev dependency, we have either "npm i packageName -D" or "npm i packageName --save-dev".

// N/B: you set something up as a dev dependency because you don't need it in a production environment.

// to use nodemon, we save some code inside the scripts object
// "scripts": {
// 	"start": "node app.js",
// 	"dev": "nodemon app.js"
// },
// or
// "scripts": {
// 	"start": "nodemon app.js",

// },

// the package-lock.json helps set the version not just for the dependencies, but for the packages that the dependency is using.

// version no for e.g: "5.10.11" => 5 indicates a major change whicj trigger breaking changes. the second one is a minor change which means that it is backward compatible - this means that if it were to switch from 10 to 11, we shouldn't expect any breaking changes. The last number is just a patch for the bug fix.
