<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'Title',
        'Author',
        'Desciption',
        'Genre',
        'Publisher',
        'ISBN',
        'Price',
        'Pages',
        'PublicationDate',
        'AmazonLink',
        'CoverImg',
    ];
}
