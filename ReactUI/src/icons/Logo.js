import PropTypes from 'prop-types';
//import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Link to="/">
      <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />
    </Link>
  );
}
