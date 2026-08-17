import React from "react";
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import AppRoutes from './Routes/AppRoutes';
import ScrollToTop from './Components/ScrollToTop';
import { ToastProvider } from './Context/ToastContext';
import ToastContainer from './Components/ToastComponents/ToastContainer';

const App = () => {
  return (
    <ToastProvider>
      <div className="w-full max-w-full overflow-x-hidden min-h-screen flex flex-col justify-between bg-[#FAF8F5]">
        <Navbar />
        <ScrollToTop />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <AppRoutes />
        </main>
        <ToastContainer />
        <Footer />
      </div>
    </ToastProvider>
  );
};

export default App;
