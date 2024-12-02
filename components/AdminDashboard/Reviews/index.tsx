"use client";

import React, { useState, useEffect, useCallback } from "react";
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
import {
    fetchreviewsPaginationsData,
    deletereviewsData,
    editreviewsData,
} from "@/apiRequest/reviews";
import AdminDashboardLayout from "..";

// Define a type for Review
interface Review {
    _id: string;
    user_id: string;
    product_id: string;
    rating: number;
    comment: string;
}

const ReviewsTable = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalReviews, setTotalReviews] = useState(0);
    const [loading, setLoading] = useState(true);

    // Dialog states for edit and delete
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [currentReview, setCurrentReview] = useState<Review | null>(null);
    const [newComment, setNewComment] = useState("");

    // Memoize fetchReviews with useCallback to avoid redefining it on each render
    const fetchReviews = useCallback(async () => {
        setLoading(true);
        const data = await fetchreviewsPaginationsData(page + 1, rowsPerPage, "");
        if (data) {
            setReviews(data.data);
            setTotalReviews(data.count);
        }
        setLoading(false);
    }, [page, rowsPerPage]);

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]); // Now fetchReviews is included as a dependency

    const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };


    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDelete = async (id: string) => {
        try {
            await deletereviewsData(id);
            setDeleteDialogOpen(false);
            fetchReviews();
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    const handleEdit = async () => {
        if (currentReview) {
            try {
                await editreviewsData({ comment: newComment }, currentReview._id);
                setEditDialogOpen(false);
                fetchReviews();
            } catch (error) {
                console.error("Error updating review:", error);
            }
        }
    };

    return (
        <AdminDashboardLayout>
        <Box>
            <Typography variant="h6" gutterBottom>
                Reviews Table
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Product ID</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            Array.from({ length: rowsPerPage }).map((_, index) => (
                                <TableRow key={index}>
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <TableCell key={idx}>
                                            <Skeleton variant="rectangular" height={30} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : reviews.length > 0 ? (
                            reviews.map((review) => (
                                <TableRow key={review._id}>
                                    <TableCell>{review.user_id}</TableCell>
                                    <TableCell>{review.product_id}</TableCell>
                                    <TableCell>{review.rating}</TableCell>
                                    <TableCell>{review.comment}</TableCell>
                                    <TableCell>
                                        <Button
                                            startIcon={<MdEdit />}
                                            onClick={() => {
                                                setCurrentReview(review);
                                                setNewComment(review.comment);
                                                setEditDialogOpen(true);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            color="error"
                                            startIcon={<MdDelete />}
                                            onClick={() => {
                                                setCurrentReview(review);
                                                setDeleteDialogOpen(true);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    No Reviews Found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
                <TablePagination
                    component="div"
                    count={totalReviews}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={(event, newPage) => handlePageChange(event, newPage)}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    rowsPerPageOptions={[5, 10, 25]}
                />


            {/* Edit Dialog */}
            <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
                <DialogTitle>Edit Review</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <DialogTitle>Delete Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this review?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
                    <Button
                        onClick={() => currentReview && handleDelete(currentReview._id)}
                        color="error"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
        </AdminDashboardLayout>
    );
};

export default ReviewsTable;
