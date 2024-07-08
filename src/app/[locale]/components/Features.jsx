import Container from '@/app/[locale]/layouts/Container';
import { useTranslations } from 'next-intl';
import { FEATURES } from '../../../../lib/constants';
import FeatureCard from '@/app/[locale]/components/Features/FeatureCard';

const Features = () => {
  const t = useTranslations('Features');

  return (
    <section id={t('sectionId')} className={'py-8 md:py-12 bg-blue-50'}>
      <Container>
        <div className={'text-center pb-8'}>
          <h2 className={'text-center font-semibold text-3xl md:text-4xl'}>{t('sectionTitle')}</h2>
          <p className={'pt-2'}>{t('sectionDescription')}</p>
        </div>

        <div className={'md:grid grid-cols-4 gap-5 text-center'}>
          {FEATURES.map((item, index) => (
            <FeatureCard src={item.img} title={t(item.title)} desc={t(item.desc)} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
