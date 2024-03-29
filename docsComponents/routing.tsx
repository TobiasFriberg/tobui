import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header';
import { View } from '../components/view';
import { Menu } from './menu';
import { ButtonView } from '../views/button.view';
import { InputView } from '../views/input.view';
import { ListView } from '../views/list.view';
import { PopupView } from '../views/popup.view';
import { ToasterView } from '../views/toaster.view';
import { HomeView } from '../views/home.view';
import { PageNotFoundView } from '../views/pagenotfound.view';
import { ModalView } from '../views/modal.view';
import { UtilsView } from '../views/utils.view';
import { ViewView } from '../views/view.view';
import { ThemeView } from '../views/theme.view';
import { Page, PageContent, ViewContent } from './style';
import { DropdownView } from '../views/dropdown.view';
import { ScrollToTop } from './scrollToTop';
import { CardView } from '../views/card.view';
import { TickView } from '../views/tick.view';
import { RangeView } from '../views/range.view';
import { SwiperView } from '../views/swiper.view';
import { Footer } from './footer';
import { StepperView } from '../views/stepper.view';

const Routing = () => {
  const getContent = () => {
    return (
      <BrowserRouter>
        <Header />
        <ViewContent>
          <Menu />
          <PageContent>
            <Page>
              <Routes>
                <Route index element={<HomeView />} />
                <Route path="/toaster" element={<ToasterView />} />
                <Route path="/button" element={<ButtonView />} />
                <Route path="/dropdown" element={<DropdownView />} />
                <Route path="/modal" element={<ModalView />} />
                <Route path="/tick" element={<TickView />} />
                <Route path="/util" element={<UtilsView />} />
                <Route path="/range" element={<RangeView />} />
                <Route path="/swiper" element={<SwiperView />} />
                <Route path="/stepper" element={<StepperView />} />
                <Route path="/input" element={<InputView />} />
                <Route path="/view" element={<ViewView />} />
                <Route path="/list" element={<ListView />} />
                <Route path="/popup" element={<PopupView />} />
                <Route path="/theme" element={<ThemeView />} />
                <Route path="/card" element={<CardView />} />
                <Route element={PageNotFoundView} />
              </Routes>
              <ScrollToTop />
            </Page>
            <Footer />
          </PageContent>
        </ViewContent>
      </BrowserRouter>
    );
  };

  return <View>{getContent()}</View>;
};

export default Routing;
