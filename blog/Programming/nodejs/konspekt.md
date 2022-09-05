Node.js was written by Ryan Dahl in 2009. It hadn't great reception at the start, and there were hardly any mentions about it on tech forums. With time it started to grow, and Node.js grew in popularity.

### Node.js 

Node.js documentation doesn't describe what Node is (It concentrates on Node's concurrency). While interesting, it can be a piece of misleading information for people wanted to hop into Node.js.

### What is Node?

Node is a runtime environment, which allows using JavaScript, as it would be a backend language. JavaScript can be executed in browsers without problem:
- Chrome has a V8 engine,
- Mozilla has Spidermonkey,
- JavaScriptCore on Safari and Apple browsers,
- Chakra in Internet explorer.

Node.js doesn't run in the browser and has access to many backend functionalities which the browser engines don't have. Thanks to using the same API, for example, we can get prompted messages in the REPL using console.log.

Writing Node.js is similar to writing other backend languages.

### Express, frameworks, and tools

- Node.js has standard libraries, which you can use while writing Node.js applications. 
- It has a packages system - npm. Thanks to it, you can manage your dependencies easily.
- Node.js has a couple of frameworks that will help you build a backend for your application - Express is the most popular one. It is a micro-framework, and it is similar to Flask(a python Framework).

It is possible to write the backend in Node itself. I would recommend trying to do it or watching someone do it. It clears out what is happening behind framework functions. I  ended Pirple's "Node.js masterclass" where I could see what the servers are doing, and what the backend frameworks are for.

### Node.js vs deno.

Node.js has its flaws. Lately, a successor of node.js came out, Deno (Node is an anagram of Deno, which is funny). Deno has advantages:
- built-in support for TypeScript
- better package management
- Better modules syntax (ES6) and Promises
+ other non-critical changes for developers 

Deno won't overcome Node.js quickly. Deno can be viewed as better since it has a lot of improvements. But Node.js will be the developer's choice for a long time. Next.js and Gatsby have backend API in Node.js.

### Summary

It is worth becoming accustomed to Node.js. Even for front-end developers, the knowledge of how things are being executed on the backend can be useful. Node.js have its drawbacks, which have been removed in Deno. But Node.js is still more popular.

It's worth knowing Node.js and learn about the backend of the web application. Even for front-end developers.