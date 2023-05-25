import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagenation from "./components/Pagenation";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";
import './App.css'

export default function App() {

  
  useEffect( () => {
     const {fetchBlogPost} = useContext(AppContext);
    fetchBlogPost();
  },[]);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center h-screen">
      <Header/>
      <Blogs/>
      <Pagenation/>
    </div>
  )
}
