import React from "react";
import ArticlesList from "./ArticlesList";
import AuthorsList from "./AuthorsList";
import ArticlesForm from "./ArticlesForm";
import AuthorsForm from "./AuthorsForm";

const App = () => (
    <div>
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <ArticlesList/>
            </div>

            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <ArticlesForm/>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Authors</h2>
                <AuthorsList/>
            </div>

            <div className="col-md-4 offset-md-1">
                <h2>Add new author</h2>
                <AuthorsForm/>
            </div>
        </div>
    </div>
);

export default App;