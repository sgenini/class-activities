# Babel Setup

## ES6 Compatibility

ES6 Compatibility Table: <http://kangax.github.io/compat-table/es6/>

* See which environments support which ES6 features! Node, browser, etc.

## Babel

Babel REPL: <https://babeljs.io/repl/>

* Allows you to see the conversion of ES6 -> ES5 real-time

VS Code Babel REPL Extension: <https://marketplace.visualstudio.com/items?itemName=t-sauer.vscode-babel-repl>

* Plugin for Babel REPL in VS Code

### Installing Babel CLI Globally and Creating an Alias for `bnode`

* `npm install -g babel-cli babel-preset-env babel-preset-stage-2 && echo "alias bnode='babel-node --presets es2015,stage-2'" >> ~/.bash_profile`

### Installing Babel CLI Locally and Creating an Alias for `bn`. This will be run on any new ES6 project we are working on

* `echo "alias bn='npm i --save-dev babel-cli babel-preset-es2015 babel-preset-env babel-preset-stage-2'" >> ~/.bash_profile`

### Using the Babel CLI

* `bn` or if you didn't create the alias above `npm install --save-dev babel-cli babel-preset-es2015 babel-preset-env babel-preset-stage-2` - This must be run for each project you are working on

* `bnode index.js` or if you didn't create the alias above `babel-node --presets env,stage-2 index.js` - This allows us to use Babel to run scripts using ES6 using the command `bnode` in place of `node`. For example: `bnode script.js` instead of `node script.js`.

#### How The Alias Works (Extra)

Writing out babel-node with the presets can get old quickly. Fortunately, we can alias commands in bash.

* `&& echo "alias bnode='babel-node --presets env,stage-2'" >> ~/.bash_profile`

  * `&&` means "if the first command completes without error, do the following

  * the code following `&&` adds the line `alias bnode='babel-node --presets env,stage-2` to your `.bash_profile` file.

  * `alias bnode='babel-node --presets env,stage-2` - the `alias` command allows you to create shorthands for commands. For example, we could just type `bnode script.js`, which would run `babel-node --presets env,stage-2 script.js`. This allows us to not have to type out the whole command each time.
