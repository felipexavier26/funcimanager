import AlertMsg from '@/Components/alert/AlertMsg';
import PrimaryButton from '@/Components/button/PrimaryButton';
import WarningButton from '@/Components/button/WarningButton';
import ConfirmDeleteButton from '@/Components/delete/ConfirmDeleteButton';
import Pagination from '@/Components/Pagitation';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Userlist({ auth, usuarios }) {

    const { flash } = usePage().props;
    console.log('Flash from usePage:', flash);


    console.log("Auth:", auth);
    console.log("usuarios:", usuarios);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Usuarios
                </h2>
            }
        >
            <Head title="Usuarios" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200">Visualizar</h3>
                            <div className="flex space-x-4 text-gray-200">
                            <Link href={route('create.index')}>
                                    <PrimaryButton>Adicionar</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <AlertMsg message={flash} />


                    <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                        <thead className='bg-gray-50 dark:bg-gray-700'>
                            <tr>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200
                                tracking-wider'>ID:</th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200
                                tracking-wider'>Nome:</th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200
                                tracking-wider'>Email:</th>
                                <th className='px-6 py-3 text-left text-sm font-medium text-gray-200
                                tracking-wider'>Cargo:</th>
                                <th className='px-6 py-3 text-center text-sm font-medium text-gray-200
                                tracking-wider'>Açoes:</th>

                            </tr>
                        </thead>

                        <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800
                        dark:divide-gray-700'>
                            {usuarios?.data?.map((user) => (
                                <tr key={user.id}>
                                    <th className='px-6 py-2 text-left text-sm text-gray-200
                                tracking-wider'>{user.id}</th>

                                    <th className='px-6 py-2 text-left text-sm text-gray-200
                                tracking-wider'>{user.nome}</th>

                                    <th className='px-6 py-2 text-left text-sm text-gray-200
                                tracking-wider'>{user.email}</th>

                                    <th className='px-6 py-2 text-left text-sm text-gray-200
                                tracking-wider'>{user.cargo}</th>

                                    <th className='px-6 py-2 text-sm text-gray-200
                                tracking-wider'>
                                        <Link href={route('usuarios.show', { id: user.id })}>
                                            <PrimaryButton className='ms-1'>
                                                Visualizar
                                            </PrimaryButton>
                                        </Link>

                                        <Link href={route('usuario.edit', { id: user.id })}>
                                            <WarningButton className='ms-1'>
                                                Editar
                                            </WarningButton>
                                        </Link>

                                        <ConfirmDeleteButton id={user.id} routeName={'usuarios.destroy'}>

                                        </ConfirmDeleteButton>



                                    </th>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <Pagination links={usuarios.links} currentPage={usuarios.current_page} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
