import Container from '@/app/[locale]/layouts/Container';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import marketing from '../../../../public/images/02.webp';

const MarketingDesc = () => {
  const t = useTranslations('marketingDescription');

  return (
    <section id={'marketingDescription'} className={'py-8 md:py-12 __marketing_desc'}>
      <Container>
        <div className={'md:grid grid-cols-2 gap-12 items-center'}>
          <div>
            <Image
              src={marketing}
              alt={'marketing'}
              className={'rounded md:mt-0 mt-5 shadow-md w-auto max-h-[550px]'}
            />
          </div>

          <div>
            <h2 className={'font-bold text-3xl pb-2'}>{t('sectionTitle')}</h2>
            <p>{t('text')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingDesc;
