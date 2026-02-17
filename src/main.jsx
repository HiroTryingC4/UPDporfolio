import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ProjectDetail from './components/ProjectDetail'
import WhatIDo from './components/WhatIDo'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import RevealOnScroll from './components/RevealOnScroll'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <RevealOnScroll />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/what-i-do" element={<WhatIDo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
