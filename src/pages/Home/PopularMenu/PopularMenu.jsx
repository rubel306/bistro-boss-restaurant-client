import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import BorderdBottomBtn from "../../../components/BorderdBottomBtn/BorderdBottomBtn";
import useMenu from "../../../hooks/useMenu/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-28">
      <SectionTitle
        heading={" FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-8 my-12">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center ">
        <BorderdBottomBtn text={"View Full Menu"}></BorderdBottomBtn>
      </div>
    </div>
  );
};

export default PopularMenu;
