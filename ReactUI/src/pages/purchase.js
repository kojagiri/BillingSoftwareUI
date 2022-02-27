import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { purchase } from '../__mocks__/purchase';
import { PurchaseListToolbar } from '../components/purchase/purchase-list-toolbar';
import { PurchaseCard } from '../components/purchase/purchase-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Purchase = () => (
  <>
    <Head>
      <title>
        Purchase | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <PurchaseListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {purchase.map((purchaseItem) => (
              <Grid
                item
                key={purchaseItem.id}
                lg={4}
                md={6}
                xs={12}
              >
                <PurchaseCard purchase={purchaseItem} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Purchase.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Purchase;
