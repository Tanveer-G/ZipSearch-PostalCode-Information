import BrandHeader from './components/Layout/BrandHeader'
import FiltersBar from './components/FiltersBar'
import SearchBar from './components/SearchBar'
import MainContent from './components/ContentUI/MainContent'
import Footer from './components/Layout/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <BrandHeader />
      <FiltersBar />
      <SearchBar />
      <MainContent />
      <Footer />
    </>
  )
}
