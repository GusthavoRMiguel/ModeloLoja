import Head from 'next/head'
import NavBar from './components/navBar'
import Footer from './components/footer'
import Document from './_document'

function Contact() {
  return (
    <div className="flex flex-col  overflow-hidden">
    <Head>
        <title>Contato | Loja</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar /> 
    <div className=' bg-gray-200  w-screen'>
      <div className='py-20'>
        <div className=' flex items-top justify-center sm:items-center sm:pt-0'>
            <div>
              <div className="p-20 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg  ">
                <div className='w-full justify-center' ></div>
                <h1 className="text-4xl sm:text-7xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Entrar em contato
                </h1>
                <a href="https://goo.gl/maps/wjsmbVmBxn6inZQL6" target="_blank" rel="noreferrer">
                  <div className="flex items-center mt-10 text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div className="ml-4 w-fit text-xl tracking-wide font-semibold ">
                      Rua X, Bairro Y , São Paulo-SP,
                      00000-000
                    </div>
                  </div>
                </a>
                <a href="tel:+550113505-0505" target="_blank" rel="noreferrer">
                  <div className="flex items-center mt-10 text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0  24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div className="ml-4 text-xl tracking-wide font-semibold w-40">
                     +55 95555-5555
                    </div>
                  </div>
                </a>
                <a href="https://wa.me/5511982735663" target="_blank" rel="noreferrer">
                  <div className="flex items-center mt-10 text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <div className="ml-4 text-xl tracking-wide font-semibold w-40">
                      +55 95555-5555
                    </div>
                 </div>
                </a>
                <a href="mailto:email@loja.com" target="_blank" rel="noreferrer">
                <div className="flex items-center mt-10 text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div className="ml-4 text-xl tracking-wide font-semibold w-40">
                   loja@email.com
                  </div>
                </div>              
                </a>
              </div>
            </div>
           </div>
        </div>      
    </div>
    <Footer />
  </div>
  )
}

export default Contact