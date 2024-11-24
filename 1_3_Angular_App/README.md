# 1.3 Angular App

## Description
Welcome to the Pokémon Angular App! This application allows users to explore a comprehensive list of 
Pokémon fetched from the PokeAPI. Users can browse through the Pokémon list, 
search for their favorite Pokémon, and view detailed information about each one.

## Features

- **Pokémon List**: View a paginated list of Pokémon with infinite scrolling.
- **Search Functionality**: Search for Pokémon by name using a responsive search bar.
- **Detailed View**: Click on a Pokémon to view detailed information, including types, abilities, and stats.
- **Responsive Design**: Optimized for various screen sizes using Angular Flex Layout and Angular Material.
- **Error Handling**: Robust error handling with user-friendly messages.
- **Loading Indicators**: Visual feedback during data fetching operations.
- **Dockerized Deployment**: Easily build and deploy the application using Docker and Docker Compose.

## Technologies Used

- **[Angular](https://angular.io/)**: Frontend framework for building dynamic web applications.
- **[Angular Material](https://material.angular.io/)**: UI component library implementing Material Design.
- **[Angular Flex Layout](https://github.com/angular/flex-layout)**: Responsive layout API using Flexbox CSS.
- **[RxJS](https://rxjs.dev/)**: Reactive Extensions for JavaScript to handle asynchronous data streams.
- **[ngx-infinite-scroll](https://github.com/orizens/ngx-infinite-scroll)**: Infinite scrolling module for Angular.
- **[PokeAPI](https://pokeapi.co/)**: RESTful API for Pokémon data.
- **[Docker](https://www.docker.com/)**: Containerization platform for building, deploying, and running applications.

## How to Run

To run the application using Docker Compose, follow these steps:

```bash
docker-compose up -d
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
