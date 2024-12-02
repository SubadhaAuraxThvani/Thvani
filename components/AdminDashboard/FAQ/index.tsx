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
  TextField,
  Typography,
} from "@mui/material";
import { MdDelete } from "react-icons/md";
import { fetchFAQPaginationsData, deleteFAQData } from "@/apiRequest/faq";
import CreateFAQ from "./createfaq";
import AdminDashboardLayout from "..";

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

const FAQDashboard: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [faqs, setFAQs] = useState<FAQ[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchFAQPaginationsData(page, limit, search);
        setFAQs(data.data || []);
        setCount(data.count || 0);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, limit, search]);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteFAQData(deleteId);
      setFAQs((prev) => prev.filter((faq) => faq._id !== deleteId));
      setDeleteId(null);
      setOpenDeleteDialog(false);
      alert("FAQ deleted successfully");
    } catch (error) {
      console.error("Error deleting FAQ:", error);
      alert("Failed to delete FAQ");
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(1); // Reset to the first page
  };

  const FAQRow = ({ faq, index }: { faq: FAQ; index: number }) => (
    <TableRow>
      <TableCell>{(page - 1) * limit + index + 1}</TableCell>
      <TableCell>{faq?.question}</TableCell>
      <TableCell>{faq?.answer}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setDeleteId(faq._id);
            setOpenDeleteDialog(true);
          }}
        >
          <MdDelete /> Delete
        </Button>
      </TableCell>
    </TableRow>
  );

  const DeleteConfirmationDialog = () => (
    <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
      <DialogTitle>Delete FAQ</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this FAQ?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
        <Button color="error" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <AdminDashboardLayout>
      <Box>
        <Typography variant="h6" gutterBottom>
          FAQ Management
        </Typography>
        <CreateFAQ />
        <Box mt={2} mb={2}>
          <TextField
            label="Search FAQs"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : faqs.length > 0 ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Question</TableCell>
                  <TableCell>Answer</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {faqs?.map((faq, index) => (
                  <FAQRow key={faq._id} faq={faq} index={index} />
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={count}
              rowsPerPage={limit}
              page={page - 1}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        ) : (
          <Typography>No FAQs available</Typography>
        )}
        <DeleteConfirmationDialog />
      </Box>
    </AdminDashboardLayout>
  );
};

export default FAQDashboard;
