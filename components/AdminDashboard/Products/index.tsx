"use client";

import React, { useState, useEffect } from "react";
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
    Typography,
    Skeleton,
} from "@mui/material";
import AdminDashboardLayout from "..";
import { fetchProductsPagination, deleteProductData } from "@/apiRequest/product";
import CreateProduct from "./createproducts";

const ShimmerRow = ({ columns }: { columns: number }) => (
    <TableRow>
        {Array.from({ length: columns }).map((_, index) => (
            <TableCell key={index}>
                <Skeleton variant="rectangular" height={30} />
            </TableCell>
        ))}
    </TableRow>
);

const ProductDashboard = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [dataArray, setDataArray] = useState([] as any[]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            setLoading(true);
            const data = await fetchProductsPagination(page, limit, searchQuery);
            if (data) {
                setDataArray(data.data);
                setCount(data.count);
                setLimit(data.limit);
                setPage(data.page);
            }
            setLoading(false);
        };
        fetchDataFromAPI();
    }, [page, limit, searchQuery]);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setLimit(parseInt(event.target.value, 10));
    };

    const handleDelete = async (id: string) => {
        try {
            if (!id) {
                console.error("Delete ID is not provided.");
                return;
            }
            const response = await deleteProductData(id); // API call to delete product
            if (response && response.success) {
                // Update the UI by removing the deleted item
                setDataArray((prev) => prev.filter((item) => item._id !== id));
                setOpenDeleteDialog(false);
            } else {
                console.error("Failed to delete the product.");
            }
        } catch (error) {
            console.error("An error occurred while deleting the product:", error);
        }
    };

    const DeleteConfirmationDialog = () => (
        <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
            <DialogTitle>Delete Confirmation</DialogTitle>
            <DialogContent>Are you sure you want to delete this item?</DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
                <Button onClick={() => handleDelete(deleteId as string)} color="error">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <AdminDashboardLayout>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h6">Product Table</Typography>
                <CreateProduct />
                {loading ? (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {Array.from({ length: 9 }).map((_, index) => (
                                        <TableCell key={index}>
                                            <Skeleton variant="text" width={80} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <ShimmerRow key={index} columns={9} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : dataArray.length > 0 ? (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">S.No</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Category</TableCell>
                                    <TableCell align="left">Size</TableCell>
                                    <TableCell align="left">Stock</TableCell>
                                    <TableCell align="left">Rating</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dataArray.map((item: any, index: number) => (
                                    <TableRow key={item._id}>
                                        <TableCell align="left">
                                            {(page - 1) * limit + index + 1}
                                        </TableCell>
                                        <TableCell align="left">{item.name}</TableCell>
                                        <TableCell align="left">{item.description}</TableCell>
                                        <TableCell align="left">{item.price}</TableCell>
                                        <TableCell align="left">{item.category_id}</TableCell>
                                        <TableCell align="left">{item.size}</TableCell>
                                        <TableCell align="left">{item.stock}</TableCell>
                                        <TableCell align="left">{item.rating}</TableCell>
                                        <TableCell align="right">
                                            <Button>Edit</Button>
                                            <Button
                                                color="error"
                                                onClick={() => {
                                                    setDeleteId(item._id);
                                                    setOpenDeleteDialog(true);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 50, 100]}
                            component="div"
                            count={count}
                            page={page - 1}
                            onPageChange={handleChangePage}
                            rowsPerPage={limit}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                ) : (
                    <Typography>No Results Found</Typography>
                )}
            </Box>
            <DeleteConfirmationDialog />
        </AdminDashboardLayout>
    );
};

export default ProductDashboard;
