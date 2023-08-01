import CarouselItem from './CarouselItem';

const Carousel = () => {
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const today = new Date();
  const datesArray = [];

  for (let i = 0; i < 24; i++) {
    const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    const formattedDate = new Intl.DateTimeFormat('pl-PL', options).format(
      date
    );
    datesArray.push(formattedDate);
  }

  return (
    <ul className="flex whitespace-nowrap items-center gap-4 w-full h-full overflow-x-auto  flex-shrink-0 no-scrollbar">
      {datesArray.map((day: string) => {
        const splitDate = day.split(' ');
        const dayInWords = splitDate[0].slice(0, -1);
        const dayNumber = splitDate[1];

        return (
          <CarouselItem
            key={day}
            dayNumber={dayNumber}
            dayInWords={dayInWords}
          />
        );
      })}
    </ul>
  );
};

export default Carousel;
