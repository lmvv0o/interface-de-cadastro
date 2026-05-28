const events = () => {
    const handlemyevent = () => {
        console.log("Evento disparado")
    }
    const renderSomething = (x) => {
        if (x) {
            return <h1>Alguma coisa</h1>
        } else {
            return <h1>Outra coisa</h1>
        }
    }
    return (
        <div>
            <button onClick={handlemyevent}>Clica ae</button>
            <div>
                <button onClick={() => console.log("Clicou")}>
                    Clica aqui também
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default events;