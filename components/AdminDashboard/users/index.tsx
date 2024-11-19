"use client";

import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography,
    Skeleton
} from "@mui/material";
import { MdDelete } from "react-icons/md";
import { fetchUsersPaginationsData } from "@/apiRequest/users";
import AdminDashboardLayout from '..';

const UsersTable = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [search, setSearch] = useState('');
    const [usersArray, setUsersArray] = useState([] as any[]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchUsersPaginationsData(page, limit, search);
            if (data) {
                setUsersArray(data.data);
                setCount(data.count);
                setLimit(data.limit);
                setPage(data.page);
            }
            setLoading(false);
        };
        fetchData();
    }, [page, limit, search]);

    const handleDelete = async (id: string) => {
        try {
            // Delete logic here (use API to delete user)
            setUsersArray(prevArray => prevArray.filter(user => user._id !== id));
            setDeleteId(null);
            setOpenDeleteDialog(false);
            alert("User deleted successfully");
        } catch (error) {
            alert("Failed to delete user");
        }
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLimit(parseInt(event.target.value, 10));
    };

    const onClickDeleteTableRow = (id: string) => {
        setOpenDeleteDialog(true);
        setDeleteId(id);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        setSearch(searchQuery);
    };

    const SkeletonLoader = () => (
        <TableBody>
            {[...Array(limit)].map((_, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <Skeleton variant="text" width={40} height={20} />
                    </TableCell>
                    <TableCell>
                        <Skeleton variant="text" width="60%" height={20} />
                    </TableCell>
                    <TableCell align="right">
                        <Skeleton variant="rectangular" width={80} height={36} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );

    const DeleteConfirmationDialog = () => (
        <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
            <DialogTitle>Delete Confirmation</DialogTitle>
            <DialogContent>
                Are you sure you want to delete this user?
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
                <Button onClick={() => handleDelete(deleteId as string)} color="error">Delete</Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <AdminDashboardLayout>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h6">Users Table</Typography>
                <Box sx={{ display: 'flex', marginBottom: 2, marginTop: 2 }}>
                    <TextField
                        label="Search User"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        sx={{ marginRight: 2 }}
                        size='small' />
                    <Button variant="contained" onClick={handleSearch}>Search</Button>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">S.No</TableCell>
                                <TableCell align="left">User Name</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        {loading ? (
                            <SkeletonLoader />
                        ) : usersArray.length > 0 ? (
                            <TableBody>
                                {usersArray.map((x: any, index: number) => (
                                    <TableRow key={x._id}>
                                        <TableCell align="left">
                                            <Typography>{(page - 1) * limit + index + 1}</Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography>{x.name}</Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                variant='contained'
                                                sx={{ background: 'red' }}
                                                onClick={() => onClickDeleteTableRow(x._id)}
                                            >
                                                <MdDelete fontSize={20} /> Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        ) : (
                            <Typography>No Results Found</Typography>
                        )}
                    </Table>
                    {!loading && (
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 50, 100]}
                            component="div"
                            count={count}
                            page={page - 1}
                            onPageChange={handleChangePage}
                            rowsPerPage={limit}
                            onRowsPerPageChange={handleChangeRowsPerPage} />
                    )}
                </TableContainer>
            </Box>
            <DeleteConfirmationDialog />
        </AdminDashboardLayout>
    );
};

export default UsersTable;
