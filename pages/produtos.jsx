import Head from 'next/head'
import NavBar from './components/navBar'
import Card from './components/card'
import Footer from './components/footer'
import Document from './_document'


function Projects() {
  return (
  <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Head>
        <title>Projetos | Loja</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />  
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6'>
            <Card  img="/img/product.jpg"  title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg"  title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
            <Card  img="/img/product.jpg" title="Nome do Produto" description="Descrição do Produto"/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Projects