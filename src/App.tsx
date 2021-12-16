import { makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';


const useStyles = makeStyles((theme) => ({

}));


const App = () => {
  const classes = useStyles();
  return <div>
    <Navbar />
    <Leftbar/>
  </div>


}


export default App
