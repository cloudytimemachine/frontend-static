import React from 'react'
import { Link } from 'react-router'
import SearchBox from '../shared_components/SearchBox'

export default React.createClass({
  render() {
    return (
      <div>
        <h4>Search previous Cloudy Captures</h4>
        <SearchBox />
      </div>
    )
  }
})