## Search Movie app - Angular, API + OMDb API

###### This is the same project like - [Search Movie app - ReactJS, Context API, OMDb API](https://github.com/lucas-dec/Search-movie-app) but created in Angular !

###### The purpose of creating the application was to learn Angular and TypeScript.

Search Movie app give us ability to search for movies and show information details about the movie. User could add the movie to his own watch list.
The application is using Context API for state managment. All the information about movies is fetching using the OMDb API - The Open Movie Database. Movies added by the user to the watch list are saved to local storage - that after refreshing the browser added movies are still on the list.
This project was created as a part of self study and was build using ReactJS (Create React App), Context API, OMDb API, localStorge.

## Live Preview
###### The app is hosted on Netlify: 
https://search-movie-app-angular.netlify.app/
 
## Screenshots

![Main view](snapshot/main-view.jpg?raw=true "Main view")
![List of fetch movies](snapshot/fetch-movies.jpg?raw=true "List of fetch movies")
![All views](snapshot/all-view.jpg?raw=true "All views")

## Quick Start

- clone the repo:

```
git clone https://github.com/lucas-dec/Search-movie-app-Angular.git
```

- install the necessary dependecies

```
npm install
```

- start the server:

```
ng serve
```

- Open http://localhost:4200 to run the app in your browser on your local machine.

## Features

- Search movies
- Details information about movies
- Add movies to watch list
- Remove movies from watch list
- Notifications about errors and fetching data

# Technologies used on this project:

- Angular generated with Angular CLI
- Servies
- Local Storage to sasve user data
- Routing
- fetch API from 'OMDb API - The Open Movie Database' (http://www.omdbapi.com/)
