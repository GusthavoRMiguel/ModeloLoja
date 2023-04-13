export default function Card(props) {
  return(
    <>
    <a href="https://wa.me/5511978558230" target="_blank" rel="noreferrer">
      <div className='py-12 px-2 md:px-4'>
        <div className=' bg-gradient-to-b from-slate-400 to-slate-100 w-full shadow p-2 rounded-lg text-gray-800 hover:shadow-lg hover:bg-gradient-to-b hover:from-slate-100 hover:to-slate-400 hover:border-2 hover:border-indigo-600 hover:text-gray-200 '>
          <div className=' h-48 sm:h-64 m-auto rounded-lg w-full object-cover'> <img height={280} width={320} src={props.img} /></div>
          <div className="py-2 px-2">
            <div className="font-bold font-title text-center">{props.title}</div>
            <div className="text-sm font-light text-center my-2">{props.description}</div>
          </div>
        </div>
      </div>
    </a>
    </>
    
   
  )
}