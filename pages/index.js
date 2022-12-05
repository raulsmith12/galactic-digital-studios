import HomeSlider from '../components/HomeSlider';
import HomeSections from '../components/HomeSections';
import HomeContactForm from '../components/HomeContactForm';

const Home = () => {
  return (
    <div className="container-fluid px-0">
      <HomeSlider />
      <HomeSections />
      <HomeContactForm />
    </div>
  )
}

export default Home;