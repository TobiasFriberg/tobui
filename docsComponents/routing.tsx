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
                <Route path="/util" element={<UtilsView />} />
                <Route path="/input" element={<InputView />} />
                <Route path="/view" element={<ViewView />} />
                <Route path="/list" element={<ListView />} />
                <Route path="/popup" element={<PopupView />} />
                <Route path="/theme" element={<ThemeView />} />
                <Route element={PageNotFoundView} />
              </Routes>
              <ScrollToTop />
            </Page>
          </PageContent>
        </ViewContent>
      </BrowserRouter>
    );
  };

  return <View>{getContent()}</View>;
};

export default Routing;
