import Charts from "../../Components/Charts/Charts";
import Featured from "../../Components/Featured/Featured";
import ListTable from "../../Components/ListTable/ListTable";
import Nav from "../../Components/Navigation/Nav";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";
import "./home.scss";
const Home = () => {
  return (
    <>
      <div className="Home">
        <Sidebar />
        <div className="homecontiner">
          <Nav />
          <div className="widgets">
            <Widget type="users" />
            <Widget type="earning" />
            <Widget type="orders" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Charts />
          </div>
          <div className="listContiner">
            <div className="listTitle">Latest Transactions</div>
            <ListTable/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
