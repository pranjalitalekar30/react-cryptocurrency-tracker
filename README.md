# Cryptocurrency Tracker with React JS, AXIOS and Reactstrap

## Prerequisites

### Install Node JS
Refer to [https://nodejs.org/en/](https://nodejs.org/en/) to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```
In order to run the application, type the following command

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

## Application design

#### Components

1. **Coins** Component : This Component displays a list of cryptocurrencies. This Component gets the data from a API (/coins/markets) and display it in the table format.

2. **CoinInfo** Component : This Component Displays the details of a selected coin. This Component gets its data from a API based on the ID of each coin.

#### HTTP client

**axios** library is used to make HTTP Calls

## Resources

**React Bootstrap**  
Refer to [https://react-bootstrap.github.io/getting-started/introduction/](https://react-bootstrap.github.io/getting-started/introduction/) to understand how to use React Bootstrap