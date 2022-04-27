<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('Title');
            $table->string('Author');
            $table->string('Desciption');
            $table->string('Genre');
            $table->string('Publisher');
            $table->string('ISBN');
            $table->string('Price');
            $table->string('Pages');
            $table->date('PublicationDate');
            $table->string('AmazonLink');
            $table->string('CoverImg')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
};
