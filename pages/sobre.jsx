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
      <div className='bg-gradient-to-b from-[#1a6665e6] to-gray-50  w-full min-h-screen pt-28'>
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
          <div className=' sm:py-20 py-5'>
            <div className='inline-flex ui-open:hidden'>
              <a className='pl-5 sm:pr-8' href="https://goo.gl/maps/" target="_blank" rel="noreferrer">
                <div className='inline-flex hover:animate-bounce'>
                  <img src='/icons/icons8-maps.svg' alt='icone-maps' height={112} width={112}/>
                </div>
                <div>
                  <p>
                    <span>Nos encontre aqui!</span>
                  </p>
                </div>
              </a>
              <a className='sm:pl-8 pl-6 '  href="https://wa.me/5511982735663" target="_blank" rel="noreferrer">
                <div className='inline-flex hover:animate-bounce'>
                  <img className=' w-28 h-28' src="/icons/icons8-whatsapp.svg" alt="icone-whatsapp" />
                </div>
                <div className='sm: '>
                  <p >
                    <span>Entre em contato via whatsapp!</span>
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
