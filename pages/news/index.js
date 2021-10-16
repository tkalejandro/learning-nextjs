//No need to import react from react

import Link from "next/link"

const NewsPage = () => {

    return (
        <>
        <h1>News Page</h1>
        <ul>
            <li><Link href="/news/next-js-is-the-best">Next JS is the  best</Link></li>
            <li><Link href="/news/learn-react">Learn React</Link></li>
        </ul>
        </>
        
    )
}

export default NewsPage