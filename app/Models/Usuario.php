<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    // Campos que podem ser preenchidos em massa
    protected $fillable = [
        'nome',
        'email',
        'telefone',
        'logradouro',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'estado',
        'cep',
        'cargo',
        'dt_admissao',
        'dt_nascimento',
        'salario'
    ];

    // Se a tabela tiver um nome diferente do nome do model no plural, você pode definir explicitamente:
    protected $table = 'usuarios';

    // Se não quiser usar o timestamp padrão do Laravel, desative-os:
    public $timestamps = true;

    // Caso precise formatar datas automaticamente
    protected $dates = ['dt_admissao', 'dt_nascimento'];
}
