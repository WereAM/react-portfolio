# Michelle's Portfolio Website Created Using React

## An online portfolio written in React, HTML and CSS, showing Michelle's profile and projects

This project was built to create an online portfolio accessible via web. It includes:

- A Home page with the developer's profile and a short description
- A Projects page highlighting the developer's recent projects
- A Connect page where a user can connect with the developer

This project has been deployed via Github pages and is now live at: -- https://weream.github.io/react-portfolio/

# Q&A

**1. What is `NPM`?**

- Node Package Manager (NPM) is a package manager for javascript and its runtime environment called node.js. It enables a developer to re-use code that has been published to the npm registry, by downloading packages to their projects. For example, one can use npm to download packages such as react-icons.

**2. What is `SPA`?**

- SPA is a Single Page Application. It is a website or web application that uses one page for all its routes. This is achieved by rewriting the content of the current page with new data instead of loading a new web page. For exsmple, when navigating to other pages, elements such as the navigation bar, footers and repeating menus should remain on the screen as the page content is replaced.
  SPAs help to reduce the time taken to load a web page thus improving the performance of an application.

**3. What is `the event loop`?**

- The event loop is a method of executing code in asynchronous programming. It controls the execution order of code, by placing code from the callback queue to the stack to be executed. This is done only when the stack is empty to avoid interrupting any running code. The loop exists for as long as there are tasks in the callback queue, and exits when all the tasks are completed.

**4. What is the difference between `export x` and `export default x`? How do you import them differently?**

- `export x` is a named export that is used to specify the individual value or entity to be exported from a module or component. It is the imported using its exact name. For example, `import {x} from "./thiscomponent"`

- `export default x` is a default export that uses one single value as the default value for the entire module or component. A default export can be exported either using its original name, or using a new assigned name. For example, import x from "./thiscomponent" OR `import defaultX from "./thiscomponent"`

**5. Why do you use `className` as a property in React and not `class`?**

- class is a reserved keyword in Javascript. Since React uses JSX which is a combination of JS and HTML, using the HTML class attribute will cause a conflict with Javascript. className is therefore used to avoid this conflict.

**6. Why should you not write the following? What will happen?**
`<button onClick={setCounter(counter + 1)}> +1 </button>`

- The setCounter state will be set immediately when the button is rendered. As the state is updated, the button will continue to render itself multiple times and this will cause an infinite loop resulting i an error. An arrow function can be used instead `<button onClick={() => setCounter(counter + 1)}> +1 </button>` that creates a new function whenever the button is re-rendered.

**7. What is `object deconstruction` and how is it connected to React components (example)?**

- Object deconstruction is a way of extracting only necessary properties from an object. e.g.,

  ```
      const driver = {
         name: "Fernando Alonso",
         age: 41,
         team: "Aston Martin",
         championships: 2
      }

      myDriver(driver);

      export default function myDriver(){
         let profile = name + 'has won' + championships + drivers' championships;
         alert(profile);
      }
  ```

**8. How is it possible to use `HTML` and `JavaScript` in the same function (like in a `React Component`)? What makes it possible under the hood?**

- React uses JSX which enables the writing of HTML code inside JavaScript. It does this by creating elements using React.createElement that helps to maintain the syntax as a combination of JS and HTML.

**9. What is `async/await`? Bring an example**

- async/await are keywords used to implement asynchronous programming using promises. async makes a function return a promise while await makes a function wait for a promise to be resolved before continuing with the execution. await is wrapped inside an async function. e.g., This code executes a promise that resolves in 2 seconds. The function pauses at await and continus after the promise is resolved.

      async function visitEstonia(){
         let promise = new Promise((resolve) => {
            setTimeout(() => resolve("Estonia is beautiful"), 2000)
         });
         let result = await promise;

         alert(result);
      }

      visitEstonia();

**10. What is a `Promise`? Bring an example**

- A Promise is a JavaScript object that assures that an asynchronous operation will eventually complete, either successfully or fail. The result of the promise is then displayed later after other synchronous operations have completed. e.g.,

      let promise = new Promise((resolve) => {
         setTimeout(() => resolve("Estonia is beautiful"), 2000)
      });

      promise.then(alert);
