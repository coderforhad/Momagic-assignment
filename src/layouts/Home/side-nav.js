import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { Box, Grid, Divider, Drawer, Stack } from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SideNavItem } from "./side-nav-item";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const SideNav = (props) => {
  const { open, onClose, setOpenNav, sideMenu} = props;
  const pathname = usePathname();

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "neutral.400",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 1 }}>
          <Grid
            sx={{
              display: "flex",
              fontSize: "20px",
              gap: "5px",
              alignItems: "center",
              cursor: "pointer",
              margin: "10px 15px 10px"
            }}
            onClick={()=> setOpenNav(false)}
          >
            <ArrowBackIosNewIcon /> BACK
          </Grid>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {sideMenu?.map((item) => {
              const active = item.path ? pathname === item.path : false;

              return (
                <SideNavItem
                  active={active}
                  // disabled={item.disabled}
                  // external={item.external}
                  icon={item.icon}
                  key={item.id}
                  path={item.path}
                  title={item.name}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
