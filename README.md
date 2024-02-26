# F1 Drivers REST API
### Introduction
This REST API was built as a hobby project so that users can get F1 drivers information.
### F1 Drivers REST API Features (updated as new features are added)
* Users can get all drivers.
* Users can search for a driver by name.
### Installation Guide (If you want to run locally)
* Fork and clone the repository [here](https://github.com).
* Run ```npm i``` to install all required dependencies
* You can choose to run MongoDB Atlas cloud or a local MongoDB.
* Create a config folder in the root of the project and add a dev.env file.
* Inside the dev.env file add ```PORT=<value>``` and ```MONGODB=<value>``` keys.
* Add your ```PORT``` number and ```MONGODB``` connection string.
### Usage (Local)
* Run ```npm run dev``` to start the application.
* Connect to the API using any REST client (Postman, Insomnia...) of your choice. 
### Usage (Service)
* Run ```npm run dev``` to start the application.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/drivers | To get all drivers |
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easier to work with non-relational data by creating a schema of our models.
### Authors
* [t2ny](https://github.com/t2ny)
