import {
  Forward,
  LabelOutlined,
  MoreVert,
  Replay,
  Reply,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import "../css/DisplayEmail.css";
import FeedHead from "./FeedHead";

const DisplayEmail = () => {
  return (
    <div className="disEmail">
      <FeedHead />
      <div className="disEmail__container">
        <h1 className="disEmail__subject">
          Cheery New Year's Eve ...
          <IconButton>
            <LabelOutlined className="disEmail__iconSetting" />
          </IconButton>
        </h1>
        <div className="disEmail__head">
          <div className="disEmail__info">
            <Avatar></Avatar>
            <div className="disEmail__sender">
              <h1>
                sender <span>&lt;mj.khodadadi.1996@yahoo.com&gt;</span>
              </h1>
              <p>to mj.khodadadi1996</p>
            </div>
          </div>
          <h5>9 jan</h5>
          <div className="disEmail__icons">
            <IconButton>
              <StarBorderOutlined className="disEmail__iconSetting" />
            </IconButton>
            <IconButton>
              <Reply className="disEmail__iconSetting" />
            </IconButton>
            <IconButton>
              <MoreVert className="disEmail__iconSetting" />
            </IconButton>
          </div>
        </div>
        <div className="disEmail__msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          impedit consectetur, in facilis perspiciatis ratione distinctio
          maiores accusamus tenetur ullam beatae aspernatur a animi repellat
          dolores quisquam deserunt ex reprehenderit. Facere quam asperiores
          veniam optio minus expedita cupiditate dolores doloribus mollitia
          blanditiis, delectus, molestias fuga. Laboriosam consectetur, eaque
          esse veritatis aliquid consequuntur amet odio tempore. Saepe
          aspernatur odio aperiam repellat laborum. Omnis voluptate ullam quas
          reprehenderit nihil tenetur temporibus debitis odio ipsam? Aspernatur
          assumenda magni, commodi cupiditate eaque aliquid iste quibusdam
          ducimus harum velit dolorum officiis adipisci alias quidem distinctio,
          neque sed mollitia accusantium suscipit voluptas in facere. Nemo at
          asperiores, iste consectetur modi deleniti rem dolor veritatis
          praesentium sint doloribus eaque sapiente quidem dicta possimus?
          Debitis ut odit quod velit incidunt necessitatibus cum unde! Inventore
          nostrum asperiores illum eveniet animi, voluptatum libero ad, iusto
          deleniti facilis labore ullam ut illo modi dolores eaque doloremque
          reiciendis amet vitae laboriosam impedit, cupiditate error assumenda!
          Minima a unde atque explicabo, reprehenderit assumenda corporis
          nostrum corrupti maiores nesciunt sed consequatur, quos sapiente
          itaque ipsum voluptas. Odio veniam sit quas dolore accusamus tempora
          magni quam accusantium praesentium suscipit cumque possimus, ea sint
          illum nisi deserunt doloribus expedita voluptatem cupiditate amet!
          Consequuntur odio tempora repellat?
        </div>
        <div className="disEmail__iconWrapper">
          <Button
            variant="outlined"
            sx={{
              color: blueGrey[600],
              mx: ".8rem",
              borderColor: blueGrey[600],
            }}
            startIcon={<Reply />}
          >
            Reply
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: blueGrey[600],
              mx: ".8rem",
              borderColor: blueGrey[600],
            }}
            startIcon={<Forward />}
          >
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisplayEmail;
