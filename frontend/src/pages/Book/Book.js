import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import "./styles.css";

function Book({props}) {
  const location = useLocation();
  const url = "http://127.0.0.1:8000";
  const [selectedBook, setSelectedBook] = useState();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState("");
  const [publisher, setPublisher] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publication_date, setPublication_date] = useState("");
  const [amazon_link, setAmazon_link] = useState("");
  const [price, setPrice] = useState("");

  const getBook = async () => {
    try {
      const res = await axios.get(`${url}/api/get_book/${location.state.id}`);
      const data = res.data;
      setSelectedBook(data.book);
      setTitle(data.book.Title);
      setAuthor(data.book.Author);
      setGenre(data.book.Genre);
      setDescription(data.book.Desciption);
      setPages(data.book.Pages);
      setPublisher(data.book.Publisher);
      setIsbn(data.book.ISBN);
      setPublication_date(data.book.PublicationDate);
      setAmazon_link(data.book.AmazonLink);
      setPrice(data.book.Price);
    } catch (err) {
      console.log(err);
    }
  };

  const editBook = async () => {
    const bookData = {
      title: title,
      author: author,
      genre: genre,
      description: description,
      pages: pages,
      publisher: publisher,
      isbn: isbn,
      publication_date: publication_date,
      amazon_link: amazon_link,
      price: price,
    };

    try {
      const res = await axios.post(
        `${url}/api/update_book/${location.state.id}`,
        bookData
      );
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePages = (e) => {
    setPages(e.target.value);
  };
  const handlePublisher = (e) => {
    setPublisher(e.target.value);
  };
  const handleISBN = (e) => {
    setIsbn(e.target.value);
  };
  const handlePublication = (e) => {
    setPublication_date(e.target.value);
  };
  const handleLink = (e) => {
    setAmazon_link(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const [img, setImg] = useState("");
  const handleImg = (e) => {
    // let reader = new FileReader();
    // let files = e.target.files[0];
    // reader.readAsDataURL(files);
    // reader.onload = (e) => {
    //   setImg(e.target.result);
    // };
    setImg();
    console.log(img.data);
  };

  const addImg = async () => {
    try {
      const bookJson = {
        book_id: location.state.id,
        image: img,
      };
      const res = await axios.post(`${url}/api/add_cover_img`, bookJson);
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="book-container">
        <div className="book-image">
          {selectedBook && selectedBook.CoverImg ? (
            <img
              src={`${url}${selectedBook && selectedBook.CoverImg}`}
              alt="book cover"
            />
          ) : (
            <img src={`${url}/images/no-cover.png`} alt="book cover" />
          )}
        </div>
        {/* <input type="file" name="myImage" onChange={handleImg}/>
        <button onClick={addImg}>Add Image</button> */}
        
        <div className="book-info">
          <div className="book-info-title">
            <TextField
              label="Title"
              value={title}
              onChange={handleTitle}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-author">
            <TextField
              label="Author"
              value={author}
              onChange={handleAuthor}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-genre">
            <TextField
              label="Genre"
              value={genre}
              onChange={handleGenre}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-description">
            <TextField
              label="Description"
              value={description}
              onChange={handleDescription}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-pages">
            <TextField
              label="Number of pages"
              value={pages}
              onChange={handlePages}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-publisher">
            <TextField
              label="Publisher"
              value={publisher}
              onChange={handlePublisher}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-isbn">
            <TextField
              label="ISBN"
              value={isbn}
              onChange={handleISBN}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-price">
            <TextField
              label="Price"
              value={price}
              onChange={handlePrice}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-publication-date">
            <TextField
              label="Publication Date"
              value={publication_date}
              onChange={handlePublication}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="book-info-amazon-link">
            <TextField
              label="Amazon Link"
              value={amazon_link}
              onChange={handleLink}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="submit-btn-container">
            <button onClick={editBook} className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
