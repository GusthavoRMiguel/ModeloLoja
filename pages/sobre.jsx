import Head from 'next/head'
import Footer from './components/footer'
import NavBar from './components/navBar'

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Head>
        <title>Sobre | Loja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className='bg-gray-200  w-full min-h-screen pt-28'>
        <div className='text-center'>
          <h1 className=' font-bold'>
            <span>
              VOCÊ FAZ PARTE DESSA HISTÓRIA!
            </span>
          </h1>
        </div>
        <div className='sm:inline-block text-center px-2'>
          <div className='sm:ml-auto  mt-10'>
            <p>
              Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em Editar Texto ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à vontade para arrastar e soltar em qualquer lugar em sua página. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.
            </p>
            <p>
              <span>  ---------        </span>
            </p>
            <p>
              Este é um ótimo espaço para escrever um texto longo sobre a sua empresa e seus serviços. Você pode usar esse espaço para detalhar sua empresa. Fale sobre a sua equipe e sobre os serviços prestados por você. Conte aos seus visitantes sobre como teve a ideia de iniciar o seu negócio e o que o torna diferente de seus competidores. Faça com que sua empresa se destaque e mostre quem você é.
            </p>
          </div>
          <div className='mt-8 inline-flex'>
            <div className='sm:flex'>
              <a className='sm:pr-8' href="https://goo.gl/maps/wjsmbVmBxn6inZQL6" target="_blank" rel="noreferrer">
              <div>        
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-28 h-28">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <div className='mb-4'>
                <p className=''>
                  <span>Nos encontre aqui!</span>
                </p>
              </div>
              </a>
              <a className='pl-8' href="https://wa.me/5511982735663" target="_blank" rel="noreferrer">
              <div >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" w-28 h-28">
                   <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
                </svg>
              </div>
              <div className='mb-6 '>
                <p >
                  <span>Entre em contato!</span>
                </p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
