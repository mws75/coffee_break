import { useEffect, useState } from "react";
import { api } from "~/utils/api";

const UserBubble = () => {
  const { data: initialData, isLoading: usersLoading } =
    api.users.getAll.useQuery();

  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  // Function to generate random animation durations and delays
  const getRandomAnimation = () => ({
    animationName: "moveInPattern",
    animationDuration: `${10}s`, // Random duration between 2 to 6 seconds
    animationDelay: `${Math.random() * 2}s`, // Random delay up to 2 seconds
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  });
  // Circle style remains the same
  const circleStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    backgroundColor: "#D0B49F",
    color: "white",
    fontSize: "20px",
    textTransform: "uppercase",
    position: "relative", // Important for absolute child positioning
    overflow: "hidden", // Prevent names from overflowing
    boxShadow: "inset 0 0 20px #B1B1B1", // Example of an inset shadow
  };

  const nameStyle: React.CSSProperties = {
    position: "absolute", // This will allow them to move freely inside the parent
  };

  return (
    <div>
      {usersLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={circleStyle} className="relative">
          {!usersLoading && data ? (
            data.map((user) => {
              const animationStyle = getRandomAnimation();

              return (
                <div
                  key={user.id}
                  style={{ position: "absolute", ...animationStyle }}
                >
                  <p>{user.name}</p>
                </div>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserBubble;
