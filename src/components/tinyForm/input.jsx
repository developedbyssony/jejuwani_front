import '../../css/input.css';

function input({inputTitle, type, placeholder, name, parentFunction}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="form-group">
                <div className="inputTitle"><strong>{inputTitle}</strong></div>
                <div className="input-group" id="input-group">
                    <input type={type} placeholder={placeholder} name={name} onBlur={parentFunction}></input>
                </div>
                </div>
                </div>
            </div>
    )
}

export default input;