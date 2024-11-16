import React from 'react';
import { Container, Typography, Box, Grid, Paper, IconButton } from "@mui/material";
import { FaShieldAlt, FaInfoCircle, FaServer, FaLock, FaEnvelope } from "react-icons/fa";


const page = () => {
    return (
        <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right,  #e3f2fd, #c5cae9)",marginTop: "60px" }}>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: "white", boxShadow: 1, padding: 4 }}>
        <Container maxWidth="lg" align="center">
          <FaShieldAlt size={64} style={{ color: "#4f6d7a", marginBottom: "16px" }} />
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "#37474f" }}>
            Privacy Policy
          </Typography>
          <Typography variant="h6" sx={{ color: "#607d8b" }}>
            Your privacy matters to us. Learn how we protect and manage your information.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
        {/* Introduction Card */}
        <Paper elevation={3} sx={{ marginBottom: 4, padding: 4 }}>
          <Box display="flex" alignItems="center" marginBottom={2}>
            <FaInfoCircle size={32} style={{ color: "#1a237e", marginRight: "16px" }} />
            <Typography variant="h5" component="h2" sx={{ fontWeight: "600", color: "#37474f" }}>
              Welcome
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "#607d8b" }}>
            Welcome to our website. Your privacy is extremely important to us. This policy explains how we collect, use, and protect your information when you use our services.
          </Typography>
        </Paper>

        {/* Information Collection Grid */}
        <Grid container spacing={4} sx={{ marginBottom: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 4 }}>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <FaServer size={32} style={{ color: "#1a237e", marginRight: "16px" }} />
                <Typography variant="h6" sx={{ fontWeight: "600", color: "#37474f" }}>
                  Personal Information
                </Typography>
              </Box>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ display: "flex", alignItems: "center", color: "#607d8b" }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: "#1a237e", borderRadius: "50%", marginRight: "12px" }} />
                  Full Name
                </li>
                <li style={{ display: "flex", alignItems: "center", color: "#607d8b" }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: "#1a237e", borderRadius: "50%", marginRight: "12px" }} />
                  Email Address
                </li>
                <li style={{ display: "flex", alignItems: "center", color: "#607d8b" }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: "#1a237e", borderRadius: "50%", marginRight: "12px" }} />
                  Phone Number
                </li>
              </ul>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 4 }}>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <FaLock size={32} style={{ color: "#1a237e", marginRight: "16px" }} />
                <Typography variant="h6" sx={{ fontWeight: "600", color: "#37474f" }}>
                  Device Information
                </Typography>
              </Box>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ display: "flex", alignItems: "center", color: "#607d8b" }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: "#1a237e", borderRadius: "50%", marginRight: "12px" }} />
                  IP Address
                </li>
                <li style={{ display: "flex", alignItems: "center", color: "#607d8b" }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: "#1a237e", borderRadius: "50%", marginRight: "12px" }} />
                  Browser Information
                </li>
                <li style={{ display: "flex", alignItems: "center", color: "#607d8b" }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: "#1a237e", borderRadius: "50%", marginRight: "12px" }} />
                  Device Type
                </li>
              </ul>
            </Paper>
          </Grid>
        </Grid>

        {/* Data Usage Section */}
        <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
          <Box display="flex" alignItems="center" marginBottom={2}>
            <FaServer size={32} style={{ color: "#1a237e", marginRight: "16px" }} />
            <Typography variant="h6" sx={{ fontWeight: "600", color: "#37474f" }}>
              How We Use Your Information
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ backgroundColor: "#e8eaf6", padding: 3 }}>
                <Typography variant="h6" sx={{ color: "#1a237e", marginBottom: 2 }}>
                  Service Improvement
                </Typography>
                <Typography variant="body1" sx={{ color: "#607d8b" }}>
                  We analyze usage patterns to enhance our website and services.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ backgroundColor: "#e8eaf6", padding: 3 }}>
                <Typography variant="h6" sx={{ color: "#1a237e", marginBottom: 2 }}>
                  Communication
                </Typography>
                <Typography variant="body1" sx={{ color: "#607d8b" }}>
                  We send important updates and respond to your inquiries.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* Contact Section */}
        <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
          <Box display="flex" alignItems="center" marginBottom={2}>
            <FaEnvelope size={32} style={{ color: "#1a237e", marginRight: "16px" }} />
            <Typography variant="h6" sx={{ fontWeight: "600", color: "#37474f" }}>
              Contact Us
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "#607d8b", marginBottom: 2 }}>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <a href="mailto:contact@example.com" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <IconButton sx={{ backgroundColor: "#1a237e", color: "white", marginRight: 2 }}>
              <FaEnvelope />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#1a237e", fontWeight: "600" }}>contact@example.com</Typography>
          </a>
        </Paper>

        {/* Last Updated */}
        <Typography variant="body2" align="center" sx={{ color: "#607d8b", paddingTop: 4 }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Container>
    </div>
    );
};

export default page;