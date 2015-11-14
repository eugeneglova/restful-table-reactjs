import React from "react";
import request from "browser-request";
import _ from "underscore";
import Paging from "./paging";

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

function removeItem(component, id) {
    return request({ method: "DELETE", url: "/api/v1/items/" + id }, (error, response, body) => {
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
    handleItemAdd: function() {
        this.setState({ step: "add-item" });
    },
    handleAddButtonClick: function() {
        addItem(this, {
            id: this.refs.id.value,
            name: this.refs.name.value
        });
    },
    handleItemRemove: function(id) {
        var self = this;
        return function(e) {
            removeItem(self, id);
        };
    },
    handlePageClick: function(page) {
        fetchItemsFromPage(this, page);
    },
    render: function() {
        if (this.state.step === "add-item") {
            return (
                <div>
                    <input name="id" ref="id" />
                    <input name="name" ref="name" />
                    <input type="button" onClick={this.handleAddButtonClick} />
                </div>
            );
        }
        return (
            <div>
                <a onClick={this.handleItemAdd}>Add new item</a>
                <table>
                    <tbody>
                    {
                        this.state.items.map(item => (
                            <tr>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td>
                                    <a onClick={this.handleItemRemove(item.id)}>Remove</a>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <Paging paging={this.state.paging} onPageClick={this.handlePageClick} />
            </div>
        );
    }
});
