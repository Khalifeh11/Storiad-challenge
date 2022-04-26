<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Validator;

class BookController extends Controller
{
    public function add_book(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'publisher' => 'required|string|max:255',
            'isbn' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'pages' => 'required|string|max:255',
            'publication_date' => 'required|string|max:255',
            'amazon_link' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }else{
            $book = new Book;
            $book->Title = $request->title;
            $book->Author = $request->author;
            $book->Desciption = $request->description;
            $book->Genre = $request->genre;
            $book->Publisher = $request->publisher;
            $book->ISBN = $request->isbn;
            $book->Price = $request->price;
            $book->Pages = $request->pages;
            $book->PublicationDate = $request->publication_date;
            $book->AmazonLink = $request->amazon_link;
            $book->save();
            return response()->json(['success' => 'Book added successfully.'], 200);
        }    
    }



    public function get_all_books()
    {
        $books = Book::all();
        return response()->json(['success' => $books], 200);
    }

    public function update_book(Request $request, $id)
    {
        $book = Book::find($id);
        if (!$book){
            return response()->json(['error' => 'Book not found.'], 404);
        }
        $validator = Validator::make($request->all(), [
            'title' => 'string|max:255',
            'author' => 'string|max:255',
            'description' => 'string|max:255',
            'genre' => 'string|max:255',
            'publisher' => 'string|max:255',
            'isbn' => 'string|max:255',
            'price' => 'string|max:255',
            'pages' => 'string|max:255',
            'publication_date' => 'string|max:255',
            'amazon_link' => 'string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }else{
            if ($request->title) {
                $book->Title = $request->title;
            }
            if ($request->author) {
                $book->Author = $request->author;
            }
            if ($request->description) {
                $book->Desciption = $request->description;
            }
            if ($request->genre) {
                $book->Genre = $request->genre;
            }
            if ($request->publisher) {
                $book->Publisher = $request->publisher;
            }
            if ($request->isbn) {
                $book->ISBN = $request->isbn;
            }
            if ($request->price) {
                $book->Price = $request->price;
            }
            if ($request->pages) {
                $book->Pages = $request->pages;
            }
            if ($request->publication_date) {
                $book->PublicationDate = $request->publication_date;
            }
            if ($request->amazon_link) {
                $book->AmazonLink = $request->amazon_link;
            }
            $book->save();
            
            return response()->json(['success' => 'Book updated successfully.'], 201);
        }
    }

    public function delete_book($id)
    {
        $book = Book::find($id);
        if ($book) {
            $book->delete();
            return response()->json(['success' => 'Book deleted successfully.'], 200);
        }else{
            return response()->json(['error' => 'Book not found.'], 404);
        }
    }

    public function add_cover_img(Request $request){
        $image = $request->image;  // your base64 encoded
        $imageName = "random(".rand(10,1000).")".'.'.'jpeg';
        $path=public_path();
        \File::put($path. '/images/' . $imageName, base64_decode($image));
        // $user_id = auth()->user()->id;
        $book_id = $request->book_id;
        $book = Book::find($book_id);
        $book->coverImg = '/images/'.$imageName;
        $book->save();
        return response()->json(['success' => 'Cover image added successfully.'], 200);
    }





}
