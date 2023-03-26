import { Box } from "@mui/material";
import dotenv from "dotenv";
dotenv.config();
const baseurl=process.env.BASE_URL;

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${baseurl}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
