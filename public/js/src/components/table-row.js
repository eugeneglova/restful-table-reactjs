import React from "react";

export default React.createClass({
    handleItemRemove: function(item) {
        return () => {
            this.props.onClickRemove(item);
        };
    },
    render: function() {
        var item = this.props.item;

        return (
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
                    <a onClick={this.handleItemRemove(item)}>Remove</a>
                </td>
            </tr>
        );
    }
});
