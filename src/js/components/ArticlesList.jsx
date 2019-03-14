import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
    return { articles: state.articles.articles };
};

const ConnectedList = ({ articles }) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

ConnectedList.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
};

const ArticlesList = connect(mapStateToProps)(ConnectedList);

export default ArticlesList;