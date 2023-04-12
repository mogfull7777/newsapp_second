import React, {useState} from 'react';

const App = () => {

    const [memo, setMemo] = useState("");

    const changeMemo = () => {
        setMemo("World")
    }


    return (
        <div>
            <h1>{memo}</h1>
            <button onClick={changeMemo}>change</button>
        </div>
    );
};

export default App;