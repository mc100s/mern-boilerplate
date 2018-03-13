# MERN boilerplate | Ironhack Fullstack Application

## Global information

### Directory structure
```
client/
  build/
  node_modules/
  public/
  src/
  package.json
server/
  bin/
  configs/
  models/
  public/
  routes/
  package.json
package.json
```

## Commands

**To install all the packages**
```sh
$ npm install
# OR
$ (cd server && npm install)
$ (cd client && npm install)
```

**To install a package for the server**
```sh
$ cd server
$ npm install --save axios
```

**To install a package for the client**
```sh
$ cd client
$ npm install --save axios
```

**To run the server and the client**
```sh
# Open a first terminal
$ npm run dev:server
# Run the server on http://localhost:3030/

# Open a second terminal
$ npm run dev:client
# Run the client on http://localhost:3000/
```

So now you can go to 
- http://localhost:3030/api/: A simple API call
- http://localhost:3030/: The website based on client/build (that you can update with `$ (cd client && npm run build)`)
- http://localhost:3000/: The last version of your React application that is calling your API with the base url "http://localhost:3030/api/"


**Some Heroku commands**
```sh
$ heroku create
$ git push heroku master
$ heroku logs
```

## Example in the code

### `server/routes/auth.js`

- `router.post('/signup')`: Route to create a new user
- `router.post('/login')`: Route to send the user JWT 
- `router.get('/secret')`: Route where the user need to be authenticated


### `server/routes/users.js`

- `router.get('/')`: Route to get all users
- `router.post('/picture-one-user')`: Route to add a picture on one user with Cloudinary

<!-- TODO: give instructions for Cloudinary -->
<!-- TODO: give instructions for route guards -->

### `server/routes/countries.js`

- `router.get('/')`: Route to get all countries
- `router.get('/static-sample')`: Route to get a static sample of countries
- `router.post('/')`: Route to add a country



## Sources

- https://daveceddia.com/create-react-app-express-production/