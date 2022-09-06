# DSFileConverterApi

## Install

### In command prompt

- Clone this project
- Run npm install
- Compile Typescript
- Run node main.js

### In visual studio 2019/2022

- Clone this project
- To run and debug in visual studio environments.
- Type F5 or start debugging

### In development command propmt

- npm run start:dev


### Webpack

- Add "outDir" to tsconfig.json at "compilerOptions" element.   
   ```javascript
    "outDir": "./dist",
   ```
- Run webpack --config=webpack.config.js at command prompt. This make a /dist folder with DsFileConverterApi.js file.
OR
- Run webpack --config=webpack.production.js at command prompt. This make a production code in  /dist folder with DsFileConverterApi.js file.

### Docker container.

- There are a docker file in the root folder. Run docker build to make a docker image. 
- Build docker image: docker build -t dsfileconverterapi:latest .
- Create container either portainer, kitematic, docker desktop or another docker tool 
- Must mount one host folder in to docker to read from and write to files
- or use command propmpt: docker run dsfileconverterapi:latest -p 52001:52001 -v "YourHostFolder:DockerFolder"

## Uninstall

- Remove solution.
- Remode docker container and images.

## Usage

- Run swagger from this api
  - localhost:52001/swagger (you can map this in container creation)
  - The api was configurate to run in localhost:52001

### Author

**José Durán Pareja**

* [github/jodurpar](https://github.com/jodurpar)

### License

Copyright (&copy;) 2022 [José Durán Pareja](https://github.com/jodurpar).
Portions of (&copy;) https://sheetjs.com/ Community Edition 

