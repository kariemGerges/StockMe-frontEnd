import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function GBMAnalysisDispaly({GBManaysis}) {
    if (!GBManaysis) return <p>No data available</p>;

    return(
        <div>
        <Box sx={{ height: 400, overflow: 'auto' }}>
            {/* <p>Stock Name: {GBManaysis.futurePrices}</p> */}
        <TableContainer component={Paper} sx={{ minWidth: 150 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align="right">GMP Analysis</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(GBManaysis.futurePrices).map((value, index) => (
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
    )

};

export default GBMAnalysisDispaly;


{/* <div>
<h1>GBM Model</h1>
<ul>
{(GBManaysis.futurePrices).map( (item , index) => (
    <li key={index}>${item.toFixed(2)}</li>
))}
</ul>
</div>    */}