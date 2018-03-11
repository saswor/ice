import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Search, Grid } from '@icedesign/base';
import './FilterWithSearch.scss';

const { Row, Col } = Grid;

export default class FilterWithSearch extends Component {
  static displayName = 'FilterWithSearch';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  selectFilter = (type) => {
    console.log(type);
    // type can be 'all', 'process', 'pending'
    // handler
  };

  handleSearch = () => {
    // handler logical
  };

  render() {
    return (
      <div className="filter-with-search" style={styles.filterWithSearch}>
        <IceContainer
          className="filter-with-search-container"
          style={styles.filterWithSearchContainer}
        >
          <Row wrap justify="space-between">
            <Col xxs={24} s={8} style={styles.filterContainer}>
              <span
                className="filter-item selected"
                style={styles.filterItemSelected}
                onClick={this.selectFilter.bind(this, 'all')}
              >
                全部
              </span>
              <span
                className="filter-item"
                style={styles.filterItem}
                onClick={this.selectFilter.bind(this, 'process')}
              >
                进行中
              </span>
              <span
                className="filter-item"
                style={styles.filterItem}
                onClick={this.selectFilter.bind(this, 'pending')}
              >
                等待中
              </span>
            </Col>
            <Col xxs={24} s={16}>
              <Search
                inputWidth={250}
                searchText=""
                size="large"
                placeholder="请输入要搜索的关键词或商品链接"
                onSearch={this.handleSearch}
              />
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  filterContainer: {
    marginBottom: '20px',
    lineHeight: '32px',
  },
  filterItem: {
    height: '20px',
    padding: '0 20px',
    color: '#333',
    fontSize: '14px',
    cursor: 'pointer',
    borderRight: '1px solid #D8D8D8',
  },
};
