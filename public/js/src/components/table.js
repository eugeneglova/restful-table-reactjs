import React from "react";
import request from "browser-request";
import _ from "underscore";
import Paging from "./paging";
import AddForm from "./add-form";
import TableRow from "./table-row";

function fetchItemsFromPage(component, page) {
    return request({ url: "/api/v1/items", qs: { page }, json: true }, (error, response, body) => {
        component.setState(_.extend({ step: "list" }, body));
    });
}

function addItem(component, item) {
    return request({ method: "POST", url: "/api/v1/items", body: item, json: true }, (error, response, body) => {
        fetchItemsFromPage(component, 1);
    });
}

function removeItem(component, item) {
    return request({ method: "DELETE", url: "/api/v1/items/" + item.id }, (error, response, body) => {
        fetchItemsFromPage(component, 1);
    });
}

export default React.createClass({
    getInitialState: function() {
        return {
            items: [],
            paging: {},
            step: "list"
        };
    },
    componentDidMount: function() {
        fetchItemsFromPage(this, 1);
    },
    handleAddItemClick: function() {
        this.setState({ step: "add-item" });
    },
    handleAddingNewItem: function(item) {
        addItem(this, item);
    },
    handleItemRemove: function(item) {
        removeItem(this, item);
    },
    handlePageClick: function(page) {
        fetchItemsFromPage(this, page);
    },
    render: function() {
        if (this.state.step === "add-item") {
            return <AddForm onSubmit={this.handleAddingNewItem} />;
        }

        return (
            <div class="container">
                <button type="button" className="btn btn-primary" onClick={this.handleAddItemClick}>Add new item</button>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        {this.state.items.map(item => (<TableRow item={item} onClickRemove={this.handleItemRemove}/>))}
                    </tbody>
                </table>
                <Paging paging={this.state.paging} onPageClick={this.handlePageClick} />
            </div>
        );
    }
});
