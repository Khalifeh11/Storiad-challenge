<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


    Route::post('/add_book', [BookController::class, 'add_book'])->name('add_book');
    Route::get('/get_all_books', [BookController::class, 'get_all_books'])->name('get_all_books');
    Route::post('/update_book/{id}', [BookController::class, 'update_book'])->name('update_book');
    Route::get('/delete_book/{id}', [BookController::class, 'delete_book'])->name('delete_book');
    Route::post('/add_cover_img', [BookController::class, 'add_cover_img'])->name('add_cover_img');
    Route::get('/get_book/{id}', [BookController::class, 'get_book'])->name('get_book');
    



