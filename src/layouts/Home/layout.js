import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { SideNav } from './side-nav';
import { TopNav } from './top-nav';
import Footer from './footer';
import { useGetThemeInfoMutation } from "src/features/themeData/themeDataApi";

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

export const Layout = ((props) => {
  const [getThemeData, { data: themeData }] = useGetThemeInfoMutation()
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(
    () => {
      if (openNav) {
        setOpenNav(false);
      }
    },
    [openNav]
  );

  useEffect(() => {
    getThemeData()
  }, [getThemeData])

  useEffect(
    () => {
      handlePathnameChange();
    },

    [pathname]
  );

  return (
    <>
      <TopNav primaryMenu={themeData?.data} onNavOpen={() => setOpenNav(true)} />
      <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
        setOpenNav={setOpenNav}
        sideMenu={themeData?.data?.theme_info?.category_1JXLtF?.list}
      />
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
      <Footer />
    </>
  );
});
