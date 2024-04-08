import './alert.css';


const CardAlerts = () => {
    return (
        <div className="containerAlerts">
            <div className="success">
                <div className="alertHead">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg></span>
                    <h4>Aqui va el titulo</h4>
                </div>
                <div className="alertBody">
                    <p>Descripsion o concepto de la actividad que se logro.</p>
                </div>
            </div>

            <div className="warning">
                <div className="alertHead">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72ZM120 104a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"/></svg></span>
                    <h4>Warn</h4>
                </div>
                <div className="alertBody">
                    <p>Descripsion o concepto de la actividad que se logro.</p>
                </div>
            </div>

            <div className="error">
                <div className="alertHead">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25ZM9.702 8.641a.75.75 0 0 0-1.061 1.06L10.939 12l-2.298 2.298a.75.75 0 0 0 1.06 1.06L12 13.062l2.298 2.298a.75.75 0 0 0 1.06-1.06L13.06 12l2.298-2.298a.75.75 0 1 0-1.06-1.06L12 10.938L9.702 8.641Z" clip-rule="evenodd"/></svg></span>
                    <h4>error</h4>
                </div>
                <div className="alertBody">
                    <p>Descripsion o concepto de la actividad que se logro.</p>
                </div>
            </div>
            
        </div>
    );
}
 
export default CardAlerts;