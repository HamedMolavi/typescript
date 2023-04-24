# TypeScript
<a src="https://www.typescriptlang.org/">TypeScript</a> is JavaScript with syntax for types.
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
See exact DOC <a src="https://www.typescriptlang.org/docs/handbook/intro.html">here</a>.

## Instalation

__cmd :__
```cmd
npm install typescript -g
```
open help:
```cmd
tsc
```
run:
```cmd
tsc main.ts
node main.js
```

## Start
To start using TS run this command in working directory:
```cmd
tsc --init
```
Ultimately it is better to run your transpiling first and then to run the server, but alternatively you could use this:
```cmd
tsc --target es6 | node ./build/main.js
```
This will create a config file for TS transpiler engin that could be used to configure desired setting.
By oppening the config file you will see all the setting used in TS compiler. The default values are commented and could be changed by un-commenting and assigning a different value to them.
### Useful configs
1. target: JavaScript language version, es2015 is used for ES6 and there is ES5.
2. rootDir: Specify the root folder within your source files. Better to use _src_ directory for your ts files.
3. rootDirs: As above, but accepts multiple directories in an array.
4. outDir: Specify an output folder for all emitted files. Better to use _build_ directory for your output directory.

## Types
Every type in JS syntax includes in TS like number, string, boolean, and etc.
### Array:
You can specify an array in two ways:
1. You know your array cosists of a single type, so you do: _``string[]``_. This means an array of strings. Or in another syntax _``Array<number>``_
2. If you don't know what's going to fill your array use: _``Array``_
### Complex types:
You can also set complex types to be followed by your program units. See the example below:
```ts
let persons: Array<[string, number, Array<string, string, number>]> = [['name', 22, ['City', 'St.', code]]]
```
### Union type
``Or`` exactly by definition:
```ts
let uid: string | number;
```
### viod
Simply means nothing.
### enum
Search for yourself :)
### Create a type
```ts
type uid = string | number;
type user = {
    username: string,
    uid: uid
};
let me: user = {
    username: 'hamed',
    uid: 1
};
```
## OOP
Typescript helps programmers to plan object oriented coding more easily and readbale.
### class
```ts
type uid = string | number;
class User {
    #id: uid;
    username: string;
    static #index: number = 0;
    constructor(username: string) {
        User.#index += 1;
        this.#id = User.#index;
        this.username = username;
    };
    get id() { return this.#id }
    set id(_id) {
        throw new Error("Can not set id manually.");
    }

};

let u: User = new User("hamed");

// u.id = 2;
console.log(u.id);
```
### interface
An interface is some how a type declared for a class. Classes can be strong typed using this option.
It is important to use this in some projects, so you better read about it.

## Notes
The problem with typescript transpiler is that it automatically converts some syntaxes to another. For example it converts _let_ and _const_ to _var_, or even _arrow functions_ to _normal functions_. This is because the default interpreter in TS is ES5. To change this you could see <a src="https://stackoverflow.com/questions/30439869/how-do-i-transpile-typescript-to-es6">this</a> or simply do this:
```cmd
tsc main.ts --target es6 | node main.js
```
Changes: Template String, Classes, Arrow functions, the ‘for…of’ loop, let + const, enhanced object literals.


# Express, Server, and Typescript

## prerequisite
*initialize:*
```cmd
npm init
```
*install:*
```cmd
npm install --save-dev @types/express express
npm install --save-dev ts-node
```
Installing ts-node is up to you. You can use *tsc* and a pipeline or you can instead use *ts-node*.
*setup:*
open package.json and change start script.
```js
{
    "scripts":{
        "start": "ts-node ./src/app.ts"
    }
}
```
***OR***:
```js
{
    "scripts":{
        "start": "tsc | npm run server",
        "server": "nodemon ./build/app.js"
    }
}
```
- Note that by using *ts-node* module you don't need to set *rootDir* and *outDir* in config anymore.
- You won't need a build directory then neither.




