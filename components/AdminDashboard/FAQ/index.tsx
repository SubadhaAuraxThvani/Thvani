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
import { MdDelete, MdEdit } from "react-icons/md";
import { fetchFAQPaginationsData, deleteFAQData, editFAQData } from "@/apiRequest/faq";
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
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<FAQ>>({});
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



  const handleEdit = (faq: FAQ) => {
    setEditId(faq._id);
    setEditData({ question: faq.question, answer: faq.answer });
  };

  const handleUpdate = async () => {
    if (!editId || !editData.question || !editData.answer) {
      alert("Invalid data for updating FAQ");
      return;
    }
    try {
      const updatedFAQ = await editFAQData(editId, editData as any);
      setFAQs((prev) =>
        prev.map((faq) =>
          faq._id === editId ? { ...faq, ...updatedFAQ } : faq
        )
      );
      setEditId(null);
      alert("FAQ updated successfully");
    } catch (error) {
      console.error("Error updating FAQ:", error);
      alert("Failed to update FAQ");
    }
  };

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
      <TableCell>
        {editId === faq._id ? (
          <TextField
            fullWidth
            value={editData.question || ""}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, question: e.target.value }))
            }
          />
        ) : (
          faq?.question
        )}
      </TableCell>
      <TableCell>
        {editId === faq._id ? (
          <TextField
            fullWidth
            value={editData.answer || ""}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, answer: e.target.value }))
            }
          />
        ) : (
          faq?.answer
        )}
      </TableCell>
      <TableCell>
        {editId === faq._id ? (
          <>
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setEditId(null)}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(faq)}
            >
              <MdEdit /> Edit
            </Button>
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
          </>
        )}
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
