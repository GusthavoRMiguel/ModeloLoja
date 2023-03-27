export default function CardText(props) {
  return(
          <div className='sm:mx-auto sm:w-fit h-full'>   
            <div className='sm:pb-1 text-center'>
              <h2 className=" font-extrabold">
                <span>{props.tittle}</span>
              </h2>
            </div>
            <div className='sm:pt-3 pb-4'>
              <p className='sm:text-justify text-center mx-2'>
                <span>{props.description}</span>
              </p>
            </div>
          </div>
  )
}