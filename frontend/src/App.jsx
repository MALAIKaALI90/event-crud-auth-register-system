import { Routes, Route } from 'react-router-dom';

import HeroSection from './components/Hero';
import EventCards from './components/Events';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Form from './Components/Form';
import { ToastContainer } from "react-toastify";

import AdminTable from '../../admin/src/pages/AdminTable';
const App = () => {

  return (
  <>
  <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection/>} />
           {/* <Route path="/admin" element={<Sidebar/>} />
      <Route path="/add" element={<AddEvent/>} />
            <Route path="/list" element={<ListMenu/>} /> */}
            <Route path="/table" element={<AdminTable />} />

        <Route path="/events" element={<EventCards />} />
         <Route path="/form" element={<Form/>} />
      </Routes>
      <Footer/>
      </>
   
  );
};

export default App;

