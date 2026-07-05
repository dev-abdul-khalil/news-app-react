import { useState } from 'react';
import NavBar from './Components/NavBar';
import NewsBoard from './Components/NewsBoard';
import Footer from './Components/Footer';

const App = () => {
  const [category, setCategory] = useState('general');
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </div>
  );
};

export default App;
