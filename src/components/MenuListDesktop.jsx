import MenuColumn from "./MenuColumn";

const MenuListDesktop = ({ menuLength }) => {
  return (
    <>
      <MenuColumn firstIndex={0} secondIndex={menuLength / 3 + 1} />
      <MenuColumn
        firstIndex={menuLength / 3 + 1}
        secondIndex={(menuLength / 3) * 2 + 1}
      />
      <MenuColumn firstIndex={(menuLength / 3) * 2 + 1} />
    </>
  );
};

export default MenuListDesktop;
