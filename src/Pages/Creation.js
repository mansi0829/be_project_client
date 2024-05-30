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
import LinearProgress from "@mui/material/LinearProgress";

const Creation = () => {
  const { id } = useParams();
  const [repoData, setRepoData] = useState("");
  const [tabValue, setTabValue] = useState(0); // State to manage selected tab
  const [isCopied, setIsCopied] = useState(false); // State to manage copy notification
  const [providerName, setProviderName] = useState("");
  const [regionName, setRegionName] = useState("");
  const [publicIP, setPublicIP] = useState("");
  const [port, setPort] = useState(22);
  const [isLoadingLogs, setLoadingLogs] = useState(false);
  const [logData, setLogData] = useState([]);

  const [isLoadingDetails, setLoadingDetails] = useState(true);
  const [deploymentProgress, setDeploymentProgress] = useState(0);
  const [deploymentError, setDeploymentError] = useState(false); // State to manage deployment error

  const simulateDeployment = () => {
    setLoadingLogs(true);

    const interval = setInterval(() => {
      setDeploymentProgress((prevProgress) =>
        prevProgress >= 50 ? 50 : prevProgress + 10
      );
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setLoadingLogs(false);
      setLoadingDetails(false);
      if (deploymentProgress < 51) {
        // Set deployment error if progress is less than 50%
        setDeploymentError(true);
      }
    }, 10000);
  };

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
    navigator.clipboard.writeText(
      "curl https://raw.githubusercontent.com/devrajshetake/be-project-jenkins/main/add_key.sh | sudo bash"
    );
    setIsCopied(true);
  };

  const handleCloseSnackbar = () => {
    setIsCopied(false);
  };
  const [vmData, setVmData] = useState([]);
  const [vmMsg, setVmMsg] = useState("");

  const handleVMTest = async () => {
    try {
      const dataToSend = {
        public_ip: publicIP,
        provider: providerName,
        region: regionName,
        user: 1,
      };

      const response = await fetch(`http://127.0.0.1:8000/automation/vms/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const data = await response.json();
        setVmData(data);
        console.log(data);
        simulateDeployment();
        setVmMsg("success");
      } else {
        setVmMsg("failure");
      }
    } catch (error) {
      console.error("Error sending VM test data:", error);
    }
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
              <Tab
                icon={<FontAwesomeIcon icon={faServer} />}
                label="Deploy VM"
              />
              <Tab icon={<FontAwesomeIcon icon={faCloud} />} label="AWS" />
              {/* <Tab icon={<FontAwesomeIcon icon={faCloud} />} label="Azure" /> */}
              {/* <Tab icon={<FontAwesomeIcon icon={faCube} />} label="GCP" />s */}
            </Tabs>
            <div style={{ padding: "20px", borderTop: "1px solid #ccc" }}>
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
                      id="providerName"
                      label="Enter Provider Name"
                      variant="outlined"
                      fullWidth
                      onChange={(event) => setProviderName(event.target.value)}
                    />
                    <TextField
                      id="regionName"
                      label="Enter Region Name"
                      variant="outlined"
                      fullWidth
                      onChange={(event) => setRegionName(event.target.value)}
                    />
                    <TextField
                      id="publicIP"
                      label="Ex: 65.8.249.80"
                      variant="outlined"
                      fullWidth
                      onChange={(event) => setPublicIP(event.target.value)}
                    />
                    <TextField
                      id="port"
                      label="Port"
                      value={port}
                      variant="outlined"
                      onChange={(event) => setPort(event.target.value)}
                    />
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
                  {vmMsg === "success" && (
                    <div>
                      <Typography color="success" className="text-green-500">
                        VM Tested Successfully
                        <p>Ram: {vmData.ram}</p>
                        <p>CPU: {vmData.cpus}</p>
                        <p>Architecture: {vmData.architecture}</p>
                        <p>Memory: {vmData.memory}</p>
                      </Typography>
                      {/* {isLoadingLogs && ( */}
                      <div className="mt-8 mx-12">
                        {/* <LinearProgress
                          variant="determinate"
                          value={deploymentProgress}
                          sx={{ height: 40 }}
                        />
                        <Typography variant="body1" align="center">
                          Deploying... {deploymentProgress}%
                        </Typography> */}
                        {/* {deploymentError && (
                          <Typography
                            variant="body1"
                            align="center"
                            color="error"
                          >
                            Deployment Failed! Retry
                          </Typography>
                        )} */}
                      </div>
                    </div>
                  )}
                  {vmMsg === "failure" && (
                    <Typography color="error">VM Test Failed</Typography>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "20px" }}
                    onClick={handleVMTest}
                  >
                    Test my VM
                  </Button>
                  <i className="px-2"></i>
                  <Link
                    to={{
                      pathname: `deploy/${id}`,
                      state: {
                        vmData: {
                          public_ip: publicIP, 
                        },
                      },
                    }}
                  >
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
                  <Typography>Deploy with VM</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "20px" }}
                  >
                    Deploy
                  </Button>
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
