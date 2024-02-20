import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "../utils/api";

const AddUser = () => {
  const [userName, setUserName] = useState("");

  const { mutate, isLoading: isSaving } = api.users.create.useMutation({
    onSuccess: () => {
      setUserName("");
      alert("User added!");
    },
    onError: (error) => {
      const errorMessage = error.data?.zodError?.fieldErrors.content;
      if (errorMessage && errorMessage[0]) {
        alert("Failed to post, here the reason: \n" + errorMessage[0]);
      } else {
        alert("Failed to Post, username must be unquie.");
      }
    },
  });

  return (
    <>
      <div className="m-4">
        <form className="flex w-11/12 items-center">
          <label className="w-1/4">User Name</label>
          <input
            className="focus:[border-pink-500] w-11/12 rounded-l-md bg-slate-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#39918C]"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="user name..."
          />
          <button
            className="rounded-r-md bg-[#2F435A] px-4 py-2 text-white transition-colors hover:bg-[#6495ED]"
            type="button"
            onClick={() =>
              mutate({
                name: userName,
              })
            }
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
