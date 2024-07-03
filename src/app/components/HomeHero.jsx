import Container from '@/app/layouts/Container';
import Image from 'next/image';
import mobileImg from '../../../public/images/01.webp';
import CustomButton from '@/app/utils/CustomButton';

const HomeHero = () => {
  return (
    <section className={'__hero-bg min-h-[100vh] md:-mt-[80px] w-full'}>
      <Container>
        <div
          className={
            'md:flex justify-between items-center gap-16 md:min-h-[100vh] min-h-[60vh] text-white md:text-black'
          }
        >
          {/*LEFT*/}
          <div className={'md:w-1/2 pt-20 md:pt-0'}>
            <div className={'bg-slate-200 rounded-full inline-block mb-5'}>
              <div className={'flex text-[14px]'}>
                <p
                  className={
                    'text-black bg-sky-600 rounded-full font-semibold py-1 w-[80px] text-center'
                  }
                >
                  New
                </p>
                <p className={'text-black rounded-full py-1 px-2 w-[160px] text-center'}>
                  Best Mobile App
                </p>
              </div>
            </div>

            {/*MAIN TEXT OF HERO SECTION*/}
            <div>
              <h1 className={'mb-5 text-4xl md:text-6xl font-semibold'}>
                Welcome To <br />
                <span className={'md:text-sky-600 text-black font-bold'}>ScorIT</span>
              </h1>

              <p className={'mb-4'}>
                ScorIT is more than just an app; its your personalized daily expense companion.
                With ScorIT, managing your expenses becomes effortless and insightful. Track your
                daily costs, incomes, and expenditures in a simple, user-friendly interface designed
                to give you comprehensive financial insights.
              </p>

              <div className={'mt-6'}>
                <CustomButton title={'Read More...'} href={'#'} />
              </div>
            </div>
          </div>

          {/*RIGHT*/}
          <div className={'md:w-1/2 flex md:justify-end justify-center mt-8 md:mt-24'}>
            <Image
              src={mobileImg}
              alt={'ScorIT'}
              className={'max-h-[550px] w-auto shadow-md mt-5 md:mt-0'}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
