import Head from 'next/head';
import React, { useEffect, useState } from "react";
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import CardText from '../components/cardText';





export default function Home() {

  return (
    <div className="flex  flex-col min-h-screen overflow-hidden w-full">
      <Head>
        <title>Home | KSG Vidros para Vans </title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <NavBar />        
      <div className=' bg-tela-fundo bg-no-repeat bg-cover bg-center  '>
        <div className=' h-[550px] mt-32 mx-3 text-center'>
          <div className='pb-4 '>
            <h1 className=' font-semibold sm:text-4xl text-3xl text-white '>
              <span >
              Seja Bem Vindo !
              </span>
            </h1>
          </div>
          <div className='pt-4 '>
            <p className=' font-medium sm:text-1xl text-xl text-white'>
            <span>
              A 'Sua Loja' conta com profissionais treinados e aptos a atender nossos clientes e fornecer serviços ágeis e de qualidade.
              </span>
           </p>
          </div>
        </div>
      </div>
      <div className=' bg-tela-fundo1  bg-repeat-y bg-contain '>
        <div className='h-72  bg-gradient-to-b from-gray-600 to-gray-200 text-center'>
          <div className='font-bold text-xl py-6 text-slate-200'>
            <h1>
              <span>
              Seu Titulo!
              </span>
            </h1>
          </div>
          <div className='mx-3 text-white'>
            <p>
            <span>
              Trabalhamos com marcas mundialmente conhecidas, como:</span>
               <br /> 
               <span>
               adicione seu texto
                </span> 
           </p>
          </div>
          <div className='flex place-content-center sm:pt-10 pt-5'>
            <img src="/vercel.svg" alt="fiat-icon" className='pr-5'/>
            <img src="/vercel.svg" alt="ford-icon" className='pr-5'/>
            <img src="/vercel.svg" alt="mercedes-icon" className='pr-5' />
            <img src="/vercel.svg" alt="renault-icon" className='pr-2'/>
          </div>
        </div>
        
        <div className=' bg-gradient-to-r from-zinc-800 to-zinc-500 pt-3  w-screen text-white  text-center font-extrabold text-2xl mt-4'>Prontos para te atender!</div>
        <section className='sm:flex bg-gradient-to-r from-zinc-800 to-zinc-500 pt-3  w-screen text-white h-50'>
          <div className='flex items-center sm:w-1/3  my-4'>
            <div className='w-[10%] ml-5 mr-5'><p className=' xl:text-6xl text-5xl font-bold'>1°</p></div>
            <div className=' w-4/5 mr-[10%] mb-auto'> 
              <CardText tittle='Solicite o Orçamento'  description='{adicione seu texto} '/>
            </div>
          </div>  
          <div className='flex items-center sm:w-1/3 my-4'>
            <div className='w-[10%] ml-5 mr-5'><p className=' xl:text-6xl text-5xl font-bold'>2°</p></div>
            <div className='w-4/5 mr-[10%] mb-auto'>
              <CardText tittle='Recebendo o orçamento' description='{adicione seu texto} ' />
            </div>
          </div>
          <div className='flex items-center sm:w-1/3 sm:my-4'>
            <div className='w-[10%] ml-5 mr-5'><p className=' xl:text-6xl text-5xl font-bold'>3°</p></div>
            <div className='w-4/5 mr-[10%] mb-auto'>
              <CardText tittle='Instalando seu produto' description=' {adicione seu texto}  ' />
            </div>
          </div>
        </section>
        <div className='bg-gradient-to-r from-zinc-800 to-zinc-500 w-screen py-5 sm:mb-6 mb-3 text-center'>
            <a href="https://wa.me/5511982735663" target="_blank" rel="noopener noreferrer">
              <button className='bg-[#128C7E] rounded-xl p-4 inline-flex hover:animate-pulse hover:text-black text-white'>
                <img className='h-7 w-7 mr-2' src="/icons/icons8-whatsapp.svg" alt="icone-whatsapp" />
                Faça um Orçamento agora!
              </button>
            </a> 
        </div>
      </div>        
      <Footer/>
    </div>
  )
}
