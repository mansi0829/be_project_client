import React from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function Deploay() {
  const logAnalysisData = [
    { id: 1, time: "12:00 PM", message: "Request received" },
    { id: 2, time: "12:05 PM", message: "Processing data" },
    { id: 3, time: "12:10 PM", message: "Data analysis complete" },
    { id: 5, time: "12:12 PM", message: "Build Successful" },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mt-8 space-x-5">
        <Card
          variant="outlined"
          sx={{
            width: 320,
            overflow: "auto",
            resize: "horizontal",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
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
              <Avatar src="/static/images/avatar/4.jpg" />
              <Avatar>+4K</Avatar>
            </AvatarGroup>
          </Box>
          <CardContent>
            <Typography level="title-lg" color="primary.main" align="center">
              NYC Coders
            </Typography>
            <Typography level="body-sm" align="center">
              We are a community of developers prepping for coding interviews,
              participate, chat with others, and get better at interviewing.
            </Typography>
          </CardContent>
          <CardActions buttonFlex="0 1 120px" sx={{ padding: 2 }}>
            <IconButton variant="outlined" color="error" sx={{ mx: "auto" }}>
              <FavoriteBorder />
            </IconButton>
            <Button
              variant="outlined"
              color="neutral"
              sx={{ color: "neutral.main" }}
            >
              View Logs
            </Button>
            <Button variant="solid" color="primary">
              ReBuild
            </Button>
          </CardActions>
        </Card>

        <Paper
          className="p-6 bg-indigo-700 text-white rounded-lg shadow-indigo-500"
          elevation={3}
        >
          <Typography variant="h6" gutterBottom>
            Deployment Information
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Project:</strong> projecta-mansi0829.vercel.app
          </Typography>
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
      <Paper className="m-8 mx-20 p-6 border text-white shadow-indigo-500/40 rounded-lg overflow-hidden">
        <Typography variant="h6" gutterBottom color="primary.contrastText">
          Deployment Logs
        </Typography>
        <TableContainer style={{ maxHeight: "400px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logAnalysisData.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.id}</TableCell>
                  <TableCell>{log.time}</TableCell>
                  <TableCell>{log.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
