# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


//PASOS PARA LA CREACIÓN DEL PROYECTO
//BLOCKCHAIN Y CONTRACTS//
npx create-react-app my-nft-app
npm start
cd my-nft-app
npm start
truffle init --> setup de truffle-config.js para poder hacer de forma correcta los deploy/migrate
npm install @openzeppelin/contracts
truffle compile para compilar el nuevo contrato que escribimos (no el migrations.sol) que viene por default
se crea un archivo migrations nuevo (con orden numérico) y se pone el nuevo contrato a migrar
truffle migrate

* truffle migrate --reset --> se usa cuando hacemos cambio en el codigo del contrato después del primer migrate: con reset sobreescribimos el contrato que subimos a la blockchain

(en otro shell se puede iniciar ganache-cli para ir viendo el estado de las cuentas)

--> truffle console puedo acceder a la consola de truffle y chequear algunas funciones de mi contrato deployado
si ejecuto: --> Contract.deployed() me retorna todos los datos del contrato deployado "TruffleContract {constructor: ...} --> LO MÁS IMPORTANTE: puedo ver todas las funciones propias de ese contrato

color = await Contract.deployed() --> devuelve undefined pero si llamo a esa variable retorna el contrato en sí, y puedo ver datos más específicos. 

//FRONT Y CONEXIÓN CON WEB3//
activar metamask y conectarla con la 1er account de ganache (opción "import account" en MM y pegar el private key que nos da ganache para ese account)
npm install web3









