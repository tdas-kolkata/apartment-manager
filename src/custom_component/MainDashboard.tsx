import MainDashbaordCard from "./MainDashbaordCard";
import Link from "next/link";

function MainDashboard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
      <MainDashbaordCard
        title="Accounts"
        content="Current balance"
        footer="&#8377;7765"
        key="account"
      />
      <Link href="members">
        <MainDashbaordCard
          title="Memebers"
          content="Current members"
          footer="12"
          key="member"
        />
      </Link>
      <MainDashbaordCard
        title="Polls"
        content="Open polls"
        footer="2"
        key="polls"
      />
      <MainDashbaordCard
        title="Bookings"
        content="Upcoming bookings"
        footer="4"
        key="booking"
      />
      <MainDashbaordCard
        title="Notice"
        content="Total Notices"
        footer="2"
        key="paymets"
      />
      <MainDashbaordCard
        title="Payments"
        content="My dues"
        footer="&#8377;300"
        key="paymets"
      />
    </div>
  );
}

export default MainDashboard;
