import React from "react";

export default React.createClass({
    handleButtonClick: function(page) {
        this.props.onSubmit({
            id: this.refs.id.value,
            name: this.refs.name.value,
            title: this.refs.title.value,
            description: this.refs.description.value
        });
    },
    render: function() {
        return (
            <form class="container">
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input type="id" className="form-control" id="id" placeholder="ID" ref="id" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Name" ref="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="title" className="form-control" id="title" placeholder="Title" ref="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="description" className="form-control" id="description" placeholder="Description" ref="description" />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.handleButtonClick}>Add</button>
            </form>
        );
    }
});
