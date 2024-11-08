import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';



function ModelslstmProphet (data) {
    if (!data) return <p>No data available</p>;
    // console.log(`Kariem ${JSON.stringify(data)}`);

    const { historicalData, lstmPrediction } = data.data;

    return(
        <div>
            <Box sx={{ height: 400, overflow: 'auto' }}>
                <p>Stock Name: {historicalData.ticker}</p>
            <TableContainer component={Paper} sx={{ minWidth: 150 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Day</TableCell>
                  <TableCell align="right">LSTM Prediction</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lstmPrediction.original.map((value, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">${value.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
        </div>
    );
};

export default ModelslstmProphet;