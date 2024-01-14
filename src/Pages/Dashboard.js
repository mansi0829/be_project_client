import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { faUserPlus, faHammer, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectsList = [
  { id: 1, name: "Project A", year: "1d ago", user: "abc" },
  { id: 2, name: "Project B", year: "39d ago", user: "xyz" },
  { id: 3, name: "Project C", year: "45d ago", user: "pqr" },
  { id: 4, name: "Project D", year: "784d ago", user: "xyz" },
  { id: 5, name: "Project E", year: "22d ago", user: "pqr" },
  { id: 6, name: "Project F", year: "36d ago", user: "xyz" },
  { id: 7, name: "Project G", year: "100d ago", user: "xyz" },
];

const UserDetailsCard = () => {
  return (
    <Card elevation={3} className="mb-4">
      <CardContent>
        <Typography variant="h6" className="pt-2 text-blue-500">
          Users Information
        </Typography>
        <Divider className="pt-2" />
        <div className="pt-2 flex flex-col">
          <Typography variant="h7" className="pt-4">
            <b>UserName</b>: mansi0829
          </Typography>
          <Typography variant="" className="pt-2">
            <b>Name</b>: Mansi Gundre
          </Typography>
          <Typography variant="" className="pt-2">
            <b>Email</b>: mansi@gmail.com
          </Typography>
          <Typography variant="" className="pt-2">
            <b>Description</b>:
          </Typography>
          <Typography variant="" className="pt-2">
            <b>Social/Website</b>:{" "}
            <a
              href="https://mansigundre.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mansigundre.tech
            </a>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

const HouseholdVoterCard = () => {
  const handleLinkClick = (link) => {
    console.log(`Search for: ${link}`);
  };

  return (
    <Card elevation={3} className="mb-4 pr-5">
      <CardContent>
        <Typography variant="h6" className="pb-2 text-blue-500">
          Project
        </Typography>
        <Divider className="my-2" />
        <Typography variant="subtitle1" className="pt-2">
          Selected Project: Project A
        </Typography>
        <div className="flex space-x-2">
          <Button variant="contained" color="primary" className="w-half ">
            <FontAwesomeIcon icon={faHammer} className="px-2" />
            Build Logs
          </Button>
          <Button variant="contained" color="primary" className="w-half ">
            <FontAwesomeIcon icon={faUsersViewfinder} className="px-2" />
            View Logs
          </Button>
        </div>
        <Typography variant="subtitle1" className="pt-2">
          Created
        </Typography>
        2d ago by mansi0829
        <Typography variant="subtitle1" className="pt-2">
          Source
        </Typography>
        main 131b5f1 This is the latest Commit
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const randomAvatarUrl = `https://randomuser.me/api/portraits/women/2.jpg`;

  return (
    <div className="overflow-y-auto max-h-screen p-4 bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src={randomAvatarUrl}
            alt="Dashboard"
            className="w-20 h-20 object-fill rounded-full"
          />
          <div className="ml-3">
            <Typography variant="h5">Selina Kyle</Typography>
            <Typography variant="subtitle1" className="text-gray-600">
              Admin
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 py-2">
          {[{ label: "Collaborate with team", color: "primary" }].map(
            (buttonProps, index) => (
              <div key={index}>
                <Button
                  variant="contained"
                  color={buttonProps.color}
                  className="w-full "
                >
                  <FontAwesomeIcon icon={faUserPlus} className="px-2" />
                  {buttonProps.label}
                </Button>
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between mx-36 ">
          <div className="w-full">
            <Card elevation={3} className="w-11/12 ">
              <h3 className="text-xl bold px-4 pt-3">Import Git Repository</h3>
              <CardContent>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex w-full justify-between space-x-2 items-center">
                    <Autocomplete
                      options={[
                        ...new Set(projectsList.map((project) => project.user)),
                      ]}
                      className="w-full"
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Search UserName" />
                      )}
                    />
                    <Autocomplete
                      options={projectsList.map((project) => project.name)}
                      className="w-full"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className="w-full"
                          placeholder="Search by Project Name"
                        />
                      )}
                    />
                  </div>
                </div>
                <Divider className="my-3" />
                <TableContainer style={{ maxHeight: "400px" }}>
                  <Table className="w-full">
                    <TableBody>
                      {projectsList.map((project) => (
                        <TableRow key={project.id}>
                          <TableCell>{project.id}</TableCell>
                          <TableCell>
                            {project.name} <sub>{project.year}</sub>
                          </TableCell>
                          <TableCell>
                            <Button variant="contained" color="primary">
                              Import
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </div>
          <div className="flex-col gap-4 w-1/2">
            <HouseholdVoterCard />
            <UserDetailsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
