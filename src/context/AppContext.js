import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//1
export const AppContext = createContext();

function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    //data filling

    async function fetchBlogPost(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        console.log(url)
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.log("Error in fetchting data");
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPost(page);
    }

    const value = { 
        post,
        setPost,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    };
        //2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}

export default AppContextProvider