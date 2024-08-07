'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
// import NextAuthProviders from './NextAuthProviders';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { FormFieldInput } from '@/components/shared-atoms/FormFieldInput';
import { FormFieldLabel } from '@/components/shared-atoms/FormFieldLabel';
import { FormFieldContainer } from '@/components/shared-atoms/FormFieldContainer';

const userSchema = z.object({
  email: z.string().email('Podaj poprawny email'),
  password: z.string().min(1, 'Wprowadź swoje hasło'),
});

type TUser = z.infer<typeof userSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUser>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<TUser> = async (data) => {
    const result = await signIn('credentials', {
      redirect: true,
      username: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      toast.error(result?.error!);
    }
    return;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-start justify-center grow gap-1 h-full'
    >
      <FormFieldContainer>
        <FormFieldLabel htmlFor='email' text='Adres Email' />
        <FormFieldInput
          id='email'
          type='text'
          placeholder='Wprowadź adres email'
          aria-label='Wprowadź adres email'
          errorMsg={errors.email?.message}
          register={register}
        />
      </FormFieldContainer>

      <FormFieldContainer>
        <FormFieldLabel htmlFor='password' text='Hasło' />
        <FormFieldInput
          id='password'
          type='password'
          placeholder='Wprowadź hasło'
          aria-label='Wprowadź hasło'
          errorMsg={errors.password?.message}
          register={register}
        />
      </FormFieldContainer>
      <Link className='text-xs mt-2 hover:underline' href='/forgotPassword'>
        Zapomniałeś hasła?
      </Link>

      <div className='self-center mt-12 text-center'>
        <button
          className='w-fit px-6 py-4 font-bold text-black bg-[var(--gold)] focus:outline-red-300 focus:shadow-outline'
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logowanie...' : 'Zaloguj'}
        </button>
      </div>
      <div className='flex w-full items-center justify-center gap-2 mt-4'>
        <p className='text-xs'>Nie posiadasz konta?</p>
        <Link className='text-xs hover:underline' href='/register'>
          Zarejestruj się.
        </Link>
      </div>
    </form>
  );
};
