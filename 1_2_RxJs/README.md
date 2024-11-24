# 1.2. RxJs

## Description

This script calculates the average age of persons living in a specified country using RxJS. By default, the country is set to Poland, but you can filter by any country by providing it as an argument.

## Data

The script uses the following data:

```typescript
let persons = [
    { id: 1, name: "Jan Kowalski" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "Jarek Kaczka" }
];

let ages = [
    { person: 1, age: 18 },
    { person: 2, age: 24 },
    { person: 3, age: 666 }
];

let locations = [
    { person: 1, country: "Poland" },
    { person: 3, country: "Poland" }
];
```

## How to Run

To run the application using Docker Compose, follow these steps:

1. Build and run the Docker container:

```bash
docker-compose up
```

## Example

To calculate the average age of persons living in Germany, update the docker-compose.yml file as follows:

```yaml
environment:
  - COUNTRY=Germany
```

Then, rebuild and run the Docker container:

```bash
docker-compose up --build
```