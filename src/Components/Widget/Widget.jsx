import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { indigo } from "@mui/material/colors";
const Widget = ({type}) => {
  const amount =100;
  const percentage = 40;
  let data;

  switch(type){
    case "users":
      data = {
        title : "USERS",
        isMoney: false,
        link:"see all users",
        icon: <PersonOutlinedIcon className="icon"
         style={{
          color: "crimson",
          backgroundColor: "rgba(255,0,0,.5)"
        }}
        />

      };
      break;
      case "orders":
        data = {
          title : "ORDERS",
          isMoney: false,
          link:"view all orders",
          icon: <ShoppingCartOutlinedIcon className="icon"
          style={{
            color: 'goldenrod',
            backgroundColor: "rgba(255,255,0,.5)"
          }}
          />
  
        };
        break;
        case "earning":
          data = {
            title : "EARNING",
            isMoney: true,
            link:"view net earning",
            icon: <MonetizationOnOutlinedIcon className="icon" 
            style={{
              color:"#14ce14ab",
              backgroundColor: "rgba(0,255,0,.5)"
            }}  
            />
            
          };
          break;
          case "balance":
            data = {
              title : "BALANCE",
              isMoney: true,
              link:"see details",
              icon: <AccountBalanceWalletOutlinedIcon className="icon"
              style={{
                color: "indigo",
                backgroundColor:" #9b2aec23"
              }}  
              />
      
            };
            break;
      default:
        break;
  }
  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.isMoney && "$"}{amount}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive ">
          <KeyboardArrowUpIcon />
          {percentage}
        </div>
        
         {data.icon}
        
      </div>
    </div>
  );
};

export default Widget;
