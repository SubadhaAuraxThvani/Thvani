import { Box, Button, Modal, TextField, Snackbar, Alert, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { IoCreate } from "react-icons/io5";
import { postProductData } from "@/apiRequest/product";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: "70%",
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '20px',
    border: 'none'
};

export default function CreateProduct() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category_id, setCategoryId] = useState("");
    const [size, setSize] = useState("");
    const [stock, setStock] = useState("");
    const [rating, setRating] = useState("");
    const [images, setImages] = useState<string[]>([]);
    const [error, setError] = useState("");

    // Notification state
    const [notifyMessage, setNotifyMessage] = useState("");
    const [openNotifier, setOpenNotifier] = useState(false);
    const [hideDuration, setHideDuration] = useState(3000);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setName("");
        setDescription("");
        setPrice("");
        setCategoryId("");
        setSize("");
        setStock("");
        setRating("");
        setImages([]);
        setError("");
    };

    const handleSubmit = async () => {
        // Check if any field is empty
        if (!name || !description || !price || !category_id || !size || !stock || !rating || images.length === 0) {
            setError("All fields are required.");
            return;
        }

        const data = {
            name,
            description,
            price,
            category_id,
            size,
            stock,
            rating,
            images
        };

        try {
            await postProductData(data);
            handleClose();
            setNotifyMessage(`${name} has been created.`);
            setOpenNotifier(true);
            setHideDuration(3000);
        } catch (error) {
            setError("Failed to create product. Please try again.");
            setNotifyMessage("Failed to create product.");
            setOpenNotifier(true);
            setHideDuration(3000);
        }
    };

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
                    Create Product
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
                        <h4>Create Product</h4>
                        <GrClose onClick={handleClose} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: 'row', flexWrap:'wrap', width: '100%', justifyContent: "center", alignItems: 'center', height: '80%' }}>
                        <TextField
                            variant="standard"
                            label="Enter Product Name"
                            sx={{ margin: 2, width: "250px" }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <TextField
                            variant="standard"
                            label="Enter Description"
                            sx={{ margin: 2, width: "250px" }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <TextField
                            variant="standard"
                            label="Enter Price"
                            sx={{ margin: 2, width: "250px" }}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <TextField
                            variant="standard"
                            label="Enter Stock"
                            sx={{ margin: 2, width: "250px" }}
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                        <TextField
                            variant="standard"
                            label="Enter Size"
                            sx={{ margin: 2, width: "250px" }}
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            required
                        />
                        <FormControl variant="standard" sx={{ margin: 2, width: "250px" }} required>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={category_id}
                                onChange={(e) => setCategoryId(e.target.value)}
                                label="Category"
                            >
                                <MenuItem value="1">Category 1</MenuItem>
                                <MenuItem value="2">Category 2</MenuItem>
                                <MenuItem value="3">Category 3</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="standard"
                            label="Enter Rating"
                            sx={{ margin: 2, width: "250px" }}
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        />
                        <TextField
                            variant="standard"
                            label="Enter Image URLs"
                            sx={{ margin: 2, width: "250px" }}
                            value={images.join(", ")}
                            onChange={(e) => setImages(e.target.value.split(", "))}
                            required
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
