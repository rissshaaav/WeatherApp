import './App.css';
import AirConditions from './components/AirConditions/AirConditions';
import Glance from './components/Glance/Glance';
import Searchbar from './components/Searchbar/Searchbar';
import SideNav from './components/SideNav/SideNav';
import TodaysForecast from './components/TodaysForecast/TodaysForecast';
import WeekForecast from './components/WeekForecast/WeekForecast';

function App() {
  return (
    <div className="App">
      <Searchbar className='app-item'/>
      <SideNav className='app-item'/>
      <Glance className='app-item'/>
      <TodaysForecast className='app-item'/>
      <AirConditions className='app-item'/>
      <WeekForecast className='app-item'/>
    </div>
  );
}

export default App;
