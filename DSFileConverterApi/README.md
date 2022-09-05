# DSFileConverterApi

## Install

### In command prompt

- Clone this project
- Run npm install
- Compile Typescript
- Run node main.js

### In visual studio 2019/2022

- Clone this project
- To run and debug in visual studio environments, remove "outDir" line of "compilerOptions" element in tsconfig.json file.
- Type F5 or start debugging


### Webpack

- Add "outDir" to tsconfig.json at "compilerOptions" element.   
   ```javascript
    "outDir": "./dist",
   ```
- Run webpack in the dist folder command prompt. This make a /dist folder with DsFileConverterApi.js file.
- At command prompt: webpack --config=webpack.config.js

### Docker container.

- There are a docker file in the root folder. Run docker build to make a docker image. 
- Build docker image: docker build -t dsfileconverterapi:latest .
- Create container either portainer, kitematic, docker desktop or another docker tool
- Run container

## Uninstall

- Remove solution.
- Remode docker container and images.

## Usage

- Run swagger from this api
  - localhost:3001 (you can map this in container creation)
  
  ![Swagger Screen](https://github.com/jodurpar/DSMongoDBApi/blob/master/BrowserSwagger.png)
     
- The api was configurate to run in localhost:3001

### Author

**José Durán Pareja**

* [github/jodurpar](https://github.com/jodurpar)

### License

Copyright (C) 2022 [José Durán Pareja](https://github.com/jodurpar).

