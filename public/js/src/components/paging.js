import React from "react";
import _ from "underscore";

export default React.createClass({
    handlePageClick: function(page) {
        return () => {
            this.props.onPageClick(page);
        };
    },
    render: function() {
        if ( ! this.props.paging.pages) return null;

        return (
            <div>
                <p>Pages:</p>
                {_.times(this.props.paging.pages, (page) => {
                    if (this.props.paging.page === page + 1) {
                        return (
                            <button className="btn btn-default active">{page + 1}</button>
                        );
                    } else {
                        return (
                            <button className="btn btn-default" onClick={this.handlePageClick(page + 1)}>{page + 1}</button>
                        );
                    }
                })}
            </div>
        );
    }
});
