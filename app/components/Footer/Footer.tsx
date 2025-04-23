import { Divider, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import FooterBar from "./FooterBar";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer>
      <FooterBar />

      <FooterNav />

      <Copyright />
    </footer>
  );
}
