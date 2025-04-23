import { Divider, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function HeaderTopBar() {
  return (
    <>
      <Stack
        direction="row"
        divider={
          <Divider orientation="vertical" flexItem className="rounded border-2 border-orange-500" />
        }
        spacing={2}
        className="md:flex hidden items-center justify-end px-10 py-4"
      >
        <Stack direction="row" spacing={2} className="items-center">
          <HeadsetMicRoundedIcon fontSize="large" className="text-blue-900"></HeadsetMicRoundedIcon>
          <span className="text-xl text-cyan-500">+1 (832) 989 4525</span>
        </Stack>
        <div className="flex items-center gap-x-7 text-blue-900">
          <a href="#">
            <FacebookRoundedIcon fontSize="large"></FacebookRoundedIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faSquareInstagram} className="text-primary text-3xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTiktok} className="text-primary text-3xl" />
          </a>
        </div>
        <Stack direction="row" spacing={2} className="items-center text-blue-900">
          <a href="#" className="flex-center">
            Personas/Iniciar Sesión
          </a>
          <AccountCircleRoundedIcon fontSize="large"></AccountCircleRoundedIcon>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        className="md:hidden justify-center items-center text-blue-900 "
      >
        <a href="#">
          <FacebookRoundedIcon fontSize="large"></FacebookRoundedIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSquareInstagram} className="text-primary text-3xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTiktok} className="text-primary text-3xl" />
        </a>
      </Stack>
    </>
  );
}
