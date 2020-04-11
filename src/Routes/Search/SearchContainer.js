import React from 'react';
import SearchPresenter from './SearchPresenter';
import { tvApi } from 'api';
import { moviesApi } from '../../api';

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: 'code',
    loading: false,
    error: null,
  };

  componentDidMount() {
    console.log('component did mount');
    this.handleSubmit();
  }
  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      console.log(movieResults, tvResults);
      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({
        error: "can't find results!!",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
