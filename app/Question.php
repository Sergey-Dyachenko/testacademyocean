<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function test()
    {
        $this->belongsTo('Test');
    }

    public function answers()
    {
        $this->hasMany('Answer');
    }
}
