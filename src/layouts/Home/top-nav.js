import PropTypes from "prop-types";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import { Box, IconButton, Stack, SvgIcon, Typography, useMediaQuery, Button } from "@mui/material";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from "@mui/system";
import { useRouter } from "next/router";

const SIDE_NAV_WIDTH = 0;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen, primaryMenu } = props;
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const Router = useRouter()
  const menuItems = primaryMenu?.header?.body?.primary_menu
  const logo = primaryMenu?.logo?.light_logo;
  const handleClick = (menu) => { menu?.id ? Router.push(menu.path) : "" }

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: "sticky",
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <IconButton onClick={onNavOpen}>
              <SvgIcon fontSize="large">
                <Bars3Icon />
              </SvgIcon>
            </IconButton>
            <img height={50} width={200} src={logo} />
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            {lg ? (menuItems?.map((menu, i) => (<div key={menu?.id}>
              <Tooltip title={menu?.text}>
                <Button onClick={() => handleClick(menu)}>{menu?.text}</Button>
              </Tooltip>
            </div>))) : ""}
            <SearchIcon />
            <AddShoppingCartIcon />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
};
