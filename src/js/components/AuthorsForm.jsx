import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addAuthor, deleteAuthor } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addAuthor: author => dispatch(addAuthor(author)),
        deleteAuthor: author => dispatch(deleteAuthor(author))
    }
}

const mapStateToProps = state => {
    return {
        author_deletion_failure: state.authors.author_deletion_failure
    }
};

class ConnectedAuthorForm extends Component {
    constructor() {
        super();

        this.state = {
            name: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name} = this.state;
        const id = uuidv1();
        this.props.addAuthor({name, id});
        this.setState({name: ""});
    }

    handleDelete(event) {
        event.preventDefault();
        const { name } = this.state;
        this.props.deleteAuthor({name});
        this.setState({name: ""});
    }

    render() {
        const {name} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                        {this.props.author_deletion_failure &&
                        <p>Author was not found!</p>
                        }
                    </div>
                    <button type="submit" className="btn btn-success btn-lg">
                        SAVE
                    </button>
                </form>

                <form onSubmit={this.handleDelete}>
                    <div className="form-group">

                    </div>
                    <button type="submit" className="btn btn-success btn-lg">
                        DELETE
                    </button>
                </form>
            </div>
        );
    }
}


const AuthorsForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedAuthorForm);

export default AuthorsForm;