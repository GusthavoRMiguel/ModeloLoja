export default function Card(props) {
  return(
    <>
    <div className='py-12 px-2 md:px-4'>
        <div className='bg-white w-full shadow p-2 rounded-lg text-gray-800 hover:shadow-lg hover:bg-indigo-400 hover:border-2 hover:border-indigo-600 hover:text-gray-200 '>
          <div className=' min-h-32 rounded-lg w-full object-cover'> <img src={props.img} /></div>
          <div className="py-2 px-2">
          <div className="font-bold font-title text-center">{props.title}</div>
          <div className="text-sm font-light text-center my-2">{props.description}</div>
        </div>
        </div>
    </div>
    </>
  )
}