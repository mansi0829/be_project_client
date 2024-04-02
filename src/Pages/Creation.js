import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  faDesktop,
  faServer,
  faCloud,
  faCube,
  faCopy,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Creation = () => {
  const { id } = useParams();
  const [repoData, setRepoData] = useState("");
  const [tabValue, setTabValue] = useState(0); // State to manage selected tab
  const [isCopied, setIsCopied] = useState(false); // State to manage copy notification

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/github-repo/mansi0829/${id}`
        );
        const data = await response.json();
        setRepoData(data.repos);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCopyToClipboard = () => {
    // Execute logic to copy the command to clipboard
    navigator.clipboard.writeText(
      "curl https://raw.githubusercontent.com/elestio/byovm/main/prod.sh | sudo bash"
    );
    setIsCopied(true); // Show copy notification
  };

  const handleCloseSnackbar = () => {
    setIsCopied(false); // Hide copy notification
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Project: {id} User: mansi0829
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Paper elevation={3}>
            <Tabs
              value={tabValue}
              onChange={handleChangeTab}
              variant="fullWidth"
              aria-label="icon label tabs example"
            >
              <Tab icon={<FontAwesomeIcon icon={faDesktop} />} label="Own VM" />
              <Tab icon={<FontAwesomeIcon icon={faServer} />} label="New VM" />
              <Tab icon={<FontAwesomeIcon icon={faCloud} />} label="AWS" />
              <Tab icon={<FontAwesomeIcon icon={faCloud} />} label="Azure" />
              <Tab icon={<FontAwesomeIcon icon={faCube} />} label="GCP" />
            </Tabs>
            <div style={{ padding: "20px", borderTop: "1px solid #ccc" }}>
              {/* Content based on selected tab */}
              {tabValue === 0 && (
                <div>
                  <div className="items-center border flex gap-x-1 p-2 my-2 mb-2">
                    <InfoOutlinedIcon /> We provide the flexibility to deploy
                    services on your own VM from any cloud provider (Azure, GCP,
                    Alibaba, Oracle, etc.) or from a VM hosted on-premise.
                  </div>
                  <div className="items-center border flex gap-x-1 p-2 my-2">
                    <InfoOutlinedIcon /> You can create one Bring Your Own
                    Service for free. To be eligible, the VM you connect must
                    have no more than 2vCPU, max 4GB RAM, and max 80GB disk.
                  </div>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Enter Your VM details</strong>
                  </Typography>
                  <div className="flex gap-x-2">
                    <TextField
                      label="Enter Provider Name"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      label="Enter Region Name"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      label="Ex: 65.8.249.80"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField label="Port" value={22} variant="outlined" />
                  </div>
                  <div className="items-center border flex gap-x-1 p-2 my-4">
                    <InfoOutlinedIcon /> Allow our public key provided below on
                    your VM. After the setup phase, a unique private key will be
                    generated for your service.
                  </div>
                  <Typography gutterBottom>
                    To add our temporary public Key, connect to your VM and
                    type:
                  </Typography>
                  <div className="flex items-center border p-2">
                    <Typography flex="1">
                      curl
                      https://raw.githubusercontent.com/devrajshetake/be-project-jenkins/main/add_key.sh
                      | sudo bash
                    </Typography>
                    <IconButton onClick={handleCopyToClipboard}>
                      <FontAwesomeIcon icon={faCopy} />
                    </IconButton>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "20px" }}
                  >
                    Test my VM
                  </Button>
                  <i className="px-2"></i>
                  <Link to={`deploy/${id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "20px" }}
                    >
                      Deploy
                    </Button>
                  </Link>
                </div>
              )}
              {tabValue === 1 && (
                <div>
                  <Typography variant="body1" align="center">
                    Content for "Use new VM" tab
                  </Typography>
                  {/* Add your content here */}
                </div>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>

      {/* Snackbar for copy notification */}
      <Snackbar
        open={isCopied}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Command copied to clipboard"
      />
    </div>
  );
};

export default Creation;
