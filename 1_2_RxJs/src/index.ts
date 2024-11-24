import {from, forkJoin} from 'rxjs';
import {filter, map, mergeMap, toArray} from 'rxjs/operators';
import {persons, ages, locations, Person, Age, Location} from './data';

/**
 * Calculate the average age of persons living in Poland.
 */
const calculateAverageAge = async (country: string) => {
    try {
        // Create observables from the data arrays
        const persons$ = from(persons);
        const ages$ = from(ages);
        const locations$ = from(locations);

        // Get the IDs of persons living in the specified country
        const personIds$ = locations$.pipe(
            filter(location => location.country.toLowerCase() === country.toLowerCase()),
            map(location => location.person),
            toArray()
        );

        // Get details of persons in the specified country
        const targetPersons$ = personIds$.pipe(
            mergeMap(ids => forkJoin({
                ages: ages$.pipe(
                    filter(age => ids.includes(age.person)),
                    toArray()
                ),
                persons: persons$.pipe(
                    filter(person => ids.includes(person.id)),
                    toArray()
                )
            }))
        );

        // Calculate the average age and display names
        const result$ = targetPersons$.pipe(
            map(({ ages, persons }) => {
                if (ages.length === 0) {
                    throw new Error(`No age data available for persons living in ${country}.`);
                }

                const totalAge = ages.reduce((acc, curr) => acc + curr.age, 0);
                const averageAge = totalAge / ages.length;
                const names = persons.map(person => person.name).join(', ');

                return { averageAge, names };
            })
        );

        // Execute the observable and get the result
        result$.subscribe({
            next: ({ averageAge, names }) => {
                console.log(`The average age of persons living in ${country} (${names}) is ${averageAge.toFixed(2)} years.`);
            },
            error: err => {
                console.error('An error occurred:', err.message);
            }
        });
    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
};

// Get the country from command-line arguments
const countryArg = process.argv[2] || 'Poland';

// Run the calculation
calculateAverageAge(countryArg).then(r => console.log('Calculation completed.'));
