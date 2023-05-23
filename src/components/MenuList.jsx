import MenuColumn from "./MenuColumn";

const MenuListDesktop = ({ menuLength }) => {
  return (
    <>
      <div className="lg:grid grid-cols-3 justify-items-center hidden">
        <MenuColumn firstIndex={0} secondIndex={menuLength / 3 + 1} />
        <MenuColumn
          firstIndex={menuLength / 3 + 1}
          secondIndex={(menuLength / 3) * 2 + 1}
        />
        <MenuColumn firstIndex={(menuLength / 3) * 2 + 1} />
      </div>
      <div className="sm:grid hidden lg:hidden grid-cols-2 justify-items-center">
        <MenuColumn firstIndex={0} secondIndex={menuLength / 2} />
        <MenuColumn firstIndex={menuLength / 2 + 1} />
      </div>
      <div className="flex flex-col items-center sm:hidden">
        <MenuColumn firstIndex={0} />
      </div>
    </>
  );
};

export default MenuListDesktop;
