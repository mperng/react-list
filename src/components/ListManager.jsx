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
        // 'items' parameter passed to List initializes this.props.items in List
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.newItemText}/>
                    <button>Add</button>
                </form>
                <List items={this.state.items}/>
            </div>
        );
    }
});

module.exports = listManager;
