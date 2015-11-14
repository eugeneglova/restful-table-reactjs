import React from "react";

export default React.createClass({
    handleButtonClick: function(page) {
        this.props.onSubmit({
            id: this.refs.id.value,
            name: this.refs.name.value
        });
    },
    render: function() {
        return (
            <div>
                <input name="id" ref="id" />
                <input name="name" ref="name" />
                <input type="button" onClick={this.handleButtonClick} />
            </div>
        );
    }
});
