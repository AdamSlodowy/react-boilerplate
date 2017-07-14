/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import {fetchTopics, setSelectedTopic} from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navigation {...this.props}/>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchTopics();
  }
}

NavigationContainer.propTypes = {
  fetchTopics: React.PropTypes.func.isRequired
};



const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    fetchTopics: () => dispatch(fetchTopics()),
    selectTopic: (topic) => dispatch(setSelectedTopic(topic))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
