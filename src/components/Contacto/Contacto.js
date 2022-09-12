export const Contacto =() => {
    const handleSubmit =(event) => {
        event.preventDefault()
        console.log(event)
    }


    return (
        <div className = "container my-5">
                <h2>Contacto</h2>
                <p>Hola #SneakerLover!
                Si estás tratando de contactarnos por dudas relacionadas a un pedido y/o proceso de compra, te invitamos a visitar nuestras FAQ´s.
                Para más detalles sobre tu pedido, sugerencia o insatisfacción con tu compra, por favor envíanos un correo a servicioalcliente_laces@grupoaxo.com
                Te recordamos que nuestro horario de atención al cliente es de Lunes a Domingo de 9:00 am a 9:00 pm. </p>

                <form onSubmit={handleSubmit}>
                    <input type={'text'} className="form-control my-2" />
                    <button className="btn btn-primary" type="submit" > Enviar</button>
                </form>

        </div>

    )


}

