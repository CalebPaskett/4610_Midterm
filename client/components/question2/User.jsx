export const User = ({ user }) => {
  return (
    <div className="flex">
      <div className={user.isAdmin ? "text-green-500 pt-2 pl-4 pb-2 pr-4 font-bold" : "pt-2 pl-4 pb-2 pr-4 font-bold"} >
        {user.name}               

      </div>
      <div className="pt-2 pl-4 pb-2 pr-4 font-bold">
        {user.email}
      </div>
    </div>
  );
};