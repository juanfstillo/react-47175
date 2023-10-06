import React from 'react';

export const Form = ({ buyer, handleSubmit,handleInputChange }) => {
    const { Nombre, Email, Telefono} = buyer
    
    // Funcion para habilitar el boton de Finalizar Compra cuando esten completos todos los campos
    const validate = () => {
        return Nombre.length & Email.length & Telefono.length
    }

    return (
        <>
            <h4>Completar Datos:</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='Nombre'
                        placeholder='Nombre'
                        value={Nombre}
                        onChange={handleInputChange}
                    />
                    <input
                        type="mail"
                        name='Email'
                        placeholder='Email'
                        value={Email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name='Telefono'
                        placeholder='Telefono'
                        value={Telefono}
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />
                    <input disabled={!validate()} type="submit" value="Finalizar Compra" className='btn btn-success'/>
                </form>
        </>
    );
}

