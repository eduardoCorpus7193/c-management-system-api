

function Notifications() {

    return (
        <>
            <div className="jumbotron jumbotron-fluid " id="jumbotron-offer">
                    <div className="jumbotron-disposition">
                        <div className="container">
                            <h1 className="display-4 title-style">Notifications</h1>
                            <p className="lead">Here are some notifications for you.</p>
                            
                            <div className="cards-container">
                                <div class="card">
                                    <div class="card-body">
                                        <div className="data-notification">
                                            <div className="title-notification-alert-style">
                                                Inscripciones
                                            </div>
                                            <div className="date-time-notification">
                                                {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}  {/* ESTA PARTE DA LA FECHA Y HORA */}
                                            </div>
                                        </div>
                                        <div className="content-menssage-alert">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit? <br/> <br/> 
                                            Sit aliquam laborum illum sint dolorum ipsum perspiciatis eligendi temporibus molestiae. Distinctio velit eligendi quibusdam voluptatibus eum placeat quaerat voluptatem deserunt nostrum. <br/> 
                                            Nisi laborum voluptates maiores possimus quae provident blanditiis vero ut nemo!
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-body">
                                        <div className="data-notification">
                                            <div className="title-notification-alert-style">
                                                Inscripciones
                                            </div>
                                            <div className="date-time-notification">
                                                {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}  {/* ESTA PARTE DA LA FECHA Y HORA */}
                                            </div>
                                        </div>
                                        <div className="content-menssage-alert">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit? <br/> <br/> 
                                            Sit aliquam laborum illum sint dolorum ipsum perspiciatis eligendi temporibus molestiae. Distinctio velit eligendi quibusdam voluptatibus eum placeat quaerat voluptatem deserunt nostrum. <br/> 
                                            Nisi laborum voluptates maiores possimus quae provident blanditiis vero ut nemo!
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-body">
                                        <div className="data-notification">
                                            <div className="title-notification-alert-style">
                                                Inscripciones
                                            </div>
                                            <div className="date-time-notification">
                                                {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}  {/* ESTA PARTE DA LA FECHA Y HORA */}
                                            </div>
                                        </div>
                                        <div className="content-menssage-alert">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit? <br/> <br/> 
                                            Sit aliquam laborum illum sint dolorum ipsum perspiciatis eligendi temporibus molestiae. Distinctio velit eligendi quibusdam voluptatibus eum placeat quaerat voluptatem deserunt nostrum. <br/> 
                                            Nisi laborum voluptates maiores possimus quae provident blanditiis vero ut nemo!
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </>
    );
}

export default Notifications;