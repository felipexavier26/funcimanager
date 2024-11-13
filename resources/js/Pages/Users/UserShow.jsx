import PrimaryButton from '@/Components/button/PrimaryButton';
import WarningButton from '@/Components/button/WarningButton';
import ConfirmDeleteButton from '@/Components/delete/ConfirmDeleteButton';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function UserShow({ auth, usuario }) {

    console.log("Auth:", auth);
    console.log("Usuario:", usuario);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Visualizar Usuário
                </h2>
            }
        >
            <Head title="Usuário" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200">Visualizar</h3>
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('usuarios.index')}>
                                    <PrimaryButton>Listas</PrimaryButton>
                                </Link>
                                <Link href={route('usuario.edit', { usuario: usuario.id })}>
                                    <WarningButton>Editar</WarningButton>
                                </Link>
                                <ConfirmDeleteButton id={usuario.id} routeName={'usuarios.destroy'}>

                                </ConfirmDeleteButton>
                            </div>
                        </div>

                        <div className="overflow-x-auto bg-gray-50 text-sm dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <table className="min-w-full table-auto">
                                {/* <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Campo</th>
                                        <th className="px-4 py-2 text-left">Valor</th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">ID</td>
                                        <td className="px-4 py-2 text-gray-200">{usuario.id}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Nome</td>
                                        <td className="px-4 py-2 text-gray-200">{usuario.nome}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Email</td>
                                        <td className="px-4 py-2 text-gray-200">{usuario.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Telefone</td>
                                        <td className="px-4 py-2 text-gray-200">{usuario.telefone}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Endereço</td>
                                        <td className="px-4 py-2 text-gray-200">{usuario.logradouro}, {usuario.numero} {usuario.complemento}, {usuario.bairro}, {usuario.cidade} - {usuario.estado}, {usuario.cep}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Cargo</td>
                                        <td className="px-4 py-2 text-gray-200">{usuario.cargo}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Data de Nascimento</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Date(usuario.dt_nascimento).toLocaleDateString('pt-BR', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Data de Admissão</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Date(usuario.dt_admissao).toLocaleDateString('pt-BR', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                hour12: false,
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Salário</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL',
                                            }).format(usuario.salario)}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">CPF</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {usuario.cpf
                                                ? usuario.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
                                                : 'N/A'}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Criado em</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Date(usuario.created_at).toLocaleString('pt-BR', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                hour12: false,
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-semibold text-gray-200">Atualizado em</td>
                                        <td className="px-4 py-2 text-gray-200">
                                            {new Date(usuario.updated_at).toLocaleString('pt-BR', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                hour12: false,
                                            })}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
