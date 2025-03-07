import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const GeneralContext = React.createContext();

const GeneralContextProvider = ({children}) => {

    const [topNews, setTopNews] = useState([])

    const [businessNews, setBusinessNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);
    const [politicsNews, setPoliticsNews] = useState([]);

    useEffect(() => { 
        fetchTopNews() 
        fetchBusinessNews()
        fetchPoliticsNews()
        fetchTechnologyNews()
      }, [])
    
      const fetchTopNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=popular&apiKey=7579e04f8fc643fe9026a8c09de5cf6e");
          setTopNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

      const fetchBusinessNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=business&apiKey=7579e04f8fc643fe9026a8c09de5cf6e");
          setBusinessNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchPoliticsNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=politics&apiKey=7579e04f8fc643fe9026a8c09de5cf6e");
          setPoliticsNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchTechnologyNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=technology&apiKey=7579e04f8fc643fe9026a8c09de5cf6e");
          setTechnologyNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

    
  return (
    <GeneralContext.Provider value={{topNews, businessNews, technologyNews, politicsNews}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider