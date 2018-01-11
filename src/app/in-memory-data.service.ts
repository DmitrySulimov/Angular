import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  { id: 1, name: 'Mr. Dmitry' },
  { id: 2, name: 'Narcoman Yurii' },
  { id: 3, name: 'Processor Intel' },
  { id: 4, name: 'Professor X' },
  { id: 5, name: 'Magneto' },
  { id: 6, name: 'Rubben' },
  { id: 7, name: 'Arnold' },
  { id: 8, name: 'Dr ZLO' },
  { id: 9, name: 'Helga Pataki' },
  { id: 10, name: 'Tornado' }
    ];
    return {heroes};
  }
}