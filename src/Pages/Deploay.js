import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Correct import
import { useParams } from "react-router-dom";

export default function DeploymentPage() {
  const { id } = useParams();
  const [isLoadingLogs, setLoadingLogs] = useState(false);
  const [logData, setLogData] = useState([]);

  const [isLoadingDetails, setLoadingDetails] = useState(true);
  const [deploymentProgress, setDeploymentProgress] = useState(0);

  const simulateDeployment = () => {
    setLoadingLogs(true);

    const interval = setInterval(() => {
      setDeploymentProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setLoadingLogs(false);
      setLoadingDetails(false);
    }, 10000);
  };

  const handleViewLogsClick = () => {
    simulateDeployment();
  };
  const [repoData, setRepoData] = useState("");
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

  return (
    <div className="px-8 min-h-screen">
      <div className="flex flex-wrap justify-center items-center mt-8 space-x-5 px-24">
        <div className="flex-1 max-w-80">
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              overflow: "auto",
              backgroundColor: "rgb(31 41 55)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Avatar src="/static/images/avatar/1.jpg" size="lg" />
              <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
                <Avatar src="/static/images/avatar/2.jpg" />
                <Avatar src="/static/images/avatar/3.jpg" />
                <Avatar>+4K</Avatar>
              </AvatarGroup>
              <div className="px-4">
                {/* <Typography variant="h6" color="primary" align="right">
                  {id}
                </Typography> */}
              </div>
            </Box>
            <CardContent>
              <Typography variant="h6" color="primary" align="center">
                Project Name: {id}
              </Typography>
              <Typography variant="h6" color="primary" align="center">
                User: mansi0829
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <IconButton variant="outlined" color="error" sx={{ mx: "auto" }}>
                <FavoriteBorderIcon />
              </IconButton>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleViewLogsClick}
              >
                View Logs
              </Button>
              <Button variant="contained" color="primary">
                ReBuild
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="flex-1 max-w-[50%] py-4">
          <Paper
            className="p-6  rounded-lg shadow-indigo-500"
            elevation={3}
            sx={{
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Deployment Information
            </Typography>
            {/* <Typography variant="body1" paragraph>
              <strong>Project:</strong> projecta-mansi0829.vercel.app
            </Typography> */}
            <Typography variant="body1" paragraph>
              <strong>Domains:</strong> projecta-mansi0829.vercel.app +2
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Status:</strong> Ready
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Created:</strong> 2d ago by mansi0829
            </Typography>
            <Typography variant="body1">
              <strong>Source:</strong> main 131b5f1 seo added
            </Typography>
          </Paper>
        </div>
      </div>

      {isLoadingLogs && (
        <div className="mt-52 mx-12">
          <LinearProgress
            variant="determinate"
            value={deploymentProgress}
            sx={{ height: 40 }}
          />
          <Typography variant="body1" align="center">
            Deploying... {deploymentProgress}%
          </Typography>
        </div>
      )}

      {!isLoadingLogs && !isLoadingDetails && (
        <Paper className="m-8 mx-20 p-6 border text-white shadow-indigo-500/40 rounded-lg overflow-hidden">
          <Typography variant="h6" gutterBottom color="">
            Deployment Details
          </Typography>
          <div className="w-full max-w-screen-sm">
            <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
              <div className="text-lg font-semibold">Building</div>
              <div className="mt-3 hidden text-gray-300 group-focus:flex">
                <p>
                  <LinearProgress variant="determinate" value={59} />
                  <Typography variant="body1" paragraph>
                    All Logs (109)
                  </Typography>
                  <Typography variant="body1">Errors (0)</Typography>
                  <Typography variant="body1">Warnings (0)</Typography>
                  <Typography variant="body1">
                    Running build in Washington, D.C., USA (East) – iad1
                  </Typography>
                  <Typography variant="body1">
                    Cloning github.com/mansi0829/be_project_client (Branch:
                    main, Commit: 587c968)
                  </Typography>
                  <Typography variant="body1">
                    Previous build cache not available
                  </Typography>
                  <Typography variant="body1">
                    Cloning completed: 556.163ms
                  </Typography>
                  <Typography variant="body1">
                    Running "vercel build"
                  </Typography>
                  <Typography variant="body1">Vercel CLI 33.1.0</Typography>
                  <Typography variant="body1">
                    Running "install" command: `npm install
                    --legacy-peer-deps`...
                  </Typography>
                  <Typography>
                    src/Component/Footer.js Line 10:15: The href attribute
                    requires a valid value to be accessible.s 'Grid' is defined
                    but never used no-unused-vars Line 13:3: 'TableHead' is
                    defined but never used no-unused-vars Line 69:9:
                    'handleLinkClick' is assigned a value but never used
                    no-unused-vars src/Pages/Deploay.js Line 13:3: 'Divider' is
                    defined but never used no-unused-vars Search for the
                    keywords to learn more about each warning. To ignore, add //
                    eslint-disable-next-line to the line before.
                  </Typography>
                </p>
              </div>
            </button>
            <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
              <div className="text-lg font-semibold">Deployment Summary</div>
              <div className="mt-3 hidden text-gray-700 group-focus:flex">
                <p>
                  <LinearProgress variant="determinate" value={90} />
                  <Typography variant="body1" paragraph>
                    Create React App (5.0.1)
                  </Typography>
                </p>
              </div>
            </button>
          </div>
        </Paper>
      )}
    </div>
  );
}
