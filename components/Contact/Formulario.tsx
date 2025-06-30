'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().max(15, 'Nome não pode ter mais de 15 caracteres').required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  subject: yup.string().required('Assunto é obrigatório'),
  message: yup.string().max(200, 'Mensagem não pode ter mais de 200 caracteres').required('Mensagem é obrigatória'),
  whatsapp: yup.string().matches(/^\d{2}-\d{5}-\d{4}$/, 'Formato 21-97124-6822').required('WhatsApp é obrigatório'),
  }).required();
  
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  whatsapp: string;
};

export default function Formulario() {
  const [buttonText, setButtonText] = useState('Enviar');

  const { control, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<FormData>({
  resolver: yupResolver(schema),
  defaultValues: {
    name: '',
    email: '',
    subject: '',
    message: '',
    whatsapp: '',
  },
});

   const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setButtonText('Enviado');
      reset({
        name: '',
        email: '',
        subject: '',
        message: '',
        whatsapp: '',
      });
      setTimeout(() => setButtonText('Enviar'), 3000);
    } else {
      alert('Houve um erro ao enviar sua mensagem. Tente novamente.');
    }
  };

  const subject = watch('subject');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full pt-10 flex md:flex-row flex-col justify-around items-center">
      <div className="md:w-1/5 w-full md:h-1/2 h-1/5 flex flex-col justify-between items-center space-x-4 mb-4">
        {['Desenvolvimento', 'Comunidade', 'Emprego', 'Outros'].map(subjectOption => (
          <button
            key={subjectOption}
            type="button"
            onClick={() => setValue('subject', subjectOption, { shouldValidate: true })}
            className={`mb-3 ml-8 p-3 md:w-full w-56 h-10 flex justify-around text-neutral-500 items-center border-2 rounded-3xl transition-all cursor-pointer ${subject === subjectOption ? 'bg-lime-500 text-neutral-950' : ''}`}
          >
            {subjectOption}
          </button>
        ))}
        {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
      </div>
      <div className="md:w-4/6 w-full md:h-full h-3/5 md:grid md:grid-cols-3">
        <div className="sm:w-2/3 w-full h-12 col-span-3 flex flex-row space-x-4 mb-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Seu Nome"
                className="w-full h-full p-2 mb-4 bg-transparent border-b border-neutral-500 transition-all placeholder:text-neutral-500  hover:placeholder:text-lime-500 hover:placeholder:-translate-y-5 hover:placeholder:text-xs placeholder:transition-all focus:outline-none text-lime-500"
              />
            )}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className='w-full sm:h-12 h-28 col-span-3 flex sm:flex-row flex-col justify-around items-center'>
          <div className="sm:w-2/5 w-full h-full flex flex-row space-x-4 mb-4">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Seu email"
                  className="w-full h-full p-2 mb-4 bg-transparent border-b border-neutral-500 transition-all placeholder:text-neutral-500  hover:placeholder:text-lime-500 hover:placeholder:-translate-y-5 hover:placeholder:text-xs placeholder:transition-all focus:outline-none text-lime-500"
                />
              )}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div className="sm:w-2/5 w-full h-full flex flex-row space-x-4 mb-4">
            <Controller
              name="whatsapp"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  placeholder="Seu WhatsApp"
                  className="w-full h-full p-2 mb-4 bg-transparent border-b border-neutral-500 transition-all placeholder:text-neutral-500 hover:placeholder:text-lime-500 hover:placeholder:-translate-y-5 hover:placeholder:text-xs placeholder:transition-all focus:outline-none text-lime-500"
                />
              )}
            />
            {errors.whatsapp && <p className="text-xs text-red-500">{errors.whatsapp.message}</p>}
          </div>
        </div>
        <div className="md:h-full h-56 md:col-span-2 flex flex-col space-x-4 mb-4">
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="Sua mensagem"
                className="pt-10 mr-3 w-full h-full p-2 mb-4 bg-transparent border-b border-neutral-500 transition-all placeholder:text-neutral-500  hover:placeholder:text-lime-500 hover:placeholder:-translate-y-5 hover:placeholder:text-xs placeholder:transition-all focus:outline-none text-lime-500"
              />
            )}
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>
        <button type="submit" className="md:w-full w-[95%] h-62 mx-2 text-3xl text-neutral-500 hover:text-neutral-950 hover:bg-lime-500 custom-transition-color flex justify-around items-center border-4 border-neutral-500 rounded-3xl transition-all cursor-pointer">
          {buttonText}
        </button>
      </div>
    </form>
  );
}
