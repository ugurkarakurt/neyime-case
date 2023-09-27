import { useLocation } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import { Fragment, useContext, useEffect, useState } from 'react';
import { SearchContainer } from './search.styles';
import { CategoriesContext } from '../../contexts/categories.context';


const defaultFormFields = {
  search: ''
};

const Search = () => {
  const location = useLocation();
  const { setSearchValue } = useContext(CategoriesContext);

  const [searchField, setSearchField] = useState(defaultFormFields);
  const { search } = searchField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchField({ ...searchField, [name]: value });
  };

  const resetFormFields = () => {
    setSearchField(defaultFormFields);
  };

  useEffect(() => {
    setSearchValue(search);
  }, [search, setSearchField, setSearchValue])

  useEffect(() => {
    resetFormFields()
  }, [location.pathname]);

  return (
    <Fragment>
      {
        location.pathname.startsWith('/bulletin/') && (
          <SearchContainer>
            <FormInput
              label='Search by Team Names'
              type='text'
              onChange={handleChange}
              required
              name='search'
              value={search}
            />
          </SearchContainer>
        )
      }
    </Fragment>
  )
}

export default Search;