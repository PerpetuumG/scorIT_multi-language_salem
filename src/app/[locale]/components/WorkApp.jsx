import Container from '@/app/[locale]/layouts/Container';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import howWork from '../../../../public/images/03.webp';
import HowItWorkCard from '@/app/[locale]/components/HowItWork/HowItWorkCard';
import { HowWorkCard } from '../../../../lib/constants';

const WorkApp = () => {
  const t = useTranslations('HowItWork');

  return (
    <section id={'HowItWork'} className={'py-8 md:py-12'}>
      <Container>
        <div>
          <div className={'md:grid grid-cols-2 gap-12 items-center'}>
            <div>
              <h2 className={'font-semibold text-3xl md:text-4xl'}>{t('sectionTitle')}</h2>
              <div className={'flex flex-col gap-5 mt-5'}>
                {HowWorkCard.map((item, index) => (
                  <HowItWorkCard src={item.img} title={t(item.title)} desc={t(item.desc)} />
                ))}
              </div>
            </div>

            <div>
              <Image
                src={howWork}
                alt={'How Work'}
                className={'rounded shadow-md w-auto max-h-[550px] m-auto'}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkApp;
