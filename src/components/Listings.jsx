import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'cookie';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { checkAuth } from '../Router';

const Listings = (props) => {
	// const cookies = cookie.parse(document.cookie);

	return (
		<Container>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Home</TableCell>
						<TableCell>Description</TableCell>
						<TableCell>Hours</TableCell>
						<TableCell>Address</TableCell>
						{checkAuth() ? <TableCell>Delete</TableCell> : null}
					</TableRow>
				</TableHead>
				<TableBody>
					{props.listings.map((listing, idx) => (
						<TableRow key={listing.id}>
							<TableCell component="th" scope="row">
								<Link
									to={`/business/${listing.id}`}
									style={{ color: 'black', fontWeight: 'bold' }}
								>
									{listing.name}
								</Link>
							</TableCell>
							<TableCell>{listing.description}</TableCell>
							<TableCell>{listing.operatingHours}</TableCell>
							<TableCell>{listing.address}</TableCell>
							{checkAuth() ? (
								<TableCell>
									<IconButton
										onClick={() => props.deleteListing(idx)}
										aria-label="delete"
										size="medium"
										sx={{ color: 'red' }}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							) : null}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default Listings;
