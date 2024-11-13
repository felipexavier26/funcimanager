<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {

        $users =  Usuario::orderByDesc('id')->paginate(10);

        return Inertia::render('Users/Userlist', ['usuarios' => $users]);
    }

    public function show(Usuario $usuario): Response
    {
        return Inertia::render('Users/UserShow', ['usuario' => $usuario]);
    }

    public function edit(Usuario $usuario)
    {
        return Inertia::render('Users/UserEdit', ['usuario' => $usuario]);
    }

    public function update(Request $request, Usuario $usuario)
    {
        $validatedData = $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|email|unique:usuarios,email,' . $usuario->id,
            'telefone' => 'nullable|string|max:15',
            'logradouro' => 'nullable|string|max:255',
            'numero' => 'nullable|string|max:10',
            'complemento' => 'nullable|string|max:255',
            'bairro' => 'nullable|string|max:255',
            'cidade' => 'nullable|string|max:255',
            'estado' => 'nullable|string|max:255',
            'cep' => 'nullable|string|max:10',
            'cargo' => 'required|string|max:255',
            'dt_admissao' => 'nullable|date',
            'dt_nascimento' => 'nullable|date',
            'salario' => 'nullable|numeric',
        ]);


        $usuario->update($validatedData);

        return redirect()->route('usuarios.index')->with('success', 'Usuário atualizado com sucesso.');
    }

    public function destroy(Usuario $usuario)
    {
        $usuario->delete();

        return redirect()->route('usuarios.index');


    }
}
