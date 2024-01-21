import './Style.css';

function Calculator() {
    return (
        <>
            <h1>Calculator</h1>
            
            <hr />
            <br />
            <div className="cbody">
            <input type="text" placeholder='0'/>
                <div id='btns'>
                    <button>AC</button>
                    <button>()</button>
                    <button>%</button>
                    <button>/</button>
                </div>
                <div id='btns'>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>*</button>
                </div>
                <div id='btns'>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                </div>
                <div id='btns'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                </div>
                <div id='btns'>
                    <button>00</button>
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </div>
        </>
    ) 
}

export default Calculator;