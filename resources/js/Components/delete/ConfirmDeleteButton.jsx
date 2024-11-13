import { useForm } from '@inertiajs/react'
import React from 'react'
import DangerButton from '../button/DangerButton';
import Swal from 'sweetalert2';

function ConfirmDeleteButton({ id, routeName }) {

    const { delete: destroy } = useForm();

    const handleDelete = () => {
        // if (window.confirm('Tem centeza que deseja deletar esse usuario?')) {
        //     destroy(route(routeName, id));
        // }

        Swal.fire({
            title: "Tem centeza",
            text: "Você não poderá reverter esta ação",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#3b82f6",
            confirmButtonText: "Sim, excluir",
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route(routeName, id), {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Excluido!",
                            text: "O registro foi excluido com sucesso.",
                            icon: "success"
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error!",
                            text: "Ocorreu um erro ao tentar excluir o registro.",
                            icon: "error"
                        });
                    }
                })
            }
        });
    }

    return (
        <>
            <DangerButton className='ms-1 text-sm' onClick={handleDelete}>
                Apagar
            </DangerButton>
        </>
    )
}

export default ConfirmDeleteButton