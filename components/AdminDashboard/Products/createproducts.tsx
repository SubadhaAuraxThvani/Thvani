import { Box, Button, Modal, TextField, Snackbar, Alert, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
// import { IoCreate } from "react-icons/io5";
import { postProductData } from "@/apiRequest/product";

const style = {
    position: 'absolute',
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
    const [imageFiles, setImageFiles] = useState<File[]>([]);
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
        setImageFiles([]);
        setError("");
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setImageFiles(Array.from(files)); // Convert FileList to Array
        }
    };

    // const handleSubmit = async () => {
    //     // Check if any field is empty
    //     if (!name || !description || !price || !category_id || !size || !stock || !rating || imageFiles.length === 0) {
    //         setError("All fields are required.");
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append("name", name);
    //     formData.append("description", description);
    //     formData.append("price", price);
    //     formData.append("category_id", category_id);
    //     formData.append("size", size);
    //     formData.append("stock", stock);
    //     formData.append("rating", rating);

    //     imageFiles.forEach((file, index) => {
    //         formData.append(`images[${index}]`, file); // Add each image to the form data
    //     });

    //     try {
    //         await postProductData(formData); // Update API to accept FormData
    //         handleClose();
    //         setNotifyMessage(`${name} has been created.`);
    //         setOpenNotifier(true);
    //         setHideDuration(3000);
    //     } catch (error) {
    //         console.log(error);
    //         setError("Failed to create product. Please try again.");
    //         setNotifyMessage("Failed to create product.");
    //         setOpenNotifier(true);
    //         setHideDuration(3000);
    //     }
    // };

    const handleSubmit = async () => {
        // Trim all input values
        const trimmedName = name.trim();
        const trimmedDescription = description.trim();
        const trimmedPrice = price.trim();
        const trimmedCategoryId = category_id.trim();
        const trimmedSize = size.trim();
        const trimmedStock = stock.trim();
        const trimmedRating = rating.trim();
    
        // Debug: Log all trimmed values
        console.log("Name:", trimmedName);
        console.log("Description:", trimmedDescription);
        console.log("Price:", trimmedPrice);
        console.log("Category ID:", trimmedCategoryId);
        console.log("Size:", trimmedSize);
        console.log("Stock:", trimmedStock);
        console.log("Rating:", trimmedRating);
        console.log("Image Files:", imageFiles);
    
        // Validation
        if (
            !trimmedName ||
            !trimmedDescription ||
            !trimmedPrice ||
            !trimmedCategoryId ||
            !trimmedSize ||
            !trimmedStock ||
            !trimmedRating
        ) {
            setError("All fields are required.");
            return;
        }
    
        if (imageFiles.length === 0) {
            setError("Please upload at least one image.");
            return;
        }
    
        // Clear previous error
        setError("");
    
        // Prepare FormData for API
        const formData = new FormData();
        formData.append("name", trimmedName);
        formData.append("description", trimmedDescription);
        formData.append("price", trimmedPrice);
        formData.append("category_id", trimmedCategoryId);
        formData.append("size", trimmedSize);
        formData.append("stock", trimmedStock);
        formData.append("rating", trimmedRating);
    
        imageFiles.forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });
    
        try {
            await postProductData(formData); // Ensure backend supports FormData
            handleClose();
            setNotifyMessage(`${trimmedName} has been created.`);
            setOpenNotifier(true);
            setHideDuration(3000);
        } catch (error) {
            console.log("Error:", error);
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
                    <Box sx={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: "center", alignItems: 'center', height: '80%' }}>
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
                        <Button
                            variant="contained"
                            component="label"
                            sx={{ margin: 2 }}
                        >
                            Upload Images
                            <input
                                type="file"
                                hidden
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </Button>
                        {imageFiles.length > 0 && (
                            <Box sx={{ margin: 2, width: '100%' }}>
                                <p>Selected Images:</p>
                                <ul>
                                    {imageFiles.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                            </Box>
                        )}
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
