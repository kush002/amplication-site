import HeroBlock from '../components/Sections/About/HeroBlock';
import Steps from '../components/Sections/About/Steps';
import LogoList from '../components/Sections/About/LogoList';
import UsersList from '../components/Sections/About/UsersList';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';

const About = () => {
  return (
    <>
      <NextSeo
        title="We Help Backend Developers Build Better and Faster | Amplication"
        description="Amplication is the most flexible open-source Node.js app development platform. We enable developers to auto-generate production-ready backend in minutes. "
        noindex={true}
        nofollow={true}
        openGraph={{
          type: 'website',
          images: [
            {
              url: 'https://user-images.githubusercontent.com/53312820/190913686-02c7deb1-da2f-41b8-aa31-065e00f6155c.png',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <main className="w-full font-poppins z-10 amplication-base">
        <HeroBlock />
        <div className="bg-gradient">
          <LogoList />
          <UsersList />
          <Steps />
        </div>
      </main>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return (
    <MainLayout
      paddingTopClasses="laptop:pt-[100px]"
      footerClass="bg-light-blue"
    >
      {page}
    </MainLayout>
  );
};

export default About;
