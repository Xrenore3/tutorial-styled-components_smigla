import './App.css';
import StyledHeader from './components/StyledHeader';
import { Button } from './components/Buttons';


const App = () => {
  return (
    <div>
     <StyledHeader/>
     <Button color='green'>one</Button>
     <Button color='grey'>two</Button>
     <Button >two</Button>


    </div>
  );
}

export default App;
