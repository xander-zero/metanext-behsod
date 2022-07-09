import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import MainLayout from "../layout/MainLayout";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/slider.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
