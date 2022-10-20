import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header';
import { View } from '../components/view';
import style from './routing.scss';
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

const Routing = () => {
  const getContent = () => {
    return (
      <BrowserRouter>
        <Header />
        <div className={style.viewContent}>
          <Menu />
          <div className={style.pageContent}>
            <div className={style.page}>
              <Routes>
                <Route index element={<HomeView />} />
                <Route path="/toaster" element={<ToasterView />} />
                <Route path="/button" element={<ButtonView />} />
                <Route path="/modal" element={<ModalView />} />
                <Route path="/util" element={<UtilsView />} />
                <Route path="/input" element={<InputView />} />
                <Route path="/view" element={<ViewView />} />
                <Route path="/list" element={<ListView />} />
                <Route path="/popup" element={<PopupView />} />
                <Route path="/theme" element={<ThemeView />} />
                <Route element={PageNotFoundView} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  };

  return <View>{getContent()}</View>;
};

export default Routing;
