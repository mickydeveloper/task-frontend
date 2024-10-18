I have configured the project from scratch:

1. Setup the node project
2. Added webpack
3. Configured project with React and TypeScript
4. Setup webpack loaders for tsx, css, image, font files
5. Added Babel as loader for TS to make sure the project uses a polifil 
6. Setup Eslint/Tsline 
7. Added the jest-puppeteer for the e2e tests

For the form I could have used the react-hook-form or any other library and that would give more complex form control and validation but decided to go with native for and validation for acessability and to prevent unecessary bloat

For the deployment I used the githubpages and that is why there is a basename: task-frontend for both local and web project to fix the router bug connected with githubpages and BrowserRouter, also fixed the local dev server to deploy on the http://localhost:8080/task-frontend directly.

For the tests I used the puppeteer could have used cypress or jest but decied to focus on e2e tests since they test better real life user flows. (checkout filter-results.png that could be used for cool visual regression with this framework)

I hosted the api on heroku: https://transactions-json-1267ce273b82.herokuapp.com/transactions
The page url: https://mickydeveloper.github.io/task-frontend/
If you have any issues with acessing either of those let me know



To run project:
npm run start

To Run Linter: 
npx eslint .

To Run e2e tests: 

In first console
npm run start

In Second console
npm run test

To Deploy to GithubPages: 
npm run deploy