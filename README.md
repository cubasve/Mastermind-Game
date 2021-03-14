# Mastermind

### React Components
![image](https://user-images.githubusercontent.com/62129720/111056415-c0aee380-844c-11eb-8dec-af0be27178a6.png)

### State
![image](https://user-images.githubusercontent.com/62129720/111056465-f784f980-844c-11eb-83fa-91a179dcd9eb.png)

![image](https://user-images.githubusercontent.com/62129720/111056598-467f5e80-844e-11eb-8d6b-0ad622b3e087.png)

### handlePegClick method's process
![image](https://user-images.githubusercontent.com/62129720/111056510-65312580-844d-11eb-9652-2c7a389e0a54.png)

- currentGuessIndex: the color selected (in this case, blue (index 0))
- guessesCopy: ARRAY - copy of the guesses array
```javascript
[{
    code: [0, null, null, null],
    score: { perfect: 0, almost: 0 },
}]

```
- guessCopy: OBJECT - copy of the guess - the specific index of the current guess
```javascript
{
    code: [0, null, null, null],
    score: { perfect: 0, almost: 0 },
}

```
- codeCopy: 
- pegIndex: peg's current index (in this case, it's 0 since it's the 1st peg)
- codeCopy[pegIndex]: 

![image](https://user-images.githubusercontent.com/62129720/111056585-1fc12800-844e-11eb-96ab-4f60f6069483.png)

![image](https://user-images.githubusercontent.com/62129720/111056590-2fd90780-844e-11eb-8370-03c515529a8e.png)

![image]()

### handleScoreClick method's process

- 1st row's guess:
![image](https://user-images.githubusercontent.com/62129720/111056617-67e04a80-844e-11eb-9c71-bfcd45681ea0.png)

![image](https://user-images.githubusercontent.com/62129720/111056623-76c6fd00-844e-11eb-8ba5-eea84fb5dfa2.png)

![image](https://user-images.githubusercontent.com/62129720/111056646-a5dd6e80-844e-11eb-8fe0-c97e2df81fa9.png)

- 2nd row's guess:
![image](https://user-images.githubusercontent.com/62129720/111056633-85adaf80-844e-11eb-8764-2823e874b38c.png)

![image]()

![image]()

![image]()

![image]()

![image]()



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
