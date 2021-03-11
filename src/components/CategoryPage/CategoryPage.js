import React from 'react'
import SearchArea from '../searchResult/searchArea/SearchArea'
import SideBar from '../searchResult/sideBar/SideBar'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ProductCatalog from '../shoppingCart/productCatalog/ProductCatalog'

const CategoryPage = () => {
    return (
        <>
            <Header></Header>
            <SearchArea></SearchArea>
            <SideBar></SideBar>
            <Footer></Footer>
        </>
    )
}

export default CategoryPage
