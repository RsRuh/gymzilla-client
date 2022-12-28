import DashNav from "../../components/DashNav";
import Packages from "../../components/Packages";

const index = () => {


    return (
        <div className="bg-blue-300 grid grid-cols-5">
            <div className="">
                <DashNav></DashNav>
            </div>
            <div className="col-span-4">
                <Packages></Packages>
            </div>
        </div>
    );
};

export default index;