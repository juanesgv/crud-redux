import React from 'react'

const EditarProducto = () => {
    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card p-4'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold' >Editar producto</h2>
                    </div>

                    <form>
                        <div className='form-group'>
                            <label>Nombre del producto</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre del producto'
                                name='nombre'
                            />
                        </div>
                        <div className='form-group'>
                            <label>precio del producto</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Precio del producto'
                                name='precio'
                            />
                        </div>
                        <button className='btn btn-primary font-weight-bold text-uppercase d-block w-100' type='button'>Guardar cambios</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
