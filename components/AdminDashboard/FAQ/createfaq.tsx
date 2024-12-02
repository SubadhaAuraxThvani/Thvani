import { Box, Button, Modal, TextField, Snackbar, Alert } from "@mui/material";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { postFAQData } from "@/apiRequest/faq";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    bgcolor: "background.paper",
    p: 4,
    borderRadius: "20px",
    border: "none",
};

export default function CreateFAQ() {
    const [modalOpen, setModalOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Notification state
    const [notification, setNotification] = useState({
        message: "",
        open: false,
        severity: "success" as "success" | "error",
    });

    // Handle Modal open/close
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => {
        setModalOpen(false);
        resetForm();
    };

    // Reset form fields and error messages
    const resetForm = () => {
        setQuestion("");
        setAnswer("");
        setErrorMessage("");
    };

    // Handle FAQ submission
    const handleSubmit = async () => {
        if (!question || !answer) {
            setErrorMessage("Both question and answer are required.");
            return;
        }

        const faqData = { question, answer };

        try {
            await postFAQData(faqData);
            handleModalClose();
            showNotification(`${question} has been created.`, "success");
            window.location.reload();
        } catch (error) {
            console.error("Error creating FAQ:", error);
            showNotification("Failed to create FAQ. Please try again.", "error");
        }
    };

    // Show notification
    const showNotification = (message: string, severity: "success" | "error") => {
        setNotification({ message, open: true, severity });
    };

    // Handle notification close
    const handleNotificationClose = () => {
        setNotification({ ...notification, open: false });
    };

    return (
        <>
            {/* Button to trigger the modal */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button
                    onClick={handleModalOpen}
                    sx={{
                        gap: 1,
                        marginRight: "5px",
                        background: "rgba(0, 0, 0, 0.1)",
                        color: "black",
                        padding: "5px 10px",
                        "&:hover": {
                            background: "rgba(0, 0, 0, 0.6)",
                            color: "white",
                        },
                    }}
                >
                    Create FAQ
                </Button>
            </Box>

            {/* Modal for creating FAQ */}
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={modalStyle}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h4>Create FAQ</h4>
                        <GrClose style={{ cursor: "pointer" }} onClick={handleModalClose} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 3 }}>
                        <TextField
                            variant="outlined"
                            label="Enter Question"
                            fullWidth
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            label="Enter Answer"
                            fullWidth
                            multiline
                            rows={4}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                        <Button variant="contained" onClick={handleSubmit}>
                            Submit
                        </Button>
                        {errorMessage && <Box sx={{ color: "red", mt: 1 }}>{errorMessage}</Box>}
                    </Box>
                </Box>
            </Modal>

            {/* Notification Snackbar */}
            <Snackbar
                open={notification.open}
                autoHideDuration={3000}
                onClose={handleNotificationClose}
            >
                <Alert onClose={handleNotificationClose} severity={notification.severity} sx={{ width: "100%" }}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </>
    );
}
