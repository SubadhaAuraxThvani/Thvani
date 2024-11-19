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
    Skeleton,
} from "@mui/material";
import { MdDelete, MdEdit } from "react-icons/md";
import CreateCategory from "./createcategory";
import { fetchCategoryPaginationsData, deleteCategoryData, editCategoryData } from "../../../apiRequest/category";
import AdminDashboardLayout from '..';

// Skeleton Row for Table Loading State
const ShimmerRow = ({ columns }: { columns: number }) => (
    <TableRow>
        {Array.from({ length: columns }).map((_, index) => (
            <TableCell key={index}>
                <Skeleton variant="rectangular" height={30} />
            </TableCell>
        ))}
    </TableRow>
);

const CategoriesDashboard = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);
    const [editId, setEditId] = useState<string | null>(null);
    const [editName, setEditName] = useState<string>(""); 
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [search, setSearch] = useState('');
    const [categoryArray, setCategoryArray] = useState([] as any[]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchCategoryPaginationsData(page, limit, search);
            if (data) {
                setCategoryArray(data.data);
                setCount(data.count);
                setLimit(data.limit);
                setPage(data.page);
            }
            setLoading(false);
        };
        fetchData();
    }, [page, limit, search]);

    const handleEdit = (country: any) => {
        setEditId(country._id);
        setEditName(country.name);
    };

    const handleUpdate = async (id: string) => {
        try {
            const updatedCountry = await editCategoryData({ name: editName }, id);
            setCategoryArray(prevArray =>
                prevArray.map(country =>
                    country._id === id ? { ...country, name: updatedCountry.name } : country
                )
            );
            setEditId(null);
            setEditName("");
            alert("Category updated successfully");
        } catch (error) {
            alert("Failed to update category");
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteCategoryData(id);
            setCategoryArray(prevArray => prevArray.filter(category => category._id !== id));
            setDeleteId(null);
            setOpenDeleteDialog(false);
            alert("Category deleted successfully");
        } catch (error) {
            alert("Failed to delete Category");
        }
    };

    const handleCancel = () => {
        setEditName("");
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLimit(parseInt(event.target.value, 10));
    };

    const onClickDeleteTableRow = (id: string) => {
        setOpenDeleteDialog(true);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        setSearch(searchQuery);
    };

    const Child = ({ data, index }: { data: any, index:number }) => (
        <TableRow key={data._id}>
             <TableCell align="left">
            <Typography>{(page - 1) * limit + index + 1}</Typography> {/* This should display the correct serial number */}
        </TableCell>
            <TableCell align="left">
                {editId === data._id ? (
                    <TextField
                        fullWidth
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <Typography>{data.name}</Typography>
                )}
            </TableCell>
            <TableCell align="right">
                {editId === data._id ? (
                    <>
                        <Button
                            variant='contained'
                            sx={{ gap: 1, marginRight: '10px', background: 'green' }}
                            onClick={() => handleUpdate(data._id)}
                        >
                            Update
                        </Button>
                        <Button
                            variant='contained'
                            sx={{ gap: 1, marginRight: '10px', background: 'gray' }}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </>
                ) : (
                    <Button
                        variant='contained'
                        sx={{ gap: 1, marginRight: '10px', background: 'green' }}
                        onClick={() => handleEdit(data)}
                    >
                        <MdEdit fontSize={20} /> Edit
                    </Button>
                )}
                {data.is_deleted ? (
                    <Button disabled>Delete</Button>
                ) : (
                    <Button 
                        variant='contained'
                        sx={{ gap: 1, marginRight: '10px', background: 'red' }}
                        onClick={() => onClickDeleteTableRow(data._id)}
                    >
                        <MdDelete fontSize={20} /> Delete
                    </Button>
                )}
            </TableCell>
        </TableRow>
    );

    const DeleteConfirmationDialog = () => (
        <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
            <DialogTitle>Delete Confirmation</DialogTitle>
            <DialogContent>
                Are you sure you want to delete this category?
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
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <CreateCategory />
                </Box>
                <Box sx={{ padding: 2 }}>
                    <Typography variant="h6">Category Master Table</Typography>
                    {loading ? (
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><Skeleton variant="text" width={50} /></TableCell>
                                        <TableCell><Skeleton variant="text" width={150} /></TableCell>
                                        <TableCell><Skeleton variant="text" width={150} /></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* Shimmer rows for loading state */}
                                    {Array.from({ length: limit }).map((_, index) => (
                                        <ShimmerRow key={index} columns={3} />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : categoryArray.length > 0 ? (
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">S.No</TableCell>
                                        <TableCell align="left">Category Name</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {categoryArray?.filter(Category => !Category.is_deleted)?.map((x: any, index: number) => <Child key={x._id} data={x} index={index} />)}
                                </TableBody>
                            </Table>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                component="div"
                                count={count}
                                page={page - 1}
                                onPageChange={handleChangePage}
                                rowsPerPage={limit}
                                onRowsPerPageChange={handleChangeRowsPerPage} />
                        </TableContainer>
                    ) : (
                        <Typography>No Results Found</Typography>
                    )}
                </Box>
            </Box>
            <DeleteConfirmationDialog />
        </AdminDashboardLayout>
    );
};

export default CategoriesDashboard;
