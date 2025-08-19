import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import OurServices from './components/Services/OurServices.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Toaster } from 'react-hot-toast'
import PerformanceMarketing from './components/ServicesExplanation/PerformanceMarketing.jsx'
import MobileMarketing from './components/ServicesExplanation/MobileMarketing .jsx'
import NativeAds from './components/ServicesExplanation/NativeAds.jsx'
import MediaBuying from './components/ServicesExplanation/MediaBuying.jsx'
import Seo from './components/ServicesExplanation/Seo.jsx'
import MetaAds from './components/ServicesExplanation/MetaAds.jsx'
import ProgrammaticBuying from './components/ServicesExplanation/ProgrammaticBuying.jsx'
import Search from './components/ServicesExplanation/Search.jsx'
import PrivacyPolicy from './components/Footer/PrivacyPolicy.jsx'
import TermAndCondition from './components/Footer/TermAndCondition.jsx'
   
const router = createBrowserRouter([ 
     {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'services',
          element: <OurServices/>
        },
        {
          path: 'performancemarketing',
          element: <PerformanceMarketing />
        },
        {
           path: 'mobilemarketing',
           element: <MobileMarketing />
        },
        {
           path: 'nativeads',
           element: <NativeAds />
        },
        {
           path: 'mediabuying',
           element: <MediaBuying />
        },
        {
           path: 'seo',
           element: <Seo />
        },
        {
           path: 'metaads',
           element: <MetaAds />
        },
        {
           path: 'programmatic',
           element: <ProgrammaticBuying />
        },
        {
           path: 'search-display',
           element: <Search />
        },
        {
           path:'privacy-policy',
           element: <PrivacyPolicy />
        },
        {
           path:'terms-and-conditions',
           element: <TermAndCondition />
        }
      ]
     }
 ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
     <Toaster />
  </StrictMode>,
)
