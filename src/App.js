import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {AddArticle} from "./component/AddArticle";
import ArticleList from "./component/ArticleList";
import {Loading} from "./component/Loading/Loading";
import ApiService from "./component/service/ApiService";

function App() {
    const [data, setData] = useState([])
    const [firstFetch, setFetch] = useState(true)
    const [editedArticle, setEditedArticle] = useState(null)

    const editTheArticle = (article) => {
        setEditedArticle(article)
    }
    const updatedData = (article) => {
        const new_article = data.map(my_article => {
            if (my_article.id === article.id) {
                return article
            } else {
                return my_article
            }
        })
        setData(new_article)
    }
    const insertedArticle = (article) => {
        const new_article = [article, ...data]
        setData(new_article)
    }
    const deleteArticle = (article) => {
        const filteredArticles = data.filter(my_article => my_article.id !== article.id)
        setData(filteredArticles)
    }


    async function fetchData() {
        try {
            const result = await fetch(`${ApiService.URL}/get`)
            const newData = await result.json()
            setData(newData)
        } catch (err) {
            console.log(err.response.data);
        }
    }

    const timedFetch = () => {
        const interval = setTimeout(() => {
            fetchData()
        }, 800000);
        return () => clearTimeout(interval)
    }
    useEffect(() => {
        if (!(firstFetch)) {
            timedFetch()
        } else {
            fetchData()
            setFetch(false)
        }
    }, [firstFetch, data,insertedArticle,updatedData])


    return (
        <div className="container App">

            <br/><br/>
            <h1 className="header-color">Articles App </h1>
            <br/><br/>

            <React.Fragment>
                <AddArticle fetchData={fetchData} editTheArticle={editTheArticle}  insertedArticle={insertedArticle} updatedData={updatedData} article={data}/>
                <br/><br/>
            </React.Fragment>

            {data && data.length ? (
                <React.Fragment>
                    <ArticleList fetchData={fetchData} insertedArticle={insertedArticle} updatedData={updatedData} editedArticle={editedArticle} editTheArticle={editTheArticle} data={data} deleteArticle={deleteArticle} />
                </React.Fragment>
            ):(
                <Loading />
            ) }



        </div>
    )
}

export default App;
