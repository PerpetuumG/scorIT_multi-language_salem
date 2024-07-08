import Container from '@/app/[locale]/layouts/Container';
import { useTranslations } from 'next-intl';
import ScreenshotsCard from "@/app/[locale]/components/Screenshots/ScreenshotsCard";

const AppScreenshots = () => {
  const t = useTranslations('AppScreenShot');

  return (
    <section id={'screenshots'} className={'py-8 md:py-12 bg-blue-50'}>
      <Container>
        <div className={'text-center pb-8'}>
          <h2 className={'text-center font-semibold text-3xl md:text-4xl'}>{t('sectionTitle')}</h2>
          <p className={'"pt-2 md:px-36'}>{t('sectionDescription')}</p>
        </div>
        
        <div>
          <ScreenshotsCard/>
        </div>
      </Container>
    </section>
  );
};

export default AppScreenshots;
