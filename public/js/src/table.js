import React from "react";
import request from "browser-request";

export default React.createClass({
    getInitialState: function() {
        return {
            items: []
        };
    },
    componentDidMount: function() {
        request({ url: "/api/v1/items", json: true }, (error, response, body) => {
            this.setState(body);
        });
    },
    render: function() {
        return (
            <table>
                {
                    this.state.items.map(player => (
                        <tr>
                            <td>
                                {player.id}
                            </td>
                            <td>
                                {player.name}
                            </td>
                            <td>
                                {player.title}
                            </td>
                            <td>
                                {player.description}
                            </td>
                        </tr>
                    ))
                }
            </table>
        );
    }
});
