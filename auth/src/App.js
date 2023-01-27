import { AuthProvaider } from './context/AuthContext';
import { Signup } from './pages/Signup'


function App() {
  return (
    <AuthProvaider>
      <Signup/>
    </AuthProvaider>
  );
};

export default App;
