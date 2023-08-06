import React from 'react';
import { setFilter } from 'redux/filter/reducers';
import { connect } from 'react-redux';
import css from './filter.module.css'

const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts by name"
      className={css.input}
    />
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (event) => dispatch(setFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
