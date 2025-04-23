import { Divider, Stack } from "@mui/material";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";

export default function FooterBar() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent={{ xs: "center", md: "start" }}
        spacing={2}
        className="md:overflow-hidden bg-[#6CBAEA] text-blue-900 md:px-10 py-4 md:rounded-bl-[80px] md:w-[50%] w-full ml-auto"
      >
        <HeadsetMicRoundedIcon fontSize="large"></HeadsetMicRoundedIcon>
        <span className="font-semibold text-2xl text-white ">+1 (832) 989 4525</span>
      </Stack>
    </>
  );
}
