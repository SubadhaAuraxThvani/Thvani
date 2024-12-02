import { Box, Button, Modal, TextField, Snackbar, Alert } from "@mui/material";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
// import { IoCreate } from "react-icons/io5";
import { postsizeData } from "../../../apiRequest/size"; // Update to size-related API request

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: "50%",
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '20px',
    border: 'none'
};

export default function CreateSize() {
    const [open, setOpen] = useState(false);
    const [sizeName, setSizeName] = useState(""); // Change categoryName to sizeName
    const [error, setError] = useState("");

    // Notification state
    const [notifyMessage, setNotifyMessage] = useState("");
    const [openNotifier, setOpenNotifier] = useState(false);
    const [hideDuration, setHideDuration] = useState(3000);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSizeName(""); 
        setError("");
    };

    const handleSubmit = async () => {
        const data = {
            name: sizeName, 
        };

        try {
            await postsizeData(data); 
            handleClose();
            setNotifyMessage(`${sizeName} has been created.`);
            setOpenNotifier(true);
            setHideDuration(3000);
            window.location.reload();
        } catch (error) {
            console.error("Error creating size:", error);
            setError("Failed to create size. Please try again.");
            setNotifyMessage("Failed to create size.");
            setOpenNotifier(true);
            setHideDuration(3000);
        }
    };

    // Close notification
    const handleCloseNotifier = () => {
        setOpenNotifier(false);
    };

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button
                    onClick={handleOpen}
                    sx={{
                        gap: 1,
                        marginRight: "5px",
                        background: 'rgba(0, 0, 0, 0.1)',
                        color: "black",
                        padding: "5px 10px",
                        '&:hover': {
                            background: 'rgba(0, 0, 0, 0.6)',
                            color: 'white',
                        }
                    }}
                >
                    Create a Size
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h4>Create Size</h4>
                        <GrClose onClick={handleClose} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: 'column', width: '100%', justifyContent: "center", alignItems: 'center', height: '70%' }}>
                        <TextField
                            variant="standard"
                            label="Enter Size Name"
                            sx={{ margin: 2, width: "250px" }}
                            value={sizeName} // Bind sizeName value
                            onChange={(e) => setSizeName(e.target.value)} // Update sizeName on change
                        />
                        <Button variant='contained' sx={{ margin: 2 }} onClick={handleSubmit}>Submit</Button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Box>
                </Box>
            </Modal>

            {/* Snackbar for notifications */}
            <Snackbar
                open={openNotifier}
                autoHideDuration={hideDuration}
                onClose={handleCloseNotifier}
            >
                <Alert onClose={handleCloseNotifier} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                    {notifyMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
