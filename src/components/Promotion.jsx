const Promotion = ({ title, description, tacos, drinks, price, icon }) => {
  return (
    <article>
      <h3 className="text-xl flex items-center gap-2">
        <span className="bg-secondary-medium/50 rounded-full w-10 h-10 flex items-center justify-center shadow">
          <span className="w-6 h-6">{icon}</span>
        </span>
        {title}
      </h3>
      <p>{description}</p>
    </article>
  );
};

export default Promotion;
