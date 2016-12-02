var React = require('react');
var List = require('./List.jsx');

var listManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText: ''};
    },
    // called when submit button clicked for form
    handleSubmit: function(e) {
        if (this.state.newItemText === '')
            return;
        e.preventDefault(); // turn off built-in on-click listener
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ''});
    },
    // set newItemText to e.target.value on change to the value
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    render: function() {
        var divStyle = {
            marginTop: 10
        };

        var headingStyle = {};

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }
        // 'items' parameter passed to List initializes this.props.items in List
        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText}/>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                    <List items={this.state.items}/>
                </div>
            </div>
        );
    }
});

module.exports = listManager;
