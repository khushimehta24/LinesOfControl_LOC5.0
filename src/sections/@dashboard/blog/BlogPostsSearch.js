import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material';
// components
import Iconify from '../../../components/iconify';
import GetServices from 'src/services/GetServices';
import { useState } from 'react';

// ----------------------------------------------------------------------

const StyledPopper = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

BlogPostsSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function BlogPostsSearch({ prod, setProd }) {
  const [search, setSearch] = useState('')
  const change = async (e) => {
    setSearch(e.target.value)
    await GetServices.search({ search: e.target.value })
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={StyledPopper}
      options={prod}
      getOptionLabel={(prod) => prod.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          onChange={change}
          {...params}
          placeholder="Search post..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
