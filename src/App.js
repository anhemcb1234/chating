import './App.css';
import {useEffect, useState} from 'react'
import {userServices} from './services/userServices'
function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const handlerInput = (e) => {
    setInput(e.target.value)
  }
  async function handlerClick() {
    const res = await userServices.getArticles(input);
    setData(res.data.articles)
  }
  useEffect(() => {
    console.log('useEffect')
  }, [])
  
  return (
    <div >
      <div className="container mx-auto header">
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-5xl'>+ONIC</h1>
          <p className='uppercase mt-2 font-light'>Adding That extra uttle somthing</p>
        </div>
        <div>
          <ul className='flex items-center justify-center m-2'>
            <li className='uppercase'><a href='/'>CGI</a></li>
            <li className='uppercase mx-4'><a href='/'>Services</a></li>
            <li className='uppercase'><a href='/'>Studio</a></li>
          </ul>
        </div>
      </div>
      <div className='relative'>
          <img className='' src='https://wwpbic.com/wp-content/uploads/2021/01/Picture-This-2020-oproep-website-banner-1-1500x430.jpg' />
          <div className='flex items-center justify-center absolute h-8 rounded-full w-8 bg-yellow-400 translate-x-2/4 bottom-0 right-1/2'>
            <a href='/'><i className="fa-solid fa-chevron-down"></i></a>
          </div>
      </div>
      <div className='container mx-auto mt-5 p-8 relative '>
        <p className='uppercase text-center font-semibold text-lg'>for the like images, we lend them our soul<br/>Learn more about our services, clinet process</p>
        <div>
          <p className='text-7xl top-0 left-0 text-yellow-600 absolute'>"</p>
          <p className='text-7xl right-0 text-yellow-600 absolute'>"</p>
        </div>
      </div>
      <div className='container mx-auto mt-5 flex items-center justify-center'>
        <label htmlFor='Search'>Search</label>
        <input onChange={e => handlerInput(e)} id="Search" className='bg-gray-200 mx-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
        <button onClick={handlerClick}>Click</button>
      </div>
        <div className='grid grid-cols-4 gap-4 m-10'>
          {data.map((item, index) => {
            return (
              <div key={index} className='bg-white  rounded-lg shadow-lg p-4'>
                <a target="_blank" href={item.url}><img src={item.urlToImage} className="w-full h-40 object-cover"  alt='img'/></a>
                <p className='text-center mt-5'>{item.title}</p>
              </div>
            )})}
        </div>
    </div>
  );
}

export default App;
