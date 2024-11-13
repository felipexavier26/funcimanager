import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/button/PrimaryButton';
import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function UserEdit({ auth, usuario, errors, flash }) {
    const { data, setData, put, processing, reset } = useForm({
        id: usuario?.id || '',
        nome: usuario?.nome || '',
        email: usuario?.email || '',
        telefone: usuario?.telefone || '',
        logradouro: usuario?.logradouro || '',
        numero: usuario?.numero || '',
        complemento: usuario?.complemento || '',
        bairro: usuario?.bairro || '',
        cidade: usuario?.cidade || '',
        estado: usuario?.estado || '',
        cep: usuario?.cep || '',
        cargo: usuario?.cargo || '',
        dt_admissao: usuario?.dt_admissao || '',
        dt_nascimento: usuario?.dt_nascimento || '',
        salario: usuario?.salario || '',
    });

    useEffect(() => {
        if (usuario) {
            setData({
                id: usuario.id || '',
                nome: usuario.nome || '',
                email: usuario.email || '',
                telefone: usuario.telefone || '',
                logradouro: usuario.logradouro || '',
                numero: usuario.numero || '',
                complemento: usuario.complemento || '',
                bairro: usuario.bairro || '',
                cidade: usuario.cidade || '',
                estado: usuario.estado || '',
                cep: usuario.cep || '',
                cargo: usuario.cargo || '',
                dt_admissao: usuario.dt_admissao || '',
                dt_nascimento: usuario.dt_nascimento || '',
                salario: usuario.salario || '',
            });
        }
    }, [usuario]);

    const submit = (e) => {
        e.preventDefault();
        put(route('usuarios.update', { usuario: data.id }), {
            onSuccess: () => reset(),
        });
    };

    if (!usuario) {
        return <div>Carregando...</div>;
    }

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Editar Usuário</h2>}>
            <Head title="Editar Usuário" />
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200"></h3>
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('usuarios.index')}>
                                    <PrimaryButton>Listas</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                        <form onSubmit={submit} className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 space-y-4">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Nome</label>
                                    <input
                                        type="text"
                                        value={data.nome}
                                        onChange={e => setData('nome', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o nome'
                                        required
                                    />
                                    {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Email</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o email'
                                        required
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Telefone</label>
                                    <input
                                        type="text"
                                        value={data.telefone}
                                        onChange={e => setData('telefone', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o contato'
                                    />
                                    {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Cargo</label>
                                    <input
                                        type="text"
                                        value={data.cargo}
                                        onChange={e => setData('cargo', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o cargo'
                                        required
                                    />
                                    {errors.cargo && <p className="text-red-500 text-sm">{errors.cargo}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Logradouro</label>
                                    <input
                                        type="text"
                                        value={data.logradouro}
                                        onChange={e => setData('logradouro', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o endereço'
                                    />
                                    {errors.logradouro && <p className="text-red-500 text-sm">{errors.logradouro}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Número</label>
                                    <input
                                        type="text"
                                        value={data.numero}
                                        onChange={e => setData('numero', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o número'
                                    />
                                    {errors.numero && <p className="text-red-500 text-sm">{errors.numero}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Complemento</label>
                                    <input
                                        type="text"
                                        value={data.complemento}
                                        onChange={e => setData('complemento', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                    />
                                    {errors.complemento && <p className="text-red-500 text-sm">{errors.complemento}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Bairro</label>
                                    <input
                                        type="text"
                                        value={data.bairro}
                                        onChange={e => setData('bairro', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o bairro'
                                    />
                                    {errors.bairro && <p className="text-red-500 text-sm">{errors.bairro}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Cidade</label>
                                    <input
                                        type="text"
                                        value={data.cidade}
                                        onChange={e => setData('cidade', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite a cidade'
                                    />
                                    {errors.cidade && <p className="text-red-500 text-sm">{errors.cidade}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Estado</label>
                                    <input
                                        type="text"
                                        value={data.estado}
                                        onChange={e => setData('estado', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o estado'
                                    />
                                    {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">CEP</label>
                                    <input
                                        type="text"
                                        value={data.cep}
                                        onChange={e => setData('cep', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o CEP'
                                    />
                                    {errors.cep && <p className="text-red-500 text-sm">{errors.cep}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Salário</label>
                                    <input
                                        type="number"
                                        value={data.salario}
                                        onChange={e => setData('salario', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o salário'
                                    />
                                    {errors.salario && <p className="text-red-500 text-sm">{errors.salario}</p>}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                                    disabled={processing}
                                >
                                    {processing ? 'Salvando...' : 'Editar Usuário'}
                                </button>

                            </div>

                            {flash?.success && (

                                <div className="bg-green-500 text-white p-4 rounded-md mt-4">
                                    <p>{flash.success}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
