import './App.css';
import UseFormik from './Components/UseFormik';
import Handle from './Components/Handle';
import FormField from './Components/FormField';
import FormValidation from './Components/FormValidation';

function App() {
  return (
    <div className="App">
      <FormField />
      <Handle />
      <UseFormik />
      <FormValidation />
    </div>
  );
}

export default App;
