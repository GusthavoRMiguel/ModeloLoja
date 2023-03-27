import CardText from './CardText'
export default function Footer() {
  return (
    <div>
    <section className='sm:flex bg-red-500 pt-3 w-screen text-white h-25'>
       <div className='flex items-center sm:w-2/6'>
        <div className=' w-[10%] ml-5 mr-5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </div>
        <div className=' w-4/5 mr-[10%]'>
        <CardText tittle='NOSSO TELEFONE' description='(11) 3456-7890 | (11) 3456-7890' />
        </div>
      </div>
      <div className='flex items-center sm:w-2/6'>
        <div className='w-[10%] ml-5 mr-5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
         </svg>
       </div>
       <div className=' w-4/5 mr-[10%]'> 
       <CardText tittle='NOSSO EMAIL' description='info@meusite.com'/>
       </div>
      </div>  
      <div className='flex items-center sm:w-2/6'>
        <div className='w-[10%] ml-5 mr-5'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className='w-4/5 mr-[10%]'>
        <CardText tittle='NOSSOS HORÁRIOS' description='Segunda a Sábado, das 08h30 às 19h.'/>
        </div>
        
      </div>
    </section>
    <section className='sm:flex bg-gray-700 pt-3 w-screen text-white h-50'>
       <div className='flex items-center sm:w-2/6'>
        <div className=' w-[10%] ml-5 mr-5'></div>
        <div className=' w-4/5 mr-[10%]'>
        <CardText tittle='VOLTE SEMPRE' description='Sou um parágrafo adicione seu texto.' />
        </div>
      </div>
      <div className='flex items-center sm:w-2/6'>
        <div className='w-[10%] ml-5 mr-5'></div>
       <div className=' w-4/5 mr-[10%]'> 
       <CardText tittle='NOSSOS SERVIÇOS' description=' Descriçao do tipo de Serviço que fornece'/>
       </div>
      </div>  
      <div className='flex items-center sm:w-2/6'>
        <div className='w-[10%] ml-5 mr-5'></div>
        <div className='w-4/5 mr-[10%]'>
        <CardText tittle='ENCONTRE-NOS' description='Rua X, Bairro Y, São Paulo, SP 10000-000'/>
        </div>
      </div>
    </section>
    
    <footer className='bg-gray-800'><p className='text-center  text-xs font-medium  text-white w-full p-2'> Copyright © 2023 GusthavoRMiguel </p>
    </footer>
  </div> 
    )
  }