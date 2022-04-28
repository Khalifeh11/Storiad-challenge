import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";
import BookCover from "../../components/BookCover";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [booksFetched, setBooksFetched] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const url = "http://127.0.0.1:8000";

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`${url}/api/get_all_books`);
      const data = res.data;
      if (data.books) {
        setBooksFetched(data.books);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 620,
    bgcolor: "background.paper",
    border: "2px solid #ff8e1f",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
    // overflowY: "scroll",
    // maxHeight: "80%",
  };

  const [bookdata, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    pages: "",
    publisher: "",
    isbn: "",
    publication_date: "",
    amazon_link: "",
    price: "",
  });

  const handleTitle = (value) => {
    setBookData({
      ...bookdata,
      title: value,
    });
  };

  const handleAuthor = (value) => {
    setBookData({
      ...bookdata,
      author: value,
    });
  };

  const handleGenre = (value) => {
    setBookData({
      ...bookdata,
      genre: value,
    });
  };

  const handleDescription = (value) => {
    setBookData({
      ...bookdata,
      description: value,
    });
  };

  const handlePages = (value) => {
    setBookData({
      ...bookdata,
      pages: value,
    });
  };

  const handlePublisher = (value) => {
    setBookData({
      ...bookdata,
      publisher: value,
    });
  };

  const handleISBN = (value) => {
    setBookData({
      ...bookdata,
      isbn: value,
    });
  };

  const handlePublication = (value) => {
    setBookData({
      ...bookdata,
      publication_date: value,
    });
  };

  const handleLink = (value) => {
    setBookData({
      ...bookdata,
      amazon_link: value,
    });
  };

  const handlePrice = (value) => {
    setBookData({
      ...bookdata,
      price: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${url}/api/add_book`, bookdata);
      const data = res.data;
      if (data.success) {
        fetchBooks();
        handleClose();
      }
    } catch (err) {
      console.log(bookdata);
    }
  };

  const deleteBook = async (id) => {
    try {
      const res = await axios.get(`${url}/api/delete_book/${id}`);
      const data = res.data;
      if (data.success) {
        fetchBooks();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <div className="page-title-container">
          <h1 className="page-title">My Books</h1>
        </div>
        <div className="add-book-btn-container">
          <button className="add-book-btn" onClick={handleOpen}>
            Add Book
          </button>
        </div>
      </div>
      <hr />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <div className="modal-header">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add your new book
              </Typography>
              
            </div>

            <div className="modal-body">
              {/* <div className="modal-pic-img">
                <img src={`${url}/images/no-cover.png`} alt="book cover" />
              </div> */}
              <div className="modal-input-container">
                <TextField
                  label="Book Title"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handleTitle(e.target.value)}
                  value={bookdata.title}
                />
                <TextField
                  label="Author"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handleAuthor(e.target.value)}
                  value={bookdata.author}
                />
                <TextField
                  label="Genre"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handleGenre(e.target.value)}
                  value={bookdata.genre}
                />
                <TextField
                  label="Description"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handleDescription(e.target.value)}
                  value={bookdata.description}
                />
                <TextField
                  label="Number of pages"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handlePages(e.target.value)}
                  value={bookdata.pages}
                />
                <TextField
                  label="Publisher"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handlePublisher(e.target.value)}
                  value={bookdata.publisher}
                />
                <TextField
                  label="ISBN"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handleISBN(e.target.value)}
                  value={bookdata.isbn}
                />
                <TextField
                  label="Publication date"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handlePublication(e.target.value)}
                  value={bookdata.publication_date}
                />
                <TextField
                  label="Amazon link"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handleLink(e.target.value)}
                  value={bookdata.amazon_link}
                />
                <TextField
                  label="Price"
                  margin="dense"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onChange={(e) => handlePrice(e.target.value)}
                  value={bookdata.price}
                />
              </div>
              <button className="submit-btn" onClick={handleSubmit}>
                submit
              </button>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="book-list">
        {booksFetched.map((book) => (
          <div className="book-item" key={book.id}>
            <div
              className="book-cover"
              onClick={() => {
                navigate("/book", { state: { id: book.id } });
              }}
            >
              {book.CoverImg ? (
                <BookCover image={`${url}${book.CoverImg}`} />
              ) : (
                <BookCover image={`${url}/images/no-cover.png`} />
              )}
            </div>
            <div className="book-details">
              <div className="book-title">
                <h4>Title: {book.Title}</h4>
              </div>
              <div className="book-author">
                <h5>Author: {book.Author}</h5>
              </div>
              <div className="book-publisher">
                <h5>Price: {book.Price}</h5>
              </div>
              <div className="delete-btn-container"></div>
              <button
                className="delete-btn"
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
