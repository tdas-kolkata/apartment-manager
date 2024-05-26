import pino from "pino";

const logger = pino();
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import MainDashboard from "@/custom_component/MainDashboard";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main>
      <MainDashboard />
    </main>
  );
}
