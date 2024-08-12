import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {Helmet} from 'react-helmet';
import{Toaster} from 'react-hot-toast';
const Layout = (props) => {
  return (
    <div>
    <Helmet>
    <meta charSet="utf-8" />
    <meta name='descripton' content={props.description}/>
    <meta name='keywords' content={props.keywords}/>
    <meta name='author' content={props.author}/>
    <title>{props.title}</title>             
    </Helmet>
    <Header/>
    <main style={{minHeight:'70vh'}}>
    <Toaster/>
    {props.children}
    </main>
      <Footer/>

    </div>
  )
}

Layout.defaultProps={
  title:"Hindustan Market -Khridari Kare ",
  description:"MERN Stack Project",
  keywords:"mern , react , node , mongodb, bootstrap,HTML",
  author:"Akhil Singh"

}



export default Layout
