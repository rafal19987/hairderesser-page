import ReviewsList from './components/ReviewsList';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import * as Typography from '@/components/shared-atoms/typography/Typography';

const ReviewsPage = () => {
  return (
    <SectionWrapper>
      <ArticleWrapper>
        <div data-aos='fade-down' data-aos-once='true'>
          <Typography.H1 text='Poznaj opinie Naszych klientów' />
        </div>
        <div className='relative w-full h-fit my-8 lg:min-h-[20vh]'>
          <ReviewsList />
        </div>
      </ArticleWrapper>
    </SectionWrapper>
  );
};

export default ReviewsPage;
