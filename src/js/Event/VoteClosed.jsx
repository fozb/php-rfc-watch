var React = require('react')

var Date = require('./../components/Date');
var VoteResults = require('./../components/VoteResults');

module.exports = React.createClass({
    render: function() {
        return (
            <li>
                <i className="fa fa-flag-checkered bg-blue"></i>
                <div className="timeline-item">
                    <Date date={this.props.data.date} />

                    <h3 className="timeline-header">Vote closed</h3>
                    <div className="timeline-body">
                        {this.props.data.user} closed the vote
                        on RFC <a href={this.props.data.vote.url}>{this.props.data.vote.title}</a>

                        <VoteResults results={this.props.data.vote.results} />
                    </div>
                </div>
            </li>
        );
    }
});
