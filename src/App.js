import React,{useEffect,useState} from 'react';
import './App.css';
import Header from './Header';
import InfoHeader from './InfoHeader';
import Issues from './Issues';
import { useSelector } from 'react-redux';


function App() {
  // const [isFetching, setIsFetching] = useState(false);
  const store = useSelector((store) => { return store });
  console.log(store);

  // function handleScroll() {
  //   if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  //   setIsFetching(true);
  //   console.log('Fetching');
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  return (
    <div className="App">
      <Header />
      <InfoHeader />
      <Issues />
    </div>
  );
}

export default App;
