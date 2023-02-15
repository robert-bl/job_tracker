import React, {FC} from 'react';
import { JobList } from './components/JobList';


const App: FC = () => {

  let title: string = 'SWE!'

  return (
    <div>
      <JobList />
    </div>
  );
}

export default App;
