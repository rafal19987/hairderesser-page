'use client';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { deleteAllReserations } from '@/store/features/reservations/reservationsSlice';

export const Content = () => {
  const dispatch = useAppDispatch();

  const reservations = useAppSelector((state) => state.reservations);
  const employees = useAppSelector((state) => state.employees);
  const services = useAppSelector((state) => state.services);

  return (
    <>
      <ul className='flex flex-col gap-4'>
        {reservations.map((reservation) => (
          <li key={reservation.id} className='flex items-center justify-evenly'>
            <span className='w-96 border'>
              {
                services.find((service) => service.id === reservation.serviceId)
                  ?.title
              }
            </span>
            <span>
              {
                employees.find(
                  (employee) => employee.id === reservation.executorId
                )?.name
              }
            </span>
            <span>{reservation.reservationDate?.day}</span>
            <span>{reservation.reservationDate?.hour}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(deleteAllReserations())}>
        Usuń rezerwacje
      </button>
    </>
  );
};
