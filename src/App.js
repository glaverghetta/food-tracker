import { useState } from 'react';
import Header from './components/Header'
import About from './components/About'

const App = () => {
  
  const [showAbout, setShowAbout] = useState(false)
  var h1Class = showAbout ? 'about' : 'title'
  
  return (
    <div className="container">
      <Header h1C={h1Class} aboutButtonClick = {() => setShowAbout(!showAbout)}/> 
      {showAbout && <About/>}
      {!showAbout &&
          <div><p>lorem ipsum</p></div>

      }
    </div>
  );
}



export default App;
