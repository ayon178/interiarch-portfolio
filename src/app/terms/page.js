import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider, Link } from '@mui/material';

const page = () => {
    return (
        <div style={{ minHeight: '100vh', background: '#f9fafb',marginTop: "90px" }}>
      {/* Hero Section */}
      <Box sx={{ background: 'linear-gradient(to right, #1e3a8a, #2563eb)', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" fontWeight="bold" mb={2}>
            Terms and Conditions
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Please read these terms carefully before using our real estate services.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
          {/* Introduction Section */}
          <Box sx={{ px: 4, py: 4, borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="h4" fontWeight="bold" color="textPrimary" gutterBottom>
              Welcome to [Real Estate Company Name]
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              These terms and conditions outline the rules and regulations for the use of our real estate services, 
              website, and all related platforms. By accessing our services, you accept these terms and conditions in full.
            </Typography>
          </Box>

          {/* Definitions Section */}
          <Box sx={{ px: 4, py: 4, backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="h5" color="textPrimary" fontWeight="medium" gutterBottom>
              1. Definitions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Paper sx={{ padding: 3 }}>
                <Typography variant="subtitle1" color="primary" fontWeight="medium">
                  Company
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  "Company," "we," "our," or "us" refers to [Real Estate Company Name].
                </Typography>
              </Paper>
              <Paper sx={{ padding: 3 }}>
                <Typography variant="subtitle1" color="primary" fontWeight="medium">
                  Services
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  All real estate related services, including property listings, consultations, and transactions.
                </Typography>
              </Paper>
              <Paper sx={{ padding: 3 }}>
                <Typography variant="subtitle1" color="primary" fontWeight="medium">
                  Client
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  "Client," "you," or "your" refers to the user of our services.
                </Typography>
              </Paper>
            </Box>
          </Box>

          {/* Property Listings Section */}
          <Box sx={{ px: 4, py: 4, borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="h5" color="textPrimary" fontWeight="medium" gutterBottom>
              2. Property Listings
            </Typography>
            <List sx={{ pl: 4 }}>
              <ListItem>
                <ListItemText primary="All property listings are subject to availability and prior sale." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Property information is believed to be accurate but should be independently verified." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Prices are subject to change without notice." />
              </ListItem>
            </List>
          </Box>

          {/* Services Agreement */}
          <Box sx={{ px: 4, py: 4, backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="h5" color="textPrimary" fontWeight="medium" gutterBottom>
              3. Services Agreement
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Paper sx={{ padding: 3 }}>
                <Typography variant="h6" color="primary" fontWeight="medium" gutterBottom>
                  Brokerage Services
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Property showing and viewing arrangements" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Market analysis and property valuation" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Negotiation assistance" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Transaction documentation support" />
                  </ListItem>
                </List>
              </Paper>

              <Paper sx={{ padding: 3 }}>
                <Typography variant="h6" color="primary" fontWeight="medium" gutterBottom>
                  Client Obligations
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Provide accurate information" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Cooperate with property viewings" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Timely response to communications" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Meet financial obligations" />
                  </ListItem>
                </List>
              </Paper>
            </Box>
          </Box>

          {/* Payment Terms */}
          <Box sx={{ px: 4, py: 4, borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="h5" color="textPrimary" fontWeight="medium" gutterBottom>
              4. Payment Terms
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Our commission structure is as follows:
            </Typography>
            <Box sx={{ backgroundColor: '#e3f2fd', padding: 3, borderRadius: 1 }}>
              <List sx={{ pl: 4 }}>
                <ListItem>
                  <ListItemText primary="Residential Sales: [X]% of sale price" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Commercial Sales: [X]% of sale price" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Rental Properties: [X] month's rent" />
                </ListItem>
              </List>
            </Box>
            <Typography variant="body1" color="textSecondary" paragraph sx={{ mt: 3 }}>
              Additional fees may apply for:
            </Typography>
            <List sx={{ pl: 4 }}>
              <ListItem>
                <ListItemText primary="Marketing services" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Professional photography" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Virtual tours" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Administrative services" />
              </ListItem>
            </List>
          </Box>

          {/* Termination */}
          <Box sx={{ px: 4, py: 4, backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="h5" color="textPrimary" fontWeight="medium" gutterBottom>
              5. Termination
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Either party may terminate the service agreement under the following conditions:
            </Typography>
            <List sx={{ pl: 4 }}>
              <ListItem>
                <ListItemText primary="Mutual written agreement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Material breach of terms" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Failure to meet obligations" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Written notice period of [X] days" />
              </ListItem>
            </List>
          </Box>

          {/* Liability */}
          <Box sx={{ px: 4, py: 4, borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="h5" color="textPrimary" fontWeight="medium" gutterBottom>
              6. Liability
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Our company shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of our services.
            </Typography>
            <Box sx={{ backgroundColor: '#fff8e1', padding: 3, borderRadius: 1, border: '1px solid #ffe082' }}>
              <Typography variant="body2" color="warning.main">
                We recommend all clients to conduct their own due diligence and seek independent legal advice when necessary.
              </Typography>
            </Box>
          </Box>

          {/* Conclusion */}
          <Box sx={{ px: 4, py: 4 }}>
            <Typography variant="h5" color="textPrimary" fontWeight="medium" gutterBottom>
              7. Conclusion
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              By engaging our services, you agree to the terms outlined in this document. For any queries, please 
              contact us at: 
              <Link href="mailto:support@realestate.com" sx={{ ml: 1 }}>
                support@realestate.com
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
    );
};

export default page;