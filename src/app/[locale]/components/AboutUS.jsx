import { useTranslations } from 'next-intl';
import Container from '@/app/[locale]/layouts/Container';
import Image from 'next/image';
import About from '../../../../public/images/about.webp';

const AboutUs = () => {
  const t = useTranslations('AboutUs');

  return (
    <section id={t('sectionId')} className={'py-8 md:py-12'}>
      <Container>
        <div className={'md:grid grid-cols-2 gap-12 items-center'}>
          <div>
            <h2 className={'font-bold text-3xl pb-2'}>{t('sectionTitle')}</h2>
            <p>
              <strong>{t('aboutContentStrong')}</strong> {t('aboutContent')}
            </p>
          </div>

          <div className={''}>
            <Image src={About} alt={'About us'} className={'rounded md:mt-0 mt-5'} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
