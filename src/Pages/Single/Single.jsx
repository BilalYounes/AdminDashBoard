import "./single.scss";
import Nav from "../../Components/Navigation/Nav";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserInfo from "../../Components/UserInfo/UserInfo";
import Charts from "../../Components/Charts/Charts";
import ListTable from "../../Components/ListTable/ListTable";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContiner">
        <Nav />
        <div className="userFeatured">
          <UserInfo />
             <Charts />
         
        </div>
        <div className="singleContiner__bottom">
        <div className="listTitle">Latest Transactions</div>
            <ListTable/>
        </div>
      </div>
    </div>
  );
};

export default Single;
