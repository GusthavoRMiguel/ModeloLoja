import Head from 'next/head';
import React, { useEffect, useState } from "react";
import Footer from './components/footer';
import NavBar from './components/navBar';
import CardText from './components/CardText';




export default function Home() {

  return (
    <div className="flex  flex-col min-h-screen overflow-hidden w-full">
      <Head>
        <title>Home | Loja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />        
      <div className='bg-tela-fundo bg-cover object-cover bg-center h-full w-full'>
      <div className='h-96 mt-32 mx-3 text-center'>
          <div className=' pb-4'>
            <h1>
              <span>
                Somos uma Loja
              </span>
            </h1>
          </div>
          <div>
            <p>
              <span>
                Sou um parágrafo. Adicione aqui uma breve descrição da sua loja. Sou um ótimo espaço para você contar sua história
              </span>
           </p>
          </div>
        </div>
        <section className='sm:flex bg-red-700 pt-3 w-screen text-white h-50'>
       <div className='flex items-center sm:w-2/6'>
        <div className=' w-[10%] ml-5 mr-5'></div>
        <div className=' w-4/5 mr-[10%]'>
        <CardText tittle='Serviço 1' description='Sou um parágrafo. Adicione aqui a descrição do serviço 1.' />
        </div>
      </div>
      <div className='flex items-center sm:w-2/6'>
        <div className='w-[10%] ml-5 mr-5'></div>
       <div className=' w-4/5 mr-[10%]'> 
       <CardText tittle='Serviço 2' description='Sou um parágrafo. Adicione aqui a descrição do serviço 2.'/>
       </div>
      </div>  
      <div className='flex items-center sm:w-2/6'>
        <div className='w-[10%] ml-5 mr-5'></div>
        <div className='w-4/5 mr-[10%]'>
        <CardText tittle='Serviço 3' description='Sou um parágrafo. Adicione aqui a descrição do serviço 3.'/>
        </div>
      </div>
        </section>
        <section className=' place-content-center sm:flex bg-slate-500  h-96 w-screen text-white' >
        <div className='pt-12'>
            <h1 className='text-center'>  
              <span>
                Bem Vindo
              </span>
            </h1>
          </div>
        </section>  
      </div>      
     <Footer/>
    </div>
  )
}
