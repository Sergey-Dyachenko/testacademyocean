<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Result;

class ResultResource extends JsonResource
{

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'email' => Result::where(['id' => $this->id])->first()->user->email,
            'avatar' => Result::where(['id' => $this->id])->first()->user->avatar,
            'points' => $this->points,
            'spenttime' => $this->spentime
        ];
    }
}
