import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AllProducts from '../Pages/shopPages/AllProducts'
import NewArrivals from '../Pages/shopPages/NewArrivals'
import BestSellers from '../Pages/shopPages/BestSellers'
import Belts from '../Components/AccessoriesComponents/Belts'
import RifleCoversPage from '../Pages/huntingGearPages/RifleCoversPage'
import CartridgeBeltsPage from '../Pages/huntingGearPages/CartridgeBeltsPage'
import GunSlingsPage from '../Pages/huntingGearPages/GunSlingsPage'
import HuntingAccessoriesPage from '../Pages/huntingGearPages/HuntingAccessoriesPage'
import LeatherBagsPage from '../Pages/leatherBagPages/LeatherBagsPage'
import ProductDetailPage from '../Pages/shopPages/ProductDetailPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop/all-products' element={<AllProducts />} />
      <Route path='/shop/new-arrivals' element={<NewArrivals />} />
      <Route path='/shop/best-sellers' element={<BestSellers />} />
      <Route path='/accessories/belts' element={<Belts/>}/>
      <Route path='/hunting/rifle-covers' element={<RifleCoversPage />} />
      <Route path='/hunting/cartridge-belts' element={<CartridgeBeltsPage />} />
      <Route path='/hunting/gun-slings' element={<GunSlingsPage />} />
      <Route path='/hunting/accessories' element={<HuntingAccessoriesPage />} />
      <Route path='/bags/travel-bags' element={<LeatherBagsPage />} />
      <Route path='/bags/duffel-bags' element={<LeatherBagsPage categoryType="duffel" />} />
      <Route path='/bags/messenger-bags' element={<LeatherBagsPage categoryType="messenger" />} />
      <Route path='/bags/backpacks' element={<LeatherBagsPage />} />
      <Route path='/product/:id' element={<ProductDetailPage />} />
      <Route path='/product-detail' element={<ProductDetailPage />} />


    </Routes>
  )
}

export default AppRoutes;
