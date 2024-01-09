import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { 
        id: 1,
        title:'Angular Assignment',
        status:'Dues',
        duesDate:'12 Jan 2024',
        description:'This assignment is for first round'
      },
      { 
        id: 2,
        title:'Reactjs Assignment',
        status:'Dues',
        duesDate:'12 Jan 2024',
        description:'This assignment is for second round'

      },
      { 
        id: 3,
        title:'Express Assignment',
        status:'Dues',
        duesDate:'12 Jan 2024',
        description:'This assignment is for final round'

      },
      
      
    ];
    return { tasks };
  }
}
