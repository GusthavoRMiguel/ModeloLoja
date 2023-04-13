import Head from 'next/head';
import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function Contact() {

  // Initialize our states
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Yup error message overrides
  const errMess = {
    req: "Por favor, preencha aqui!"
  };

  // Our Yup Schema for this form
  const ContactSchema = yup.object().shape({
    name: yup.string()
      .label('Nome Completo')
      .required(errMess.req)
      .min(3)
      .max(30),
    email: yup.string()
      .label('Endereço de Email')
      .required(errMess.req)
      .email('Endereço de email inválido.'),
    phone: yup.string()
      .label('Telefone de Contato')    
      .max(12),
    message: yup.string()
      .label('Mensagem')
      .required(errMess.req)
      .min(10)
      .max(1000),
  });

  // Destruct useForm() and set our Yup schema as the validation resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema)
  });

  // Send our valid form data to our back-end API
  const submitForm = async (data) => {
    setIsSubmitting(true);

    const res = await axios({
      method: 'POST',
      url: '/api/contact-form',
      data: data
    }).then((res) => {
      setIsSubmitting(false);
      return res;
    }).catch((e) => {
      alert("Um erro ocorreu. Consulte o registro para obter detalhes.")
      console.error(e);
    });

    if (res.data.status === 1) {
      setIsSubmitted(true);
    } else {
      alert(res.data.message);
    }
  };




return (
  <div className="flex  flex-col min-h-screen overflow-hidden w-full">
    <Head> 
      <title>Contato | Minha Loja</title>
      <link rel="icon" href="/vercel.svg" />
    </Head>
    <NavBar /> 
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-20 sm:py-10'>
        <div className='flex-auto flex items-top justify-center min-h-screen  sm:items-center sm:pt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#1a6665] to-slate-600 rounded-lg '>
              <div className='pt-10 sm:pt-1'>
              <div className="sm:px-16 px-8  text-center sm:mr-1 ">
                <h1 className=" text-2xl sm:text-4xl  text-slate-100 pt-6 pb-2 font-bold tracking-tight sm:pb-4 sm:pt-10 ">
                  Entre em contato !
                </h1>
                <div className='sm:pl-6  text-start sm:text-left'>
                <a href="https://goo.gl/maps/J7T3eH9NFV2hRzHT7" target="_blank" rel="noreferrer">
                  <div className="sm:pl-5 flex items-center mt-10 text-slate-200 hover:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div className="mx-4 w-fit text-xl tracking-wide font-semibold ">
                    Rua X, Bairro Y- SP
                    </div>
                  </div>
                </a>
                <a href="tel:011982735663" target="_blank" rel="noreferrer">
                  <div className="sm:pl-5 flex items-center mt-5 text-slate-200 hover:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0  24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div className="ml-4 text-xl tracking-wide font-semibold ">
                     011 98273-5663
                    </div>
                  </div>
                </a>
                <a href="https://wa.me/55011982735663" target="_blank" rel="noreferrer">
                  <div className="sm:pl-5 flex items-center mt-5 text-slate-200 hover:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <div className="ml-4 text-xl tracking-wide font-semibold ">
                      011 98273-5663
                    </div>
                 </div>
                </a>
                <a href="mailto:gusthavo.rmiguel@gmail.com" target="_blank" rel="noreferrer">
                <div className="sm:pl-5 sm:pb-5 inline-flex sm:flex items-center mt-5 text-slate-200 hover:text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div className="ml-4 text-xl break-all font-semibold ">
                  gusthavo.rmiguel@gmail.com
                  </div>
                </div>              
                </a>

                </div>
              </div>
              </div>
              <div className='sm:pt-1 pt-20'>
              <div className='sm:px-16 px-8 text-center   rounded-lg'>
              {!isSubmitted ?
              <>              
                <h1 className=' text-2xl sm:text-4xl text-slate-100 font-bold tracking-tight  sm:pt-10'>Preencha o formulário  abaixo !</h1>              
              <Form
               onSubmit={handleSubmit((data) => submitForm(data))} 
               className="p-5 flex flex-col justify-center">
                  <Row className='flex flex-col'>
                    <Col className='pt-5'>
                      <Form.Group
                       className="mb-3" 
                       controlId="nameField">
                      <Form.Label className='hidden'>Nome Completo</Form.Label>
                      <Form.Control 
                       className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 0 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                       type="text"
                       placeholder="Nome Completo"
                       isInvalid={errors.name}
                       {...register('name')}
                      />
                    <Form.Control.Feedback type='invalid'>
                      {errors.name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                    </Col> 

                    <Col>
                      <Form.Group className="mb-3" controlId="emailField">
                        <Form.Label className='hidden'>Email</Form.Label>
                        <Form.Control 
                          className="w-full mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          type="email"
                          placeholder="email@example.com"
                          isInvalid={errors.email}
                          {...register('email')}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col>
                      <Form.Group className="mb-3" controlId="phoneField">
                        <Form.Label className='hidden'>Telefone</Form.Label>
                        <Form.Control 
                          className="w-full mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          type="tel"
                          placeholder="(XX) 9XXXX-XXXX"
                          isInvalid={errors.phone}
                          {...register('phone')}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.phone?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col lg={12}>
                      <Form.Group className="mb-3" controlId="messageField">
                        <Form.Label className='hidden'>Message</Form.Label>
                        <Form.Control 
                          className="w-full mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                          as="textarea"
                          rows={5}
                          placeholder="Por favor escreva sua mensagem..."
                          isInvalid={errors.message}
                          {...register('message')}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.message?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                  </Row>
                  <Row className=' self-center'>
                  <Button variant="primary" type="submit" disabled={isSubmitting} className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </Button>
                  </Row>
                  
              </Form>
              </>
              :
              <div className='text-slate-200 font-semibold sm:pt-28'>
              <h1>Obrigado !</h1>
              <p> Sua mensagem foi recebida. Verifique seu email para confirmar! </p>
              </div>
              }
              </div>
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