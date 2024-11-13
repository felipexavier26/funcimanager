<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddUsuario extends Model
{
    use HasFactory;

    protected $table = 'usuarios'; // Define explicitamente o nome da tabela

    protected $fillable = [
        'nome', 'email', 'telefone', 'logradouro', 'numero', 'complemento', 
        'bairro', 'cidade', 'estado', 'cep', 'cargo', 'dt_admissao', 
        'dt_nascimento', 'salario'
    ];
}
