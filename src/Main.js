import {  useState } from "react"
import { NavLink  } from "react-router-dom";
function Main() {
    const[show, setShow] = useState(false)
    const[fix, setFix] = useState('')
    const[data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem('data')) || []
    })
    const[job, setJob] = useState('')
    const handlerJob = (e) => {
        setJob(e.target.value)
    }
    const handlerFind = (e) => {
        setData(data.filter(x => x.includes(e.target.value)))
    }
    const handlerAdd = () => {
        setData(pre => [...pre, job])
        setJob('')
        localStorage.setItem('data', JSON.stringify([...data, job]))
    }
    const handlerDelete = (index) => {
        let datas = JSON.parse(localStorage.getItem('data'))
        datas.splice(index, 1)
        localStorage.setItem('data', JSON.stringify(datas))
    }
    const handlerShow = () => {
        setShow(!show)
        console.log(show)
    }
    const handlerFix = (e, index) => {
        setFix(e.target.value)
        let datas = JSON.parse(localStorage.getItem('data'))
        datas.splice(index, 1, fix)
        localStorage.setItem('data', JSON.stringify(datas))
    }

    return(
        <div className="container mx-auto m-5">
            <div>
                <div>
                    <input  placeholder="Job...11" onChange={(event) => handlerFind(event)} />
                    <input value={job}  placeholder="Job..." onChange={(event) => handlerJob(event)} />
                    <button onClick={handlerAdd}>Click</button>
                </div>
                <div>
                    {data.map((x,index) => (<h1 key={index}>{x} <button onClick={handlerShow}>Fix</button> {show ? <input onChange={e => handlerFix(e, index)}/> : ''} <button onClick={() => handlerDelete(index)}>Delete</button></h1>))}
                </div>
                
            </div>
                <NavLink  to="/">Home</NavLink > |{" "}
        </div>
    )
}
export default Main