import React,{lazy,Suspense} from 'react';
import './App.css';
const Home = lazy(()=> import('./components/home')) 

function App() {
  return (
    <div className="App">
      <h1 className="btn">hello bhao</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <Home />
      </Suspense>
    </div>
    
  );
}

export default App;
