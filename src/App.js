import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, PrivateRout } from 'react-router-dom';
import Home from './components/share/home/Home/Home';
import Package from './components/share/home/package/Package'
import Heritage from './components/share/home/Heritage/Heritage';
import Header from './components/share/Header/Header';
import Login from './components/share/login/Login';
import WhyUs from './components/why/WhyUs';
import Footer from './components/share/footer/Footer';
import NotFound from './components/notfound/NotFound';
import Pack from './components/share/home/package/Pack';
import PrivateRoute from '../src/components/Private/PrivateRoute'
import AddPackage from './components/addPackage/AddPackage';
import MyBooking from './components/booking/MyBooking';
import AuthProvider from './components/context/AuthProvider';
import ManageOrder from './components/ManageOrder/ManageOrder';


function App() {
    return (
        <div className="App">
            <AuthProvider>

                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/home'>
                            <Home></Home>
                        </Route>


                        <PrivateRoute exact path='/add'>
                            <AddPackage></AddPackage>
                        </PrivateRoute>
                        <Route exact path='/login'>
                            <Login></Login>
                        </Route>

                        <PrivateRoute exact path='/package/:pack'>
                            <Pack></Pack>
                        </PrivateRoute>
                        <PrivateRoute exact path='/booking'>
                            <MyBooking></MyBooking>
                        </PrivateRoute>
                        <PrivateRoute exact path='/manage'>
                            <ManageOrder></ManageOrder>
                        </PrivateRoute>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
