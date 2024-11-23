import type { Metadata } from "next";
import { Card } from "./components/card/Card";

export default function IndexPage() {
  var text = "재미있다";
  return <Card title={text}
               imageUrl={"../icon.ico"}
               bgColor="#FFFFFF"
  />;
}

export const metadata: Metadata = {
  title: "Ozzy - Your own feeling journey",
};
