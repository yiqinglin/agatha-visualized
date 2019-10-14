import React from 'react';
// import cx from 'classnames';
import injectSheet from 'react-jss';
import Slider from '@material-ui/core/Slider';
import { FilterValueContext } from '../filter-value-context';
import { FilterRangeContext } from '../filter-range-context';

function Filters({classes: c}: props) {
  return (
    <FilterRangeContext.Consumer>
      {range => (
        <FilterValueContext.Consumer>
          {value => (
            <div className={c.container}>
              <h3>Publish Year Range</h3>
                <Slider
                  min={range.publishDate[0]}
                  max={range.publishDate[1]}
                  value={value.filters.publishDateRange}
                  onChange={(event, newValue) => value.handlePDRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.publishDateRange}}`}
                />
              <h3>Page Count</h3>
              <Slider
                  min={range.pageCount[0]}
                  max={range.pageCount[1]}
                  value={value.filters.pageCountRange}
                  onChange={(event, newValue) => value.handlePageCountRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.pageCountRange}}`}
                />
              <h3>Death Count</h3>
              <Slider
                  min={range.deathCount[0]}
                  max={range.deathCount[1]}
                  value={value.filters.deathCountRange}
                  onChange={(event, newValue) => value.handleDeathCountRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.deathCountRange}}`}
                />
              
              <h3>Filter By</h3>
              <h4>Characters</h4>
              <h4>Murder Methods</h4>
            </div>
          )}
        </FilterValueContext.Consumer>
      )} 
    </FilterRangeContext.Consumer>
  );
}

const styles = {
  container: {
    width: '160px'
  }
};

export default injectSheet(styles)(Filters);