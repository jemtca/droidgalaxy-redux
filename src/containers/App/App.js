import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'tachyons';
import CardList from '../../components/CardList/CardList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from '../../components/Scroll/Scroll';

import { setSearchField, requestDroids } from '../../actions';
 
const mapStateToProps = (state) => {
  return {
    searchField: state.searchDroids.searchField,
    droids: state.requestDroids.droids,
    isPending: state.requestDroids.isPending,
    error: state.requestDroids.error
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestDroids: () => dispatch(requestDroids())
  };
};

class App extends Component {

  componentDidMount() {
    this.props.onRequestDroids();
  }

  render() {
    const { searchField, onSearchChange, droids, isPending } = this.props;

    const filteredDroids = droids.filter(droid => {
      return droid.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      isPending === true
      ? <h1 className='ma3 yellow'>LOADING . . .</h1>
      : <div className='tc'>
          <h1 className='yellow f-subheadline'>DROID GALAXY</h1>
          <SearchBox onSearchChange={onSearchChange} />
          <Scroll>
            <CardList droids={filteredDroids} />
          </Scroll>
        </div>
    );
  }

}

export default connect(mapStateToProps, mapDispachToProps)(App);
