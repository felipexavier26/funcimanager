<?php

namespace App\Http\Controllers;

use App\Models\AddUsuario;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class AddController extends Controller
{
    // Exibe a lista de usuários e o formulário
    public function index(): Response
    {
        $users = AddUsuario::paginate(10);
        return Inertia::render('Users/UserCreate', ['usuarios' => $users]);
    }

    // Armazena o novo usuário no banco de dados
    public function store(Request $request)
    {
        // Validação dos dados do formulário
        $request->validate([
            'nome' => 'required|string|max:100',
            'email' => 'required|email|unique:usuarios,email',
            'telefone' => 'nullable|string|max:15',
            'logradouro' => 'nullable|string|max:100',
            'numero' => 'nullable|string|max:10',
            'complemento' => 'nullable|string|max:50',
            'bairro' => 'nullable|string|max:50',
            'cidade' => 'nullable|string|max:50',
            'estado' => 'nullable|string|max:2',
            'cep' => 'nullable|string|max:10',
            'cargo' => 'required|string',
            'dt_admissao' => 'nullable|date',
            'dt_nascimento' => 'nullable|date',
            'salario' => 'nullable|numeric',
        ]);

        // Criação e salvamento do novo usuário
        AddUsuario::create($request->all());

        // Redireciona com uma mensagem de sucesso
        return redirect()->route('usuarios.index')->with('success', 'Usuário adicionado com sucesso.');
    }
}
