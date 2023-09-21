import PropTypes from "prop-types";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import { Box, IconButton, Stack, SvgIcon, Typography, useMediaQuery } from "@mui/material";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/system";
import { useSelector } from "react-redux";

const SIDE_NAV_WIDTH = 0;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

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
            <Typography>Momagic</Typography>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            {lg ? (
              <>
                <Typography>About Us</Typography>
                <Typography>Contact Us</Typography>
                <Typography>FAQ</Typography>
              </>
            ) : (
              ""
            )}
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
