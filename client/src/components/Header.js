import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getProducts,
  setCurrentCategory,
  setCurrentPriceSort,
  setCurrentPage
} from '../actions';

class Header extends Component {
  componentDidUpdate = () => {
    const { currentCategory, currentPriceSort, currentPage } = this.props;
    this.props.getProducts(currentCategory, currentPriceSort, currentPage);
  };

  handleCategoryClick = e => {
    this.props.setCurrentCategory(e.target.name);
    // Reset page when new category selected
    this.props.setCurrentPage(1);
    e.preventDefault();
  };

  handlePriceSortClick = e => {
    this.props.setCurrentPriceSort(e.target.name);
    e.preventDefault();
  };

  renderCategories = categories => {
    return categories.map(category => {
      return (
        <a
          key={category}
          className="dropdown-item"
          name={category}
          onClick={this.handleCategoryClick}
          href="/"
        >
          {category}
        </a>
      );
    });
  };

  render() {
    return (
      <div id="top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <a className="navbar-brand" href="/">
            HARRISON IS THE BEST
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                >
                  Filter by category
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    name="All"
                    onClick={this.handleCategoryClick}
                    href="/"
                  >
                    All
                  </a>
                  <div className="dropdown-divider" />
                  {this.renderCategories(this.props.categories)}
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                >
                  Sort by:
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    name="lowest"
                    onClick={this.handlePriceSortClick}
                    href="/"
                  >
                    Low to High
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    name="highest"
                    onClick={this.handlePriceSortClick}
                    href="/"
                  >
                    High to Low
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="I don't work yet"
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="button"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { categories } = state.categories;
  const { currentCategory } = state.currentCategory;
  const { currentPriceSort } = state.currentPriceSort;
  const { currentPage } = state.currentPage;
  return {
    categories,
    currentCategory,
    currentPriceSort,
    currentPage
  };
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  currentCategory: PropTypes.string,
  currentPriceSort: PropTypes.string,
  currentPage: PropTypes.number,
  getProducts: PropTypes.func,
  setCurrentCategory: PropTypes.func,
  setCurrentPriceSort: PropTypes.func,
  setCurrentPage: PropTypes.func
};

export default connect(
  mapStateToProps,
  {
    getProducts,
    setCurrentCategory,
    setCurrentPriceSort,
    setCurrentPage
  }
)(Header);
