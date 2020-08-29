import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

function Index() {
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Next.js example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
export default connect(null, null)(Index);
