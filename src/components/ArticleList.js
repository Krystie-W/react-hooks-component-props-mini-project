import React from "react";
import Article from "./Article";

function ArticleList ({ posts }) {
    return (
        <main>
            {posts.map((blogpost) => {
          return <Article key={blogpost.id} title={blogpost.title} date={blogpost.date} preview={blogpost.preview} minutes={blogpost.minutes}/>
            })}
        </main>
    )
}


export default ArticleList;