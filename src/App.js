//Import area
import './App.css';
import AComp1 from './components/AComp1';
import BComp2 from './components/BComp2';

//2.function defination area
function App() {
  return (
    <div className="App">
      <AComp1 santosh="Stack" />
      <AComp1 santosh="Stack" />
      <BComp2 oklabs="Hackers" />
    </div>
  );
}


//export area
export default App;
