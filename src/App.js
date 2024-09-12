import "./App.css";
import { Jobpositions } from "./Eight/Jobpositions.tsx";
import { UserList } from "./five/UsersList.tsx";
import { ReviewForm } from "./Four/ReviewForm.tsx";
import { AccountList } from "./Nine/AccountList.tsx";
import UserProfile from "./One/UserProfile.tsx";
import { Subscriptions } from "./seven/Subscriptions.tsx";
import { Notification } from "./Six/Notification.tsx";
import { Collection } from "./Three/Collection.tsx";
import { JobList } from "./Two/JobList.tsx";

function App() {
  return (
    <h1 className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* <UserProfile></UserProfile> */}
      {/* <JobList /> */}
      {/* <Collection /> */}
      {/* <ReviewForm /> */}
      {/* <UserList /> */}
      {/* <Notification /> */}
      {/* <Subscriptions /> */}
      {/* <Jobpositions /> */}
      <AccountList />
    </h1>
  );
}

export default App;
