### Base project for MongoDB, Express.js, React and React Native with future Docker Container  
---

**Start Backend Express.js Server**
```sh
cd .\backend\ 
npm start
# http://localhost:8000/employees
```

**Start Frontend React Server**
```sh
cd .\frontend\
npm run dev
# http://localhost:5173/
``` 

**Start Mobile React Native Server**
```sh
cd .\mobile\ 
npx expo start
#Scan QR Code with mobile device and download app, or....
Press w  
# browser will open @ http://localhost:8081/
```

**Tentative Project Structure - using Jest for testing**
```sh
project-root/
│── backend/                  # Node.js + Express API
│   ├── src/
│   │   ├── models/           # Mongoose schemas
│   │   ├── routes/           # API routes
│   │   ├── controllers/      # Route logic
│   │   ├── config/           # MongoDB & env config
│   │   ├── server.js         # Express server entry
|
├── tests/                    # Test folder
│   ├── controllers/          # Tests for controller functions
│   │   └── userController.test.js
│   ├── routes/               # Tests for API routes/endpoints
│   │   └── userRoutes.test.js
│   ├── models/               # Tests for data models
│   │   └── userModel.test.js
│   ├── setup.js              # Global setup for tests (aka- fixtures)
|
│   ├── Dockerfile            # Backend Docker setup
│   ├── .env                  # Environment variables
│   ├── package.json          # Dependencies
│   ├── jest.config.js        # Jest config (if using Jest)
│
│── frontend-web/             # React Web App
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── context/          # Global state (React Context API)
│   │   ├── App.js            # Main entry point
│   ├── tests/                # Frontend tests
│   │   ├── components/       # Unit tests for UI components
│   │   ├── pages/            # Page rendering tests
│   │   ├── setupTests.js     # Jest & RTL setup
│   ├── Dockerfile            # Frontend Docker setup
│   ├── package.json          # Dependencies
│   ├── jest.config.js        # Jest config (if using Jest)
│
│── mobile-app/               # React Native App (Expo)
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── screens/          # Mobile screens
│   │   ├── App.js            # Main entry point
│   ├── tests/                # Mobile app tests
│   │   ├── components/       # UI component tests
│   │   ├── screens/          # Screen rendering tests
│   │   ├── setupTests.js     # Jest & RTL setup
│   ├── package.json          # Dependencies
│   ├── jest.config.js        # Jest config (if using Jest)
│
│── docker-compose.yml        # Runs everything with Docker
│── .github/                  # GitHub Actions for CI/CD
│   ├── workflows/
│       ├── ci-cd.yml         # Automates testing & deployment
│
│── Jenkinsfile               # CI/CD pipeline for Jenkins
│── README.md                 # Project documentation
```