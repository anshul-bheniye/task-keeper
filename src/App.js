import {AddTask} from './components/AddTask';
import {ShowTask} from './components/ShowTask'
import './app.css';

export const App = () => {
  return (
    <div className="App">
      <AddTask />
      <ShowTask />
    </div>
  );
}

