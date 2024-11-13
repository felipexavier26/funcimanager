<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UsuariosSeeder extends Seeder
{
    public function run()
    {
        if (!DB::table('usuarios')->where('email', 'teste@teste.com')->exists()) {
            DB::table('usuarios')->insert([
                'nome' => 'teste',
                'email' => 'teste@teste.com',
                'telefone' => '123456789',  
                'logradouro' => 'Rua Exemplo',  
                'numero' => '100',
                'complemento' => 'Sala 10',
                'bairro' => 'Centro',
                'cidade' => 'Cidade Exemplo',
                'estado' => 'EX',
                'cep' => '12345-678',
                'cargo' => 'Admin', 
                'dt_admissao' => Carbon::now()->toDateString(),
                'dt_nascimento' => '1990-01-01',
                'salario' => 3500.00,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
