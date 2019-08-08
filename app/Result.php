<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
        protected $fillable=[
            'user_id',
            'points',
            'spentime',
            'created_at',
            'updated_at'
        ];

        public function user()
        {
           return $this->belongsTo('App\User', 'user_id');
        }
}
