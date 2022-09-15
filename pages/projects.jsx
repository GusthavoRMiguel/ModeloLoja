import Head from 'next/head'
import Aside from './components/aside'
import PageName from './components/pageName'
import Card from './components/card'


function Projects() {
  return (
  <div className="flex flex-row min-h-screen overflow-x-hidden">
    <Head>
        <title>Projects | Gusthavo Ramos</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Aside />  
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-5'>
        <PageName name="Projects" />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6'>
            <Card img="/img/image-1.jpg" icon="/img/icons8-dart.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
            <Card img="/img/image-1.jpg" icon="/img/icons8-kotlin.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
            <Card img="/img/image-1.jpg" icon="/img/icons8-python.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
            <Card img="/img/image-1.jpg" icon="/img/icons8-typescript.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
            <Card img="/img/image-1.jpg" icon="/img/icons8-java.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
            <Card img="/img/image-1.jpg" icon="/img/icons8-ruby.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
            <Card img="/img/image-1.jpg" icon="/img/icons8-c.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
            <Card img="/img/image-1.jpg" icon="/img/icons8-python.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
            <Card img="/img/image-1.jpg" icon="/img/icons8-dart.svg" title="Painel em flutter" description="Painel administrativo feito no curso de Dart do TI Contigo"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Projects