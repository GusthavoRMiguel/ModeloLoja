import Head from 'next/head'
import Aside from './components/aside'
import Language from './components/progressBar'
import PageName from './components/pageName'
import Personal from './components/personal'
/*import { Timeline } from './components/timeline'*/
import Card from './components/card'

function About() {
  return (
    <div className="flex flex-row min-h-screen overflow-x-hidden">
      <Head>
        <title>About | Gusthavo Ramos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside />
      <div className='flex-grow bg-gray-200  w-full min-h-screen'>
        <div className='container mx-auto px-8 py-5'>
          <PageName name="About Me" />
          <div>
            <h3 className='mt-8 text-xl font-semibold'>Eu sou Gusthavo Ramos Miguel e sou <span className='text-indigo-600'>Desenvolvedor Web </span>.</h3>
            <p className='mt-4 text-sm  text-justify sm:mr-20'>Olá! Meu nome é Gusthavo Ramos Miguel, eu sou desenvolvedor web. Sempre no meu tempo livre estou programando alguma coisa ou estudando novas tecnologias.</p>
          </div>
          <div className='mt-10'>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              <div className='text-base  lg:px-20 sm:px-5'>
                <Personal title="Birthday" description="07 Dec 1999" />
                <Personal title="Website" description="********" />
                <Personal title="Degree" description="********" />
                <Personal title="City" description="São Paulo-SP" />
              </div>
              <div className='text-base lg:px-20 sm:px-5'>
                <Personal title="Age" description="22" />
                <Personal title="Email" description=" gusthavo.rmiguel@gmail.com" />
                <Personal title="Phone" description="+55 11 982735663" />
                <Personal title="Freelance" description="Available" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid justify-items-center col-span-2'>
            <button class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-indigo-700">Download Resume</button>
          </div>
        </div>
        <div className='mt-10 mb-10'>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            <div className='text-base px-4 lg:px-20 sm:px-5'>
              <h2 className='text-2xl font-bold text-center text-indigo-700'>Languages</h2>
              <Language language="HTML" width="width:95%" percent="95" />
              <Language language="CSS" width="width:85%" percent="85" />
              <Language language="Javascript" width="width:75%" percent="75" />
            </div>
            <div className='text-base px-4 lg:px-20 sm:px-5'>
              <h2 className='text-2xl font-bold text-center text-indigo-700'>Frameworks</h2>
              <Language language="Reactjs" width="width:80%" percent="80" />
              <Language language="Nextjs" width="width:80%" percent="80" />
              <Language language="Angularjs" width="width:60%" percent="75" />
            </div>
          </div>
        </div>
        <div className='mt-10 mb-10'>
          <div className="grid">
            <div className='text-base px-4 md:px-3 sm:px-1 lg:px-12'>
              <h2 className='text-2xl font-bold text-center text-indigo-700 mb-4'>Certificações</h2>
              <div className='bg-white rounded shadow  py-1 '>
                
                  <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 mt-6'>
                    <Card img="/img/certificados/client-server.jpg" icon="/img/icons8-mysql.svg" title="Entendendo Comunicação Client x Server" description="11/10/2022" />
                    <Card img="/img/certificados/construindo-bootstrap.jpg" icon="/img/icons8-bootstrap.svg" title="Construindo páginas para internet com Bootstrap" description="23/06/2022" />
                    <Card img="/img/certificados/debugging-js.jpg" icon="/img/icons8-javascript.svg" title="Debugging e Error Handling com JavaScript" description="04/07/2022" />
                    <Card img="/img/certificados/dev-moderno.jpg" icon="/img/icons8-dev.svg" title="Introdução ao Desenvolvimento Moderno de Software" description="29/08/2022" />
                    <Card img="/img/certificados/forms.jpg" icon="/img/icons8-html.svg" title="Trabalhando com Formulários" description="18/10/2022" />
                    <Card img="/img/certificados/html-format.jpg" icon="/img/icons8-html.svg" title="Estruturando seu HTML + Formatações" description="27/10/2022" />
                    <Card img="/img/certificados/html-napratica.jpg" icon="/img/icons8-html.svg" title="Introdução ao HTML na Prática" description="11/10/2022" />
                    <Card img="/img/certificados/intro-bdados.jpg" icon="/img/icons8-mysql.svg" title="Introdução a Banco de Dados" description="05/09/2022" />
                    <Card img="/img/certificados/intro-git.jpg" icon="/img/icons8-git.svg" title="Introdução ao Git e ao GitHub" description="12/09/2022" />
                    <Card img="/img/certificados/intro-html5.jpg" icon="/img/icons8-html.svg" title="Introdução a Criação de Websites com HTML5 e CSS3" description="20/06/2022" />
                    <Card img="/img/certificados/intro-prog.jpg" icon="/img/icons8-dev.svg" title="Introdução à Programação e Pensamento Computacional" description="07/10/2022" />
                    <Card img="/img/certificados/intro-tailwind.jpg" icon="/img/icons8-tailwind.svg" title="Introdução ao Tailwind CSS" description="23/08/2022" />
                    <Card img="/img/certificados/js-async.jpg" icon="/img/icons8-javascript.svg" title="Fundamentos de JavaScript AssíncronoClone Netflix" description="05/07/2022" />
                    <Card img="/img/certificados/logica-essencial.jpg" icon="/img/icons8-dev.svg" title="Lógica de Programação Essencial" description="25/04/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    <Card img="/img/certificados/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
                    
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
