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
                Pages:
                {_.times(this.props.paging.pages, (page) => {
                    if (this.props.paging.page === page + 1) {
                        return (
                            <strong>{page + 1}</strong>
                        );
                    } else {
                        return (
                            <button onClick={this.handlePageClick(page + 1)}>{page + 1}</button>
                        );
                    }
                })}
            </div>
        );
    }
});
