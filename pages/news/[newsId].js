//Our domain/news/1
//                2
//                3
//                4

import { useRouter } from "next/dist/client/router"

const DetailPage = () => {

    const router = useRouter()
    //This way he can identify what. Try to console it.
    
    //console.log(router.query.newsId)


    const newsId = router.query.newsId
    //Send request to API!
    //To fetch the news item with  news ID

    return (
        <h1>Detail Page</h1>
    )
}

export default DetailPage