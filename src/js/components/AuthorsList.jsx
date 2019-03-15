import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
    return {authors: state.authors.authors};
};

const AuthorsConnectedList = ({authors}) => (
    <ul className="list-group list-group-flush">
        {authors.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.name}
            </li>
        ))}
    </ul>
);

AuthorsConnectedList.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
};

const AuthorsList = connect(mapStateToProps)(AuthorsConnectedList);

export default AuthorsList;