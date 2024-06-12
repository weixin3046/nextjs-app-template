import { ConnectButton } from "@rainbow-me/rainbowkit";
import TextModdal from "./components/Modal/TextModal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-3 p-24">
      <ConnectButton />
      <TextModdal />
    </main>
  );
}
