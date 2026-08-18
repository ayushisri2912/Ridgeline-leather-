import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AllProducts from '../Pages/shopPages/AllProducts'
import NewArrivals from '../Pages/shopPages/NewArrivals'
import BestSellers from '../Pages/shopPages/BestSellers'
import Belts from '../Components/AccessoriesComponents/Belts'
import Wallets from '../Components/AccessoriesComponents/Wallets'
import KeyChain from '../Components/AccessoriesComponents/KeyChain'
import LeatherCare from '../Components/AccessoriesComponents/LeatherCare'
import RifleCoversPage from '../Pages/huntingGearPages/RifleCoversPage'
import CartridgeBeltsPage from '../Pages/huntingGearPages/CartridgeBeltsPage'
import GunSlingsPage from '../Pages/huntingGearPages/GunSlingsPage'
import HuntingAccessoriesPage from '../Pages/huntingGearPages/HuntingAccessoriesPage'
import LeatherBagsPage from '../Pages/leatherBagPages/LeatherBagsPage'
import ProductDetailPage from '../Pages/shopPages/ProductDetailPage'
import Wishlist from '../Pages/Wishlist'
import StoreLocator from '../Pages/StoreLocator'
import OurStory from '../Pages/craftsmanshipPages/OurStory'
import HowItsMade from '../Pages/craftsmanshipPages/HowItsMade'
import LeatherMaterials from '../Pages/craftsmanshipPages/LeatherMaterials'
import WarrantyQuality from '../Pages/craftsmanshipPages/WarrantyQuality'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/stores' element={<StoreLocator />} />
      <Route path='/store-locator' element={<StoreLocator />} />
      <Route path='/shop/all-products' element={<AllProducts />} />
      <Route path='/shop/new-arrivals' element={<NewArrivals />} />
      <Route path='/shop/best-sellers' element={<BestSellers />} />
      <Route path='/accessories/belts' element={<Belts/>}/>
      <Route path='/accessories/wallets' element={<Wallets />} />
      <Route path='/accessories/keychains' element={<KeyChain />} />
      <Route path='/accessories/leather-care-products' element={<LeatherCare />} />
      <Route path='/craftsmanship/our-story' element={<OurStory />} />
      <Route path='/craftsmanship/how-its-made' element={<HowItsMade />} />
      <Route path='/craftsmanship/leather-materials' element={<LeatherMaterials />} />
      <Route path='/craftsmanship/warranty-quality' element={<WarrantyQuality />} />
      <Route path='/hunting/rifle-covers' element={<RifleCoversPage />} />
      <Route path='/hunting/cartridge-belts' element={<CartridgeBeltsPage />} />
      <Route path='/hunting/gun-slings' element={<GunSlingsPage />} />
      <Route path='/hunting/accessories' element={<HuntingAccessoriesPage />} />
      
      {/* Leather Bags Submenu Pages */}
      <Route path='/bags/duffel-bags' element={<LeatherBagsPage categoryType="duffel" />} />
      <Route path='/bags/messenger-bags' element={<LeatherBagsPage categoryType="messenger" />} />
      <Route path='/bags/backpacks' element={<LeatherBagsPage categoryType="backpack" />} />
      <Route path='/bags/tote-bags' element={<LeatherBagsPage categoryType="tote" />} />
      <Route path='/bags/travel-bags' element={<LeatherBagsPage categoryType="travel" />} />
      
      {/* Wishlist Page */}
      <Route path='/wishlist' element={<Wishlist />} />

      <Route path='/product/:id' element={<ProductDetailPage />} />
      <Route path='/product-detail' element={<ProductDetailPage />} />
    </Routes>
  )
}

export default AppRoutes;
