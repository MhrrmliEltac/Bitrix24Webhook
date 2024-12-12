import { Box, Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ShowLead = () => {
  const [user, setUser] = useState([]);

  const columns = React.useMemo(
    () => [
      { field: "NAME", headerName: "Name", width: 200 },
      { field: "LAST_NAME", headerName: "Surname", width: 150 },
      { field: "STATUS_ID", headerName: "Status", width: 150 },
      { field: "SOURCE_ID", headerName: "Source", width: 150 },
      {
        field: "actions",
        headerName: "Actions",
        width: 200,
        renderCell: (params) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
          </Box>
        ),
      },
    ],
    []
  );

  const getLeadData = async () => {
    try {
      const response = await axios.get(
        "https://b24-vhllhk.bitrix24.com/rest/1/iqj94lbie8jy4pqm/crm.lead.list.json?FILTER[>DATE_CREATE]=2019-01-01"
      );
      const result = response.data.result;
      const leadData = result.map((user) => ({
        id: user.ID,
        NAME: user.NAME || "Untitled",
        LAST_NAME: user.LAST_NAME || "N/A",
        STATUS_ID: user.STATUS_ID || "N/A",
        SOURCE_ID: user.SOURCE_ID || "N/A",
      }));
      setUser(leadData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(
        "https://b24-vhllhk.bitrix24.com/rest/1/w87hywenqphcvbe7/crm.lead.delete.json",
        { ID: id }
      );

      toast.success("Uğurla silindi", { position: "top-center" });

      if (response.data.result) {
        getLeadData();
      } else {
        console.error("Delete failed", response.data);
      }
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  useEffect(() => {
    getLeadData();
  }, []);

  return (
    <Box className="container">
      <Box sx={{ width: "90%" }}>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={user}
            columns={columns}
            pageSize={5}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default ShowLead;
