import AppHeader from './components/header.jsx';
import AppFooter from './components/footer.jsx';
import AppBody from './components/index.jsx';
/*import StudentCard from './components/StudentCard.jsx'; -> <StudentCard name={"Jose Lopez"} level={"6B Dual"} career={"Ing. en Sistemas"}/>*/
import './App.css';

function App() {
  return (
      <>
        <AppHeader />
        <AppBody />
        
        <AppFooter />
      </>
  );
}

export default App;

