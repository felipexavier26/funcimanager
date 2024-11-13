<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 100);
            $table->string('email', 100)->unique();
            $table->string('telefone', 15)->nullable();
            $table->string('logradouro', 100)->nullable();
            $table->string('numero', 10)->nullable();
            $table->string('complemento', 50)->nullable();
            $table->string('bairro', 50)->nullable();
            $table->string('cidade', 50)->nullable();
            $table->char('estado', 2)->nullable();  
            $table->string('cep', 10)->nullable();
            $table->enum('cargo', ['Gerente', 'Analista', 'Desenvolvedor', 'Suporte', 'Admin']);
            $table->decimal('salario', 10, 2)->nullable()->comment('Salário do usuário'); // Adiciona o campo salario
            $table->date('dt_admissao')->nullable();
            $table->date('dt_nascimento')->nullable();
            $table->timestamps(); 
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
