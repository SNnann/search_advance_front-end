import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Search from './pages/search'
import level1 from './pages/level1'
import level2 from './pages/level2'
import level3 from './pages/level3'
import Navbar from './pages/navbar'
import Footer from './pages/footer'
import Detail_food from './pages/detail/food'
import Detail_drug from './pages/detail/drug'
import Detail_cosmetic from './pages/detail/cosmetic'
import Detail_hazardous from './pages/detail/hazardous'
import Detail_narcotic from './pages/detail/narcotic'
import Detail_medical from './pages/detail/medical'
import Level4 from './pages/level4';
import Level5 from './pages/level5';
import Level6 from './pages/level6';
import Level7 from './pages/level7';
import Level8 from './pages/level8';
import Level9 from './pages/level9';
import Level10 from './pages/level10';
import Level11 from './pages/level11';
import Level12 from './pages/level12';
import Level13 from './pages/level13';
import Level14 from './pages/level14';
import Level15 from './pages/level15';
import Level16 from './pages/level16';
import Level17 from './pages/level17';
import Level18 from './pages/level18';
import Level19 from './pages/level19';
import Level20 from './pages/level20';
import Level21 from './pages/level21';
import Level22 from './pages/level22';
import Level23 from './pages/level23';
import Level24 from './pages/level24';
import Level25 from './pages/level25';
import Level26 from './pages/level26';
import Level27 from './pages/level27';
import Level28 from './pages/level28';
import Level29 from './pages/level29';
const NotFoundPage = () => <h1>Not Found</h1>

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Switch>
        <Route path="/" component={Search} exact/>
        <Route path="/level1/:text" component={level1} exact/>
        <Route path="/level1/:text/drill/:text2" component={level2} exact/>
        <Route path="/level3/" component={level3} exact />
        <Route path="/level3/:a0" component={level3} exact/>
        <Route path="/level3/:a0/:time" component={level3} exact/>
        <Route path="/level3/:a0/:a1" component={level3} exact/>
        <Route path="/level3/:a0/:a1/:time" component={level3} exact/>
        <Route path="/level3/:a0/:a1/:a2" component={level3} exact/>
        <Route path="/level3/:a0/:a1/:a2/:time" component={level3} exact/>
        <Route path="/level3/:a0/:a1/:a2/:a3" component={level3} exact/>
        <Route path="/level3/:a0/:a1/:a2/:a3/:time" component={level3} exact/>
        <Route path="/level4/" component={Level4} exact />
        <Route path="/level5/" component={Level5} exact />
        <Route path="/level6/" component={Level6} exact />
        <Route path="/level7/" component={Level7} exact />
        <Route path="/level8/" component={Level8} exact />
        <Route path="/level9/" component={Level9} exact />
        <Route path="/level10/" component={Level10} exact />
        <Route path="/level11/" component={Level11} exact />
        <Route path="/level12/" component={Level12} exact />
        <Route path="/level13/" component={Level13} exact />
        <Route path="/level14/" component={Level14} exact />
        <Route path="/level15/" component={Level15} exact />
        <Route path="/level16/" component={Level16} exact />
        <Route path="/level17/" component={Level17} exact />
        <Route path="/level18/" component={Level18} exact />
        <Route path="/level19/" component={Level19} exact />
        <Route path="/level19/:a0" component={Level19} exact />
        <Route path="/level20/" component={Level20} exact />
        <Route path="/level20/:a0/:a1" component={Level20} exact />
        <Route path="/level21/" component={Level21} exact />
        <Route path="/level21/:a0/:a1" component={Level21} exact />
        <Route path="/level22/" component={Level22} exact />
        <Route path="/level22/:a0/:a1/:a2" component={Level22} exact />
        <Route path="/level23/" component={Level23} exact />
        <Route path="/level23/:a0/:a1/:a2" component={Level23} exact />
        <Route path="/level24/" component={Level24} exact />
        <Route path="/level24/:a0/:a1/:a2" component={Level24} exact />
        <Route path="/level25/" component={Level25} exact />
        <Route path="/level25/:a0/:a1/:a2" component={Level25} exact />
        <Route path="/level26/" component={Level26} exact />
        <Route path="/level26/:a0/:a1/:a2" component={Level26} exact />
        <Route path="/level27/" component={Level27} exact />
        <Route path="/level27/:a0/:a1" component={Level27} exact />
        <Route path="/level28/" component={Level28} exact />
        <Route path="/level28/:a0/:a1" component={Level28} exact />
        <Route path="/level29/" component={Level29} exact />
        <Route path="/level29/:a0/:a1" component={Level29} exact />
        <Route path="/detail/food/" component={Detail_food} exact/>
        <Route path="/detail/drug/" component={Detail_drug} exact/>
        <Route path="/detail/cosmetic/" component={Detail_cosmetic} exact/>
        <Route path="/detail/hazardous/" component={Detail_hazardous} exact/>
        <Route path="/detail/narcotic/" component={Detail_narcotic} exact/>
        <Route path="/detail/medical/" component={Detail_medical} exact/>
        <Route component={NotFoundPage} />
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
