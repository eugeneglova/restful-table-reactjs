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
                {_.times(this.props.paging.pages, (page) => {
                    if (this.props.paging.page === page + 1) {
                        return (
                            <b>{page + 1}</b>
                        );
                    } else {
                        return (
                            <a href="javascript:void(0);" onClick={this.handlePageClick(page + 1)}>{page + 1}</a>
                        );
                    }
                })}
            </div>
        );
    }
});
