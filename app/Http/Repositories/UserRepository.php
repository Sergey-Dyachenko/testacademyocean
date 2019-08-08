<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 27.07.2019
 * Time: 10:58
 */

namespace App\Http\Repositories;
use App\User as Model;
use Illuminate\Http\Request;

class UserRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function saveData(Request $request )
    {

       $avatar = $this->saveFileToStorage($request);
       $request_data = $request->all();
       $request_data['avatar'] = $avatar;
       return  $this->startConditions()->create($request_data);
    }

    private function saveFileToStorage($request)
    {
      $avatar = $request->file('avatar')->store('avatars');
       return $avatar;
    }
    public function is_base64($data){
        if (base64_encode(base64_decode($data, true)) === $data) {
            return true;
        }
        else return false;
    }

    public function getUserIdByEmail($email)
    {
        return $this->startConditions()->where(['email' => $email])->first()->id;
    }




}
