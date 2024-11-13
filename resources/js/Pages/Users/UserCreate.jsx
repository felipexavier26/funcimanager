import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

import PrimaryButton from '@/Components/button/PrimaryButton';

export default function UserCreate({ auth, usuarios, errors }) {
    const { data, setData, post, processing, reset } = useForm({
        nome: '',
        email: '',
        telefone: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        cargo: '',
        dt_admissao: '',
        dt_nascimento: '',
        salario: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('create.store'), {
            onSuccess: () => reset()
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Adicionar Usuário</h2>
        }>
            <Head title="Adicionar Usuário" />
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
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
                                    <input type="text" value={data.nome} onChange={e => setData('nome', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o nome' required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Email</label>
                                    <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o email' required />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Telefone</label>
                                    <input type="text" value={data.telefone} onChange={e => setData('telefone', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o contato' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Cargo</label>
                                    <input type="text" value={data.cargo} onChange={e => setData('cargo', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o cargo' required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Logradouro</label>
                                    <input type="text" value={data.logradouro} onChange={e => setData('logradouro', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o endereço' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Número</label>
                                    <input type="text" value={data.numero} onChange={e => setData('numero', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o número' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Complemento</label>
                                    <input type="text" value={data.complemento} onChange={e => setData('complemento', e.target.value)} className="mt-1 block w-full rounded-md" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Bairro</label>
                                    <input type="text" value={data.bairro} onChange={e => setData('bairro', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o bairro' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Cidade</label>
                                    <input type="text" value={data.cidade} onChange={e => setData('cidade', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite a cidade' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Estado</label>
                                    <input type="text" value={data.estado} onChange={e => setData('estado', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Diigte o Estado' />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">CEP</label>
                                    <input type="text" value={data.cep} onChange={e => setData('cep', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o cep' />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Salário</label>
                                    <input type="number" value={data.salario} onChange={e => setData('salario', e.target.value)} className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o cep' />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md" disabled={processing}>
                                    {processing ? 'Salvando...' : 'Salvar Usuário'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
